"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const N = TESTIMONIALS.length;

// How many side cards to render on each side
const SIDE = 2;

export default function TestimonialsSlider() {
  // virtualIdx can go negative or beyond N — wraps with modulo
  const [virtualIdx, setVirtualIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);
  const isAnimating = useRef(false);

  const realIdx = ((virtualIdx % N) + N) % N;

  const goNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setVirtualIdx((v) => v + 1);
    setTimeout(() => { isAnimating.current = false; }, 520);
  }, []);

  const goPrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setVirtualIdx((v) => v - 1);
    setTimeout(() => { isAnimating.current = false; }, 520);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 5500);
  }, [goNext]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  // Build visible slots: center ± SIDE
  const slots = Array.from({ length: SIDE * 2 + 1 }, (_, k) => k - SIDE);

  return (
    <div>
      {/* Coverflow stage */}
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: "1200px", height: 320 }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const delta = touchX.current - e.changedTouches[0].clientX;
          if (Math.abs(delta) > 48) {
            delta > 0 ? goNext() : goPrev();
            resetTimer();
          }
        }}
      >
        {slots.map((offset) => {
          const dataIdx = ((realIdx + offset) % N + N) % N;
          const t = TESTIMONIALS[dataIdx];
          const abs = Math.abs(offset);

          // Depth / transform values per position
          const rotateY = offset * -18;          // degrees — side cards rotate inward
          const translateX = offset * 300;        // px — horizontal spread
          const translateZ = abs === 0 ? 80 : abs === 1 ? -40 : -120; // depth
          const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.68;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.7 : 0.35;
          const zIndex = SIDE - abs;
          const blur = abs === 0 ? 0 : abs === 1 ? 0 : 1.5;

          return (
            <div
              key={`${offset}-${dataIdx}`}
              onClick={() => {
                if (offset !== 0) {
                  offset > 0 ? goNext() : goPrev();
                  resetTimer();
                }
              }}
              style={{
                position: "absolute",
                width: 360,
                cursor: offset !== 0 ? "pointer" : "default",
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                filter: blur > 0 ? `blur(${blur}px)` : "none",
                transition: "transform 0.52s cubic-bezier(0.4,0,0.2,1), opacity 0.52s ease, filter 0.52s ease",
                willChange: "transform, opacity",
              }}
            >
              <div
                className="bg-white rounded-[20px] p-7 h-full"
                style={{
                  boxShadow: abs === 0
                    ? "0 20px 60px rgba(13,30,44,0.14), 0 0 0 1.5px #1C9FD6"
                    : "0 6px 24px rgba(13,30,44,0.08), 0 0 0 1px #EEF4F8",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-[#1C9FD6]">
                      <path d="M6 0l1.5 4H12L8.5 6.5 10 11 6 8.5 2 11l1.5-4.5L0 4h4.5L6 0z"/>
                    </svg>
                  ))}
                </div>

                <div className="font-display text-5xl text-[#1C9FD6]/15 leading-none mb-1 select-none">&ldquo;</div>
                <p className="text-sm text-[#2A3A4A] leading-[1.85] mb-5 line-clamp-4">{t.text}</p>

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
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2 items-center">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - realIdx;
                setVirtualIdx((v) => v + diff);
                resetTimer();
              }}
              aria-label={`Testemunho ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === realIdx ? 28 : 8,
                height: 8,
                background: i === realIdx ? "#1C9FD6" : "#D5E4EE",
              }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => { goPrev(); resetTimer(); }}
            className="w-11 h-11 rounded-full border border-[#D5E4EE] bg-white flex items-center justify-center text-[#0D1E2C] hover:bg-[#1C9FD6] hover:border-[#1C9FD6] hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Anterior"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => { goNext(); resetTimer(); }}
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
