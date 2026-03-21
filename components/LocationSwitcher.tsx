"use client";

import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { CLINICS } from "@/lib/constants";

const HOURS = [
  { day: "Segunda a Sexta", time: "09:00 – 13:00 | 14:30 – 19:00" },
  { day: "Sábado", time: "09:00 – 13:00" },
  { day: "Domingo", time: "Encerrado" },
];

export default function LocationSwitcher() {
  const [active, setActive] = useState(0);
  const clinic = CLINICS[active];

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CLINICS.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setActive(i)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 min-h-[44px] ${
              active === i
                ? "bg-[#1C9FD6] text-white shadow-[0_2px_12px_rgba(28,159,214,0.4)]"
                : "bg-white border border-[#D5E4EE] text-[#5E7387] hover:border-[#1C9FD6] hover:text-[#1C9FD6]"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-[20px] overflow-hidden border border-[#D5E4EE] h-[260px] sm:h-[320px] lg:h-[380px] bg-[#E8F6FC]">
          <iframe
            key={clinic.key}
            src={clinic.mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info */}
        <div className="space-y-5">
          <h3 className="font-display text-2xl font-bold text-[#0D1E2C]">{clinic.name}</h3>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-[#E8F6FC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin size={16} className="text-[#1C9FD6]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#5E7387] uppercase tracking-widest mb-1">Morada</div>
              <div className="text-[#0D1E2C] text-sm font-medium">{clinic.address}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-[#E8F6FC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone size={16} className="text-[#1C9FD6]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#5E7387] uppercase tracking-widest mb-1">Telefone</div>
              <div className="text-[#0D1E2C] text-sm font-medium">{clinic.phone}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-[#E8F6FC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock size={16} className="text-[#1C9FD6]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#5E7387] uppercase tracking-widest mb-1">Horário</div>
              <div className="space-y-1">
                {HOURS.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-sm gap-4">
                    <span className="text-[#5E7387]">{h.day}</span>
                    <span className="text-[#0D1E2C] font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
