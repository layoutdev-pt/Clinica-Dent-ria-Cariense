"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ServiceModal from "@/components/ServiceModal";

interface Props {
  svc: {
    title: string;
    desc: string;
    longDesc: string;
    icon: React.ReactNode;
  };
}

export default function ServiceSquareCard({ svc }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group bg-white rounded-[20px] p-6 border border-[#EEF4F8] hover:border-[#1C9FD6]/20 hover:shadow-[0_12px_40px_rgba(28,159,214,0.1)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 bg-[#E8F6FC] text-[#1C9FD6]">
          {svc.icon}
        </div>
        <h3 className="font-bold text-[#0D1E2C] text-[1rem] mb-2">{svc.title}</h3>
        <p className="text-[#5E7387] text-sm leading-relaxed flex-1">{svc.desc}</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C9FD6] hover:gap-2.5 transition-all duration-200"
        >
          Saber mais <ArrowRight size={12} />
        </button>
      </div>
      {open && (
        <ServiceModal
          title={svc.title}
          icon={svc.icon}
          shortDesc={svc.desc}
          longDesc={svc.longDesc}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
