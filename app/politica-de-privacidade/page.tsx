import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Clínica Dentária Cariense. Saiba como tratamos os seus dados pessoais em conformidade com o RGPD.",
  alternates: { canonical: "https://www.clinicacariense.pt/politica-de-privacidade" },
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidade() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1C9FD6] mb-3">
            Documentos Legais
          </p>
          <h1 className="font-fraunces text-3xl md:text-4xl font-bold text-[#0D1E2C] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[#5E7387]">Última atualização: 24 de março de 2026</p>
          <div className="mt-6 p-5 bg-[#E8F6FC] rounded-2xl border border-[#D5E4EE] text-sm text-[#2A3A4A] space-y-1">
            <p><strong>Entidade responsável:</strong> Clínica Dentária Cariense (NIF: 504 420 470)</p>
            <p><strong>Morada:</strong> Cerca do Conde, Lote 41, Loja B/D, 6250-111 Caria, Portugal</p>
            <p><strong>Contacto:</strong> <a href="mailto:cdcariense@gmail.com" className="text-[#1C9FD6] hover:underline">cdcariense@gmail.com</a> | Tel.: <a href="tel:+351275471751" className="text-[#1C9FD6] hover:underline">275 471 751</a> <span className="text-[#5E7387]">(Chamada para a rede fixa nacional)</span></p>
          </div>
        </div>

        {/* Content */}
        <div className="prose-legal space-y-10 text-[#2A3A4A]">

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              1. Objeto e Aceitação
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O presente documento estabelece a Política de Privacidade do website da Clínica Dentária Cariense. Ao utilizar o nosso website e, em particular, ao preencher o nosso formulário de contacto e pré-agendamento, o utilizador confia-nos os seus dados pessoais. Comprometemo-nos a tratá-los com o máximo rigor, transparência e segurança, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              2. Dados Recolhidos e Finalidade
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A] mb-4">
              O nosso website tem como finalidade disponibilizar informação sobre os nossos serviços e permitir o contacto direto.
            </p>
            <div className="space-y-4">
              <div className="p-4 border border-[#D5E4EE] rounded-xl">
                <h3 className="text-sm font-semibold text-[#0D1E2C] mb-1.5">A. Dados fornecidos pelo utilizador</h3>
                <p className="text-sm leading-relaxed text-[#3A4A5A]">
                  Através do formulário, recolhemos voluntariamente: Nome, Email, Telefone, Localização (clínica de preferência) e Mensagem. Estes dados destinam-se exclusivamente ao processamento do seu pedido de agendamento e resposta a dúvidas.
                </p>
              </div>
              <div className="p-4 border border-[#D5E4EE] rounded-xl">
                <h3 className="text-sm font-semibold text-[#0D1E2C] mb-1.5">B. Dados técnicos recolhidos automaticamente</h3>
                <p className="text-sm leading-relaxed text-[#3A4A5A]">
                  Por motivos de segurança informática, diagnóstico técnico e otimização de desempenho, as nossas infraestruturas de alojamento (Vercel e Hostinger) registam automaticamente dados de acesso padrão, tais como o endereço IP anonimizado, tipo de navegador e data/hora do acesso. Estes dados são estritamente estatísticos e de segurança, não sendo utilizados para identificar perfis pessoais.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              3. Tratamento de Dados Sensíveis (Saúde)
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              Dada a natureza dos nossos serviços, qualquer informação partilhada no campo &ldquo;Mensagem&rdquo; que se refira ao seu estado de saúde, dores ou historial clínico é considerada &ldquo;dado sensível&rdquo;. A Clínica garante que esta informação está protegida por estrito sigilo profissional, sendo reencaminhada de forma segura para o nosso e-mail institucional e acedida apenas pela nossa equipa clínica e administrativa autorizada.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              4. Alojamento e Partilha de Dados
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O website encontra-se desenvolvido em código próprio e alojado através das plataformas Vercel e Hostinger. A Clínica Dentária Cariense garante que <strong>não partilha, não vende e não cede</strong> os seus dados pessoais a terceiros para fins de marketing, publicidade ou quaisquer outros fins comerciais.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              5. Conservação dos Dados
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              Os dados recolhidos serão conservados apenas durante o período necessário para a prestação do serviço solicitado ou enquanto mantiver a qualidade de nosso paciente, cumprindo integralmente os prazos legais de retenção de processos clínicos definidos pela legislação portuguesa.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              6. Direitos do Utilizador
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O utilizador tem o direito legal de solicitar o acesso, retificação, limitação de tratamento ou apagamento dos seus dados pessoais (direito a ser esquecido). Para exercer qualquer um destes direitos, deverá enviar um pedido formal e por escrito para o e-mail:{" "}
              <a href="mailto:cdcariense@gmail.com" className="text-[#1C9FD6] hover:underline font-medium">
                cdcariense@gmail.com
              </a>.
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
