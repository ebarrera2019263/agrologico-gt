"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "@/lib/content";
import { Arrow } from "./icons";

export default function ProductRail() {
  const rail = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.clientWidth + 20), behavior: reduce ? "auto" : "smooth" });
  };

  const control =
    "grid size-12 place-items-center rounded-full border border-brand-700/20 bg-white text-brand-800 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <ul
        ref={rail}
        onScroll={update}
        aria-label="Líneas de producto"
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pt-2 pb-10 lg:mx-0 lg:scroll-px-0 lg:px-0"
      >
        {products.map((p) => (
          <li key={p.img} className="shrink-0 snap-start">
            <a
              href="#contacto"
              className="group relative flex h-[420px] w-[264px] flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_40px_-24px_rgba(0,53,43,0.35)] transition-[translate,box-shadow] duration-300 ease-out-quart hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(0,53,43,0.45)]"
            >
              <div className="px-7 pt-8">
                <h3 className="text-xl leading-snug font-medium text-brand-900">
                  {p.title[0]}
                  <br />
                  {p.title[1]}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-900/75">{p.desc}</p>
              </div>
              <div className="relative mt-auto h-[190px]">
                <div className="absolute -inset-x-10 top-8 bottom-0 rounded-t-[50%] bg-brand-100/70" />
                <Image
                  src={p.img}
                  alt=""
                  fill
                  sizes="264px"
                  className="object-contain p-6 mix-blend-multiply transition-transform duration-500 ease-out-quart group-hover:scale-105"
                />
              </div>
              <span className="absolute right-5 bottom-5 grid size-10 place-items-center rounded-full bg-white text-brand-600 shadow-sm transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Arrow className="size-5" />
                <span className="sr-only">Cotizar</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden gap-3 md:flex">
        <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="Productos anteriores" className={control}>
          <Arrow className="size-5 rotate-180" />
        </button>
        <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="Más productos" className={control}>
          <Arrow className="size-5" />
        </button>
      </div>
    </div>
  );
}
