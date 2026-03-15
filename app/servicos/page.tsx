import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços — Implantologia, Ortodontia, Estética e Mais",
  description:
    "12 especialidades dentárias numa só clínica: Implantologia, Ortodontia, Branqueamento, Endodontia, Odontopediatria, Estética Dentária e muito mais. Marque a sua consulta — 275 471 751.",
  openGraph: {
    title: "Serviços Dentários | Clínica Dentária Cariense",
    description:
      "12 especialidades dentárias em Caria, Unhais da Serra e Peso. Implantologia, Ortodontia, Branqueamento e muito mais.",
    images: [{ url: "/img/clinic-caria.jpg", width: 1200, height: 630, alt: "Serviços Dentários — Clínica Cariense" }],
  },
  alternates: { canonical: "https://www.clinicacariense.pt/servicos" },
};
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import CtaBanner from "@/components/CtaBanner";

const ICON_MAP: Record<string, React.ReactNode> = {
  Implantologia: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 17v16M16 25h8M15 33h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 12c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Ortodontia: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="8" y="14" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="2"/>
      <rect x="17" y="12" width="6" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <rect x="26" y="14" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 20h3M23 20h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Branqueamento Dentário": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 8l2.5 5h5.5l-4.5 3.5 1.5 5.5L20 19l-5 3 1.5-5.5L12 13h5.5L20 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M20 22v10M15 27h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
    </svg>
  ),
  "Cirurgia Oral": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M12 28L28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 8l8 8-4 4-8-8 4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 28c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Dentisteria Conservadora": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="10" y="8" width="20" height="24" rx="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M15 16h10M15 21h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Endodontia: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M14 8c-2 0-6 2-6 8 0 4 2 6 4 8l2 10h4l1-8h2l1 8h4l2-10c2-2 4-4 4-8 0-6-4-8-6-8-2 0-3 1-6 1s-4-1-6-1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16 18v6M20 16v8M24 18v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  ),
  Periodontologia: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M8 28c4-8 20-8 24 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 22c3-6 13-6 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Odontopediatria: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="18" cy="15" r="1" fill="currentColor"/>
      <circle cx="22" cy="15" r="1" fill="currentColor"/>
    </svg>
  ),
  "Prótese Dentária": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M8 18c0-5.523 5.373-10 12-10s12 4.477 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="10" y="18" width="6" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="17" y="16" width="6" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="24" y="18" width="6" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Estética Dentária": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 10c-6 0-12 4-12 10 0 4 3 7 7 8l5 6 5-6c4-1 7-4 7-8 0-6-6-10-12-10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16 22c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Reabilitação Oral": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 20l2.5 2.5L24 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Medicina Oral": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const SERVICE_COLORS: Record<string, string> = {
  Implantologia: "#1C9FD6",
  Ortodontia: "#1C9FD6",
  "Branqueamento Dentário": "#1C9FD6",
  "Cirurgia Oral": "#1C9FD6",
  "Dentisteria Conservadora": "#1C9FD6",
  Endodontia: "#1C9FD6",
  Periodontologia: "#1C9FD6",
  Odontopediatria: "#1C9FD6",
  "Prótese Dentária": "#1C9FD6",
  "Estética Dentária": "#1C9FD6",
  "Reabilitação Oral": "#1C9FD6",
  "Medicina Oral": "#1C9FD6",
};

const SERVICES_FULL = [
  {
    title: "Implantologia",
    icon: "🦷",
    desc: "A implantologia é a solução definitiva para a substituição de dentes perdidos. Os implantes de titânio integram-se naturalmente no osso, funcionando e tendo a aparência de dentes naturais.",
    benefits: ["Resultado permanente e natural", "Preservação do osso maxilar", "Função mastigatória completa", "Sem necessidade de remover à noite"],
    highlight: "A solução mais duradoura",
  },
  {
    title: "Ortodontia",
    icon: "😁",
    desc: "Tratamento de alinhamento dentário para crianças, adolescentes e adultos. Dispomos de aparelhos fixos metálicos, estéticos (cerâmicos) e alinhadores transparentes (invisíveis).",
    benefits: ["Aparelhos fixos ou removíveis", "Alinhadores transparentes disponíveis", "Tratamento para todas as idades", "Acompanhamento contínuo"],
    highlight: "Para todas as idades",
  },
  {
    title: "Branqueamento Dentário",
    icon: "✨",
    desc: "Procedimento estético seguro e eficaz para clarear a cor natural dos dentes. Disponível em consultório (resultado imediato) ou domiciliar (mais gradual).",
    benefits: ["Clareamento em consultório (1 sessão)", "Kit domiciliar personalizado", "Resultados de até 8 tons mais claros", "Sem danos no esmalte"],
    highlight: "Resultados visíveis",
  },
  {
    title: "Cirurgia Oral",
    icon: "🔬",
    desc: "Procedimentos cirúrgicos orais realizados com máximo conforto e segurança. Incluem extracções simples e complexas, cirurgia de sisos e biópsias orais.",
    benefits: ["Extracções simples e complexas", "Cirurgia de terceiros molares", "Biópsias e cirurgia periodontal", "Sedação consciente disponível"],
    highlight: "Com máximo conforto",
  },
  {
    title: "Dentisteria Conservadora",
    icon: "🏥",
    desc: "Tratamento e restauração de cáries e lesões dentárias com materiais estéticos de última geração. Incluímos restaurações a composite e inlays/onlays cerâmicos.",
    benefits: ["Restaurações a composite estético", "Inlays e onlays cerâmicos", "Tratamento de cáries minimamente invasivo", "Correspondência de cor natural"],
    highlight: "Estética e resistência",
  },
  {
    title: "Endodontia",
    icon: "💉",
    desc: "Tratamento de canais para salvar dentes com polpa infetada ou necrosada. Com técnicas modernas e instrumentação rotatória, o tratamento é rápido e indolor.",
    benefits: ["Tratamento em 1 a 2 sessões", "Instrumentação rotatória", "Procedimento indolor", "Preservação do dente natural"],
    highlight: "Salva o dente natural",
  },
  {
    title: "Periodontologia",
    icon: "🫀",
    desc: "Diagnóstico e tratamento de doenças das gengivas e do osso de suporte dos dentes. A saúde periodontal é fundamental para o sucesso de qualquer tratamento dentário.",
    benefits: ["Destartarização profissional", "Curetagem e alisamento radicular", "Cirurgia periodontal", "Manutenção preventiva"],
    highlight: "Saúde gengival total",
  },
  {
    title: "Odontopediatria",
    icon: "👶",
    desc: "Cuidados dentários especializados para bebés, crianças e adolescentes. Criamos um ambiente amigo e descontraído para que os mais novos cresçam com uma boa relação com a saúde oral.",
    benefits: ["Consulta de bebé e 1ª infância", "Selantes de fissuras preventivos", "Espaço acolhedor para crianças", "Orientação para pais"],
    highlight: "Para os mais pequenos",
  },
  {
    title: "Prótese Dentária",
    icon: "🦴",
    desc: "Reabilitação de pacientes com ausência parcial ou total de dentes através de próteses fixas (coroas e pontes) ou removíveis (parciais e totais).",
    benefits: ["Coroas e pontes cerâmicas", "Próteses removíveis parciais e totais", "Próteses sobre implantes", "Overdentures implanto-suportadas"],
    highlight: "Sorrisos completos",
  },
  {
    title: "Estética Dentária",
    icon: "🌟",
    desc: "Transformação do sorriso através de facetas de porcelana, coroas estéticas e outros procedimentos de design do sorriso. Resultados naturais e harmoniosos.",
    benefits: ["Facetas de porcelana e composite", "Design digital do sorriso", "Coroas estéticas totais em cerâmica", "Resultados naturais e duradouros"],
    highlight: "O sorriso dos seus sonhos",
  },
  {
    title: "Reabilitação Oral",
    icon: "🔄",
    desc: "Tratamento global para pacientes com perda severa de estrutura dentária, disfunção oclusal ou que necessitam de reconstrução total da dentição.",
    benefits: ["Avaliação oclusal completa", "Plano de tratamento integrado", "Reabilitação com implantes", "Follow-up de longa duração"],
    highlight: "Reconstrução total",
  },
  {
    title: "Medicina Oral",
    icon: "🔍",
    desc: "Diagnóstico e tratamento de lesões e patologias da mucosa oral, glândulas salivares, ossos maxilares e articulação temporomandibular (ATM).",
    benefits: ["Diagnóstico de lesões orais", "Tratamento de bruxismo (goteira oclusal)", "Xerostomia e patologia salivar", "Articulação temporomandibular (ATM)"],
    highlight: "Diagnóstico especializado",
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-[#0D1E2C] py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(28,159,214,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <SectionTag light centered>Os Nossos Serviços</SectionTag>
          <h1 className="font-['DM Serif Display',serif] text-5xl md:text-6xl font-bold text-white mt-5 mb-6">
            Cuidados dentários<br />
            <span className="text-[#1C9FD6]">para toda a família</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Mais de 10 especialidades disponíveis nas nossas três clínicas. Uma equipa multidisciplinar pronta para tratar cada caso com precisão e cuidado.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES_FULL.map((svc, i) => {
              const color = SERVICE_COLORS[svc.title] ?? "#1C9FD6";
              return (
                <ScrollReveal key={i} delay={(i % 2) * 80}>
                  <div className="group bg-white border border-[#EEF4F8] rounded-[20px] p-7 hover:border-transparent hover:shadow-[0_12px_48px_rgba(13,30,44,0.1)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: color + "15", color }}
                      >
                        {ICON_MAP[svc.title] ?? (
                          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                            <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <div
                          className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1.5"
                          style={{ background: color + "15", color }}
                        >
                          {svc.highlight}
                        </div>
                        <h2 className="font-bold text-[#0D1E2C] text-lg leading-snug">{svc.title}</h2>
                      </div>
                    </div>
                    <p className="text-[#5E7387] text-sm leading-relaxed mb-5">{svc.desc}</p>
                    <ul className="mt-auto space-y-2.5">
                      {svc.benefits.map((b, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-[#2A3A4A]">
                          <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: color + "20" }}>
                            <CheckCircle size={10} style={{ color }} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Porquê escolher-nos?</SectionTag>
            <h2 className="font-['DM Serif Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              A diferença Cariense
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><path d="M20 6l3 8h8l-6.5 5 2.5 8L20 22l-7 5 2.5-8L9 14h8l3-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
                title: "Experiência comprovada",
                desc: "Mais de 20 anos de prática clínica e milhares de casos tratados com sucesso.",
              },
              {
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/><path d="M15 20h10M20 15v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
                title: "Tecnologia de ponta",
                desc: "Equipamentos digitais de última geração para diagnóstico e tratamento precisos.",
              },
              {
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2"/><circle cx="26" cy="14" r="5" stroke="currentColor" strokeWidth="2"/><path d="M6 32c0-6.627 3.582-12 8-12M18 32c0-6.627 3.582-12 8-12M26 20c4.418 0 8 5.373 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
                title: "Equipa especializada",
                desc: "Cada especialidade é exercida por um profissional com formação específica na área.",
              },
              {
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><path d="M20 6C14 6 9 11 9 17c0 9 11 17 11 17s11-8 11-17c0-6-5-11-11-11z" stroke="currentColor" strokeWidth="2"/><circle cx="20" cy="17" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
                title: "3 localizações",
                desc: "Presente em Caria, Unhais da Serra e Peso para a sua comodidade.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="value-card bg-white border border-[#D5E4EE] rounded-[20px] p-7 text-center">
                  <div className="w-12 h-12 bg-[#E8F6FC] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1C9FD6]">{item.icon}</div>
                  <h3 className="font-bold text-[#0D1E2C] mb-2 text-sm">{item.title}</h3>
                  <p className="text-[#5E7387] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE STRIP ── */}
      <section className="py-14 bg-white border-t border-[#D5E4EE]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-[#5E7387] uppercase tracking-widest mb-4">Trabalhamos com os principais seguros e subsistemas</p>
            <p className="text-[#0D1E2C] font-medium">ADSE · PT ACS · Multicare · Fidelidade · Médis · AdvanceCare · Lusíadas · e outros</p>
            <p className="text-[#5E7387] text-sm mt-3">Contacte-nos para confirmar a cobertura do seu seguro específico.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10">
        <CtaBanner title="Qual tratamento precisa? Fale connosco." />
      </section>
    </>
  );
}
