"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const touchX = useRef(0);
  const max = TESTIMONIALS.length - 1;

  const prev = () => setIdx((i) => Math.max(i - 1, 0));
  const next = () => setIdx((i) => Math.min(i + 1, max));

  const cardW = 400; // px
  const offset = idx * (cardW + 20);

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="testimonials-track flex gap-5"
          style={{ transform: `translateX(-${offset}px)` }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const delta = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[380px] bg-white border border-[#D5E4EE] rounded-[20px] p-7 shadow-[0_4px_24px_rgba(13,30,44,0.08)]"
            >
              <div className="text-amber-400 text-sm tracking-widest mb-3">★★★★★</div>
              <p className="text-sm text-[#2A3A4A] leading-[1.8] mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-[#E8F6FC]">
                  <Image src={t.avatar} alt={t.name} width={44} height={44} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0D1E2C]">{t.name}</div>
                  <div className="text-xs text-[#5E7387]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <button
          onClick={prev}
          disabled={idx === 0}
          className="w-11 h-11 rounded-full border border-[#D5E4EE] bg-white flex items-center justify-center text-[#0D1E2C] hover:bg-[#1C9FD6] hover:border-[#1C9FD6] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={next}
          disabled={idx >= max}
          className="w-11 h-11 rounded-full border border-[#D5E4EE] bg-white flex items-center justify-center text-[#0D1E2C] hover:bg-[#1C9FD6] hover:border-[#1C9FD6] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
