"use client";

import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/lib/content";
import Logo from "./Logo";
import { Phone, WhatsApp } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Barra superior */}
      <div
        className={`hidden border-b text-[13px] md:block ${
          solid ? "border-brand-700/10 text-brand-800" : "border-white/20 text-white"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-6">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:opacity-70">
              <Phone /> {site.phone}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <WhatsApp /> WhatsApp
            </a>
            <a href="#contacto" className="hover:opacity-70">
              Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Arriba del todo el logo se ve grande; al bajar se encoge y se acomoda en la barra. */}
        <a
          href="#inicio"
          aria-label="Agrologico, inicio"
          data-big={!solid || undefined}
          className="brand-logo group relative z-10 block shrink-0"
        >
          <Logo light={!solid} className="h-10 w-auto sm:h-11" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[14px] font-medium whitespace-nowrap transition-colors xl:text-[15px] ${
                solid ? "text-brand-900 hover:text-brand-600" : "text-white hover:text-brand-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-controls="menu-movil"
          className={`-mr-2 flex size-12 flex-col items-center justify-center gap-1.5 lg:hidden ${
            solid ? "text-brand-900" : "text-white"
          }`}
        >
          <span className={`h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú" className="border-t border-brand-700/10 bg-white px-6 pb-6 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-brand-700/10 py-4 text-lg font-medium text-brand-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-brand-600 py-3.5 text-center text-lg font-semibold text-white"
          >
            Cotizar
          </a>
        </nav>
      )}

      {/* Línea tricolor de la marca (verde · sol · verde) que cierra la barra al bajar. */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 grid h-[5px] grid-cols-3 transition-opacity duration-300 ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="bg-brand-300" />
        <span className="bg-sun" />
        <span className="bg-brand-300" />
      </div>

      {/* Botón flotante para cotizar, visible tras dejar el hero */}
      <a
        href="#contacto"
        className={`fixed right-22 bottom-4 inline-flex min-h-14 items-center rounded-full bg-brand-600 px-7 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(0,53,43,0.6)] transition-[opacity,translate,background-color] duration-300 ease-out-quart hover:bg-brand-700 md:right-6 md:bottom-6 ${
          scrolled && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Cotizar
      </a>

      {/* Acceso directo a WhatsApp en móvil, visible tras dejar el hero */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className={`fixed right-4 bottom-4 grid size-14 place-items-center rounded-full bg-brand-600 text-white shadow-[0_10px_30px_-8px_rgba(0,53,43,0.6)] transition-[opacity,translate] duration-300 ease-out-quart md:hidden ${
          scrolled && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <WhatsApp className="size-7" />
      </a>
    </header>
  );
}
