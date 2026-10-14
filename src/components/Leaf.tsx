// La hoja del isotipo: dos arcos de cuarto de círculo entre esquinas opuestas.
// Es la única forma decorativa del sistema; se usa sólida o como contorno fino.
const LEAF = "M0 0A100 100 0 0 1 100 100A100 100 0 0 1 0 0Z";

type LeafProps = {
  className?: string;
  /** Contorno de 1px en lugar de relleno. */
  line?: boolean;
  /** Para dibujar el contorno con el scroll (stroke-dasharray sobre 1). */
  drawable?: boolean;
};

export function Leaf({ className, line = false, drawable = false }: LeafProps) {
  return (
    <svg className={className} viewBox="-1 -1 102 102" fill="none" aria-hidden>
      <path
        d={LEAF}
        fill={line ? "none" : "currentColor"}
        stroke={line ? "currentColor" : undefined}
        strokeWidth={line ? 1 : undefined}
        vectorEffect={line ? "non-scaling-stroke" : undefined}
        pathLength={drawable ? 1 : undefined}
      />
    </svg>
  );
}

// El isotipo completo: la "a" de Agrologico sobre sus dos hojas.
export function Isotipo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 384 664" aria-hidden>
      <path
        className={light ? "fill-white" : "fill-brand-500"}
        fillRule="evenodd"
        d="M384 192V399H320A22 22 0 0 1 298 377V352A192 192 0 1 1 384 192ZM85 192A107 107 0 1 0 299 192A107 107 0 1 0 85 192Z"
      />
      <path className="fill-sun" d="M0 487A177 177 0 0 1 177 664A177 177 0 0 1 0 487Z" />
      <path className="fill-brand-300" d="M384 487A177 177 0 0 0 207 664A177 177 0 0 0 384 487Z" />
    </svg>
  );
}
