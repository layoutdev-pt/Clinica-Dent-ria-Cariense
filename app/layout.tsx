import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const BASE_URL = "https://www.clinicacariense.pt";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/img/logo-icon.png", type: "image/png" },
    ],
    apple: "/img/logo-icon.png",
  },
  title: {
    default: "Clínica Dentária Cariense | Implantes, Ortodontia e Estética em Caria, Unhais da Serra e Peso",
    template: "%s | Clínica Dentária Cariense",
  },
  description:
    "Clínica Dentária Cariense — 20+ anos a cuidar do seu sorriso. Implantologia, Ortodontia, Branqueamento e 10+ especialidades em Caria, Unhais da Serra e Peso. Marque consulta já: 275 471 751.",
  keywords: [
    "clínica dentária Caria",
    "dentista Caria",
    "dentista Unhais da Serra",
    "dentista Peso",
    "implantologia Beira Interior",
    "ortodontia interior Portugal",
    "branqueamento dentário",
    "médico dentista Cariense",
    "clínica dentária Fundão",
    "saúde oral Castelo Branco",
  ],
  authors: [{ name: "Clínica Dentária Cariense" }],
  creator: "Layout Agency",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: BASE_URL,
    siteName: "Clínica Dentária Cariense",
    title: "Clínica Dentária Cariense | Implantes, Ortodontia e Estética Dental",
    description:
      "20+ anos de excelência em saúde oral. 3 clínicas em Caria, Unhais da Serra e Peso. Implantologia, Ortodontia, Branqueamento e 10+ especialidades. Marque consulta.",
    images: [
      {
        url: "/img/clinic-caria-ext.png",
        width: 1200,
        height: 630,
        alt: "Clínica Dentária Cariense — Consultório em Caria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dentária Cariense | Saúde Oral de Excelência",
    description:
      "20+ anos ao serviço da sua saúde oral. 3 clínicas em Caria, Unhais da Serra e Peso. Marque consulta hoje.",
    images: ["/img/clinic-caria-ext.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "pt-PT": BASE_URL },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body className="antialiased" suppressHydrationWarning>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          // Static JSON-LD — content is hardcoded, not user-supplied
          // nosemgrep: react-dangerouslysetinnerhtml
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Dentist",
                  "@id": `${BASE_URL}/#organization`,
                  name: "Clínica Dentária Cariense",
                  url: BASE_URL,
                  description:
                    "Clínica Dentária Cariense — 20+ anos de excelência em saúde oral no interior de Portugal.",
                  foundingDate: "2003",
                  telephone: "+351275471751",
                  email: "geral@clinicacariense.pt",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: "100",
                    bestRating: "5",
                  },
                  location: [
                    {
                      "@type": "Dentist",
                      name: "Clínica Dentária Cariense — Caria",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Cerca do Conde, Lote 41, Loja B/D",
                        addressLocality: "Caria",
                        postalCode: "6250-111",
                        addressCountry: "PT",
                      },
                      telephone: "+351275471751",
                      openingHours: "Mo-Fr 09:00-19:00",
                    },
                    {
                      "@type": "Dentist",
                      name: "Clínica Dentária Cariense — Unhais da Serra",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Avenida 1º de Maio, 43-A",
                        addressLocality: "Unhais da Serra",
                        postalCode: "6215-517",
                        addressCountry: "PT",
                      },
                      telephone: "+351275971342",
                    },
                    {
                      "@type": "Dentist",
                      name: "Espaço Saúde do Peso",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Rua Santa Maria Madalena, nº10",
                        addressLocality: "Peso",
                        postalCode: "6200-622",
                        addressCountry: "PT",
                      },
                      telephone: "+351275954182",
                    },
                  ],
                  medicalSpecialty: [
                    "Implantologia", "Ortodontia", "Branqueamento Dentário",
                    "Cirurgia Oral", "Endodontia", "Odontopediatria",
                    "Periodontologia", "Prótese Dentária", "Estética Dentária",
                    "Reabilitação Oral", "Medicina Oral", "Dentisteria Conservadora",
                  ],
                },
              ],
            }),
          }}
        />
        <Navbar />
        <main className="pt-[68px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
