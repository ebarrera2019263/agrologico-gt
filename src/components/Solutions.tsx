"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { isPhoto, solutions, waLink, type Solution } from "@/lib/content";
import Reveal from "./Reveal";
import { Arrow, Check, Close, Plus, WhatsApp } from "./icons";

/** Avisa al formulario de contacto qué línea preseleccionar. */
export const INTEREST_EVENT = "agro:interest";

export default function Solutions() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const quoting = useRef(false);
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : solutions[index];

  const open = useCallback((k: number, from?: HTMLElement | null) => {
    if (from) opener.current = from;
    setIndex(k);
    history.replaceState(null, "", `#solucion-${solutions[k].slug}`);
    const d = dialog.current;
    if (d && !d.open) d.showModal();
    d?.querySelector(".solution-scroll")?.scrollTo({ top: 0 });
  }, []);

  const close = useCallback(() => dialog.current?.close(), []);

  // Enlace directo: /#solucion-riego abre la ficha (útil para compartir por WhatsApp).
  useEffect(() => {
    const fromHash = () => {
      const k = solutions.findIndex((s) => location.hash === `#solucion-${s.slug}`);
      if (k >= 0) open(k);
    };
    const raf = requestAnimationFrame(fromHash);
    window.addEventListener("hashchange", fromHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [open]);

  function onClose() {
    if (quoting.current) {
      quoting.current = false;
      history.replaceState(null, "", "#contacto");
      return;
    }
    history.replaceState(null, "", "#soluciones");
    opener.current?.focus({ preventScroll: true });
  }

  function quote(s: Solution) {
    quoting.current = true;
    close();
    window.dispatchEvent(new CustomEvent(INTEREST_EVENT, { detail: s.title }));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("contacto")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }

  const step = (d: 1 | -1) => index !== null && open((index + d + solutions.length) % solutions.length);

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:mt-14 lg:grid-cols-3">
        {solutions.map((s, k) => {
          const wide = k === solutions.length - 1 && solutions.length % 2 === 1;
          return (
            <Reveal key={s.slug} delay={(k % 3) * 80} className={wide ? "col-span-2 lg:col-span-1" : ""}>
              <button
                type="button"
                onClick={(e) => open(k, e.currentTarget)}
                aria-haspopup="dialog"
                className={`group relative block w-full overflow-hidden rounded-3xl text-left sm:aspect-[4/3] sm:rounded-[2rem] ${
                  wide ? "aspect-[2/1]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent" />
                {s.isNew && (
                  <span className="absolute top-3 left-3 rounded-full bg-sun px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase sm:top-5 sm:left-5">
                    Nuevo
                  </span>
                )}
                <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white/90 text-brand-700 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white sm:top-5 sm:right-5 sm:size-10">
                  <Plus className="size-5" />
                </span>
                <span className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-5">
                  <span className="block text-[15px] leading-snug font-medium text-balance text-white sm:text-xl">{s.title}</span>
                  <span className="mt-1 hidden items-center gap-1.5 text-sm font-medium text-brand-100 sm:inline-flex">
                    Ver detalle
                    <Arrow className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
                  </span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      <dialog
        ref={dialog}
        onClose={onClose}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-labelledby="solution-title"
        className="solution-dialog"
      >
        {current && (
          <div className="solution-scroll flex max-h-full flex-col overflow-y-auto overscroll-contain">
            {/* Portada */}
            <div className="relative aspect-[16/9] shrink-0 sm:aspect-[3/1]">
              <Image src={current.img} alt="" fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-brand-900/10" />
              <button
                type="button"
                onClick={close}
                autoFocus
                aria-label="Cerrar"
                className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white text-brand-900 shadow-sm transition-colors hover:bg-brand-100"
              >
                <Close className="size-5" />
              </button>
              <div className="absolute inset-x-6 bottom-5 sm:inset-x-10 sm:bottom-8">
                <p className="text-sm font-medium text-brand-100">
                  Solución {index! + 1} de {solutions.length}
                  {current.isNew && <span className="ml-2 rounded-full bg-sun px-2.5 py-0.5 text-xs font-bold text-brand-900 uppercase">Nuevo</span>}
                </p>
                <h3 id="solution-title" className="mt-1 text-[1.75rem] leading-tight font-medium text-balance text-white sm:text-4xl">
                  {current.title}
                </h3>
              </div>
            </div>

            <div key={current.slug} className="solution-body grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <p className="text-lg leading-relaxed text-brand-900/85">{current.summary}</p>
                {current.tags && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {current.tags.map((t) => (
                      <li key={t} className="rounded-full bg-brand-100 px-3.5 py-1.5 text-[15px] font-medium text-brand-800">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                <h4 className="mt-8 text-[15px] font-semibold text-brand-900">Incluye</h4>
                <ul className="mt-3 space-y-2.5">
                  {current.items.map((it) => (
                    <li key={it} className="flex gap-3 text-base leading-snug text-brand-900/85">
                      <Check className="mt-0.5 size-5 shrink-0 text-brand-500" />
                      {it}
                    </li>
                  ))}
                </ul>

                {current.partners.length > 0 && (
                  <>
                    <h4 className="mt-8 text-[15px] font-semibold text-brand-900">Marcas con las que trabajamos</h4>
                    <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {current.partners.map((pt) => (
                        <li
                          key={pt.name}
                          className="relative grid h-16 place-items-center rounded-2xl border border-brand-700/10 bg-white px-3"
                        >
                          <Image src={pt.logo} alt={pt.name} width={160} height={56} className="max-h-10 w-auto object-contain" />
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => quote(current)}
                    className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Cotizar esta solución
                    <Arrow className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
                  </button>
                  <a
                    href={waLink(`¡Hola, Agrologico! 👋 Me interesa conocer más sobre ${current.title}. ¿Me podrían compartir información y precios?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-brand-700/20 px-6 text-[15px] font-semibold text-brand-800 transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    <WhatsApp className="size-5" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Galería de equipos */}
              <ul className={`grid content-start gap-3 ${current.gallery.length > 1 ? "grid-cols-2" : ""}`}>
                {current.gallery.map((g, k) => (
                  <li
                    key={g.src}
                    className={`relative overflow-hidden rounded-2xl bg-cream ${
                      current.gallery.length === 1 || (current.gallery.length % 2 === 1 && k === 0)
                        ? "col-span-2 aspect-[16/10]"
                        : "aspect-square"
                    }`}
                  >
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 260px, 50vw" className={isPhoto(g.src) ? "object-cover" : "object-contain p-3 mix-blend-multiply"} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Navegación entre soluciones */}
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-brand-700/10 px-4 py-3 sm:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[15px] font-medium text-brand-800 transition-colors hover:bg-cream"
              >
                <Arrow className="size-4 rotate-180" />
                <span className="max-w-[9rem] truncate sm:max-w-none">
                  {solutions[(index! - 1 + solutions.length) % solutions.length].title}
                </span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-right text-[15px] font-medium text-brand-800 transition-colors hover:bg-cream"
              >
                <span className="max-w-[9rem] truncate sm:max-w-none">{solutions[(index! + 1) % solutions.length].title}</span>
                <Arrow className="size-4" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
