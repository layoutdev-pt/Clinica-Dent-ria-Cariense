"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const N = TESTIMONIALS.length;
const SIDE = 2;

export default function TestimonialsSlider() {
  const [virtualIdx, setVirtualIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [prevVirtual, setPrevVirtual] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);
  const isAnimating = useRef(false);

  const realIdx = ((virtualIdx % N) + N) % N;

  // Which real index just left center (for exit animation)
  const prevReal = prevVirtual !== null ? ((prevVirtual % N) + N) % N : null;

  const go = useCallback((delta: 1 | -1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection(delta);
    setPrevVirtual((v) => v ?? 0); // capture current before change
    setVirtualIdx((v) => {
      setPrevVirtual(v);
      return v + delta;
    });
    setTimeout(() => {
      isAnimating.current = false;
      setPrevVirtual(null);
    }, 600);
  }, []);

  const goNext = useCallback(() => go(1), [go]);
  const goPrev = useCallback(() => go(-1), [go]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 5500);
  }, [goNext]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const slots = Array.from({ length: SIDE * 2 + 1 }, (_, k) => k - SIDE);

  return (
    <div>
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: "1200px", height: 340 }}
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

          const isCenter = offset === 0;
          const wasCenter = dataIdx === prevReal && prevReal !== null;
          const isEntering = isCenter && wasCenter === false && prevReal !== null;
          const isExiting = wasCenter && !isCenter;

          // Base 3D values
          const rotateY = offset * -18;
          const translateX = offset * 300;
          const translateZ = abs === 0 ? 80 : abs === 1 ? -40 : -120;
          const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.68;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.7 : 0.35;
          const zIndex = SIDE - abs;
          const blur = abs === 0 ? 0 : abs === 1 ? 0 : 1.5;

          // Motion: entering center card gets a spring overshoot bounce
          // Exiting center card gets an accelerate-away curve
          let easing = "cubic-bezier(0.4,0,0.2,1)";
          let duration = "0.52s";
          if (isEntering) {
            easing = "cubic-bezier(0.34,1.56,0.64,1)"; // spring overshoot
            duration = "0.60s";
          } else if (isExiting) {
            easing = "cubic-bezier(0.55,0,1,0.45)"; // accelerate away
            duration = "0.45s";
          }

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
                transition: `transform ${duration} ${easing}, opacity ${duration} ease, filter ${duration} ease, box-shadow 0.3s ease`,
                willChange: "transform, opacity",
              }}
            >
              <div
                className="bg-white rounded-[20px] p-7 h-full"
                style={{
                  boxShadow: isCenter
                    ? "0 24px 64px rgba(13,30,44,0.15), 0 0 0 1.5px #1C9FD6"
                    : "0 6px 24px rgba(13,30,44,0.08), 0 0 0 1px #EEF4F8",
                  transition: "box-shadow 0.4s ease",
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
                if (diff === 0) return;
                go(diff > 0 ? 1 : -1);
                // Jump multiple steps without animation conflict
                setTimeout(() => {
                  setVirtualIdx((v) => v + (diff - (diff > 0 ? 1 : -1)));
                }, 620);
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
