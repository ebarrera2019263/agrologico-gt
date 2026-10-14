// Export estático: sin optimizador de imágenes, solo anteponemos el basePath de GitHub Pages.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
