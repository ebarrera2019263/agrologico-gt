"use client";

import { useState, type KeyboardEvent } from "react";
import { waTo, zones } from "@/lib/content";
import { MAP_SIZE, mapCentroids, mapPaths } from "@/lib/map-paths";
import { Phone, Pin, WhatsApp } from "./icons";

const CONTEXT = ["mx", "pa"];

// Mapa de zonas de venta: tocar una zona (en el mapa o en la lista) muestra su contacto.
export default function ZoneMap() {
  const [selected, setSelected] = useState(zones[0].id);
  const zone = zones.find((z) => z.id === selected)!;
  const pin = mapCentroids[zone.paths[0]];

  const onKey = (id: string) => (e: KeyboardEvent<SVGGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(id);
    }
  };

  const label = zone.country === zone.name ? zone.name : `${zone.country} · ${zone.name}`;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
      {/* Lista de zonas: misma acción que el mapa, accesible con teclado y lector de pantalla. */}
      <ul className="order-2 self-start divide-y divide-white/15 border-y border-white/15 lg:order-1">
        {zones.map((z) => {
          const on = z.id === selected;
          return (
            <li key={z.id}>
              <button
                type="button"
                onClick={() => setSelected(z.id)}
                aria-pressed={on}
                className={`flex min-h-16 w-full items-center gap-3 py-3 text-left transition-colors duration-200 ${
                  on ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                <Pin className={`size-5 shrink-0 transition-colors ${on ? "text-sun" : "text-brand-300"}`} />
                <span className="flex-1">
                  <span className={`block text-lg font-medium sm:text-xl ${on ? "text-sun" : ""}`}>
                    {z.name}
                  </span>
                  <span className="block text-sm text-white/70">
                    {z.country !== z.name ? `${z.country} · ` : ""}
                    {z.detail}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
        <li className="flex min-h-16 items-center gap-3 py-3 text-white/80">
          <Pin className="size-5 shrink-0 text-white/40" />
          <span>
            <span className="block text-lg font-medium sm:text-xl">Otros países</span>
            <span className="block text-sm text-white/70">Consúltanos</span>
          </span>
        </li>
      </ul>

      <div className="order-1 lg:order-2">
        <div className="relative">
          <svg
            viewBox={`0 0 ${MAP_SIZE.w} ${MAP_SIZE.h}`}
            className="h-auto w-full"
            role="group"
            aria-label="Mapa de zonas de venta en Centroamérica"
          >
            {CONTEXT.map((k) => (
              <path key={k} d={mapPaths[k]} className="fill-white/[0.07]" />
            ))}
            {zones.map((z) => {
              const on = z.id === selected;
              return (
                <g
                  key={z.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${z.country === z.name ? z.name : `${z.country}, ${z.name}`}: ver contacto`}
                  aria-pressed={on}
                  onClick={() => setSelected(z.id)}
                  onKeyDown={onKey(z.id)}
                  className={`zone cursor-pointer outline-none ${on ? "is-on" : ""}`}
                >
                  {z.paths.map((k) => (
                    <path key={k} d={mapPaths[k]} />
                  ))}
                </g>
              );
            })}
            {/* Límites internos entre las zonas de Guatemala */}
            <path d={mapPaths["gt-borders"]} className="pointer-events-none fill-none stroke-brand-800" strokeWidth={1.2} />
            {pin && (
              <g key={zone.id} className="zone-pin pointer-events-none" transform={`translate(${pin[0]} ${pin[1]})`}>
                <circle r="14" className="fill-sun/30" />
                <circle r="6" className="fill-white stroke-brand-900" strokeWidth={2} />
              </g>
            )}
          </svg>
        </div>

        {/* Contacto de la zona elegida */}
        <div key={zone.id} className="solution-body mt-6 rounded-[2rem] bg-white p-6 text-brand-900 sm:p-8" aria-live="polite">
          <p className="text-sm font-semibold text-brand-600">Zona de venta</p>
          <p className="mt-1 text-2xl font-medium text-balance">{label}</p>
          <p className="mt-1 text-[15px] text-brand-900/75">{zone.detail}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${zone.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <Phone className="size-5" /> {zone.phone}
            </a>
            <a
              href={waTo(zone.whatsapp, `¡Hola, Agrologico! 👋 Escribo desde ${label}. Me gustaría recibir información y una cotización.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-brand-700/20 px-6 text-[15px] font-semibold text-brand-800 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              <WhatsApp className="size-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
