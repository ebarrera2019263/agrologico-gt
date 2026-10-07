"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/lib/content";
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
        solid ? "bg-white shadow-[0_6px_24px_-12px_rgba(0,53,43,0.25)]" : "bg-transparent"
      }`}
    >
      {/* Barra superior */}
      <div
        className={`hidden border-b text-[13px] md:block ${
          solid ? "border-brand-700/10 text-brand-800" : "border-white/20 text-white"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <span>{site.slogan}</span>
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
        <a href="#inicio" aria-label="Agrologico, inicio" className="relative h-9 w-36">
          <Image
            src="/img/logo-white.png"
            alt="Agrologico"
            fill
            preload
            sizes="144px"
            className={`object-contain object-left transition-opacity ${solid ? "opacity-0" : "opacity-100"}`}
          />
          <Image
            src="/img/logo.png"
            alt=""
            fill
            sizes="144px"
            className={`object-contain object-left transition-opacity ${solid ? "opacity-100" : "opacity-0"}`}
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors ${
                solid ? "text-brand-900 hover:text-brand-600" : "text-white hover:text-brand-100"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex min-h-11 items-center rounded-full bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Cotizar
          </a>
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
