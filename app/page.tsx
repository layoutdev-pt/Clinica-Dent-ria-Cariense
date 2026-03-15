import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star, MapPin, CheckCircle, ChevronDown, Award, Shield, Search, Users, ThumbsUp, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import PatientTimeline from "@/components/PatientTimeline";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import ClinicCards from "@/components/ClinicCards";
import { TEAM_MEMBERS } from "@/lib/constants";

/* ─── Data ─────────────────────────────────────────────────── */

const DENTAL_SPECIALTIES = [
  {
    title: "Implantologia",
    desc: "A solução definitiva para dentes perdidos com resultado permanente e natural.",
    img: "/img/service-implant.png",
  },
  {
    title: "Ortodontia",
    desc: "Alinhamento dentário para todas as idades com aparelhos fixos ou alinhadores invisíveis.",
    img: "/img/service-ortho.png",
  },
  {
    title: "Branqueamento",
    desc: "Clareamento profissional seguro — até 8 tons mais claros em consultório ou domiciliar.",
    img: "/img/service-whitening.png",
  },
  {
    title: "Cirurgia Oral",
    desc: "Extracções, sisos e biópsias com máximo conforto e sedação consciente disponível.",
    img: "/img/service-surgery.png",
  },
  {
    title: "Endodontia",
    desc: "Tratamento de canais moderno e indolor. Salva o dente natural com instrumentação rotatória.",
    img: "/img/service-endo.png",
  },
  {
    title: "Odontopediatria",
    desc: "Cuidados especializados para crianças num ambiente acolhedor e sem ansiedade.",
    img: "/img/service-kids.png",
  },
];

const MEDICAL_SPECIALTIES = [
  {
    title: "Cirurgia Oral",
    items: ["Extrações de sisos", "Tratamento de lesões"],
  },
  {
    title: "Dentisteria",
    items: ["Tratamento de cáries", "Preservação do dente"],
  },
  {
    title: "Endodontia",
    items: ["Desvitalizações sem dor", "Tratamento de canais"],
  },
  {
    title: "Odontopediatria",
    items: ["Saúde oral infantil", "Prevenção de cáries"],
  },
];

const VALUES = [
  "Cuidar de cada paciente com empatia e dedicação.",
  "Manter a transparência e a confiança em todos os diagnósticos.",
  "Garantir a máxima qualidade e rigor profissional.",
  "Respeitar a dignidade e a individualidade de quem nos procura.",
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — width-constrained card matching navbar
      ══════════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <section className="relative w-full overflow-hidden rounded-[20px]" style={{ aspectRatio: "16/8", minHeight: "480px", maxHeight: "780px" }}>
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
            autoPlay muted loop playsInline preload="auto"
            poster="/img/hero-still.png"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1E2C]/80 via-[#0D1E2C]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/50 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center pb-16">
            <div className="px-10 md:px-16 w-full">
              <div className="max-w-[500px]">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#1C9FD6] opacity-75" />
                    <span className="relative rounded-full h-1.5 w-1.5 bg-[#1C9FD6]" />
                  </span>
                  <span className="text-white/90 text-[11px] font-semibold tracking-[0.15em] uppercase">+12.000 pacientes satisfeitos</span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.04] mb-5 tracking-tight">
                  <span className="word-animate" style={{ animationDelay: "0ms" }}>O sorriso</span>{" "}
                  <span className="word-animate" style={{ animationDelay: "70ms" }}>que</span>
                  <br />
                  <span className="word-animate text-[#1C9FD6] italic" style={{ animationDelay: "140ms" }}>merece</span>{" "}
                  <span className="word-animate text-[#1C9FD6] italic" style={{ animationDelay: "210ms" }}>cuidado</span>
                </h1>

                <p className="text-white/65 text-base leading-[1.7] mb-8 max-w-[380px]" style={{ animation: "wordSlideUp 0.75s 0.35s both" }}>
                  28 anos a transformar sorrisos em Portugal. Tecnologia de ponta, equipa especializada.
                </p>

                <div className="flex flex-wrap gap-3" style={{ animation: "wordSlideUp 0.75s 0.5s both" }}>
                  <Link
                    href="/contactos"
                    className="btn-shimmer inline-flex items-center gap-2.5 bg-[#1C9FD6] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0D7DB5] hover:-translate-y-1 shadow-[0_4px_24px_rgba(28,159,214,0.5)] hover:shadow-[0_8px_40px_rgba(28,159,214,0.65)] transition-all duration-200"
                  >
                    Agendar Consulta <ArrowRight size={15} />
                  </Link>
                  <a
                    href="tel:275471751"
                    className="btn-shimmer inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-200"
                  >
                    <Phone size={14} /> 275 471 751
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── MARQUEE INSIDE HERO BOTTOM ── */}
          <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden bg-white/10 backdrop-blur-md border-t border-white/10 py-3.5">
            <div className="animate-marquee flex gap-10 whitespace-nowrap">
              {[...Array(4)].flatMap(() => [
                { label: "Profissionais Experientes", icon: <Award size={13} className="text-white" /> },
                { label: "Tecnologia e Segurança", icon: <Shield size={13} className="text-white" /> },
                { label: "Check-up e Diagnóstico", icon: <Search size={13} className="text-white" /> },
                { label: "Atendimento Humanizado", icon: <Users size={13} className="text-white" /> },
                { label: "Ortodontia", icon: <Stethoscope size={13} className="text-white" /> },
                { label: "Implantologia", icon: <ThumbsUp size={13} className="text-white" /> },
              ]).map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-white text-[11px] font-semibold tracking-[0.12em] uppercase">
                  <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">{item.icon}</span>
                  {item.label}
                  <span className="w-1 h-1 rounded-full bg-white/30 ml-4" />
                </span>
              ))}
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-16 right-8 hidden md:flex flex-col items-center gap-1.5">
            <div className="animate-scroll-bounce text-white/40"><ChevronDown size={18} /></div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════
          STATS + GOOGLE RATING — white bg
      ══════════════════════════════════════════ */}
      <section className="bg-white py-14 border-b border-[#EEF4F8]">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 lg:justify-between">

            {/* Google rating */}
            <div className="flex items-center gap-5 lg:w-72 flex-shrink-0">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.6 24.5c0-1.5-.1-2.9-.4-4.3H24v8.1h11.1a9.6 9.6 0 01-4.1 6.3v5.2h6.6c3.9-3.6 6-8.8 6-15.3z" fill="#4285F4"/>
                  <path d="M24 44c5.5 0 10.2-1.8 13.6-5l-6.6-5.2c-1.8 1.2-4.2 2-7 2-5.4 0-9.9-3.6-11.5-8.5H5.6v5.4C9 39.1 16 44 24 44z" fill="#34A853"/>
                  <path d="M12.5 27.3A12 12 0 0111.9 24c0-1.2.2-2.3.5-3.3v-5.4H5.6A20 20 0 004 24c0 3.2.8 6.3 2.2 9l5.7-4.4.6-1.3z" fill="#FBBC05"/>
                  <path d="M24 11.5c3 0 5.7 1 7.8 3l5.8-5.8C33.8 5.5 29.3 4 24 4 16 4 9 8.9 5.6 15.3l6.9 5.4c1.6-4.9 6.1-8.5 11.5-8.5z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#5E7387] font-medium mb-1">Avaliação do Google</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-[#0D1E2C] font-display leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#1C9FD6] fill-[#1C9FD6]" />)}
                  </div>
                </div>
                <a href="#" className="text-xs text-[#5E7387] hover:text-[#1C9FD6] transition-colors underline-reveal">
                  Consulte todas as nossas avaliações.
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-16 bg-[#EEF4F8]" />

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-12 flex-1 lg:pl-12">
              {[
                { target: 12, suffix: "K+", label: "Sorrisos Cuidados" },
                { target: 98, suffix: "%", label: "Taxa de recomendação" },
                { target: 28, suffix: "+", label: "Anos de experiência" },
              ].map(({ target, suffix, label }, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] leading-none mb-2">
                    <Counter target={target} suffix={suffix} />
                  </div>
                  <div className="text-sm text-[#5E7387]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT (QUEM SOMOS) — light blue bg
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#EBF6FC]">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image with badge */}
            <ScrollReveal variant="slide-left">
              <div className="relative h-[480px]">
                {/* Main image — full rounded */}
                <div className="w-full h-full rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(13,30,44,0.14)]" style={{ borderRadius: 28 }}>
                  <Image
                    src="/img/about-1.png"
                    alt="Clínica Dentária Cariense"
                    fill
                    className="object-cover rounded-[28px]"
                    sizes="45vw"
                  />
                </div>

                {/* Circular spinning badge widget */}
                <div className="absolute -bottom-5 -right-5 w-[110px] h-[110px] bg-white rounded-full shadow-[0_8px_40px_rgba(13,30,44,0.15)] flex items-center justify-center z-10">
                  {/* Rotating text ring */}
                  <svg viewBox="0 0 110 110" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
                    <defs>
                      <path id="circlePath" d="M 55,55 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text fontSize="9.5" fontWeight="600" letterSpacing="3.2" fill="#1C9FD6" fontFamily="Instrument Sans, sans-serif">
                      <textPath href="#circlePath">ANOS DE EXPERIÊNCIA • ANOS DE EXPERIÊNCIA •</textPath>
                    </text>
                  </svg>
                  {/* Center number */}
                  <div className="text-center z-10">
                    <div className="font-display text-[1.6rem] font-bold text-[#0D1E2C] leading-none">28+</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={120} variant="slide-right">
              <div className="inline-block text-xs font-bold text-[#5E7387] uppercase tracking-[0.15em] bg-white px-4 py-1.5 rounded-full mb-5 badge-pop">
                Quem Somos ?
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] leading-[1.06] mb-5">
                Saúde de <span className="text-[#1C9FD6]">Confiança</span>
              </h2>
              <p className="text-[#5E7387] leading-[1.85] mb-8 text-[0.975rem]">
                Acreditamos que cada paciente é único. Por isso, o nosso compromisso vai além do tratamento clínico, assegurando cuidados de saúde integral que respondem às necessidades de toda a família. Estamos presentes em Caria, no Peso e em Unhais da Serra, facilitando o acesso a tratamentos de excelência em toda a nossa região.
              </p>
              <ul className="space-y-3.5 mb-10">
                {VALUES.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2A3A4A]">
                    <CheckCircle size={16} className="text-[#1C9FD6] flex-shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
              <Link
                href="/sobre"
                className="btn-shimmer inline-flex items-center gap-2 bg-[#0D1E2C] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#1A3347] transition-all duration-200 hover:-translate-y-1"
              >
                Conheça a Nossa História
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVIÇOS — layout assimétrico CTA + 2×2
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[340px_1fr] gap-5 items-stretch">

            {/* LEFT — CTA card */}
            <ScrollReveal variant="slide-left">
              <div
                className="relative rounded-[24px] overflow-hidden h-full min-h-[520px] flex flex-col p-8"
                style={{ background: "linear-gradient(160deg, #1289BE 0%, #1C9FD6 50%, #0D84B8 100%)" }}
              >
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                {/* Glow */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/15 blur-[60px] pointer-events-none" />

                {/* Text top */}
                <div className="relative z-10">
                  <h2 className="font-display text-[1.55rem] font-bold text-white leading-[1.2] mb-3">
                    Marque a sua consulta<br />
                    <span className="text-white/80 font-normal italic">diretamente pelo telemóvel</span>
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Resposta garantida em menos de 24h. Sem esperas — a sua saúde oral começa aqui.
                  </p>
                </div>

                {/* Image — absolute, bottom-anchored, behind buttons */}
                <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-center" style={{ top: "180px" }}>
                  <Image
                    src="/img/asertyuior.png"
                    alt="Clínica Dentária Cariense"
                    fill
                    className="object-contain object-bottom"
                    sizes="340px"
                  />
                </div>

                {/* Button */}
                <div className="relative z-10 mt-auto">
                  <Link
                    href="/contactos"
                    className="btn-shimmer flex items-center justify-center gap-2 bg-white text-[#1C9FD6] font-bold text-sm px-6 py-3 rounded-full hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Agendar Consulta <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — 2×2 grid + link */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3 flex-1">
                {[
                  {
                    title: "Implantologia",
                    desc: "Substituição definitiva de dentes perdidos com implantes de titânio de aspeto natural.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.8"/>
                        <path d="M12 9v9M10 14h4M9 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Ortodontia",
                    desc: "Alinhamento dentário para todas as idades com aparelhos fixos ou alinhadores invisíveis.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <rect x="4" y="8" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                        <rect x="10" y="6" width="4" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                        <rect x="16" y="8" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                        <path d="M8 12h2M16 12h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Estética Dentária",
                    desc: "Facetas, branqueamento e design do sorriso para uma transformação natural e duradoura.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <path d="M12 3l1.5 4h4l-3.3 2.4 1.3 4L12 11l-3.5 2.4 1.3-4L6.5 7h4L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                        <path d="M12 14v5M9.5 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Odontopediatria",
                    desc: "Cuidados especializados para os mais pequenos num ambiente acolhedor e sem ansiedade.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
                        <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <circle cx="10.5" cy="9" r="0.8" fill="currentColor"/>
                        <circle cx="13.5" cy="9" r="0.8" fill="currentColor"/>
                      </svg>
                    ),
                  },
                ].map((svc, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="group bg-white rounded-[20px] p-6 border border-[#EEF4F8] hover:border-[#1C9FD6]/20 hover:shadow-[0_12px_40px_rgba(28,159,214,0.1)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 bg-[#E8F6FC] text-[#1C9FD6]">
                        {svc.icon}
                      </div>
                      <h3 className="font-bold text-[#0D1E2C] text-[1rem] mb-2">{svc.title}</h3>
                      <p className="text-[#5E7387] text-sm leading-relaxed flex-1">{svc.desc}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#1C9FD6]">
                        Saber mais <ArrowRight size={12} />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              {/* Ver todos link */}
              <div className="text-right pt-1">
                <Link href="/servicos" className="inline-flex items-center gap-1.5 text-[#1C9FD6] font-semibold text-sm hover:gap-3 transition-all duration-200">
                  Ver todos os serviços <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PatientTimeline />

      {/* ══════════════════════════════════════════
          TEAM — mosaic layout
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] mb-2">
              Conheça a nossa{" "}
              <span className="text-[#1C9FD6] italic">equipa dedicada</span>
            </h2>
            <p className="text-[#5E7387] mt-3 max-w-md mx-auto">
              Profissionais especializados, comprometidos com o seu bem-estar e o seu sorriso.
            </p>
          </ScrollReveal>

          {/* Mosaic grid — large left + right column with photo + CTA */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-3" style={{ height: "580px" }}>

            {/* LEFT — featured photo, explicit height */}
            <div className="group relative rounded-[24px] overflow-hidden bg-[#0D1E2C]" style={{ height: "580px" }}>
              <Image
                src={TEAM_MEMBERS[0].img}
                alt={TEAM_MEMBERS[0].name}
                fill
                sizes="(max-width:768px) 100vw, 55vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-white font-bold text-xl leading-snug">{TEAM_MEMBERS[0].name}</div>
                <div className="text-[#1C9FD6] text-sm font-medium mt-1">{TEAM_MEMBERS[0].role}</div>
              </div>
            </div>

            {/* RIGHT column — top photo + bottom CTA */}
            <div className="flex flex-col gap-3" style={{ height: "580px" }}>

              {/* Top — second team member, 60% height */}
              <div className="group relative rounded-[20px] overflow-hidden bg-[#0D1E2C]" style={{ height: "340px" }}>
                <Image
                  src={TEAM_MEMBERS[1].img}
                  alt={TEAM_MEMBERS[1].name}
                  fill
                  sizes="(max-width:768px) 100vw, 30vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2C]/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-bold text-sm leading-snug">{TEAM_MEMBERS[1].name}</div>
                  <div className="text-[#1C9FD6] text-xs font-medium mt-0.5">{TEAM_MEMBERS[1].role}</div>
                </div>
              </div>

              {/* Bottom — CTA card */}
              <Link
                href="/sobre"
                className="group relative flex flex-col justify-between rounded-[20px] overflow-hidden p-7 flex-1"
                style={{ background: "linear-gradient(160deg, #1289BE 0%, #1C9FD6 50%, #0D84B8 100%)" }}
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/15 blur-[50px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-white/70 text-xs font-bold uppercase tracking-[0.18em] mb-2">A nossa equipa</div>
                  <div className="font-display text-white text-[1.3rem] font-bold leading-[1.2]">
                    Conheça todos os<br />
                    <span className="text-white/80 font-normal italic">nossos especialistas</span>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-white/70 text-xs">6 profissionais dedicados</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <ArrowRight size={16} className="text-[#1C9FD6]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <ScrollReveal className="mb-12">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] leading-[1.08]">
                  O que dizem os<br />
                  <span className="text-[#1C9FD6] italic">nossos pacientes</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 bg-[#F7FAFC] border border-[#EEF4F8] rounded-2xl px-5 py-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#1C9FD6] fill-[#1C9FD6]" />)}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-[#0D1E2C]">5.0</span>
                  <span className="text-[#5E7387] ml-1.5 text-xs">· +100 avaliações Google</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT / LOCATIONS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-[1100px] mx-auto px-8 md:px-16">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
              <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">Onde Estamos</span>
              <span className="w-8 h-px bg-[#1C9FD6]/40" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C] mb-4">
              Estamos perto de si
            </h2>
            <p className="text-[#5E7387] max-w-md mx-auto">
              Três clínicas para melhor servir os nossos pacientes.
            </p>
          </ScrollReveal>

          {/* Locations + Form grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-stretch">

            {/* LEFT — clinic cards + map */}
            <ClinicCards />

            {/* RIGHT — contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[720px] mx-auto px-8 md:px-16">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1E2C]">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>
          <FaqAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <div className="py-12 px-8 md:px-16 bg-[#F7FAFC]">
        <CtaBanner />
      </div>
    </>
  );
}
