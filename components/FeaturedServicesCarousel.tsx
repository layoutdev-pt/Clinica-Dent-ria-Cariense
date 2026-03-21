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
    setActive((v) => { setPrev(v); return (v + delta + N) % N; });
    setContentKey((k) => k + 1);
    setTimeout(() => { isAnimating.current = false; setPrev(null); }, 600);
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

  return (
    <div>
      <style>{`
        @keyframes svcPhotoIn {
          0%   { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes svcTextRight {
          0%   { opacity: 0; transform: translateX(22px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes svcTextLeft {
          0%   { opacity: 0; transform: translateX(-22px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .svc-photo-in    { animation: svcPhotoIn    0.48s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .svc-text-right  { animation: svcTextRight  0.48s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .svc-text-left   { animation: svcTextLeft   0.48s cubic-bezier(0.34,1.56,0.64,1) forwards; }
      `}</style>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex items-center gap-10"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = touchX.current - e.changedTouches[0].clientX;
          if (Math.abs(dx) > 50) { dx > 0 ? goNext() : goPrev(); resetTimer(); }
        }}
      >
        {/* Left peek */}
        <div
          key={`left-${(active - 1 + N) % N}`}
          onClick={() => { goPrev(); resetTimer(); }}
          className="flex-shrink-0 cursor-pointer relative rounded-[20px] overflow-hidden"
          style={{ width: 160, height: 400, opacity: 0.45, filter: "blur(1.5px)" }}
        >
          <Image src={items[(active - 1 + N) % N].img} alt="" fill className="object-cover" sizes="160px" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #F0F6FA 0%, transparent 60%)" }} />
        </div>

        {/* Center photo */}
        <div
          key={`photo-${contentKey}`}
          className={`flex-shrink-0 relative rounded-[24px] overflow-hidden svc-photo-in`}
          style={{
            width: 320,
            height: 480,
            boxShadow: "0 24px 64px rgba(13,30,44,0.16), 0 0 0 1.5px rgba(28,159,214,0.18)",
          }}
        >
          <Image src={current.img} alt={current.title} fill className="object-cover" sizes="320px" priority />
        </div>

        {/* Text panel */}
        <div
          key={`text-${contentKey}`}
          className={`flex-1 min-w-0 ${prev !== null ? (dir === 1 ? "svc-text-right" : "svc-text-left") : ""}`}
        >
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "#1C9FD6" }}>
            {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </p>
          <h3 className="font-display font-bold leading-[1.1] mb-4" style={{ fontSize: "2rem", color: "#0D1E2C" }}>
            {current.title}
          </h3>
          <p className="text-[#5E7387] text-sm leading-relaxed mb-8" style={{ maxWidth: 270 }}>
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
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={() => { goPrev(); resetTimer(); }}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: "white", border: "1.5px solid #D5E4EE", color: "#0D1E2C", boxShadow: "0 4px 12px rgba(13,30,44,0.07)" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#1C9FD6"; b.style.borderColor = "#1C9FD6"; b.style.color = "white"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "white"; b.style.borderColor = "#D5E4EE"; b.style.color = "#0D1E2C"; }}
              aria-label="Anterior"
            ><ArrowLeft size={16} /></button>

            <div className="flex gap-2 items-center">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (i === active) return; go(i > active ? 1 : -1); setTimeout(() => setActive(i), 620); resetTimer(); }}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === active ? 24 : 8, height: 8, background: i === active ? "#1C9FD6" : "#D5E4EE" }}
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
            ><ArrowRight size={16} /></button>
          </div>
        </div>

        {/* Right peek */}
        <div
          key={`right-${(active + 1) % N}`}
          onClick={() => { goNext(); resetTimer(); }}
          className="flex-shrink-0 cursor-pointer relative rounded-[20px] overflow-hidden"
          style={{ width: 160, height: 400, opacity: 0.45, filter: "blur(1.5px)" }}
        >
          <Image src={items[(active + 1) % N].img} alt="" fill className="object-cover" sizes="160px" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #F0F6FA 0%, transparent 60%)" }} />
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
          <Image key={`mob-${active}`} src={current.img} alt={current.title} fill className="object-cover svc-photo-in" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full inline-block mb-2" style={{ background: "rgba(28,159,214,0.9)", color: "white" }}>
              {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-bold text-white">{current.title}</h3>
          </div>
        </div>
        <div key={`mob-text-${contentKey}`} className={`mb-5 ${prev !== null ? (dir === 1 ? "svc-text-right" : "svc-text-left") : ""}`}>
          <p className="text-[#5E7387] text-sm leading-relaxed mb-4">{current.desc}</p>
          <a href="/contactos" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full min-h-[44px]" style={{ background: "#1C9FD6", color: "white" }}>
            Marcar consulta <ArrowRight size={14} />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => { if (i !== active) { go(i > active ? 1 : -1); setTimeout(() => setActive(i), 620); resetTimer(); } }}
                className="rounded-full transition-all duration-300"
                style={{ width: i === active ? 22 : 8, height: 8, background: i === active ? "#1C9FD6" : "#D5E4EE" }} />
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
