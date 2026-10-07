"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "./icons";

const slides = [
  { src: "/img/photos/planta.jpg", alt: "Instalaciones agroindustriales con naves y casas malla" },
  { src: "/img/photos/riego-campo.jpg", alt: "Riego por aspersión en campo de cultivo" },
  { src: "/img/photos/pivote.jpg", alt: "Pivote central regando un campo" },
];

export default function AboutCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d: number) => setI((v) => (v + d + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [i, paused]);

  const control = "grid size-11 place-items-center rounded-full text-brand-600 transition-colors hover:bg-brand-100 hover:text-brand-800";

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos de proyectos Agrologico"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] rounded-tl-none bg-brand-100">
        {slides.map((s, k) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            aria-hidden={k !== i}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition-opacity duration-1000 ${k === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-1">
        <button type="button" onClick={() => go(-1)} aria-label="Imagen anterior" className={control}>
          <Arrow className="size-5 rotate-180" />
        </button>
        {slides.map((s, k) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Ver imagen ${k + 1} de ${slides.length}`}
            aria-current={k === i}
            className="grid h-11 min-w-8 place-items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ease-out-quart ${
                k === i ? "w-6 bg-brand-600" : "w-1.5 bg-brand-600/35"
              }`}
            />
          </button>
        ))}
        <button type="button" onClick={() => go(1)} aria-label="Imagen siguiente" className={control}>
          <Arrow className="size-5" />
        </button>
      </div>
    </div>
  );
}
