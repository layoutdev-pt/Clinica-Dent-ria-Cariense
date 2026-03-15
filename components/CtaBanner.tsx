import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function CtaBanner({
  title = "Pronto para cuidar do seu sorriso?",
  subtitle = "Agende a sua consulta hoje. Resposta garantida em menos de 24 horas.",
}: Props) {
  return (
    <div
      className="relative rounded-[28px] overflow-hidden bg-[#0D1E2C] py-20 px-10 text-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 80% at 15% 50%, rgba(28,159,214,0.30) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 85% 50%, rgba(28,159,214,0.18) 0%, transparent 60%)",
      }}
    >
      {/* Animated orbs */}
      <div
        className="absolute w-80 h-80 rounded-full bg-[#1C9FD6]/10 blur-[80px] pointer-events-none -top-20 -left-20"
        style={{ animation: "orbDrift 20s ease-in-out infinite" }}
      />
      <div
        className="absolute w-56 h-56 rounded-full bg-[#1C9FD6]/8 blur-[60px] pointer-events-none -bottom-16 -right-16"
        style={{ animation: "orbDrift 16s ease-in-out infinite reverse", animationDelay: "-6s" }}
      />

      {/* Decorative ring */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#1C9FD6]/8" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-[#1C9FD6]/50" />
          <span className="text-[#1C9FD6] text-xs font-bold uppercase tracking-[0.2em]">Marque agora</span>
          <span className="w-10 h-px bg-[#1C9FD6]/50" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-4 leading-[1.1]">
          {title}
        </h2>
        <p className="text-white/50 text-base mb-10 leading-relaxed max-w-md mx-auto">{subtitle}</p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/contactos"
            className="btn-shimmer inline-flex items-center gap-2.5 bg-[#1C9FD6] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#0D7DB5] hover:-translate-y-1 shadow-[0_4px_24px_rgba(28,159,214,0.5)] hover:shadow-[0_8px_40px_rgba(28,159,214,0.65)] transition-all duration-200"
          >
            Agendar Consulta <ArrowRight size={15} />
          </Link>
          <a
            href="tel:275471751"
            className="btn-shimmer inline-flex items-center gap-2.5 bg-white/8 border border-white/15 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-200"
          >
            <Phone size={14} /> 275 471 751
          </a>
        </div>
      </div>
    </div>
  );
}
