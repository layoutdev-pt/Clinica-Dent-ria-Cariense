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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D5E4EE] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(13,30,44,0.08)]" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                  pathname === href
                    ? "text-[#1C9FD6] bg-[#E8F6FC]"
                    : "text-[#2A3A4A] hover:text-[#1C9FD6] hover:bg-[#E8F6FC]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#1C9FD6" fillOpacity="0.12" />
              <path
                d="M18 8C14 8 11 11 11 14c0 2.5 1 4.5 2.5 6L18 28l4.5-8C24 18.5 25 16.5 25 14c0-3-3-6-7-6z"
                fill="#1C9FD6"
              />
              <circle cx="18" cy="14" r="2.5" fill="white" />
            </svg>
            <div className="leading-tight">
              <div className="text-[0.9rem] font-bold text-[#0D1E2C]">Clínica Dentária</div>
              <div className="text-[0.9rem] font-bold text-[#1C9FD6]">Cariense</div>
            </div>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:275471751"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#2A3A4A]"
            >
              <Phone size={15} className="text-[#1C9FD6]" />
              275 471 751
            </a>
            <Link
              href="/contactos"
              className="hidden md:inline-flex items-center gap-2 bg-[#1C9FD6] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_2px_12px_rgba(28,159,214,0.35)] hover:bg-[#0D7DB5] hover:shadow-[0_4px_20px_rgba(28,159,214,0.5)] hover:-translate-y-px transition-all duration-200"
            >
              Marcar Consulta
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#0D1E2C]"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed top-[72px] left-0 right-0 bg-white border-b border-[#D5E4EE] shadow-xl z-40 p-4 flex flex-col gap-1 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                pathname === href
                  ? "text-[#1C9FD6] bg-[#E8F6FC]"
                  : "text-[#2A3A4A] hover:bg-[#E8F6FC] hover:text-[#1C9FD6]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contactos"
            className="mt-2 flex items-center justify-center bg-[#1C9FD6] text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Marcar Consulta
          </Link>
        </div>
      )}
    </>
  );
}
