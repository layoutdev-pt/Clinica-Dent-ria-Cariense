"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookies_accepted", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[#0D1E2C] text-white rounded-2xl shadow-[0_8px_32px_rgba(13,30,44,0.35)] px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm leading-relaxed text-[#BDD6E6] flex-1">
          Utilizamos apenas cookies estritamente necessários para garantir o funcionamento correto e seguro do nosso website. Ao continuar a navegar, concorda com a nossa{" "}
          <a
            href="/politica-de-cookies"
            className="text-[#1C9FD6] underline underline-offset-2 hover:text-white transition-colors"
          >
            Política de Cookies
          </a>
          .
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-[#1C9FD6] hover:bg-[#0D7DB5] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
        >
          Compreendi
        </button>
      </div>
    </div>
  );
}
