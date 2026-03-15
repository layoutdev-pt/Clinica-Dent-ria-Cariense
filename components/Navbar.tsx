"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-[navbarDrop_0.5s_cubic-bezier(0.16,1,0.3,1)_both] ${
          scrolled
            ? "bg-white shadow-[0_2px_24px_rgba(13,30,44,0.08)] border-b border-[#EEF4F8]"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">

          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[0.875rem] font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#1C9FD6]"
                      : "text-[#0D1E2C] hover:text-[#1C9FD6]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Logo — center on desktop */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 absolute left-1/2 -translate-x-1/2"
            aria-label="Clínica Dentária Cariense — Início"
          >
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="18" fill="#E8F6FC" />
              <path
                d="M18 8C14 8 11 11 11 14c0 2.5 1 4.5 2.5 6L18 28l4.5-8C24 18.5 25 16.5 25 14c0-3-3-6-7-6z"
                fill="#1C9FD6"
              />
              <circle cx="18" cy="14" r="2.5" fill="white" />
            </svg>
            <span className="text-[1rem] font-bold text-[#0D1E2C] leading-tight">
              Clínica Dentária <span className="text-[#1C9FD6]">Cariense</span>
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:275471751"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#0D1E2C] hover:text-[#1C9FD6] transition-colors duration-200"
            >
              <Phone size={14} className="text-[#1C9FD6]" />
              275 471 751
            </a>
            <Link
              href="/contactos"
              className="hidden md:inline-flex items-center gap-2 bg-[#1C9FD6] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0D7DB5] hover:-translate-y-px shadow-[0_2px_16px_rgba(28,159,214,0.3)] transition-all duration-200"
            >
              Marcar Consulta
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#0D1E2C] hover:text-[#1C9FD6] transition-colors rounded-lg"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-[#EEF4F8] shadow-lg transition-all duration-250 md:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="p-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                pathname === href
                  ? "text-[#1C9FD6] bg-[#E8F6FC]"
                  : "text-[#0D1E2C] hover:bg-[#F7FAFC] hover:text-[#1C9FD6]"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 pt-3 border-t border-[#EEF4F8] flex flex-col gap-2">
            <a href="tel:275471751" className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0D1E2C]">
              <Phone size={15} className="text-[#1C9FD6]" />
              275 471 751
            </a>
            <Link href="/contactos" className="flex items-center justify-center bg-[#1C9FD6] text-white text-sm font-semibold px-5 py-3 rounded-full">
              Marcar Consulta
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
