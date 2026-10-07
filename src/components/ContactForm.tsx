"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { solutions, waLink } from "@/lib/content";
import { INTEREST_EVENT } from "./Solutions";
import { Arrow, WhatsApp } from "./icons";

const field =
  "w-full rounded-2xl border border-brand-700/25 bg-white px-5 py-3.5 text-base text-brand-900 outline-none transition placeholder:text-brand-900/65 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/20";
const label = "mb-2 block text-[15px] font-medium text-brand-900";
const req = <span className="text-brand-600" aria-hidden> *</span>;

// Sin backend: arma el mensaje y lo abre en WhatsApp.
// Para enviarlo por correo/CRM, reemplazar onSubmit por una Server Action o API route.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(solutions[0].title);
  const nameRef = useRef<HTMLInputElement>(null);

  // Al cotizar desde una ficha de solución, preselecciona esa línea.
  useEffect(() => {
    const onInterest = (e: Event) => {
      setInterest((e as CustomEvent<string>).detail);
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener(INTEREST_EVENT, onInterest);
    return () => window.removeEventListener(INTEREST_EVENT, onInterest);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      `¡Hola, Agrologico! 👋 Soy ${d.get("name")}${d.get("company") ? ` de ${d.get("company")}` : ""}.`,
      `Me interesa: ${d.get("interest")}.`,
      d.get("message") ? `${d.get("message")}` : "",
      `Contacto: ${d.get("phone")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">Nombre{req}</label>
        <input ref={nameRef} id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="company">Empresa o finca</label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="phone">Teléfono o correo{req}</label>
        <input id="phone" name="phone" required autoComplete="tel" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="interest">Me interesa</label>
        <select
          id="interest"
          name="interest"
          className={`${field} min-h-[54px]`}
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          {solutions.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Otro</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Cultivo, área aproximada o detalle del proyecto"
          className={field}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex min-h-13 items-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <WhatsApp className="size-5" /> Enviar por WhatsApp
          <Arrow className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
        </button>
        <p className="text-[15px] text-brand-900/75" role="status">
          {sent ? "¡Listo! Se abrió WhatsApp con tu mensaje. Te responderemos pronto." : <><span className="text-brand-600">*</span> Campos obligatorios</>}
        </p>
      </div>
    </form>
  );
}
