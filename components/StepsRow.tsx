"use client";

import { useEffect, useRef } from "react";
import { CalendarCheck, Stethoscope, Smile } from "lucide-react";

export default function StepsRow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("steps-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="hidden md:flex items-center justify-center mb-8 px-[calc(100%/6)]"
    >
      <div className="step-circle group flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-[#1C9FD6] flex items-center justify-center shadow-[0_4px_20px_rgba(28,159,214,0.25)] hover:bg-[#1C9FD6] transition-all duration-300 cursor-default z-10">
        <CalendarCheck size={22} className="text-[#1C9FD6] group-hover:hidden" />
        <span className="hidden group-hover:block text-white text-xs font-bold">01</span>
      </div>

      <div className="step-connector step-connector-1 flex-1 h-[2px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1C9FD6]/25" />
        <div className="step-fill absolute inset-0 bg-[#1C9FD6] origin-left scale-x-0 transition-transform duration-700 delay-300" />
        <div className="step-glow" />
      </div>

      <div className="step-circle group flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-[#1C9FD6] flex items-center justify-center shadow-[0_4px_20px_rgba(28,159,214,0.25)] hover:bg-[#1C9FD6] transition-all duration-300 cursor-default z-10">
        <Stethoscope size={22} className="text-[#1C9FD6] group-hover:hidden" />
        <span className="hidden group-hover:block text-white text-xs font-bold">02</span>
      </div>

      <div className="step-connector step-connector-2 flex-1 h-[2px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1C9FD6]/25" />
        <div className="step-fill absolute inset-0 bg-[#1C9FD6] origin-left scale-x-0 transition-transform duration-700 delay-[600ms]" />
        <div className="step-glow" />
      </div>

      <div className="step-circle group flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-[#1C9FD6] flex items-center justify-center shadow-[0_4px_20px_rgba(28,159,214,0.25)] hover:bg-[#1C9FD6] transition-all duration-300 cursor-default z-10">
        <Smile size={22} className="text-[#1C9FD6] group-hover:hidden" />
        <span className="hidden group-hover:block text-white text-xs font-bold">03</span>
      </div>
    </div>
  );
}
