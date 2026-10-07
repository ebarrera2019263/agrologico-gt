import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Agrologico | Soluciones y tecnología al alcance de todos",
  description:
    "Sistemas y equipos de riego, mangueras, válvulas, cultivos protegidos, automatización y soluciones agroindustriales en Centroamérica. Más de 18 años en el mercado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
