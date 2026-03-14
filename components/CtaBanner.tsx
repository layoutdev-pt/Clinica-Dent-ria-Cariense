import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title?: string;
}

export default function CtaBanner({ title = "Pronto para cuidar do seu sorriso?" }: Props) {
  return (
    <div className="mx-6 rounded-[28px] overflow-hidden relative bg-[#0D1E2C] py-16 px-10 text-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 50%, rgba(28,159,214,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(28,159,214,0.15) 0%, transparent 60%)",
      }}
    >
      <h2 className="font-['Fraunces',serif] text-3xl md:text-4xl font-bold text-white mb-7">{title}</h2>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link href="/contactos" className="inline-flex items-center gap-2 bg-[#1C9FD6] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0D7DB5] hover:-translate-y-px shadow-[0_2px_12px_rgba(28,159,214,0.4)] transition-all duration-200">
          Agendar Consulta <ArrowRight size={16} />
        </Link>
        <a href="tel:275471751" className="inline-flex items-center gap-2 bg-white text-[#0D1E2C] text-sm font-bold px-6 py-3 rounded-full hover:bg-[#F7FAFC] hover:-translate-y-px transition-all duration-200">
          275 471 751
        </a>
      </div>
    </div>
  );
}
