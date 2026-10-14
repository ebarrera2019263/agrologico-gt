// Logotipo completo en SVG, con las mismas proporciones del archivo oficial (2606 × 689).
// El isotipo va en vectores para poder animar la "a" y cada hoja por separado (ver .logo-* en globals.css);
// el texto del logo es la imagen oficial recortada, en verde y en blanco para fondos oscuros.
export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 2606 689" className={className} role="img" aria-label="Agrologico">
      <g transform="scale(0.9922 0.994)">
        <path
          className={`logo-a transition-[fill] duration-300 ${light ? "fill-white" : "fill-brand-500"}`}
          fillRule="evenodd"
          d="M384 192V399H320A22 22 0 0 1 298 377V352A192 192 0 1 1 384 192ZM85 192A107 107 0 1 0 299 192A107 107 0 1 0 85 192Z"
        />
        <path className="logo-leaf logo-leaf-l fill-sun" d="M0 487A177 177 0 0 1 177 664A177 177 0 0 1 0 487Z" />
        <path className="logo-leaf logo-leaf-r fill-brand-300" d="M384 487A177 177 0 0 0 207 664A177 177 0 0 0 384 487Z" />
      </g>
      <image href="/img/wordmark.png" x="534" y="29" width="2072" height="660" className={`transition-opacity duration-300 ${light ? "opacity-0" : "opacity-100"}`} />
      <image href="/img/wordmark-white.png" x="534" y="29" width="2072" height="660" className={`transition-opacity duration-300 ${light ? "opacity-100" : "opacity-0"}`} />
    </svg>
  );
}
