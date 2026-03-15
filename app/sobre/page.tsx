import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós — História, Equipa e Valores",
  description:
    "Conheça a Clínica Dentária Cariense: fundada em 2003, com 20+ anos de excelência em saúde oral no interior de Portugal. Equipa multidisciplinar em 3 clínicas — Caria, Unhais da Serra e Peso.",
  openGraph: {
    title: "Sobre a Clínica Dentária Cariense | História e Equipa",
    description:
      "20+ anos a transformar sorrisos no interior de Portugal. Conheça a nossa história, valores e equipa de especialistas.",
    images: [{ url: "/img/clinic-caria.jpg", width: 1200, height: 630, alt: "Clínica Dentária Cariense" }],
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
      {/* ── PAGE HERO ── */}
      <section className="relative bg-[#0D1E2C] py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, rgba(28,159,214,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTag light>Sobre Nós</SectionTag>
            <h1 className="font-['DM Serif Display',serif] text-5xl md:text-6xl font-bold text-white mt-5 mb-6 leading-tight">
              Vinte anos<br />
              <span className="text-[#1C9FD6] italic">a cuidar de si</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Fundada em 2003, a Clínica Dentária Cariense é hoje uma referência regional em saúde oral — com três unidades, uma equipa de especialistas e milhares de pacientes satisfeitos.
            </p>
          </div>
          <div className="relative h-72 lg:h-96 rounded-[24px] overflow-hidden shadow-2xl">
            <Image src="/img/clinic-caria.jpg" alt="Clínica Caria" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1C9FD6] py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 20, suffix: "+", label: "Anos de Experiência" },
            { target: 2000, suffix: "+", label: "Pacientes Activos" },
            { target: 10, suffix: "+", label: "Especialidades" },
            { target: 3, suffix: "", label: "Clínicas" },
          ].map(({ target, suffix, label }, i) => (
            <div key={i}>
              <div className="font-['DM Serif Display',serif] text-4xl font-bold text-white mb-1">
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
              Fundada em 2003 com a missão de levar cuidados dentários de excelência às populações do interior de Portugal. Hoje, com três clínicas e mais de 12.000 pacientes, somos referência regional em saúde oral.
            </p>
          </ScrollReveal>

          <HistoryTimeline />
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Os Nossos Valores</SectionTag>
            <h2 className="font-['DM Serif Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              O que nos guia todos os dias
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="value-card bg-white border border-[#D5E4EE] rounded-[20px] p-8">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>A Nossa Equipa</SectionTag>
            <h2 className="font-['DM Serif Display',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Os especialistas que cuidam de si
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group overflow-hidden rounded-[20px] border border-[#D5E4EE] bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 bg-[#E8F6FC] overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-[#0D1E2C]">{member.name}</div>
                    <div className="text-sm text-[#1C9FD6] font-medium mt-0.5">{member.role}</div>
                  </div>
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
