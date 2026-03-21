"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormFields = {
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  mensagem: string;
  privacidade: boolean;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

type Status = "idle" | "loading" | "success" | "error";

const INITIAL: FormFields = {
  nome: "",
  email: "",
  telefone: "",
  localizacao: "Clínica de Caria",
  mensagem: "",
  privacidade: false,
};

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.nome.trim() || fields.nome.trim().length < 2)
    errors.nome = "Insira o seu nome completo.";
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Insira um email válido.";
  if (!fields.mensagem.trim() || fields.mensagem.trim().length < 10)
    errors.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
  if (!fields.privacidade)
    errors.privacidade = "Deve aceitar a política de privacidade.";
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    const updated = { ...fields, [name]: newValue };
    setFields(updated);
    if (touched[name as keyof FormFields]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(fields).map((k) => [k, true]));
    setTouched(allTouched);
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Erro ao enviar mensagem. Tente novamente.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setFields(INITIAL);
      setTouched({});
      setErrors({});
    } catch {
      setServerError("Erro de ligação. Verifique a sua internet e tente novamente.");
      setStatus("error");
    }
  }

  const inputCls = (field: keyof FormFields) =>
    `w-full px-4 py-3 border rounded-xl text-sm text-[#2A3A4A] placeholder-[#5E7387] bg-white focus:outline-none focus:ring-2 transition-all duration-200 ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-400/12"
        : "border-[#D5E4EE] focus:border-[#1C9FD6] focus:ring-[#1C9FD6]/12"
    }`;

  if (status === "success") {
    return (
      <div className="bg-white border border-[#D5E4EE] rounded-[20px] p-8 shadow-[0_4px_24px_rgba(13,30,44,0.08)] flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
        <div className="w-16 h-16 rounded-full bg-[#E8F6FC] flex items-center justify-center">
          <CheckCircle size={32} className="text-[#1C9FD6]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#0D1E2C] mb-1">Mensagem enviada!</h3>
          <p className="text-sm text-[#5E7387] leading-relaxed max-w-xs">
            Recebemos o seu contacto e iremos responder em breve. Obrigado!
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-[#1C9FD6] underline underline-offset-2 mt-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#D5E4EE] rounded-[20px] p-8 shadow-[0_4px_24px_rgba(13,30,44,0.08)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">
            Nome <span className="text-red-400">*</span>
          </label>
          <input
            id="nome" name="nome" type="text"
            placeholder="Nome Completo"
            value={fields.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls("nome")}
          />
          {touched.nome && errors.nome && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.nome}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email" name="email" type="email"
            placeholder="Endereço de Email"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls("email")}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">
            Telefone
          </label>
          <input
            id="telefone" name="telefone" type="tel"
            placeholder="Contacto Telefónico"
            value={fields.telefone}
            onChange={handleChange}
            className={inputCls("telefone")}
          />
        </div>

        {/* Localização */}
        <div>
          <label htmlFor="localizacao" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">
            Localização
          </label>
          <select
            id="localizacao" name="localizacao"
            value={fields.localizacao}
            onChange={handleChange}
            className={`${inputCls("localizacao")} select-field`}
          >
            <option>Clínica de Caria</option>
            <option>Clínica do Peso</option>
            <option>Clínica de Unhais da Serra</option>
            <option>Outras informações</option>
          </select>
        </div>

        {/* Mensagem */}
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="block text-xs font-semibold text-[#0D1E2C] mb-1.5 tracking-wide">
            Mensagem <span className="text-red-400">*</span>
          </label>
          <textarea
            id="mensagem" name="mensagem" rows={4}
            placeholder="Como podemos ajudar?"
            value={fields.mensagem}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputCls("mensagem")} resize-none`}
          />
          {touched.mensagem && errors.mensagem && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.mensagem}
            </p>
          )}
        </div>

        {/* Privacidade */}
        <div className="sm:col-span-2 flex flex-col gap-1">
          <div className="flex items-start gap-2.5">
            <input
              type="checkbox" id="privacidade" name="privacidade"
              checked={fields.privacidade}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 accent-[#1C9FD6] flex-shrink-0 cursor-pointer"
            />
            <label htmlFor="privacidade" className="text-xs text-[#5E7387] leading-relaxed cursor-pointer">
              Ao enviar este formulário, aceita a nossa{" "}
              <a href="#" className="text-[#1C9FD6] underline">política de privacidade</a>.{" "}
              <span className="text-red-400">*</span>
            </label>
          </div>
          {touched.privacidade && errors.privacidade && (
            <p className="ml-6 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.privacidade}
            </p>
          )}
        </div>

        {/* Server error */}
        {status === "error" && serverError && (
          <div className="sm:col-span-2 flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle size={16} className="flex-shrink-0" />
            {serverError}
          </div>
        )}

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 bg-[#1C9FD6] text-white hover:bg-[#0D7DB5] hover:-translate-y-px shadow-[0_2px_12px_rgba(28,159,214,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {status === "loading" ? (
              <><Loader2 size={16} className="animate-spin" /> A enviar...</>
            ) : (
              <>Agendar Consulta <ArrowRight size={16} /></>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
