import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de Cookies da Clínica Dentária Cariense. Saiba que cookies utilizamos e como gerir as suas preferências.",
  alternates: { canonical: "https://www.clinicacariense.pt/politica-de-cookies" },
  robots: { index: false, follow: false },
};

export default function PoliticaCookies() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1C9FD6] mb-3">
            Documentos Legais
          </p>
          <h1 className="font-fraunces text-3xl md:text-4xl font-bold text-[#0D1E2C] mb-4">
            Política de Cookies
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
              1. O que são Cookies?
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              Os &ldquo;cookies&rdquo; são pequenos ficheiros de texto armazenados no seu computador ou dispositivo móvel através do navegador de internet (browser) quando visita um website. Estes ficheiros servem para garantir o correto funcionamento técnico e a segurança da página.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              2. Que Cookies utilizamos?
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A] mb-4">
              O website da Clínica Dentária Cariense foi desenvolvido com uma abordagem rigorosa de respeito pela privacidade, recorrendo exclusivamente a <strong>Cookies Estritamente Necessários (Técnicos)</strong>.
            </p>
            <div className="p-4 border border-[#D5E4EE] rounded-xl space-y-2">
              <p className="text-sm leading-relaxed text-[#3A4A5A]">
                Estes cookies são indispensáveis para que o site funcione de forma segura e responsiva (por exemplo, para proteger a sessão de navegação e permitir o envio seguro do formulário de contacto).
              </p>
              <p className="text-sm leading-relaxed text-[#3A4A5A]">
                Por serem estritamente necessários ao funcionamento técnico da plataforma, a legislação em vigor determina que não requerem consentimento prévio do utilizador.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              3. O que NÃO utilizamos
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A] mb-4">
              Para garantir a sua total privacidade, segurança e uma navegação limpa, declaramos que este website desenvolvido de raiz está livre de rastreadores:
            </p>
            <ul className="space-y-3">
              {[
                "NÃO utilizamos cookies de publicidade direcionada ou marketing.",
                "NÃO utilizamos cookies de estatística ou análise de terceiros (como Google Analytics).",
                "NÃO utilizamos pixéis de rastreio pessoal (como Facebook Pixel ou equivalentes).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-3 bg-[#F8FBFD] border border-[#D5E4EE] rounded-xl text-sm text-[#3A4A5A]">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#E8F6FC] flex-shrink-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C9FD6]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              4. Métricas de Servidor (Vercel e Hostinger)
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              O nosso website utiliza as infraestruturas de alojamento da Vercel e da Hostinger. Estas plataformas recolhem métricas técnicas de desempenho (como a velocidade de carregamento e volume de tráfego) através de registos de servidor automáticos (logs) e não através da instalação de cookies no seu dispositivo. Estes dados são totalmente anónimos e servem apenas para garantir a estabilidade do servidor.
            </p>
          </article>

          <article>
            <h2 className="font-fraunces text-xl font-bold text-[#0D1E2C] mb-3">
              5. Gestão de Cookies
            </h2>
            <p className="text-sm leading-relaxed text-[#3A4A5A]">
              Ao navegar no nosso website, o utilizador aceita a utilização dos cookies técnicos descritos. Caso pretenda bloquear todos os cookies, poderá fazê-lo a qualquer momento através das definições do seu próprio navegador (Google Chrome, Safari, Microsoft Edge, Mozilla Firefox, etc.). Alertamos, contudo, que o bloqueio de cookies essenciais poderá impedir o funcionamento correto de algumas funcionalidades vitais do site, nomeadamente a submissão do formulário de agendamento.
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
