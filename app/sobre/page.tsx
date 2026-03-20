import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Users, Star, CheckCircle } from "lucide-react";

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
import SectionTag from "@/components/SectionTag";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import HistoryTimeline from "@/components/HistoryTimeline";
import { TEAM_MEMBERS } from "@/lib/constants";

const VALUES = [
  {
    icon: <Heart size={24} className="text-[#1C9FD6]" />,
    title: "Humanismo",
    desc: "Cada paciente é tratado com empatia, respeito e atenção individualizada. O ser humano está sempre em primeiro lugar.",
  },
  {
    icon: <Award size={24} className="text-[#1C9FD6]" />,
    title: "Excelência",
    desc: "Comprometemo-nos com os mais altos padrões de qualidade clínica, utilizando tecnologia e formação contínua.",
  },
  {
    icon: <Users size={24} className="text-[#1C9FD6]" />,
    title: "Proximidade",
    desc: "Estamos presentes em três localidades para garantir que ninguém fica sem acesso a cuidados de qualidade.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* ── PAGE HERO — full-bleed photo with dark overlay ── */}
      <section className="relative h-[85vh] min-h-[560px] max-h-[800px] flex items-center overflow-hidden">
        {/* Background photo */}
        <Image
          src="/img/clinic-reception.png"
          alt="Recepção Clínica Dentária Cariense"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay — left heavy so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(13,30,44,0.92) 0%, rgba(13,30,44,0.75) 50%, rgba(13,30,44,0.35) 100%)",
          }}
        />
        {/* Optional brand-color glow on the right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 50%, rgba(28,159,214,0.18) 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <SectionTag light>Sobre Nós</SectionTag>
            <h1
              className="font-['DM_Serif_Display',serif] text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-5 mb-6 leading-[1.05]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Uma clínica.<br />
              Uma família.<br />
              <span className="text-[#1C9FD6] italic">Três gerações.</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-lg">
              Fundada em 2003, a Clínica Dentária Cariense é hoje uma referência
              regional em saúde oral — com três unidades, uma equipa de
              especialistas e milhares de pacientes satisfeitos.
            </p>
            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["+20 Anos de experiência", "3 Clínicas", "12.000+ Pacientes"].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  <CheckCircle size={14} className="text-[#1C9FD6]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade into white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#1C9FD6] py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 20, suffix: "+", label: "Anos de Experiência" },
            { target: 12000, suffix: "+", label: "Pacientes Activos" },
            { target: 12, suffix: "+", label: "Especialidades" },
            { target: 3, suffix: "", label: "Clínicas" },
          ].map(({ target, suffix, label }, i) => (
            <div key={i}>
              <div className="font-['DM_Serif_Display',serif] text-4xl font-bold text-white mb-1">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-white/80 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION / STORY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">A Nossa História</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] leading-[1.08] mb-4">
              Nascemos para servir<br />
              <span className="text-[#1C9FD6] italic">o interior</span>
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
      <section className="py-20 bg-[#F7FAFC] border-y border-[#D5E4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Reconhecimento</SectionTag>
            <h2 className="font-['DM_Serif_Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Prémios e Certificações
            </h2>
            <p className="text-[#5E7387] text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              O nosso compromisso com a excelência é reconhecido independentemente — pela qualidade clínica e pela solidez que garantimos aos nossos pacientes.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center max-w-4xl mx-auto">
            {/* SCORING TOP 5% Award Card */}
            <ScrollReveal className="flex-1">
              <div className="bg-white rounded-[24px] border border-[#D5E4EE] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Card header with brand gradient */}
                <div
                  className="p-8 flex flex-col items-center text-center"
                  style={{
                    background: "linear-gradient(135deg, #0D1E2C 0%, #1a3349 60%, #1C9FD6 100%)",
                  }}
                >
                  {/* Badge graphic */}
                  <div className="relative mb-5">
                    <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center shadow-lg border-4 border-[#1C9FD6]/30">
                      <span className="text-[#1C9FD6] font-black text-lg leading-none">TOP</span>
                      <span className="text-[#0D1E2C] font-black text-2xl leading-none">5%</span>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#1C9FD6]/40 animate-pulse" />
                  </div>
                  <div className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-1">scoring®</div>
                  <h3 className="text-white font-bold text-xl leading-tight">
                    Melhores PME<br />de Portugal
                  </h3>
                  <span className="mt-2 text-[#1C9FD6] text-sm font-semibold">Certificado 2025</span>
                </div>
                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E8F6FC] flex items-center justify-center flex-shrink-0">
                      <Star size={11} className="text-[#1C9FD6]" fill="#1C9FD6" />
                    </div>
                    <p className="text-[#5E7387] text-sm leading-relaxed">
                      A Clínica Dentária Cariense foi certificada pela SCORING® com um
                      Índice de Desempenho e Solidez Financeira <strong className="text-[#0D1E2C]">"Excelente"</strong>,
                      evidenciando uma sustentabilidade financeira acessível apenas a{" "}
                      <strong className="text-[#0D1E2C]">5% das PME nacionais</strong>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E8F6FC] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={11} className="text-[#1C9FD6]" />
                    </div>
                    <p className="text-[#5E7387] text-sm leading-relaxed">
                      Certificado emitido em 25 de setembro de 2025, com base nas contas anuais IES 2024 e validado por auditoria independente.
                    </p>
                  </div>
                  <div className="mt-5 pt-5 border-t border-[#EEF4F8] flex items-center justify-between">
                    <span className="text-xs text-[#5E7387] font-medium">6º Ano Consecutivo</span>
                    <span className="text-xs text-[#1C9FD6] font-bold uppercase tracking-wide">scoring.pt</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Rating Card */}
            <ScrollReveal className="flex-1" delay={100}>
              <div className="bg-white rounded-[24px] border border-[#D5E4EE] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div
                  className="p-8 flex flex-col items-center text-center"
                  style={{
                    background: "linear-gradient(135deg, #0D1E2C 0%, #1a3349 60%, #1C9FD6 100%)",
                  }}
                >
                  <div className="relative mb-5">
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
                  <div className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-1">Google Reviews</div>
                  <h3 className="text-white font-bold text-xl leading-tight">
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
                      Classificação máxima de <strong className="text-[#0D1E2C]">5.0 estrelas no Google</strong>, atribuída pelos nossos pacientes com base nas suas experiências reais na clínica.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E8F6FC] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={11} className="text-[#1C9FD6]" />
                    </div>
                    <p className="text-[#5E7387] text-sm leading-relaxed">
                      A melhor prova da nossa qualidade são as palavras dos nossos pacientes — partilhadas espontaneamente e verificadas pelo Google.
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
            <SectionTag>Os Nossos Valores</SectionTag>
            <h2 className="font-['DM_Serif_Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              O que nos guia todos os dias
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#E8F6FC] rounded-xl flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-[#0D1E2C] mb-3">{v.title}</h3>
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
            <SectionTag>A Nossa Equipa</SectionTag>
            <h2 className="font-['DM_Serif_Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Os especialistas que cuidam de si
            </h2>
            <p className="text-[#5E7387] text-sm mt-3 max-w-lg mx-auto">
              Uma equipa dedicada, com formação de excelência e um só objetivo: o seu bem-estar.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group overflow-hidden rounded-[20px] border border-[#D5E4EE] bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 bg-[#E8F6FC] overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 20vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-bold text-[#0D1E2C] text-sm">{member.name}</div>
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
            <SectionTag>As Nossas Instalações</SectionTag>
            <h2 className="font-['DM_Serif_Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Espaços modernos,<br />
              <span className="text-[#1C9FD6] italic">ao seu serviço</span>
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
