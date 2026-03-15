"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  img: string;
  photos: string[];
};

const SIDE = 2;

export default function FeaturedServicesCarousel({ items }: { items: Service[] }) {
  const N = items.length;
  const [virtualIdx, setVirtualIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [prevVirtual, setPrevVirtual] = useState<number | null>(null);
  const [contentKey, setContentKey] = useState(0);
  const isAnimating = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);

  const realIdx = ((virtualIdx % N) + N) % N;
  const prevReal = prevVirtual !== null ? ((prevVirtual % N) + N) % N : null;

  const go = useCallback((delta: 1 | -1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection(delta);
    setVirtualIdx((v) => {
      setPrevVirtual(v);
      return v + delta;
    });
    setContentKey((k) => k + 1);
    setTimeout(() => {
      isAnimating.current = false;
      setPrevVirtual(null);
    }, 620);
  }, []);

  const goNext = useCallback(() => go(1), [go]);
  const goPrev = useCallback(() => go(-1), [go]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 5000);
  }, [goNext]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const current = items[realIdx];
  const slots = Array.from({ length: SIDE * 2 + 1 }, (_, k) => k - SIDE);

  return (
    <div>
      <style>{`
        @keyframes svcTextRight {
          0%   { opacity: 0; transform: translateX(28px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes svcTextLeft {
          0%   { opacity: 0; transform: translateX(-28px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .svc-text-right { animation: svcTextRight 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .svc-text-left  { animation: svcTextLeft  0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
      `}</style>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
        <div className="flex items-center gap-10">

          {/* 3D carousel — left side */}
          <div
            className="relative flex-shrink-0"
            style={{ width: 560, height: 500, perspective: "1200px" }}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const dx = touchX.current - e.changedTouches[0].clientX;
              if (Math.abs(dx) > 50) { dx > 0 ? goNext() : goPrev(); resetTimer(); }
            }}
          >
            {slots.map((offset) => {
              const dataIdx = ((realIdx + offset) % N + N) % N;
              const svc = items[dataIdx];
              const abs = Math.abs(offset);
              const isCenter = offset === 0;
              const wasCenter = dataIdx === prevReal && prevReal !== null;
              const isEntering = isCenter && !wasCenter && prevReal !== null;
              const isExiting = wasCenter && !isCenter;

              const translateX = offset * 220;
              const translateZ = abs === 0 ? 60 : abs === 1 ? -60 : -160;
              const rotateY = offset * -16;
              const scale = abs === 0 ? 1 : abs === 1 ? 0.8 : 0.64;
              const opacity = abs === 0 ? 1 : abs === 1 ? 0.6 : 0.25;
              const zIndex = SIDE - abs + 1;

              let duration = "0.52s";
              let easing = "cubic-bezier(0.4,0,0.2,1)";
              if (isEntering) { easing = "cubic-bezier(0.34,1.56,0.64,1)"; duration = "0.62s"; }
              else if (isExiting) { easing = "cubic-bezier(0.55,0,1,0.45)"; duration = "0.45s"; }

              return (
                <div
                  key={`${offset}-${dataIdx}`}
                  onClick={() => {
                    if (!isCenter) { offset > 0 ? goNext() : goPrev(); resetTimer(); }
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginLeft: -160,
                    marginTop: -240,
                    width: 320,
                    height: 480,
                    cursor: isCenter ? "default" : "pointer",
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: `transform ${duration} ${easing}, opacity ${duration} ease`,
                    willChange: "transform, opacity",
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow: isCenter
                      ? "0 24px 64px rgba(13,30,44,0.18), 0 0 0 1.5px rgba(28,159,214,0.2)"
                      : "0 8px 32px rgba(13,30,44,0.08)",
                  }}
                >
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority={isCenter}
                  />
                  {/* Edge fade for side cards */}
                  {offset < 0 && <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(240,246,250,0.5), transparent)" }} />}
                  {offset > 0 && <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(240,246,250,0.5), transparent)" }} />}
                </div>
              );
            })}
          </div>

          {/* Text panel — right side */}
          <div
            key={`text-${contentKey}`}
            className={`flex-1 ${prevReal !== null ? (direction === 1 ? "svc-text-right" : "svc-text-left") : ""}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "#1C9FD6" }}
              >
                {String(realIdx + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
              </span>
            </div>

            <h3
              className="font-display font-bold leading-[1.12] mb-4"
              style={{ fontSize: "2.1rem", color: "#0D1E2C" }}
            >
              {current.title}
            </h3>
            <p className="text-[#5E7387] text-sm leading-relaxed mb-8" style={{ maxWidth: 280 }}>
              {current.desc}
            </p>

            <a
              href="/contactos"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#1C9FD6", color: "white", boxShadow: "0 4px 20px rgba(28,159,214,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0D7DB5"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1C9FD6"; }}
            >
              Marcar consulta <ArrowRight size={14} />
            </a>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={() => { goPrev(); resetTimer(); }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "white", border: "1.5px solid #D5E4EE", color: "#0D1E2C", boxShadow: "0 4px 16px rgba(13,30,44,0.08)" }}
                onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#1C9FD6"; b.style.borderColor = "#1C9FD6"; b.style.color = "white"; }}
                onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "white"; b.style.borderColor = "#D5E4EE"; b.style.color = "#0D1E2C"; }}
                aria-label="Anterior"
              >
                <ArrowLeft size={16} />
              </button>

              <div className="flex gap-2 items-center">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (i === realIdx) return;
                      go(i > realIdx ? 1 : -1);
                      setTimeout(() => setVirtualIdx(i), 640);
                      resetTimer();
                    }}
                    aria-label={`Slide ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === realIdx ? 24 : 8,
                      height: 8,
                      background: i === realIdx ? "#1C9FD6" : "#D5E4EE",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => { goNext(); resetTimer(); }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "#1C9FD6", border: "1.5px solid #1C9FD6", color: "white", boxShadow: "0 4px 16px rgba(28,159,214,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0D7DB5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1C9FD6"; }}
                aria-label="Próximo"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <div
          className="relative rounded-[20px] overflow-hidden mb-5"
          style={{ height: 340 }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(dx) > 50) { dx > 0 ? goNext() : goPrev(); resetTimer(); }
          }}
        >
          <Image key={`mob-${realIdx}`} src={current.img} alt={current.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full inline-block mb-2" style={{ background: "rgba(28,159,214,0.9)", color: "white" }}>
              {String(realIdx + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-bold text-white">{current.title}</h3>
          </div>
        </div>
        <div key={`mob-text-${contentKey}`} className={`mb-5 ${prevReal !== null ? (direction === 1 ? "svc-text-right" : "svc-text-left") : ""}`}>
          <p className="text-[#5E7387] text-sm leading-relaxed mb-4">{current.desc}</p>
          <a href="/contactos" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full" style={{ background: "#1C9FD6", color: "white" }}>
            Marcar consulta <ArrowRight size={14} />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => { if (i !== realIdx) { go(i > realIdx ? 1 : -1); setTimeout(() => setVirtualIdx(i), 640); resetTimer(); } }}
                className="rounded-full transition-all duration-300"
                style={{ width: i === realIdx ? 22 : 8, height: 8, background: i === realIdx ? "#1C9FD6" : "#D5E4EE" }} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => { goPrev(); resetTimer(); }} className="w-10 h-10 rounded-full border border-[#D5E4EE] bg-white flex items-center justify-center" aria-label="Anterior">
              <ArrowLeft size={15} className="text-[#0D1E2C]" />
            </button>
            <button onClick={() => { goNext(); resetTimer(); }} className="w-10 h-10 rounded-full bg-[#1C9FD6] flex items-center justify-center" aria-label="Próximo">
              <ArrowRight size={15} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
