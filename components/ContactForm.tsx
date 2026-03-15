"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  const inputCls =
    "w-full px-4 py-3 border border-[#D5E4EE] rounded-xl text-sm text-[#2A3A4A] placeholder-[#5E7387] bg-white focus:outline-none focus:border-[#1C9FD6] focus:ring-2 focus:ring-[#1C9FD6]/12 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-[#D5E4EE] rounded-[20px] p-8 shadow-[0_4px_24px_rgba(13,30,44,0.08)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">Nome</label>
          <input id="nome" name="nome" type="text" placeholder="Nome Completo" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">Email</label>
          <input id="email" name="email" type="email" placeholder="Endereço de Email" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="telefone" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">Telefone</label>
          <input id="telefone" name="telefone" type="tel" placeholder="Contacto Telefónico" className={inputCls} />
        </div>
        <div>
          <label htmlFor="localizacao" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">Localização</label>
          <select id="localizacao" name="localizacao" className={`${inputCls} select-field`}>
            <option>Clínica de Caria</option>
            <option>Clínica do Peso</option>
            <option>Clínica de Unhais da Serra</option>
            <option>Outras informações</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={4} placeholder="Como podemos ajudar?" className={`${inputCls} resize-none`} />
        </div>
        <div className="sm:col-span-2 flex items-start gap-2.5">
          <input type="checkbox" id="privacidade" required className="mt-0.5 w-4 h-4 accent-[#1C9FD6] flex-shrink-0 cursor-pointer" />
          <label htmlFor="privacidade" className="text-xs text-[#5E7387] leading-relaxed cursor-pointer">
            Ao enviar este formulário, aceita a nossa{" "}
            <a href="#" className="text-[#1C9FD6] underline">política de privacidade</a>.
          </label>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className={`inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 ${
              submitted
                ? "bg-[#0D7DB5] text-white"
                : "bg-[#1C9FD6] text-white hover:bg-[#0D7DB5] hover:-translate-y-px shadow-[0_2px_12px_rgba(28,159,214,0.35)]"
            }`}
          >
            {submitted ? (
              <><CheckCircle size={16} /> Enviado com sucesso!</>
            ) : (
              <>Agendar Consulta <ArrowRight size={16} /></>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
