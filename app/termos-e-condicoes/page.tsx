import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições de Utilização",
  description:
    "Termos e Condições de Utilização do website da Clínica Dentária Cariense. Regras que regulam o acesso e utilização do website.",
  alternates: { canonical: "https://www.clinicacariense.pt/termos-e-condicoes" },
  robots: { index: false, follow: false },
};

export default function TermosCondicoes() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1C9FD6] mb-3">
            Documentos Legais
          </p>
          <h1 className="font-fraunces text-3xl md:text-4xl font-bold text-[#0D1E2C] mb-4">
            Termos e Condições de Utilização
          </h1>
          <p className="text-sm text-[#5E7387]">Última atualização: 24 de março de 2026</p>
          <div className="mt-6 p-5 bg-[#E8F6FC] rounded-2xl border border-[#D5E4EE] text-sm text-[#2A3A4A] space-y-1">
            <p><strong>Entidade responsável:</strong> Clínica Dentária Cariense (NIF: 504 420 470)</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-[#2A3A4A]">

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              1. Objeto e Aceitação
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O presente documento estabelece as regras que regulam o acesso e utilização do website da Clínica Dentária Cariense. Ao navegar no website, o utilizador aceita integralmente os presentes Termos e Condições. Caso não concorde, deverá cessar imediatamente a utilização do mesmo.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              2. Finalidade do Website e Serviços Médicos
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A] mb-4">
              O website tem como finalidade informar sobre tratamentos dentários e facilitar o contacto com a clínica:
            </p>
            <div className="space-y-4">
              <div className="p-4 border border-[#D5E4EE] rounded-xl">
                <h3 className="text-sm font-semibold text-[#0D1E2C] mb-1.5">Informação Geral</h3>
                <p className="text-sm leading-relaxed text-[#3A4A5A]">
                  Os conteúdos disponibilizados têm caráter estritamente informativo. Em caso algum substituem um diagnóstico, consulta ou aconselhamento médico-dentário presencial por um profissional qualificado.
                </p>
              </div>
              <div className="p-4 border border-[#D5E4EE] rounded-xl">
                <h3 className="text-sm font-semibold text-[#0D1E2C] mb-1.5">Processo de Agendamento</h3>
                <p className="text-sm leading-relaxed text-[#3A4A5A]">
                  O preenchimento e submissão do formulário online constitui apenas um pedido de pré-agendamento. A consulta médica só se considera oficializada após confirmação telefónica ou por e-mail por parte da nossa equipa administrativa.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              3. Propriedade Intelectual
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              Todo o conteúdo presente no website (incluindo textos, logótipos, fotografias clínicas, gráficos e código) é propriedade da Clínica Dentária Cariense ou dos seus respetivos licenciadores. É expressamente proibida a cópia, reprodução, modificação ou distribuição destes conteúdos para fins comerciais ou públicos sem autorização prévia por escrito.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              4. Responsabilidade do Utilizador
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O utilizador compromete-se a fornecer dados verdadeiros no formulário de contacto e a não utilizar o website para fins ilícitos, envio de spam, introdução de vírus ou qualquer ação que possa comprometer os sistemas informáticos da Clínica ou das suas plataformas de alojamento.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              5. Ligações Externas e Alojamento
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O website é mantido através dos serviços de infraestrutura e alojamento da Vercel e Hostinger. A Clínica Dentária Cariense não se responsabiliza por eventuais interrupções temporárias de serviço motivadas por falhas técnicas externas, atualizações ou manutenções nos servidores das referidas empresas.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              6. Alterações e Lei Aplicável
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              A Clínica Dentária Cariense reserva-se o direito de alterar estes Termos e Condições a qualquer momento. Os presentes Termos regem-se pela legislação portuguesa. Em caso de litígio, o foro competente é o da comarca local em Portugal, com expressa renúncia a qualquer outro.
            </p>
          </article>

        </div>

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-[#D5E4EE]">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#1C9FD6] font-medium hover:underline"
          >
            ← Voltar ao início
          </a>
        </div>

      </div>
    </section>
  );
}
