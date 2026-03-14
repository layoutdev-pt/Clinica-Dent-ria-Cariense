import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clínica Dentária Cariense – Excelência em Medicina Dentária",
  description:
    "Clínica Dentária Cariense – Cuidados dentários de excelência em Caria, Peso e Unhais da Serra. Mais de 28 anos ao serviço da sua saúde.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className="antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
