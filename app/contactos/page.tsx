import { Mail, Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import ContactForm from "@/components/ContactForm";
import LocationSwitcher from "@/components/LocationSwitcher";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";

const QUICK_CONTACTS = [
  {
    icon: <Phone size={22} className="text-[#1C9FD6]" />,
    title: "Telefone",
    lines: ["275 471 751 (Caria)", "275 971 342 (Unhais)", "275 954 182 (Peso)"],
    action: { label: "Ligar agora", href: "tel:275471751" },
  },
  {
    icon: <Mail size={22} className="text-[#1C9FD6]" />,
    title: "E-mail",
    lines: ["geral@clinicacariense.pt", "Respondemos em 24h úteis"],
    action: { label: "Enviar e-mail", href: "mailto:geral@clinicacariense.pt" },
  },
  {
    icon: <MessageCircle size={22} className="text-[#1C9FD6]" />,
    title: "WhatsApp",
    lines: ["927 402 729", "Disponível em horário laboral"],
    action: { label: "Enviar mensagem", href: "https://wa.me/351927402729" },
  },
];

export default function ContactosPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-[#0D1E2C] py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(28,159,214,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <SectionTag light centered>Contactos</SectionTag>
          <h1 className="font-['Fraunces',serif] text-5xl md:text-6xl font-bold text-white mt-5 mb-6">
            Fale connosco,<br />
            <span className="text-[#1C9FD6]">estamos aqui para si</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Marque a sua consulta, tire as suas dúvidas ou simplesmente venha conhecer-nos. Temos três clínicas ao seu serviço.
          </p>
        </div>
      </section>

      {/* ── QUICK CONTACTS ── */}
      <section className="py-16 bg-white border-b border-[#D5E4EE]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-5">
          {QUICK_CONTACTS.map((c, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-7 bg-[#F7FAFC] rounded-[20px] border border-[#D5E4EE] h-full">
                <div className="w-12 h-12 bg-[#E8F6FC] rounded-xl flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-bold text-[#0D1E2C] mb-2">{c.title}</h3>
                {c.lines.map((line, j) => (
                  <p key={j} className="text-[#5E7387] text-sm">{line}</p>
                ))}
                <a
                  href={c.action.href}
                  className="mt-4 inline-block text-[#1C9FD6] text-sm font-semibold hover:underline"
                >
                  {c.action.label}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <SectionTag>Marcar Consulta</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4 mb-4">
              Envie-nos uma mensagem
            </h2>
            <p className="text-[#5E7387] max-w-lg mx-auto">
              Preencha o formulário e a nossa equipa entrará em contacto consigo no prazo de 24 horas úteis para confirmar a sua consulta.
            </p>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── LOCATIONS / MAP ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-12">
            <SectionTag>As Nossas Clínicas</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              Onde nos encontrar
            </h2>
          </ScrollReveal>
          <LocationSwitcher />
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

      {/* ── CTA ── */}
      <section className="py-10">
        <CtaBanner title="Não espere mais, marque já a sua consulta!" />
      </section>
    </>
  );
}
