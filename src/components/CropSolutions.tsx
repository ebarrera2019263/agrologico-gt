"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { crops, solutions, waLink } from "@/lib/content";
import { Leaf } from "./Leaf";
import { Arrow, WhatsApp } from "./icons";

const lineTitle = (slug: string) => solutions.find((s) => s.slug === slug)?.title ?? "";

// Pestañas accesibles: el cultivo elegido muestra su foto, lo que ofrecemos y cómo cotizar.
export default function CropSolutions() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const crop = crops[active];

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (active + keys[e.key] + crops.length) % crops.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = crops.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-12 grid gap-8 md:mt-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14">
      {/* En el celular las pestañas se desplazan en horizontal; en escritorio son una lista. */}
      <div
        role="tablist"
        aria-label="Cultivos"
        aria-orientation="vertical"
        onKeyDown={onKey}
        className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-brand-700/10 lg:px-0"
      >
        {crops.map((c, k) => {
          const on = k === active;
          return (
            <button
              key={c.slug}
              ref={(el) => {
                tabs.current[k] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${c.slug}`}
              aria-selected={on}
              aria-controls="crop-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(k)}
              className={`group flex min-h-12 shrink-0 items-center gap-3 rounded-full border px-5 text-left text-[15px] font-medium whitespace-nowrap transition-colors duration-200 lg:min-h-[4.5rem] lg:rounded-none lg:border-0 lg:border-b lg:border-brand-700/10 lg:px-0 lg:text-2xl ${
                on
                  ? "border-brand-600 bg-brand-600 text-white lg:bg-transparent lg:text-brand-700"
                  : "border-brand-700/20 text-brand-800 hover:border-brand-600 lg:text-brand-900/70 lg:hover:text-brand-700"
              }`}
            >
              <Leaf
                className={`hidden size-5 shrink-0 transition-[opacity,translate] duration-300 ease-out-quart lg:block ${
                  on ? "translate-x-0 text-sun opacity-100" : "-translate-x-2 text-brand-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              />
              {c.name}
            </button>
          );
        })}
      </div>

      <div id="crop-panel" role="tabpanel" aria-labelledby={`tab-${crop.slug}`} key={crop.slug} className="solution-body">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] rounded-tl-none bg-brand-100 sm:rounded-[2.5rem] sm:rounded-tl-none">
          <Image src={crop.img} alt={crop.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/10 to-transparent" />
          <h3 className="absolute bottom-5 left-6 text-[1.75rem] leading-tight font-medium text-white sm:bottom-7 sm:left-8 sm:text-4xl">
            {crop.name}
          </h3>
        </div>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-900/85">{crop.intro}</p>

        <h4 className="mt-8 text-[15px] font-semibold text-brand-900">Lo que te ofrecemos</h4>
        <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
          {crop.offer.map((o) => (
            <li key={o.text} className="border-b border-brand-700/10">
              <a
                href={`#solucion-${o.line}`}
                className="group flex min-h-14 items-center gap-3 py-3 text-base leading-snug text-brand-900 transition-colors hover:text-brand-600"
              >
                <Leaf className="size-3.5 shrink-0 text-brand-500" />
                <span className="flex-1">
                  {o.text}
                  <span className="mt-0.5 block text-sm text-brand-900/70">{lineTitle(o.line)}</span>
                </span>
                <Arrow className="size-4 shrink-0 text-brand-600 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={waLink(`¡Hola, Agrologico! 👋 Tengo un cultivo de ${crop.name.toLowerCase()} y me gustaría una asesoría sobre sus soluciones. ¿Me pueden ayudar?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <WhatsApp className="size-5" /> Asesoría para {crop.name.toLowerCase()}
          </a>
          <a
            href="#contacto"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-brand-700/20 px-6 text-[15px] font-semibold text-brand-800 transition-colors hover:border-brand-600 hover:text-brand-600"
          >
            Cotizar
            <Arrow className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
