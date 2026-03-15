"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X, Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > 400) setVisible(true);
      else if (window.scrollY < 400) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(13,30,44,0.18)] border border-[#D5E4EE] p-4 flex items-center gap-4 min-w-[260px]">
        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#5E7387] text-white flex items-center justify-center hover:bg-[#0D1E2C] transition-colors"
          aria-label="Fechar"
        >
          <X size={12} />
        </button>

        {/* Live dot */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E8F6FC] flex items-center justify-center relative">
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-green-400">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
          </span>
          <Calendar size={18} className="text-[#1C9FD6]" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-[#0D1E2C] leading-none mb-1">Disponível hoje</div>
          <div className="text-[11px] text-[#5E7387] leading-snug">Marque a sua consulta agora</div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Link
            href="/contactos"
            className="bg-[#1C9FD6] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#0e87bc] transition-colors whitespace-nowrap"
          >
            Agendar →
          </Link>
          <a
            href="tel:275471751"
            className="flex items-center justify-center gap-1 border border-[#D5E4EE] text-[#0D1E2C] text-[11px] font-semibold px-3 py-1.5 rounded-lg hover:border-[#1C9FD6] hover:text-[#1C9FD6] transition-colors"
          >
            <Phone size={11} /> Ligar
          </a>
        </div>
      </div>
    </div>
  );
}
