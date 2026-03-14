import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star, MapPin, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import SectionTag from "@/components/SectionTag";
import ContactForm from "@/components/ContactForm";
import { TEAM_MEMBERS } from "@/lib/constants";

const SERVICES = [
  { title: "Implantologia", desc: "Substituição permanente de dentes perdidos com implantes de titânio de alta qualidade.", icon: "🦷" },
  { title: "Ortodontia", desc: "Correção do alinhamento dentário com aparelhos fixos, removíveis ou invisíveis.", icon: "😁" },
  { title: "Branqueamento", desc: "Clareamento profissional para um sorriso mais branco e luminoso.", icon: "✨" },
  { title: "Cirurgia Oral", desc: "Extracções, cirurgias de terceiros molares e outros procedimentos cirúrgicos.", icon: "🔬" },
  { title: "Endodontia", desc: "Tratamento de canais para salvar dentes com infeção ou necrose pulpar.", icon: "💉" },
  { title: "Odontopediatria", desc: "Cuidados dentários especializados para os mais novos, num ambiente amigo.", icon: "👶" },
];

const SPECIALTIES = [
  "Prótese Fixa e Removível",
  "Estética Dentária",
  "Periodontologia",
  "Reabilitação Oral",
  "Medicina Oral",
  "Dentisteria Conservadora",
];

const MARQUEE_ITEMS = [
  "Implantologia",
  "Ortodontia",
  "Branqueamento",
  "Cirurgia Oral",
  "Endodontia",
  "Odontopediatria",
  "Estética Dentária",
  "Periodontologia",
  "Reabilitação Oral",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1E2C]/90 via-[#0D1E2C]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-white text-xs font-semibold tracking-wide">+2000 Pacientes Satisfeitos</span>
            </div>
            <h1 className="font-['Fraunces',serif] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              O seu sorriso,<br />
              <span className="text-[#1C9FD6]">a nossa missão</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-md">
              Mais de 20 anos de excelência em saúde oral. Três clínicas ao seu serviço em Caria, Unhais da Serra e Peso.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 bg-[#1C9FD6] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0D7DB5] hover:-translate-y-px shadow-[0_4px_20px_rgba(28,159,214,0.5)] transition-all duration-200"
              >
                Agendar Consulta <ArrowRight size={16} />
              </Link>
              <a
                href="tel:275471751"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all duration-200"
              >
                <Phone size={16} /> 275 471 751
              </a>
            </div>
          </div>
        </div>

        {/* Floating card: Google badge */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-2xl">
          <div className="w-10 h-10 rounded-full bg-[#E8F6FC] flex items-center justify-center flex-shrink-0">
            <Star size={18} className="text-amber-400 fill-amber-400" />
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs font-bold text-[#0D1E2C]">5.0 no Google</div>
            <div className="text-xs text-[#5E7387]">+100 avaliações</div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="bg-[#1C9FD6] py-3.5 overflow-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-white text-sm font-semibold tracking-widest uppercase flex items-center gap-3">
              {item} <span className="opacity-50 text-lg">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section className="bg-[#0D1E2C] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { target: 20, suffix: "+", label: "Anos de Experiência" },
            { target: 2000, suffix: "+", label: "Pacientes Atendidos" },
            { target: 10, suffix: "+", label: "Especialidades" },
            { target: 3, suffix: "", label: "Clínicas" },
          ].map(({ target, suffix, label }, i) => (
            <div key={i}>
              <div className="font-['Fraunces',serif] text-4xl font-bold text-white mb-1">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-[#5E7387] text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <ScrollReveal>
            <div className="relative h-[500px]">
              <div className="absolute left-0 top-0 w-[68%] h-[80%] rounded-[24px] overflow-hidden shadow-2xl">
                <Image src="/img/clinic-caria.jpg" alt="Clínica" fill className="object-cover" sizes="(max-width:768px) 50vw, 35vw" />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] h-[60%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/img/team-ana.jpg" alt="Equipa" fill className="object-cover" sizes="(max-width:768px) 40vw, 27vw" />
              </div>
              {/* Badge */}
              <div className="absolute left-[60%] top-[36%] bg-[#1C9FD6] text-white rounded-2xl px-5 py-4 shadow-xl z-10 text-center">
                <div className="font-['Fraunces',serif] text-3xl font-bold leading-none">20+</div>
                <div className="text-xs font-semibold opacity-90 mt-1">Anos de<br />Confiança</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={150}>
            <SectionTag>Sobre Nós</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4 mb-6 leading-tight">
              Cuidados de saúde oral de excelência, perto de si
            </h2>
            <p className="text-[#5E7387] leading-relaxed mb-5">
              A Clínica Dentária Cariense nasceu com um propósito claro: oferecer tratamentos dentários de referência a populações que, muitas vezes, têm pouco acesso a cuidados especializados de qualidade.
            </p>
            <p className="text-[#5E7387] leading-relaxed mb-8">
              Com mais de 20 anos de história, a nossa equipa multidisciplinar combina experiência clínica com tecnologia de ponta para garantir os melhores resultados a cada paciente.
            </p>
            <ul className="space-y-3 mb-8">
              {["Equipa multidisciplinar certificada", "Equipamentos de última geração", "Atendimento personalizado e humanizado", "3 clínicas com fácil acesso"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#2A3A4A] font-medium">
                  <CheckCircle size={18} className="text-[#1C9FD6] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-[#1C9FD6] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Conhecer a nossa história <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Os Nossos Serviços</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4 mb-4">
              Especialidades ao seu serviço
            </h2>
            <p className="text-[#5E7387] max-w-xl mx-auto leading-relaxed">
              Mais de 10 especialidades dentárias disponíveis nas nossas clínicas para cuidar de toda a família.
            </p>
          </ScrollReveal>

          {/* Service cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-7 hover:shadow-[0_8px_32px_rgba(13,30,44,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h3 className="font-semibold text-[#0D1E2C] mb-2 text-base">{svc.title}</h3>
                  <p className="text-[#5E7387] text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional specialties */}
          <ScrollReveal>
            <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-7">
              <p className="text-sm font-semibold text-[#5E7387] mb-4 uppercase tracking-widest">Outras especialidades</p>
              <div className="flex flex-wrap gap-2">
                {SPECIALTIES.map((s, i) => (
                  <span key={i} className="inline-block bg-[#E8F6FC] text-[#1C9FD6] text-xs font-semibold px-4 py-2 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 bg-[#0D1E2C] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1C4060] hover:-translate-y-px transition-all duration-200"
            >
              Ver todos os serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <SectionTag>Testemunhos</SectionTag>
            <div className="flex items-end justify-between flex-wrap gap-4 mt-4">
              <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C]">
                O que dizem os nossos pacientes
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#5E7387]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                5.0 · +100 avaliações Google
              </div>
            </div>
          </ScrollReveal>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>A Nossa Equipa</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Profissionais dedicados ao seu sorriso
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="group text-center">
                  <div className="relative aspect-[3/4] rounded-[16px] overflow-hidden mb-3 bg-[#E8F6FC]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm font-bold text-[#0D1E2C]">{member.name}</div>
                  <div className="text-xs text-[#5E7387] mt-0.5 leading-snug">{member.role}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-[#1C9FD6] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Conhecer toda a equipa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT / MAP ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Contactos</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4 mb-4">
              Estamos perto de si
            </h2>
            <p className="text-[#5E7387] max-w-lg mx-auto">
              Três clínicas para melhor servir os nossos pacientes. Escolha a mais conveniente e marque a sua consulta.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ContactForm />

            {/* Locations */}
            <ScrollReveal delay={150} className="space-y-4">
              {[
                { name: "Clínica Caria", address: "Cerca do Conde, Lote 41, Loja B/D, 6250-111", phone: "275 471 751" },
                { name: "Unhais da Serra", address: "Avenida 1º de Maio, 43-A, 6215-517", phone: "275 971 342" },
                { name: "Espaço Saúde do Peso", address: "Rua Santa Maria Madalena, nº10, 6200-622", phone: "275 954 182" },
              ].map((loc, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#F7FAFC] rounded-[16px] border border-[#D5E4EE]">
                  <div className="w-10 h-10 bg-[#E8F6FC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-[#1C9FD6]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D1E2C] text-sm mb-1">{loc.name}</div>
                    <div className="text-[#5E7387] text-xs mb-1">{loc.address}</div>
                    <a href={`tel:${loc.phone.replace(/ /g, "")}`} className="text-[#1C9FD6] text-xs font-semibold hover:underline">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>FAQ</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Perguntas frequentes
            </h2>
          </ScrollReveal>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-10 px-0">
        <CtaBanner />
      </section>
    </>
  );
}
