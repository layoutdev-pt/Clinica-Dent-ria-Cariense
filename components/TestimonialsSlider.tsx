"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const max = TESTIMONIALS.length - 1;

  const goTo = useCallback((next: number, direction: 1 | -1) => {
    setDir(direction);
    setIdx(next);
  }, []);

  const prev = useCallback(() => goTo(idx === 0 ? max : idx - 1, -1), [idx, max, goTo]);
  const next = useCallback(() => goTo(idx === max ? 0 : idx + 1, 1), [idx, max, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5500);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const cardW = 380;
  const gap = 20;
  const offset = idx * (cardW + gap);

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex gap-5"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const delta = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(delta) > 48) {
              delta > 0 ? next() : prev();
              resetTimer();
            }
          }}
        >
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === idx;
            const isNear = Math.abs(i - idx) <= 1;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-[380px] bg-white border rounded-[20px] p-7 shadow-sm"
                style={{
                  opacity: isNear ? 1 : 0.4,
                  transform: isActive
                    ? "scale(1) translateY(0)"
                    : "scale(0.97) translateY(6px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
                  boxShadow: isActive
                    ? "0 12px 48px rgba(13,30,44,0.12)"
                    : "0 4px 16px rgba(13,30,44,0.06)",
                  borderColor: isActive ? "#1C9FD6" : "#EEF4F8",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-[#1C9FD6] text-[#1C9FD6]">
                      <path d="M6 0l1.5 4H12L8.5 6.5 10 11 6 8.5 2 11l1.5-4.5L0 4h4.5L6 0z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote mark */}
                <div className="font-display text-5xl text-[#1C9FD6]/15 leading-none mb-1 select-none">&ldquo;</div>

                <p className="text-sm text-[#2A3A4A] leading-[1.85] mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-[#E8F6FC] ring-2 ring-[#1C9FD6]/15">
                    <Image src={t.avatar} alt={t.name} width={44} height={44} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0D1E2C]">{t.name}</div>
                    <div className="text-xs text-[#5E7387] mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2 items-center">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i, i > idx ? 1 : -1); resetTimer(); }}
              aria-label={`Testemunho ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === idx ? 28 : 8,
                height: 8,
                background: i === idx ? "#1C9FD6" : "#D5E4EE",
              }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => { prev(); resetTimer(); }}
            className="w-11 h-11 rounded-full border border-[#D5E4EE] bg-white flex items-center justify-center text-[#0D1E2C] hover:bg-[#1C9FD6] hover:border-[#1C9FD6] hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Anterior"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => { next(); resetTimer(); }}
            className="w-11 h-11 rounded-full bg-[#1C9FD6] border border-[#1C9FD6] flex items-center justify-center text-white hover:bg-[#0D7DB5] hover:scale-110 transition-all duration-200"
            aria-label="Próximo"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
