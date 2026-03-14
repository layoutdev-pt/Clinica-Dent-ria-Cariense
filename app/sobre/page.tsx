import Image from "next/image";
import { CheckCircle, Award, Heart, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
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

const MILESTONES = [
  { year: "2003", event: "Abertura da primeira clínica em Caria" },
  { year: "2010", event: "Expansão para Unhais da Serra" },
  { year: "2016", event: "Inauguração do Espaço Saúde do Peso" },
  { year: "2020", event: "Renovação tecnológica completa das três clínicas" },
  { year: "2024", event: "Mais de 2000 pacientes activos e reconhecimento regional" },
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
            <h1 className="font-['Fraunces',serif] text-5xl md:text-6xl font-bold text-white mt-5 mb-6 leading-tight">
              Uma clínica,<br />
              <span className="text-[#1C9FD6]">um compromisso</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Há mais de 20 anos a promover saúde oral com excelência, proximidade e humanismo nas comunidades do interior de Portugal.
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
              <div className="font-['Fraunces',serif] text-4xl font-bold text-white mb-1">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-white/80 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION / STORY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <SectionTag>A Nossa História</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4 mb-6">
              Nascemos para servir o interior
            </h2>
            <p className="text-[#5E7387] leading-relaxed mb-5">
              A Clínica Dentária Cariense foi fundada em 2003 com uma visão clara: levar cuidados dentários de excelência às populações do interior de Portugal, que tantas vezes viam-se obrigadas a deslocar-se a grandes centros urbanos para aceder a tratamentos especializados.
            </p>
            <p className="text-[#5E7387] leading-relaxed mb-5">
              Ao longo dos anos, crescemos, expandimos e investimos continuamente em equipamentos de última geração e na formação das nossas equipas. Mas o nosso compromisso fundamental manteve-se: estar perto de si.
            </p>
            <p className="text-[#5E7387] leading-relaxed mb-8">
              Hoje, com três clínicas operacionais e uma equipa de especialistas dedicados, orgulhamo-nos de ser uma referência regional em saúde oral.
            </p>
            <ul className="space-y-3">
              {["Fundada em 2003 em Caria", "Equipa de 6+ especialistas", "Certificações e formação contínua", "Tecnologia digital de última geração"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#2A3A4A] font-medium">
                  <CheckCircle size={18} className="text-[#1C9FD6] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal delay={150}>
            <div className="space-y-0">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#E8F6FC] border-2 border-[#1C9FD6] flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#1C9FD6]" />
                    </div>
                    {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-[#D5E4EE] my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-[#1C9FD6] text-sm font-bold mb-1">{m.year}</div>
                    <div className="text-[#0D1E2C] font-medium text-sm leading-snug">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Os Nossos Valores</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              O que nos guia todos os dias
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-8">
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
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
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
