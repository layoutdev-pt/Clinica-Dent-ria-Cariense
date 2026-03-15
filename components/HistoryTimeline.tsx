"use client";

import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    year: "2003",
    title: "Abertura em Caria",
    desc: "Abertura da primeira clínica em Caria, com a missão de levar cuidados dentários de excelência ao interior de Portugal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    year: "2010",
    title: "Expansão para Unhais da Serra",
    desc: "Segunda clínica inaugurada em Unhais da Serra, alargando a cobertura a mais comunidades da região.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M19 7l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    year: "2016",
    title: "Espaço Saúde do Peso",
    desc: "Inauguração do Espaço Saúde do Peso, consolidando a presença da Clínica Cariense em três localidades.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    year: "2020",
    title: "Renovação tecnológica",
    desc: "Renovação tecnológica completa das três clínicas com equipamentos digitais de última geração.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 6V4M16 6V4M2 10h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 14h2M11 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    year: "2024",
    title: "Referência regional",
    desc: "Mais de 12.000 pacientes tratados e reconhecimento regional como referência em saúde oral no interior de Portugal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function MilestoneStep({
  milestone,
  index,
  isVisible,
}: {
  milestone: (typeof MILESTONES)[0];
  index: number;
  isVisible: boolean;
}) {
  const delay = `${index * 0.12}s`;
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-start md:gap-0 gap-5 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`} style={{ minHeight: 120 }}>

      {/* Content card */}
      <div
        className={`flex-1 pb-10 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : `translateX(${isEven ? "28px" : "-28px"})`,
          transition: `opacity 0.6s ease ${delay}, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`,
        }}
      >
        <span
          className="inline-block text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-2"
          style={{ background: "#E8F6FC", color: "#1C9FD6" }}
        >
          {milestone.year}
        </span>
        <h3 className="font-display text-lg md:text-xl font-bold text-[#0D1E2C] mb-1.5">
          {milestone.title}
        </h3>
        <p className="text-[#5E7387] text-sm leading-relaxed max-w-[260px] inline-block">
          {milestone.desc}
        </p>
      </div>

      {/* Center node — desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2.5px solid ${isVisible ? "#1C9FD6" : "#D5E4EE"}`,
            background: isVisible ? "#1C9FD6" : "#F8FAFC",
            color: isVisible ? "white" : "#1C9FD6",
            boxShadow: isVisible ? "0 0 0 8px rgba(28,159,214,0.1), 0 4px 20px rgba(28,159,214,0.3)" : "none",
            transform: isVisible ? "scale(1)" : "scale(0.7)",
            transition: `all 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}`,
          }}
        >
          {milestone.icon}
        </div>

        {index < MILESTONES.length - 1 && (
          <div style={{ width: 2, height: 70, background: "#EEF4F8", overflow: "hidden" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, #1C9FD6, #1C9FD6)",
                transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                transition: `transform 0.7s ease ${parseFloat(delay) + 0.3}s`,
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile node */}
      <div
        className="md:hidden flex-shrink-0 mt-1"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${isVisible ? "#1C9FD6" : "#D5E4EE"}`,
          background: isVisible ? "#1C9FD6" : "white",
          color: isVisible ? "white" : "#1C9FD6",
          transform: isVisible ? "scale(1)" : "scale(0.75)",
          transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          flexShrink: 0,
        }}
      >
        {milestone.icon}
      </div>

      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function HistoryTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(MILESTONES.length).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.3, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative">
      {/* Background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E2ECF4] -translate-x-1/2 hidden md:block" />

      <div className="flex flex-col gap-0">
        {MILESTONES.map((milestone, i) => (
          <div key={i} ref={(el) => { refs.current[i] = el; }}>
            <MilestoneStep
              milestone={milestone}
              index={i}
              isVisible={visibleSteps[i]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
