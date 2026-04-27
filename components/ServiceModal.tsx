"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceModalProps {
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  onClose: () => void;
}

export default function ServiceModal({ title, icon, shortDesc, longDesc, onClose }: ServiceModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(13,30,44,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >

      <div
        className="relative bg-white rounded-[28px] shadow-[0_32px_80px_rgba(13,30,44,0.22)] w-full max-w-lg overflow-hidden"
        style={{ animation: "modalPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-7 pb-5 border-b border-[#EEF4F8]">
          <div className="w-12 h-12 rounded-2xl bg-[#E8F6FC] text-[#1C9FD6] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-bold text-[#0D1E2C] text-xl leading-tight">{title}</h2>
            <p className="text-[#5E7387] text-sm mt-1">{shortDesc}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-[#F7FAFC] hover:bg-[#EEF4F8] flex items-center justify-center text-[#5E7387] hover:text-[#0D1E2C] transition-colors"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-7 pt-5">
          <p className="text-[#0D1E2C] text-sm leading-relaxed whitespace-pre-line">{longDesc}</p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/contactos"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1C9FD6] hover:bg-[#0D84B8] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 shadow-[0_4px_16px_rgba(28,159,214,0.3)]"
            >
              Marcar Consulta <ArrowRight size={14} />
            </Link>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full text-sm font-semibold text-[#5E7387] border border-[#D5E4EE] hover:border-[#1C9FD6] hover:text-[#1C9FD6] transition-colors duration-200"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}
