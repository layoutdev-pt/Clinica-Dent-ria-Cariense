"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    step: "01",
    title: "Marcação",
    desc: "Agende a sua consulta online, por telefone ou diretamente na clínica. Resposta em menos de 24 horas.",
    detail: "Pode marcar através do nosso site, ligando para qualquer uma das nossas clínicas ou presencialmente. A nossa equipa confirma a consulta no próprio dia.",
    color: "#1C9FD6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="8" cy="15" r="1" fill="currentColor"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
        <circle cx="16" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Primeira Consulta",
    desc: "O médico dentista avalia o seu historial clínico, realiza exames e diagnóstico personalizado.",
    detail: "Na primeira consulta fazemos uma análise completa da sua saúde oral — radiografias digitais, avaliação periodontal e registo fotográfico quando necessário.",
    color: "#1C9FD6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 3l1.5 1.5M19 7h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Plano de Tratamento",
    desc: "Apresentamos um plano claro, detalhado e personalizado — com todas as opções e custos transparentes.",
    detail: "O plano inclui todas as fases do tratamento, orçamento detalhado e opções de pagamento. Sem surpresas, sem letra pequena — total transparência.",
    color: "#1C9FD6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Tratamento",
    desc: "Realizamos o tratamento com tecnologia de ponta, máximo conforto e acompanhamento contínuo.",
    detail: "Cada sessão é realizada por especialistas com equipamentos digitais de última geração. Oferecemos sedação consciente para pacientes com ansiedade dentária.",
    color: "#1C9FD6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2C9.2 2 7 4.2 7 7c0 1.5.6 2.8 1.5 3.8L10 21h4l1.5-10.2C16.4 9.8 17 8.5 17 7c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="12" cy="7.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    step: "05",
    title: "Acompanhamento",
    desc: "Mantemos um seguimento regular para garantir os melhores resultados a longo prazo.",
    detail: "Agendamos consultas de revisão periódicas e estamos sempre disponíveis para esclarecer dúvidas. O seu sorriso é o nosso compromisso a longo prazo.",
    color: "#1C9FD6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const NODE_SIZE = 60;

function ConnectorLine({ isVisible, delay }: { isVisible: boolean; delay: number }) {
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => setGlowing(true), (delay + 1.1) * 1000);
    return () => clearTimeout(t);
  }, [isVisible, delay]);

  return (
    <div style={{ width: 2, flex: 1, background: "#EEF4F8", overflow: "hidden", position: "relative", minHeight: 40 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#1C9FD6",
          transform: isVisible ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: `transform 0.7s ease ${delay + 0.3}s`,
        }}
      />
      {glowing && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.85), transparent)",
            animation: "glowSweep 2.4s ease-in-out infinite",
            animationDelay: `${delay * 0.5}s`,
          }}
        />
      )}
      <style>{`
        @keyframes glowSweep {
          0%   { top: -40%; }
          100% { top: 140%; }
        }
      `}</style>
    </div>
  );
}

function TimelineStep({
  step,
  index,
  isEven,
  isActive,
  isVisible,
  isLast,
  onClick,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isEven: boolean;
  isActive: boolean;
  isVisible: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  const delay = index * 0.1;

  return (
    <div
      className={`relative flex items-stretch md:gap-0 gap-5 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content card */}
      <div
        className={`flex-1 py-6 ${isEven ? "md:pr-20 md:text-right" : "md:pl-20"} ${isLast ? "" : "pb-10"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : `translateX(${isEven ? "32px" : "-32px"})`,
          transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}
      >
        <button onClick={onClick} className="text-left w-full">
          <div className={`inline-flex items-center gap-1.5 mb-2 ${isEven ? "md:flex-row-reverse md:w-full md:justify-start" : ""}`}>
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full transition-colors duration-300"
              style={{
                background: isActive ? step.color + "20" : "#F1F5F9",
                color: isActive ? step.color : "#94A3B8",
              }}
            >
              {step.step}
            </span>
          </div>
          <h3
            className="font-display text-lg md:text-xl font-bold mb-1.5 transition-colors duration-300"
            style={{ color: isActive ? step.color : "#0D1E2C" }}
          >
            {step.title}
          </h3>
          <p className="text-[#5E7387] text-sm leading-relaxed max-w-[260px] inline-block">
            {step.desc}
          </p>
          <div
            style={{
              maxHeight: isActive ? 100 : 0,
              opacity: isActive ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.4s ease, opacity 0.35s ease",
            }}
          >
            <p
              className="text-xs leading-relaxed mt-3 px-3 py-2.5 rounded-xl border-l-2"
              style={{
                color: step.color,
                background: step.color + "10",
                borderColor: step.color + "40",
              }}
            >
              {step.detail}
            </p>
          </div>
        </button>
      </div>

      {/* Center column — node + connector line, stretches full row height */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex-col items-center z-10">
        {/* Node */}
        <button
          onClick={onClick}
          className="focus:outline-none flex-shrink-0"
          style={{
            width: NODE_SIZE,
            height: NODE_SIZE,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2.5px solid ${isVisible ? step.color : "#D5E4EE"}`,
            background: isActive ? step.color : isVisible ? "white" : "#F8FAFC",
            color: isActive ? "white" : step.color,
            boxShadow: isActive
              ? `0 0 0 8px ${step.color}18, 0 4px 20px ${step.color}40`
              : isVisible
              ? `0 0 0 4px ${step.color}12`
              : "none",
            transform: isVisible ? "scale(1)" : "scale(0.7)",
            transition: `all 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.18)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
        >
          {step.icon}
        </button>

        {/* Connector line — flex-1 fills remaining height of the row */}
        {!isLast && <ConnectorLine isVisible={isVisible} delay={delay} />}
      </div>

      {/* Mobile node */}
      <button
        onClick={onClick}
        className="md:hidden flex-shrink-0 mt-1 focus:outline-none self-start"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${isVisible ? step.color : "#D5E4EE"}`,
          background: isActive ? step.color : "white",
          color: isActive ? "white" : step.color,
          transform: isVisible ? "scale(1)" : "scale(0.75)",
          transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          flexShrink: 0,
        }}
      >
        {step.icon}
      </button>

      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function PatientTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(STEPS.length).fill(false)
  );
  const [activeStep, setActiveStep] = useState<number | null>(null);
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
        { threshold: 0.35, rootMargin: "0px 0px -60px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const progress = (visibleSteps.filter(Boolean).length / STEPS.length) * 100;

  return (
    <section className="py-24 bg-[#F7FAFC] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#1C9FD6]/40" />
            <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">O seu percurso</span>
            <span className="w-8 h-px bg-[#1C9FD6]/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] leading-[1.08] mb-4">
            Do primeiro contacto ao<br />
            <span className="text-[#1C9FD6] italic">sorriso perfeito</span>
          </h2>
          <p className="text-[#5E7387] text-sm max-w-sm mx-auto">
            Clique em cada passo para saber mais sobre o seu percurso connosco.
          </p>

          {/* Progress bar */}
          <div className="mt-8 max-w-xs mx-auto">
            <div className="flex justify-between text-[10px] text-[#5E7387] font-medium mb-1.5">
              <span>Início</span>
              <span>Sorriso perfeito</span>
            </div>
            <div className="h-1.5 bg-[#E8F6FC] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(to right, #1C9FD6, #0D7DB5)",
                  transition: "width 0.8s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Timeline — NO background line, connectors are inline */}
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <div key={i} ref={(el) => { refs.current[i] = el; }}>
              <TimelineStep
                step={step}
                index={i}
                isEven={i % 2 === 0}
                isActive={activeStep === i}
                isVisible={visibleSteps[i]}
                isLast={i === STEPS.length - 1}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-4"
          style={{
            opacity: visibleSteps[STEPS.length - 1] ? 1 : 0,
            transform: visibleSteps[STEPS.length - 1] ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          <a
            href="/contactos"
            className="inline-flex items-center gap-2 bg-[#1C9FD6] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#0D7DB5] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(28,159,214,0.35)] transition-all duration-200"
          >
            Começar agora
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
