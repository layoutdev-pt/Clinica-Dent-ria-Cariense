"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="max-w-2xl mx-auto">
      {FAQS.map((faq, i) => (
        <div key={i} className={`border-b border-[#D5E4EE] ${i === 0 ? "border-t" : ""}`}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-[#0D1E2C] hover:text-[#1C9FD6] transition-colors duration-200"
          >
            {faq.q}
            <ChevronDown
              size={20}
              className={`flex-shrink-0 text-[#1C9FD6] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`faq-answer ${open === i ? "open" : ""}`}>
            <p className="pb-5 text-sm text-[#5E7387] leading-[1.8]">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
