"use client";

import Image from "next/image";
import { useState } from "react";
import { brandCatalog } from "@/lib/content";
import { Arrow } from "./icons";

const groups = [
  { id: "riego", label: "Marcas de riego" },
  { id: "otras", label: "Otras líneas" },
] as const;

export default function BrandCatalog() {
  const [group, setGroup] = useState<(typeof groups)[number]["id"]>("riego");
  const [active, setActive] = useState(0);
  const list = brandCatalog.filter((b) => b.group === group);
  const current = list[active] ?? list[0];

  const pickGroup = (g: typeof group) => {
    setGroup(g);
    setActive(0);
  };

  // Flechas izquierda/derecha entre pestañas, como pide el patrón de tabs accesibles.
  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length;
    setActive(next);
    document.getElementById(`marca-tab-${list[next].id}`)?.focus();
  };

  return (
    <div>
      <div className="mb-5 inline-flex rounded-full bg-white p-1 shadow-[0_6px_18px_-12px_rgba(0,53,43,0.4)] ring-1 ring-brand-700/10">
        {groups.map((g) => (
          <button
            key={g.id}
            type="button"
            aria-pressed={group === g.id}
            onClick={() => pickGroup(g.id)}
            className={`min-h-11 rounded-full px-5 text-[15px] font-semibold transition-colors duration-200 ${
              group === g.id ? "bg-brand-600 text-white" : "text-brand-800 hover:text-brand-600"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div
        role="tablist"
        aria-label="Marcas"
        onKeyDown={onKey}
        className={`no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pt-1 pb-3 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 ${
          // Columnas elegidas para que las filas queden completas: 15 marcas de riego, 11 de otras líneas.
          group === "riego" ? "lg:grid-cols-5" : "lg:grid-cols-6"
        }`}
      >
        {list.map((b, k) => {
          const selected = k === active;
          return (
            <button
              key={b.id}
              id={`marca-tab-${b.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="marca-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(k)}
              className={`relative grid h-16 w-36 shrink-0 place-items-center rounded-2xl border bg-white px-4 transition-[border-color,box-shadow] duration-200 lg:w-auto ${
                selected
                  ? "border-brand-600 shadow-[0_10px_24px_-14px_rgba(0,53,43,0.5)] ring-1 ring-brand-600"
                  : "border-brand-700/10 hover:border-brand-600/50"
              }`}
            >
              {b.logo ? (
                <Image src={b.logo} alt={b.name} width={160} height={56} className="max-h-9 w-auto object-contain" />
              ) : (
                <span className="text-[15px] font-semibold text-brand-900">{b.name}</span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id="marca-panel"
        role="tabpanel"
        aria-labelledby={`marca-tab-${current.id}`}
        className="mt-6 grid gap-8 rounded-[2rem] bg-white p-7 shadow-[0_20px_40px_-24px_rgba(0,53,43,0.35)] md:p-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12"
      >
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">{current.line}</p>
          <h3 className="mt-2 text-[1.75rem] leading-tight font-medium text-brand-900">{current.name}</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-brand-900/80">{current.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="#contacto"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
            >
              Cotizar {current.name}
              <Arrow className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
            </a>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[15px] font-medium text-brand-700 underline-offset-4 hover:underline"
            >
              Sitio oficial
            </a>
          </div>
        </div>

        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {current.products.map((p) => (
            <li key={p.name} className="rounded-2xl bg-cream px-5 py-4">
              <h4 className="font-semibold text-brand-900">{p.name}</h4>
              <p className="mt-1 text-[15px] leading-relaxed text-brand-900/75">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
