import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Users, Star, CheckCircle, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós — História, Equipa e Valores",
  description:
    "Conheça a Clínica Dentária Cariense: fundada em 2003, com 20+ anos de excelência em saúde oral no interior de Portugal. Equipa multidisciplinar em 3 clínicas — Caria, Unhais da Serra e Peso.",
  openGraph: {
    title: "Sobre a Clínica Dentária Cariense | História e Equipa",
    description:
      "20+ anos a transformar sorrisos no interior de Portugal. Conheça a nossa história, valores e equipa de especialistas.",
    images: [{ url: "/img/clinic-reception.png", width: 1200, height: 630, alt: "Clínica Dentária Cariense" }],
  },
  alternates: { canonical: "https://www.clinicacariense.pt/sobre" },
};

import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import HistoryTimeline from "@/components/HistoryTimeline";
import { TEAM_MEMBERS } from "@/lib/constants";

const VALUES = [
  {
    icon: <Heart size={22} className="text-[#1C9FD6]" />,
    title: "Humanismo",
    desc: "Cada paciente é tratado com empatia, respeito e atenção individualizada. O ser humano está sempre em primeiro lugar.",
  },
  {
    icon: <Award size={22} className="text-[#1C9FD6]" />,
    title: "Excelência",
    desc: "Comprometemo-nos com os mais altos padrões de qualidade clínica, utilizando tecnologia e formação contínua.",
  },
  {
    icon: <Users size={22} className="text-[#1C9FD6]" />,
    title: "Proximidade",
    desc: "Estamos presentes em três localidades para garantir que ninguém fica sem acesso a cuidados de qualidade.",
  },
];

const STATS = [
  { target: 20, suffix: "+", label: "Anos de\nExperiência" },
  { target: 12000, suffix: "+", label: "Pacientes\nAtivos" },
  { target: 12, suffix: "+", label: "Espe-\ncialidades" },
  { target: 3, suffix: "", label: "Clínicas" },
];

export default function SobrePage() {
  return (
    <>
      {/* ── HERO — split: text left / full-bleed photo right ── */}
      <section className="relative min-h-[100svh] bg-[#0D1E2C] flex flex-col md:flex-row overflow-hidden">

        {/* LEFT — text panel */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-0 md:w-[52%] flex-shrink-0">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#1C9FD6]" />
            <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.25em]">Sobre Nós</span>
          </div>

          {/* Headline — Bricolage Grotesque, very large */}
          <h1 className="font-display font-extrabold text-white leading-[1.0] mb-7" style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}>
            Uma clínica.<br />
            Uma família.<br />
            <span
              className="italic font-light"
              style={{ color: "#1C9FD6", fontSize: "clamp(2.2rem, 4.8vw, 4.4rem)" }}
            >
              Três gerações.
            </span>
          </h1>

          <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">
            Fundada em 2003, a Clínica Dentária Cariense é hoje uma referência
            regional em saúde oral — três unidades, uma equipa de especialistas
            e mais de doze mil pacientes satisfeitos.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 border-t border-white/10 pt-8">
            {STATS.map(({ target, suffix, label }, i) => (
              <div key={i}>
                <div className="font-display font-extrabold text-white text-2xl md:text-3xl leading-none">
                  <Counter target={target} suffix={suffix} />
                </div>
                <div className="text-white/40 text-xs mt-1 leading-tight whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/contactos"
            className="inline-flex items-center gap-2 bg-[#1C9FD6] hover:bg-[#0D84B8] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 self-start"
          >
            Marcar consulta <ArrowRight size={15} />
          </a>
        </div>

        {/* RIGHT — photo, fills remaining space */}
        <div className="relative flex-1 min-h-[50vw] md:min-h-0">
          <Image
            src="/img/clinic-reception.png"
            alt="Recepção Clínica Dentária Cariense"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Left-edge fade to navy so it blends with text panel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0D1E2C 0%, rgba(13,30,44,0.3) 30%, transparent 60%)",
            }}
          />
          {/* Bottom fade on mobile */}
          <div
            className="absolute inset-0 pointer-events-none md:hidden"
            style={{ background: "linear-gradient(to top, #0D1E2C 0%, transparent 40%)" }}
          />
        </div>

        {/* Subtle brand-blue ambient glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(28,159,214,0.12) 0%, transparent 70%)" }}
        />
      </section>

      {/* ── MISSION / STORY ── */}
      <section className="py-14 md:py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">A Nossa História</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display font-extrabold text-[#0D1E2C] leading-[1.05] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Nascemos para servir{" "}
              <span className="text-[#1C9FD6] italic font-light">o interior</span>
            </h2>
            <p className="text-[#5E7387] text-sm max-w-lg mx-auto leading-relaxed">
              Fundada em 2003 com a missão de levar cuidados dentários de excelência às
              populações do interior de Portugal. Hoje, com três clínicas e mais de 12.000
              pacientes, somos referência regional em saúde oral.
            </p>
          </ScrollReveal>

          <HistoryTimeline />
        </div>
      </section>

      {/* ── PRÉMIOS & RECONHECIMENTOS ── */}
      <section className="py-24 bg-[#F7FAFC] border-y border-[#D5E4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">Reconhecimento</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display font-extrabold text-[#0D1E2C] mt-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Prémios e Certificações
            </h2>
            <p className="text-[#5E7387] text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              O nosso compromisso com a excelência é reconhecido independentemente — pela qualidade clínica e pela solidez que garantimos.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center max-w-4xl mx-auto">
            {/* SCORING card */}
            <ScrollReveal className="flex-1">
              <div className="bg-white rounded-[24px] border border-[#D5E4EE] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                {/* Imagem completa sem crop */}
                <Image
                  src="/img/scoring.jpeg"
                  alt="Certificado SCORING TOP 5% Melhores PME Portugal 2025"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Botão de download */}
                <div className="px-6 py-4 border-t border-[#EEF4F8] flex items-center justify-between">
                  <span className="text-xs text-[#5E7387] font-medium">6º Ano Consecutivo</span>
                  <a
                    href="/docs/certificado-scoring-top5-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 text-xs text-[#1C9FD6] font-bold hover:underline"
                  >
                    <Download size={12} />
                    Ver certificado
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Rating card */}
            <ScrollReveal className="flex-1" delay={100}>
              <div className="bg-white rounded-[24px] border border-[#D5E4EE] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div
                  className="p-8 flex flex-col items-center text-center"
                  style={{ background: "linear-gradient(135deg, #0D1E2C 0%, #1a3349 60%, #1C9FD6 100%)" }}
                >
                  {/* Selo circular SCORING por baixo do número */}
                  <div className="relative mb-5 flex items-center gap-5">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src="/img/premio.png"
                        alt="Selo SCORING TOP 5%"
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="96px"
                      />
                    </div>
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center shadow-lg border-4 border-[#1C9FD6]/30">
                        <span className="text-[#0D1E2C] font-black text-3xl leading-none">5.0</span>
                        <div className="flex gap-0.5 mt-1">
                          {[0,1,2,3,4].map(i => (
                            <Star key={i} size={8} fill="#F59E0B" className="text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute -inset-2 rounded-full border-2 border-[#1C9FD6]/40 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-1">Google Reviews</div>
                  <h3 className="font-display font-bold text-white text-xl leading-tight">
                    Avaliação Máxima<br />pelos Pacientes
                  </h3>
                  <span className="mt-2 text-[#1C9FD6] text-sm font-semibold">Nota 5 estrelas</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E8F6FC] flex items-center justify-center flex-shrink-0">
                      <Star size={11} className="text-[#1C9FD6]" fill="#1C9FD6" />
                    </div>
                    <p className="text-[#5E7387] text-sm leading-relaxed">
                      Classificação máxima de <strong className="text-[#0D1E2C]">5.0 estrelas no Google</strong>, atribuída pelos nossos pacientes com base nas suas experiências reais.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E8F6FC] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={11} className="text-[#1C9FD6]" />
                    </div>
                    <p className="text-[#5E7387] text-sm leading-relaxed">
                      A melhor prova da nossa qualidade são as palavras dos nossos pacientes — partilhadas espontaneamente e verificadas.
                    </p>
                  </div>
                  <div className="mt-5 pt-5 border-t border-[#EEF4F8] flex items-center justify-between">
                    <span className="text-xs text-[#5E7387] font-medium">Avaliação verificada</span>
                    <span className="text-xs text-[#1C9FD6] font-bold uppercase tracking-wide">google.com</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">Os Nossos Valores</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display font-extrabold text-[#0D1E2C] mt-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              O que nos guia todos os dias
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-[#E8F6FC] rounded-xl flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-display font-bold text-[#0D1E2C] text-lg mb-3">{v.title}</h3>
                  <p className="text-[#5E7387] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">A Nossa Equipa</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display font-extrabold text-[#0D1E2C] mt-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Os especialistas que cuidam de si
            </h2>
            <p className="text-[#5E7387] text-sm mt-3 max-w-lg mx-auto">
              Uma equipa dedicada, com formação de excelência e um só objetivo: o seu bem-estar.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group overflow-hidden rounded-[20px] border border-[#D5E4EE] bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 bg-[#E8F6FC] overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 20vw"
                      className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-display font-bold text-[#0D1E2C] text-sm">{member.name}</div>
                    <div className="text-xs text-[#1C9FD6] font-medium mt-0.5">{member.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC PHOTOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">As Nossas Instalações</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display font-extrabold text-[#0D1E2C] mt-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Espaços modernos,{" "}
              <span className="text-[#1C9FD6] italic font-light">ao seu serviço</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { src: "/img/clinic-office-1.png", label: "Gabinete Clínico" },
              { src: "/img/clinic-reception.png", label: "Receção" },
              { src: "/img/clinic-office-2.png", label: "Sala de Tratamentos" },
            ].map(({ src, label }, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-[20px] aspect-[4/3]">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">{label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10">
        <CtaBanner title="Pronto para conhecer a nossa equipa?" />
      </section>
    </>
  );
}
