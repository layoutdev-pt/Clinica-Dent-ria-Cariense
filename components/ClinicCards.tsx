"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const CLINICS = [
  {
    name: "Clínica Dentária Caria",
    address: "Cerca do Conde, Lote 41, Loja B/D",
    postal: "6250-111",
    phone: "275 471 751",
    mobile: "927 402 729",
    img: "/img/clinic-caria-ext.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268.5!2d-7.3679504!3d40.2958249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d196bd57c11a5%3A0x322f263faff1fe34!2sCl%C3%ADnica+Dent%C3%A1ria+Cariense!5e0!3m2!1spt!2spt!4v1",
  },
  {
    name: "Clínica Dentária Unhais da Serra",
    address: "Avenida 1º de Maio, 43-A",
    postal: "6215-517",
    phone: "275 971 342",
    mobile: "927 402 728",
    img: "/img/clinic-unhais-ext.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300!2d-7.6221671!3d40.258805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d2f832cebbe77%3A0x5297bfe230127d92!2sAv.+Primeiro+de+Maio+80%2C+6215-681+Unhais+da+Serra!5e0!3m2!1spt!2spt!4v2",
  },
  {
    name: "Espaço Saúde do Peso",
    address: "Rua Santa Maria Madalena, nº10",
    postal: "6200-622",
    phone: "275 954 182",
    mobile: "927 402 728",
    img: "/img/clinic-peso-interior.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-7.5624421!3d40.1951342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d3b1b382981c3%3A0xe33c98de915576fd!2sCentro+Social+Comunit%C3%A1rio+do+Peso!5e0!3m2!1spt!2spt!4v3",
  },
];

export default function ClinicCards() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Cards */}
      {CLINICS.map((loc, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex flex-1 rounded-[18px] overflow-hidden border text-left transition-all duration-200 ${
            active === i
              ? "border-[#1C9FD6] shadow-[0_4px_20px_rgba(28,159,214,0.15)] bg-white"
              : "border-[#EEF4F8] bg-white hover:border-[#1C9FD6]/40 hover:shadow-[0_4px_16px_rgba(28,159,214,0.08)]"
          }`}
        >
          {/* Clinic photo */}
          <div className="relative w-[130px] flex-shrink-0">
            <Image src={loc.img} alt={loc.name} fill sizes="130px" className="object-cover" />
            {active === i && (
              <div className="absolute inset-0 bg-[#1C9FD6]/15" />
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center px-5 py-4 flex-1 min-w-0">
            <div className={`font-bold text-[0.95rem] leading-snug mb-2 transition-colors ${active === i ? "text-[#1C9FD6]" : "text-[#0D1E2C]"}`}>
              {loc.name}
            </div>
            <div className="flex items-center gap-2 text-xs mb-1 text-[#1C9FD6]">
              <Phone size={12} className="flex-shrink-0" />
              <span>{loc.phone} // {loc.mobile}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#5E7387]">
              <MapPin size={12} className="flex-shrink-0" />
              <span>{loc.address}, {loc.postal}</span>
            </div>
          </div>

          {/* Active indicator */}
          {active === i && (
            <div className="w-1 bg-[#1C9FD6] flex-shrink-0" />
          )}
        </button>
      ))}

      {/* Map — below cards, shows selected clinic */}
      <div className="rounded-[18px] overflow-hidden border border-[#EEF4F8] flex-1 min-h-[180px]">
        <iframe
          key={active}
          src={CLINICS[active].mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 180 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
