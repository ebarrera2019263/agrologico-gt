import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import AboutCarousel from "@/components/AboutCarousel";
import ContactForm from "@/components/ContactForm";
import ProductRail from "@/components/ProductRail";
import Solutions from "@/components/Solutions";
import { Arrow, Mail, Phone, Pin, WhatsApp } from "@/components/icons";
import { brands, history, nav, products, site, values, waLink, zones } from "@/lib/content";

function Button({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-200 ${
        light ? "bg-white text-brand-800 hover:bg-brand-100" : "bg-brand-600 text-white hover:bg-brand-700"
      }`}
    >
      {children} <Arrow className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionTitle({ title, kicker, light = false }: { title: string; kicker?: string; light?: boolean }) {
  return (
    <div>
      <h2
        className={`text-[2.125rem] leading-[1.1] font-medium tracking-tight text-balance md:text-[2.75rem] ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {kicker && (
        <p className={`mt-3 text-lg font-medium md:text-xl ${light ? "text-brand-300" : "text-brand-600"}`}>{kicker}</p>
      )}
    </div>
  );
}

const body = "text-base leading-relaxed text-brand-900/80 md:text-[17px]";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-clip">
          <div className="hero-media absolute inset-0 -z-20">
            <Image
              src="/img/photos/hero.jpg"
              alt="Riego por aspersión en campo agrícola al atardecer"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/90 via-brand-900/55 to-brand-900/10" />
          <svg
            className="pointer-events-none absolute left-1/2 top-[14%] -z-10 w-[150vw] max-w-none -translate-x-1/2 text-white/40"
            viewBox="0 0 1600 900"
            fill="none"
            aria-hidden
          >
            <circle cx="800" cy="900" r="760" stroke="currentColor" strokeWidth="1" />
            <circle cx="260" cy="980" r="560" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          </svg>

          <div className="mx-auto w-full max-w-7xl px-6 pt-28">
            <div className="max-w-2xl md:ml-[38%]">
              <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
                {["Agua.", "Campo.", "Futuro."].map((w, k) => (
                  <span key={w} className="block">
                    <span className="hero-word" style={{ "--i": k } as React.CSSProperties}>
                      {w}
                    </span>
                  </span>
                ))}
              </h1>
              <p className="hero-after mt-6 max-w-md text-2xl font-normal leading-snug text-white/90 md:text-[1.7rem]">
                Soluciones y tecnología al alcance de todos
              </p>
              <div className="hero-after mt-8 flex flex-wrap gap-3" style={{ "--i": 1 } as React.CSSProperties}>
                <Button href="#productos">Ver productos</Button>
                <Button href="#contacto" light>
                  Cotizar proyecto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SOMOS */}
        <section id="nosotros" className="bg-cream py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <SectionTitle title="Somos Agrologico" kicker="Soluciones agroindustriales" />
              <div className={`mt-8 space-y-5 ${body}`}>
                <p>
                  Somos una empresa centroamericana con <strong className="text-brand-900">más de 18 años de experiencia</strong>{" "}
                  proveyendo <strong className="text-brand-900">sistemas y equipos de riego, mangueras, válvulas y tecnología agroindustrial</strong>{" "}
                  con atención personalizada y productos de vanguardia a nivel mundial.
                </p>
                <p>
                  Nuestro propósito: incrementar la <strong className="text-brand-900">productividad, rentabilidad y desarrollo sostenible</strong>{" "}
                  de nuestros socios comerciales.{" "}
                  <strong className="text-brand-900">Por un mejor planeta Tierra.</strong>
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-700/10 pt-8">
                {[
                  ["18+", "años en el mercado"],
                  ["6", "países de la región"],
                  ["15", "líneas de negocio"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="text-4xl font-semibold text-brand-700">{n}</dt>
                    <dd className="mt-1 text-[15px] text-brand-900/75">{l}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Button href="#historia">Conócenos</Button>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <AboutCarousel />
            </Reveal>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" className="relative overflow-hidden bg-cream pt-4 pb-24 md:pb-32">
          <svg
            className="pointer-events-none absolute -top-10 left-[8%] w-[1100px] text-brand-500/30"
            viewBox="0 0 1100 1100"
            fill="none"
            aria-hidden
          >
            <circle cx="550" cy="550" r="540" stroke="currentColor" />
          </svg>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <Reveal className="lg:pt-10">
              <SectionTitle title="Productos" kicker="Sistemas de riego para profesionales" />
              <p className={`mt-6 ${body}`}>
                Mangueras, goteros, aspersores, válvulas, filtros y tuberías de marcas de prestigio mundial y de
                desarrollo propio. Soluciones para goteo, microaspersión, aspersión y riego mecanizado.
              </p>
            </Reveal>
            {/* En escritorio el carril se extiende hasta el borde derecho de la ventana. */}
            <Reveal delay={120} className="min-w-0 lg:-mr-[calc((100vw-min(100vw,80rem))/2+1.5rem)]">
              <ProductRail />
            </Reveal>
          </div>
        </section>

        {/* BANDA IMAGEN */}
        <section className="band relative isolate h-[70vh] min-h-[420px] overflow-clip">
          <div className="band-media absolute inset-x-0 -top-[12%] -bottom-[12%] -z-10">
            <Image src="/img/photos/carrete.jpg" alt="Equipo de riego mecanizado en operación" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-900/75 via-brand-900/10 to-transparent" />
          <svg
            className="band-arc pointer-events-none absolute -bottom-[60%] -left-[10%] -z-10 w-[120%] max-w-none text-white/35"
            viewBox="0 0 1600 900"
            fill="none"
            aria-hidden
          >
            <circle cx="800" cy="900" r="780" stroke="currentColor" strokeWidth="1" pathLength={1} transform="rotate(180 800 900)" />
          </svg>
          <Reveal group className="mx-auto flex h-full max-w-7xl items-end justify-end px-6 pb-12 md:pb-16">
            <p className="text-right text-[1.75rem] leading-tight font-medium text-balance text-white italic md:text-[2.75rem]">
              <span className="line-mask">
                <span style={{ "--i": 0 } as React.CSSProperties}>Tecnología de riego</span>
              </span>
              <span className="line-mask">
                <span style={{ "--i": 1 } as React.CSSProperties}>para cuidar el agua del mañana</span>
              </span>
            </p>
          </Reveal>
        </section>

        {/* SOLUCIONES */}
        <section id="soluciones" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle title="Qué hacemos" kicker="Soluciones integrales para el agro" />
              <p className={`max-w-md ${body}`}>
                Desde el diseño del proyecto hasta la puesta en marcha: riego, cultivos protegidos, energía, agua,
                insumos y mucho más. Toca cada línea para ver equipos, marcas y cotizar.
              </p>
            </Reveal>
            <Solutions />
          </div>
        </section>

        {/* COMPROMISO: misión, visión, valores */}
        <section id="historia" className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal group>
              <div className="grid overflow-clip rounded-[2.5rem] bg-white shadow-[0_24px_60px_-30px_rgba(0,53,43,0.3)] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="compromiso-media relative min-h-[320px] overflow-clip">
                  <Image
                    src="/img/photos/banano.jpg"
                    alt="Cultivo joven con riego tecnificado"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7 sm:p-10 md:p-16">
                  <div className="stagger" style={{ "--i": 0 } as React.CSSProperties}>
                    <SectionTitle title="Compromiso de futuro" />
                  </div>
                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div className="stagger" style={{ "--i": 1 } as React.CSSProperties}>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600">Misión</h3>
                      <p className={`mt-3 ${body}`}>
                        Proveer tecnologías innovadoras y servicios con valor agregado al sector agroindustrial,
                        brindando atención personalizada, equipos y productos de vanguardia a nivel mundial, que
                        permitan incrementar la productividad, rentabilidad, desarrollo sostenible y crecimiento de
                        nuestros socios comerciales y estratégicos.
                      </p>
                    </div>
                    <div className="stagger" style={{ "--i": 2 } as React.CSSProperties}>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600">Visión</h3>
                      <p className={`mt-3 ${body}`}>
                        Ser líderes en soluciones agroindustriales, como la primera opción en la implementación de
                        tecnologías innovadoras, sostenibles y rentables para nuestros socios comerciales.
                      </p>
                    </div>
                  </div>
                  <h3 className="stagger mt-10 text-sm font-bold uppercase tracking-widest text-brand-600" style={{ "--i": 3 } as React.CSSProperties}>
                    Valores
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {values.map((v, k) => (
                      <li
                        key={v}
                        className="chip-pop rounded-full border border-brand-700/20 px-4 py-1.5 text-[15px] text-brand-800"
                        style={{ "--i": k } as React.CSSProperties}
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Historia */}
            <Reveal className="mt-24">
              <SectionTitle title="Un poco de historia" kicker="Agrologico 2.0" />
            </Reveal>
            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {history.map((h, k) => (
                <Reveal as="li" key={h.title} delay={k * 100} className="relative border-t-2 border-brand-500/30 pt-6">
                  <span
                    className={`absolute -top-[7px] left-0 size-3 rounded-full ${
                      k === history.length - 1 ? "bg-sun ring-4 ring-sun/25" : "bg-brand-500"
                    }`}
                  />
                  <p className="text-3xl font-semibold text-brand-700">{h.year}</p>
                  <p className="mt-2 text-lg font-semibold text-brand-900">{h.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-900/75">{h.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* MARCAS */}
        <section id="marcas" className="overflow-hidden py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionTitle title="Marcas que representamos" />
              <p className={`mt-4 max-w-xl ${body}`}>
                Marcas de prestigio mundial y marcas de desarrollo propio.
              </p>
            </Reveal>
          </div>
          <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee flex w-max items-center gap-16">
              {[...brands, ...brands].map((b, k) => (
                <div
                  key={`${b.id}-${k}`}
                  data-dup={k >= brands.length || undefined}
                  aria-hidden={k >= brands.length || undefined}
                  className="relative h-14 w-36 shrink-0 opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                >
                  <Image src={`/img/brands/${b.id}.png`} alt={k < brands.length ? b.name : ""} fill sizes="144px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURA */}
        <section id="cobertura" className="relative isolate overflow-hidden bg-brand-800 py-24 text-white md:py-32">
          <svg className="pointer-events-none absolute -right-60 -top-40 -z-10 w-[900px] text-white/10" viewBox="0 0 900 900" fill="none" aria-hidden>
            <circle cx="450" cy="450" r="440" stroke="currentColor" />
            <circle cx="450" cy="450" r="320" stroke="currentColor" />
          </svg>
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <SectionTitle title="Zonas de venta" kicker="Presencia en toda la región" light />
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-[17px]">
                Equipos de ventas y soporte técnico en campo para acompañarte en cada etapa de tu proyecto.
              </p>
            </Reveal>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {zones.map((z, k) => (
                <Reveal
                  as="li"
                  key={z.name}
                  delay={k * 70}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-6"
                >
                  <span className="flex items-center gap-3 text-xl font-medium sm:text-2xl">
                    <Pin className="size-5 shrink-0 text-sun" /> {z.name}
                  </span>
                  <span className="pl-8 text-[15px] text-white/75 sm:pl-0 sm:text-right">{z.detail}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="relative bg-cream py-24 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="grid gap-12 rounded-[2rem] bg-white p-6 sm:rounded-[2.5rem] sm:p-10 shadow-[0_24px_60px_-30px_rgba(0,53,43,0.35)] md:p-16 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <SectionTitle title="Hablemos de tu proyecto" />
                  <p className={`mt-5 ${body}`}>
                    Cotiza mangueras, válvulas, sistemas de riego o un proyecto llave en mano. Te asesoramos sin
                    compromiso.
                  </p>
                  <ul className="mt-8 space-y-1 text-[17px] text-brand-800">
                    <li>
                      <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-3 transition-colors hover:text-brand-600">
                        <Phone className="size-5 text-brand-500" /> {site.phone}
                      </a>
                    </li>
                    <li>
                      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 transition-colors hover:text-brand-600">
                        <WhatsApp className="size-5 text-brand-500" /> WhatsApp
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 transition-colors hover:text-brand-600">
                        <Mail className="size-5 text-brand-500" /> {site.email}
                      </a>
                    </li>
                    <li className="flex min-h-11 items-center gap-3">
                      <Pin className="size-5 text-brand-500" /> {site.address}
                    </li>
                  </ul>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image src="/img/logo.png" alt="Agrologico" width={200} height={53} className="h-auto w-48" />
            <p className="mt-5 max-w-xs text-[15px] text-brand-900/75">&ldquo;Por un mejor planeta Tierra&rdquo;</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-900">Agrologico</h3>
            <ul className="mt-4 space-y-1 text-[15px] text-brand-900/75">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-block py-1 transition-colors hover:text-brand-600">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-900">Productos</h3>
            <ul className="mt-4 space-y-1 text-[15px] text-brand-900/75">
              {products.map((p) => (
                <li key={p.img}>
                  <a href="#productos" className="inline-block py-1 transition-colors hover:text-brand-600">{p.title.join(" ").replace("- ", "")}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-900">Contacto</h3>
            <ul className="mt-4 space-y-1 text-[15px] text-brand-900/75">
              <li>{site.address}</li>
              <li><a href={`mailto:${site.email}`} className="inline-block py-1 transition-colors hover:text-brand-600">{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-block py-1 transition-colors hover:text-brand-600">{site.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-700/10">
          <p className="mx-auto max-w-7xl px-6 py-6 text-sm text-brand-900/70">
            © {new Date().getFullYear()} Agrologico. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
