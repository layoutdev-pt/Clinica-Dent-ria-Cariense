import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

/* ─── Dados ─────────────────────────── */

const FEATURED_SERVICES = [
  {
    title: "Implantologia",
    desc: "Soluções fixas e definitivas para substituir dentes perdidos. Utilizamos implantes de titânio altamente biocompatíveis para recuperar a sua função mastigatória e devolver-lhe um sorriso 100% natural, sem comprometer os dentes vizinhos.",
    img: "/img/service-implant.png",
    photos: ["/img/service-surgery.png", "/img/service-ortho.png", "/img/service-endo.png"],
  },
  {
    title: "Ortodontia",
    desc: "Corrigimos o posicionamento dos dentes e maxilares para uma mordida perfeita e esteticamente harmoniosa. Dispomos de várias soluções, desde os aparelhos metálicos tradicionais aos sistemas estéticos e invisíveis, adaptados a crianças, jovens e adultos.",
    img: "/img/service-ortho.png",
    photos: ["/img/service-implant.png", "/img/service-whitening.png", "/img/service-kids.png"],
  },
  {
    title: "Prótese Fixa",
    desc: "Reabilitação estética e funcional através de coroas e pontes dentárias altamente resistentes. Ideal para dentes muito danificados ou enfraquecidos, devolvendo a força, a forma e a cor natural ao seu sorriso com materiais de última geração.",
    img: "/img/service-endo.png",
    photos: ["/img/service-ortho.png", "/img/service-surgery.png", "/img/service-implant.png"],
  },
  {
    title: "Prótese Removível",
    desc: "Soluções práticas, confortáveis e personalizadas (acrílicas ou esqueléticas) para a substituição de dentes ausentes. Garantimos um planeamento rigoroso para uma adaptação fácil, melhorando a sua mastigação e estética no dia a dia.",
    img: "/img/service-surgery.png",
    photos: ["/img/service-whitening.png", "/img/service-endo.png", "/img/service-kids.png"],
  },
  {
    title: "Branqueamento Dentário",
    desc: "Tratamentos clínicos seguros e eficazes para eliminar manchas e pigmentações causadas pelo tempo e pela alimentação. Recupere a luminosidade e a brancura do seu sorriso através de um procedimento controlado que protege o seu esmalte natural.",
    img: "/img/service-whitening.png",
    photos: ["/img/service-implant.png", "/img/service-ortho.png", "/img/service-surgery.png"],
  },
];

/* ─── Ícones inline ──────────────────── */
const IcoScalpel = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22l8-8-9-9-8 8 9 9z"/><path d="M2 22l4-4"/>
  </svg>
);
const IcoTooth = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9.2 2 7 4.2 7 7c0 1.5.6 2.8 1.5 3.8L10 21h4l1.5-10.2C16.4 9.8 17 8.5 17 7c0-2.8-2.2-5-5-5z"/>
  </svg>
);
const IcoKid = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="8" r="4"/><path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
    <circle cx="9" cy="9" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);
const IcoGum = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M5 17c3-6 11-6 14 0"/><path d="M7 13c2-4 8-4 10 0"/><circle cx="12" cy="7" r="3"/>
  </svg>
);
const IcoStar = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);
const IcoCanal = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M12 2C9.2 2 7 4.2 7 7c0 1.5.6 2.8 1.5 3.8L10 21h4l1.5-10.2C16.4 9.8 17 8.5 17 7c0-2.8-2.2-5-5-5z"/>
    <path d="M10 12l2 2 2-2" strokeOpacity="0.5"/>
  </svg>
);
const IcoSmile = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);
const IcoShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 3v6c0 5-3.6 9.3-8 10.5C7.6 20.3 4 16 4 11V5l8-3z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
const IcoCog = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
);

const SECONDARY_SERVICES = [
  { title: "Cirurgia Oral", desc: "Procedimentos seguros, da extração de dentes do siso ao tratamento de lesões complexas.", icon: <IcoScalpel /> },
  { title: "Dentisteria", desc: "Tratamento de cáries e restaurações estéticas focadas na preservação da estrutura original do dente.", icon: <IcoTooth /> },
  { title: "Endodontia", desc: "Desvitalizações seguras para tratar infeções e salvar dentes que, de outra forma, teriam de ser extraídos.", icon: <IcoCanal /> },
  { title: "Odontopediatria", desc: "Cuidados preventivos num ambiente descontraído, garantindo que as crianças crescem sem medos.", icon: <IcoKid /> },
  { title: "Periodontologia", desc: "Diagnóstico e tratamento de doenças das gengivas, fundamentais para a estabilidade da sua saúde oral.", icon: <IcoGum /> },
  { title: "Estética Dentária", desc: "Tratamentos personalizados focados em melhorar a harmonia e a cor do seu sorriso de forma natural.", icon: <IcoStar /> },
  { title: "Reabilitação Oral", desc: "A abordagem completa e integrada para restaurar a função mastigatória, a fonética e a estética de sorrisos com grandes desgastes.", icon: <IcoCog /> },
  { title: "Medicina Oral", desc: "A área focada na prevenção, diagnóstico e tratamento de lesões nos tecidos moles da cavidade oral.", icon: <IcoShield /> },
];

const WHY_US = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"/></svg>,
    title: "+28 Anos de História",
    desc: "A confiança de gerações a cuidar do seu sorriso com rigor.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22C8.13 22 5 18.87 5 15c0-5.25 7-13 7-13s7 7.75 7 13c0 3.87-3.13 7-7 7z"/><circle cx="12" cy="15" r="2.5"/></svg>,
    title: "3 Clínicas ao seu dispor",
    desc: "Sempre perto de si: Caria, Peso e Unhais da Serra.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M8 7V5a2 2 0 014 0v2M12 12v4M10 14h4"/></svg>,
    title: "Tecnologia Avançada",
    desc: "Equipamentos modernos para tratamentos seguros e sem dor.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="9" r="3"/><path d="M1 21c0-4 3.6-7 8-7M16 21c0-3 1.8-5.5 4-6.5"/></svg>,
    title: "Equipa Multidisciplinar",
    desc: "Todas as especialidades dentárias concentradas num só lugar.",
  },
];

/* ─── Página ─────────────────────────── */

export default function ServicosPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0D1E2C] py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(28,159,214,0.2) 0%, transparent 60%)" }} />
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

      {/* ── SECÇÃO 1: TRATAMENTOS DE EXCELÊNCIA (layout horizontal com fotos) ── */}
      <section className="py-24 bg-[#F0F6FA]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <SectionTag>Os Nossos Tratamentos Principais</SectionTag>
            <h2 className="font-['DM Serif Display',serif] text-4xl md:text-5xl font-bold text-[#0D1E2C] mt-4 mb-4">
              Tratamentos de Excelência
            </h2>
            <p className="text-[#5E7387] text-base max-w-2xl mx-auto">
              Descubra as nossas soluções mais procuradas para reabilitar, corrigir e iluminar o seu sorriso, sempre com o máximo conforto e segurança.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-3">
            {FEATURED_SERVICES.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group bg-white rounded-[20px] overflow-hidden border border-[#E2ECF4] hover:border-[#1C9FD6]/30 hover:shadow-[0_8px_40px_rgba(28,159,214,0.1)] transition-all duration-300">
                  <div className="grid md:grid-cols-[280px_1fr_auto] items-stretch">
                    {/* Foto principal */}
                    <div className="relative h-56 md:h-auto overflow-hidden">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                    </div>

                    {/* Texto */}
                    <div className="px-8 py-7 flex flex-col justify-center">
                      <h3 className="font-['DM Serif Display',serif] text-2xl font-bold text-[#0D1E2C] mb-3">{svc.title}</h3>
                      <p className="text-[#5E7387] text-sm leading-relaxed mb-5 max-w-md">{svc.desc}</p>
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 text-[#1C9FD6] text-sm font-semibold hover:gap-3 transition-all duration-200"
                      >
                        Marcar consulta <ArrowRight size={14} />
                      </a>
                    </div>

                    {/* Galeria de fotos lateral */}
                    <div className="hidden md:flex flex-col gap-1 w-[180px] overflow-hidden">
                      {svc.photos.map((photo, j) => (
                        <div key={j} className="relative flex-1 overflow-hidden">
                          <Image
                            src={photo}
                            alt=""
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            sizes="180px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECÇÃO 2: MAIS ESPECIALIDADES — grelha mista com CTA 2×1 ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Mais Especialidades Clínicas</SectionTag>
            <h2 className="font-['DM Serif Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Todas as especialidades,<br />
              <span className="text-[#1C9FD6] italic">num só lugar</span>
            </h2>
          </ScrollReveal>

          {/* Grid: col-esquerda [card + CTA grande + card] / col-direita [4 cards] */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Coluna esquerda */}
            <div className="flex flex-col gap-4">
              {/* Card pequeno — Cirurgia Oral */}
              <ScrollReveal>
                <ServiceSmallCard svc={SECONDARY_SERVICES[0]} />
              </ScrollReveal>

              {/* CTA card grande (ocupa espaço de 2 linhas) */}
              <ScrollReveal delay={80}>
                <Link href="/contactos" className="block group">
                  <div
                    className="relative rounded-[20px] overflow-hidden p-8 flex flex-col justify-between"
                    style={{
                      background: "linear-gradient(155deg, #1289BE 0%, #1C9FD6 50%, #0D84B8 100%)",
                      minHeight: 340,
                    }}
                  >
                    {/* Dot pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/15 blur-[50px] pointer-events-none" />

                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                        <ArrowRight size={18} className="text-white" />
                      </div>
                      <h3 className="font-['DM Serif Display',serif] text-2xl font-bold text-white leading-tight mb-3">
                        Pronto para cuidar<br />do seu sorriso?
                      </h3>
                      <p className="text-white/75 text-sm leading-relaxed max-w-xs">
                        A nossa equipa está disponível para avaliar a sua saúde oral e apresentar a melhor solução.
                      </p>
                    </div>

                    {/* Phone image */}
                    <div className="relative z-10 h-36 mt-4">
                      <Image
                        src="/img/asertyuior.png"
                        alt="Marque consulta"
                        fill
                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                        sizes="400px"
                      />
                    </div>

                    {/* Bottom button */}
                    <div className="relative z-10 mt-4">
                      <span className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#1C9FD6] font-bold text-sm px-6 py-3 rounded-full group-hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200">
                        Agendar Consulta <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Card pequeno — Dentisteria */}
              <ScrollReveal delay={120}>
                <ServiceSmallCard svc={SECONDARY_SERVICES[1]} />
              </ScrollReveal>
            </div>

            {/* Coluna direita — 4 cards */}
            <div className="flex flex-col gap-4">
              {SECONDARY_SERVICES.slice(2, 6).map((svc, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <ServiceSmallCard svc={svc} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Linha extra — 2 especialidades adicionais */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {SECONDARY_SERVICES.slice(6).map((svc, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <ServiceSmallCard svc={svc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECÇÃO 3: PORQUÊ ESCOLHER-NOS — barra 4 blocos ── */}
      <section className="py-16 bg-[#F7FAFC] border-t border-[#E2ECF4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 bg-[#E8F6FC] rounded-2xl flex items-center justify-center text-[#1C9FD6] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#0D1E2C] text-base mb-1.5">{item.title}</h3>
                  <p className="text-[#5E7387] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGUROS ── */}
      <section className="py-14 bg-white border-t border-[#D5E4EE]" id="contacto">
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

/* ─── Sub-componente: card pequeno de serviço ── */
function ServiceSmallCard({ svc }: { svc: { title: string; desc: string; icon: React.ReactNode } }) {
  return (
    <div className="group bg-white border border-[#EEF4F8] rounded-[16px] p-6 hover:border-[#1C9FD6]/30 hover:shadow-[0_8px_32px_rgba(28,159,214,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-3">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#E8F6FC] flex items-center justify-center text-[#1C9FD6] flex-shrink-0 group-hover:bg-[#1C9FD6] group-hover:text-white transition-colors duration-300">
          {svc.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0D1E2C] text-sm mb-1">{svc.title}</h3>
          <p className="text-[#5E7387] text-xs leading-relaxed">{svc.desc}</p>
        </div>
      </div>
      <a href="#contacto" className="inline-flex items-center gap-1.5 text-[#1C9FD6] text-xs font-semibold hover:gap-2.5 transition-all duration-200 ml-14">
        Saber mais <ArrowRight size={12} />
      </a>
    </div>
  );
}
