import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import CtaBanner from "@/components/CtaBanner";

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
          <h1 className="font-['Fraunces',serif] text-5xl md:text-6xl font-bold text-white mt-5 mb-6">
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES_FULL.map((svc, i) => (
              <ScrollReveal key={i} delay={(i % 2) * 100}>
                <div className="group bg-white border border-[#D5E4EE] rounded-[20px] p-8 hover:shadow-[0_8px_40px_rgba(13,30,44,0.1)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-4xl">{svc.icon}</div>
                    <div>
                      <div className="inline-block bg-[#E8F6FC] text-[#1C9FD6] text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {svc.highlight}
                      </div>
                      <h2 className="font-bold text-[#0D1E2C] text-xl">{svc.title}</h2>
                    </div>
                  </div>
                  <p className="text-[#5E7387] text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="mt-auto space-y-2">
                    {svc.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-[#2A3A4A]">
                        <CheckCircle size={15} className="text-[#1C9FD6] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <SectionTag>Porquê escolher-nos?</SectionTag>
            <h2 className="font-['Fraunces',serif] text-4xl font-bold text-[#0D1E2C] mt-4">
              A diferença Cariense
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏆", title: "Experiência comprovada", desc: "Mais de 20 anos de prática clínica e milhares de casos tratados com sucesso." },
              { icon: "🔬", title: "Tecnologia de ponta", desc: "Equipamentos digitais de última geração para diagnóstico e tratamento precisos." },
              { icon: "👥", title: "Equipa especializada", desc: "Cada especialidade é exercida por um profissional com formação específica na área." },
              { icon: "📍", title: "3 localizações", desc: "Presente em Caria, Unhais da Serra e Peso para a sua comodidade." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-7 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
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
