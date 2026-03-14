import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1E2C] text-white/80 pt-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#1C9FD6" fillOpacity="0.2" />
                <path d="M18 8C14 8 11 11 11 14c0 2.5 1 4.5 2.5 6L18 28l4.5-8C24 18.5 25 16.5 25 14c0-3-3-6-7-6z" fill="#1C9FD6" />
                <circle cx="18" cy="14" r="2.5" fill="white" />
              </svg>
              <div className="leading-tight">
                <div className="text-sm font-bold text-white">Clínica Dentária</div>
                <div className="text-sm font-bold text-[#1C9FD6]">Cariense</div>
              </div>
            </div>
            <p className="text-sm leading-7 text-white/60 mb-5">
              Cuidamos do seu sorriso com rigor clínico, tecnologia de ponta e um atendimento verdadeiramente humano.
            </p>
            <div className="flex gap-2.5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/70 hover:bg-[#1C9FD6] hover:text-white transition-all duration-200">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/70 hover:bg-[#1C9FD6] hover:text-white transition-all duration-200">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Páginas</h3>
            <div className="flex flex-col gap-2.5">
              {[["Início", "/"], ["Sobre", "/sobre"], ["Serviços", "/servicos"], ["Contacto", "/contactos"]].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-white/60 hover:text-[#1C9FD6] transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Legal</h3>
            <div className="flex flex-col gap-2.5">
              {["Termos e condições", "Política de Privacidade", "Política de Cookies"].map((l) => (
                <a key={l} href="#" className="text-sm text-white/60 hover:text-[#1C9FD6] transition-colors duration-200">{l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Informações de Contato</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2.5 items-start">
                <MapPin size={15} className="text-[#1C9FD6] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Endereço</div>
                  <a href="https://maps.google.com" target="_blank" className="text-sm text-white/70 hover:text-[#1C9FD6] transition-colors leading-snug">
                    Cerca do Conde, Lote 41,<br />Loja B/D, 6250-111 Caria
                  </a>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Phone size={15} className="text-[#1C9FD6] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Telefone</div>
                  <a href="tel:275471751" className="text-sm text-white/70 hover:text-[#1C9FD6] transition-colors">275 471 751</a>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Mail size={15} className="text-[#1C9FD6] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Email</div>
                  <a href="mailto:geral@clinicacariense.pt" className="text-sm text-white/70 hover:text-[#1C9FD6] transition-colors">geral@clinicacariense.pt</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 Clínica Dentária Cariense LDA — Todos os direitos reservados. Desenvolvido por:{" "}
            <a href="https://www.layoutagency.pt" target="_blank" className="text-[#1C9FD6]">Layout Agency</a>
          </span>
          <div className="flex gap-4">
            {["Termos", "Privacidade", "Cookies"].map((l) => (
              <a key={l} href="#" className="hover:text-[#1C9FD6] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
