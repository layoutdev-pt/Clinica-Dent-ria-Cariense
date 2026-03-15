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

export default function FeaturedServicesCarousel({ items }: { items: Service[] }) {
  const N = items.length;
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [contentKey, setContentKey] = useState(0);
  const isAnimating = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);

  const go = useCallback((delta: 1 | -1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDir(delta);
    setActive((v) => {
      setPrev(v);
      return (v + delta + N) % N;
    });
    setContentKey((k) => k + 1);
    setTimeout(() => {
      isAnimating.current = false;
      setPrev(null);
    }, 600);
  }, [N]);

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

  const current = items[active];

  // Slot offsets: [-2, -1, 0, 1, 2] centered on active
  const SIDE = 2;

  return (
    <div className="relative">
      <style>{`
        @keyframes textEnterRight {
          0%   { opacity: 0; transform: translateX(28px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes textEnterLeft {
          0%   { opacity: 0; transform: translateX(-28px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeScaleIn {
          0%   { opacity: 0; transform: scale(0.94); }
          100% { opacity: 1; transform: scale(1); }
        }
        .text-enter-right { animation: textEnterRight 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .text-enter-left  { animation: textEnterLeft  0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .img-enter        { animation: fadeScaleIn    0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
      `}</style>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block">
        {/* Carousel track */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{ height: 560, perspective: "1400px" }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(dx) > 50) { dx > 0 ? goNext() : goPrev(); resetTimer(); }
          }}
        >
          {Array.from({ length: SIDE * 2 + 1 }, (_, k) => k - SIDE).map((offset) => {
            const idx = (active + offset + N) % N;
            const svc = items[idx];
            const abs = Math.abs(offset);
            const isCenter = offset === 0;
            const wasCenter = idx === prev && prev !== null;
            const isEntering = isCenter && !wasCenter && prev !== null;

            // 3D transform values
            const translateX = offset * 370;
            const translateZ = abs === 0 ? 60 : abs === 1 ? -60 : -180;
            const rotateY = offset * -14;
            const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.6;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;
            const zIndex = SIDE - abs + 1;

            let duration = "0.55s";
            let easing = "cubic-bezier(0.4,0,0.2,1)";
            if (isEntering) { easing = "cubic-bezier(0.34,1.56,0.64,1)"; duration = "0.62s"; }

            return (
              <div
                key={`${offset}-${idx}`}
                onClick={() => {
                  if (!isCenter) { offset > 0 ? goNext() : goPrev(); resetTimer(); }
                }}
                style={{
                  position: "absolute",
                  width: 780,
                  cursor: isCenter ? "default" : "pointer",
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: `transform ${duration} ${easing}, opacity ${duration} ease`,
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="rounded-[28px] overflow-hidden flex"
                  style={{
                    background: "white",
                    boxShadow: isCenter
                      ? "0 32px 80px rgba(13,30,44,0.18), 0 0 0 1.5px rgba(28,159,214,0.25)"
                      : "0 8px 32px rgba(13,30,44,0.08)",
                    height: 460,
                    transition: "box-shadow 0.4s ease",
                  }}
                >
                  {/* Left flanking pill image */}
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 100 }}>
                    <Image
                      src={svc.photos[0] || svc.img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                  </div>

                  {/* Center main image */}
                  <div
                    key={isCenter ? `main-${contentKey}` : undefined}
                    className={`relative flex-shrink-0 overflow-hidden ${isCenter && prev !== null ? "img-enter" : ""}`}
                    style={{ width: 320 }}
                  >
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                      priority={isCenter}
                    />
                  </div>

                  {/* Text panel */}
                  <div
                    key={isCenter ? `text-${contentKey}` : undefined}
                    className={`flex-1 flex flex-col justify-center px-8 py-8 ${
                      isCenter && prev !== null
                        ? dir === 1 ? "text-enter-right" : "text-enter-left"
                        : ""
                    }`}
                  >
                    {/* Step badge */}
                    <div className="inline-flex items-center gap-1.5 mb-4">
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                        style={{ background: "#E8F6FC", color: "#1C9FD6" }}
                      >
                        Tratamento
                      </span>
                    </div>

                    <h3
                      className="font-['Fraunces',serif] text-[1.75rem] font-bold leading-[1.15] mb-3"
                      style={{ color: "#0D1E2C" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-[#5E7387] text-sm leading-relaxed mb-6" style={{ maxWidth: 220 }}>
                      {svc.desc}
                    </p>

                    <a
                      href="/contactos"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                      style={{ color: "#1C9FD6" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "10px"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "8px"; }}
                    >
                      Marcar consulta <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Right flanking pill image */}
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 100 }}>
                    <Image
                      src={svc.photos[1] || svc.img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/30" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => { goPrev(); resetTimer(); }}
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ borderColor: "#D5E4EE", background: "white", color: "#0D1E2C" }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#1C9FD6"; b.style.borderColor = "#1C9FD6"; b.style.color = "white"; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "white"; b.style.borderColor = "#D5E4EE"; b.style.color = "#0D1E2C"; }}
            aria-label="Anterior"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === active) return;
                  const delta = i > active ? 1 : -1;
                  go(delta);
                  // Jump directly after animation
                  setTimeout(() => setActive(i), 620);
                  resetTimer();
                }}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? "#1C9FD6" : "#D5E4EE",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => { goNext(); resetTimer(); }}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "#1C9FD6", borderColor: "#1C9FD6", color: "white", border: "1.5px solid #1C9FD6" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0D7DB5"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1C9FD6"; }}
            aria-label="Próximo"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* ── MOBILE LAYOUT — simple vertical card stack ── */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Active card full */}
        <div
          className="rounded-[20px] overflow-hidden bg-white"
          style={{ boxShadow: "0 12px 48px rgba(13,30,44,0.12), 0 0 0 1.5px rgba(28,159,214,0.2)" }}
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              key={active}
              src={current.img}
              alt={current.title}
              fill
              className="object-cover img-enter"
              sizes="100vw"
            />
          </div>
          <div
            key={`mob-text-${contentKey}`}
            className={dir === 1 ? "text-enter-right p-6" : "text-enter-left p-6"}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full inline-block mb-3" style={{ background: "#E8F6FC", color: "#1C9FD6" }}>
              Tratamento
            </span>
            <h3 className="font-['Fraunces',serif] text-2xl font-bold text-[#0D1E2C] mb-2">{current.title}</h3>
            <p className="text-[#5E7387] text-sm leading-relaxed mb-4">{current.desc}</p>
            <a href="/contactos" className="inline-flex items-center gap-2 text-[#1C9FD6] text-sm font-semibold">
              Marcar consulta <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center justify-between px-1">
          <div className="flex gap-2 items-center">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i !== active) { go(i > active ? 1 : -1); setTimeout(() => setActive(i), 620); resetTimer(); } }}
                className="rounded-full transition-all duration-300"
                style={{ width: i === active ? 24 : 8, height: 8, background: i === active ? "#1C9FD6" : "#D5E4EE" }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { goPrev(); resetTimer(); }}
              className="w-10 h-10 rounded-full border border-[#D5E4EE] bg-white flex items-center justify-center text-[#0D1E2C] transition-all"
              aria-label="Anterior"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => { goNext(); resetTimer(); }}
              className="w-10 h-10 rounded-full bg-[#1C9FD6] flex items-center justify-center text-white transition-all"
              aria-label="Próximo"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
