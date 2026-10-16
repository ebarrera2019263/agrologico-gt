import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import AboutCarousel from "@/components/AboutCarousel";
import ContactForm from "@/components/ContactForm";
import ProductRail from "@/components/ProductRail";
import BrandCatalog from "@/components/BrandCatalog";
import Solutions from "@/components/Solutions";
import ZoneMap from "@/components/ZoneMap";
import { Arrow, Mail, Phone, Pin, WhatsApp } from "@/components/icons";
import { Isotipo, Leaf } from "@/components/Leaf";
import Logo from "@/components/Logo";
import { brands, history, ownBrands, nav, products, projectPhotos, projectSteps, site, values, waLink } from "@/lib/content";

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

// Título de sección armado como el logo: isotipo a la izquierda, título y subtítulo a la derecha.
function SectionTitle({ title, kicker, light = false }: { title: string; kicker?: string; light?: boolean }) {
  return (
    <div className="flex items-start gap-4 md:gap-5">
      <Isotipo
        light={light}
        className={`w-auto shrink-0 ${kicker ? "mt-1 h-[4.75rem] md:h-[5.75rem]" : "mt-0.5 h-10 md:h-[3.25rem]"}`}
      />
      <div className="min-w-0">
        <h2
          className={`text-[2.125rem] leading-[1.1] font-medium tracking-tight text-balance md:text-[2.75rem] ${
            light ? "text-white" : "text-brand-900"
          }`}
        >
          {title}
        </h2>
        {kicker && (
          <p className={`mt-2 text-lg font-medium md:text-xl ${light ? "text-brand-300" : "text-brand-600"}`}>{kicker}</p>
        )}
      </div>
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
              src="/img/photos/hero-aspersion.jpg"
              alt="Aspersores regando hileras de cultivo con montañas al fondo"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Oscurece solo arriba (menú) y a la izquierda (titular); el resto de la foto conserva su color. */}
          <div className="absolute inset-x-0 top-0 -z-10 h-1/3 bg-gradient-to-b from-brand-900/70 to-transparent" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/85 via-brand-900/45 via-45% to-transparent to-75%" />
          <Leaf line className="pointer-events-none absolute top-[17%] left-[6%] -z-10 w-[max(1250px,130vw)] max-w-none text-white/35 lg:left-[40%] lg:w-[1100px]" />

          <div className="mx-auto w-full max-w-7xl px-6 pt-28">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-[1] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
                {["Soluciones", "y tecnología", "al alcance de todos."].map((w, k) => (
                  <span key={w} className="block">
                    <span className="hero-word" style={{ "--i": k } as React.CSSProperties}>
                      {w}
                    </span>
                  </span>
                ))}
              </h1>
              <div className="hero-after mt-10 flex flex-wrap gap-3" style={{ "--i": 1 } as React.CSSProperties}>
                <Button href="#productos">Ver productos</Button>
                <Button href="#contacto" light>
                  Cotizar proyecto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* LÍNEAS DE NEGOCIO */}
        <section id="lineas-de-negocio" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle title="Líneas de negocio" kicker="15 líneas, un solo proveedor" />
              <p className={`max-w-md ${body}`}>
                Desde el diseño del proyecto hasta la puesta en marcha: riego, cultivos protegidos, energía, agua,
                insumos y mucho más. Toca cada línea para ver equipos, marcas y cotizar.
              </p>
            </Reveal>
            <Solutions />
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" className="relative overflow-hidden bg-cream pt-4 pb-24 md:pb-32">
          <Leaf line className="pointer-events-none absolute -top-16 -right-[8%] w-[min(1000px,130vw)] rotate-90 text-brand-500/35 lg:right-[2%]" />
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

          {/* Productos por marca representada */}
          <div className="relative mx-auto mt-20 max-w-7xl px-6 md:mt-24">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <h3 className="text-[1.75rem] leading-tight font-medium tracking-tight text-brand-900 md:text-[2.25rem]">
                Productos por marca
              </h3>
              <p className={`max-w-md ${body}`}>
                Elige una marca y conoce algunos de los equipos e insumos que te podemos ofrecer.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10">
              <BrandCatalog />
            </Reveal>
          </div>
        </section>

        {/* BANDA IMAGEN */}
        <section className="band relative isolate h-[70vh] min-h-[420px] overflow-clip">
          <div className="band-media absolute inset-x-0 -top-[12%] -bottom-[12%] -z-10">
            <Image src="/img/photos/carrete.jpg" alt="Equipo de riego mecanizado en operación" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-900/75 via-brand-900/10 to-transparent" />
          <Leaf
            line
            drawable
            className="band-leaf pointer-events-none absolute -bottom-[55%] left-[6%] -z-10 w-[min(1000px,110vw)] -rotate-[10deg] text-white/40"
          />
          <Reveal group className="mx-auto flex h-full max-w-7xl items-end justify-end px-6 pb-12 md:pb-16">
            <p className="text-right text-[1.75rem] leading-tight font-medium text-balance text-white md:text-[2.75rem]">
              <span className="line-mask">
                <span style={{ "--i": 0 } as React.CSSProperties}>“Por un mejor</span>
              </span>
              <span className="line-mask text-sun italic">
                <span style={{ "--i": 1 } as React.CSSProperties}>planeta Tierra”</span>
              </span>
            </p>
          </Reveal>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="relative isolate overflow-hidden bg-brand-900 py-24 text-white md:py-32">
          <Leaf line className="pointer-events-none absolute -bottom-[35%] -left-[20%] -z-10 w-[min(1100px,150vw)] text-brand-300/30" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <Reveal>
                <SectionTitle title="Proyectos" kicker="Del diseño a la puesta en marcha" light />
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-[17px]">
                  Diseñamos, suministramos e instalamos proyectos de riego, bombeo, cultivos protegidos e
                  infraestructura agrícola en toda la región, y nos quedamos contigo después de la entrega.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="#contacto" light>
                    Cuéntanos tu proyecto
                  </Button>
                </div>
              </Reveal>
              {/* Pasos reales de un proyecto: aquí el orden sí importa. */}
              <ol className="grid gap-x-10 sm:grid-cols-2">
                {projectSteps.map((st, k) => (
                  <Reveal as="li" key={st.title} delay={k * 90} className="border-t border-white/15 py-6">
                    <span className="flex items-center gap-3 text-sm font-semibold text-brand-300">
                      <Leaf className={`size-4 ${k === projectSteps.length - 1 ? "text-sun" : "text-brand-300"}`} />
                      Paso {k + 1}
                    </span>
                    <p className="mt-3 text-xl font-medium">{st.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/80">{st.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Mosaico de fotos de proyectos. TODO: reemplazar por casos reales con nombre y lugar. */}
            <ul className="mt-16 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4">
              {projectPhotos.map((ph, k) => (
                <Reveal
                  as="li"
                  key={ph.src}
                  delay={k * 80}
                  className={`relative overflow-hidden rounded-3xl bg-brand-800 ${
                    k === 0 ? "col-span-2 row-span-2" : k === 1 ? "row-span-2" : ""
                  }`}
                >
                  <Image src={ph.src} alt={ph.alt} fill sizes={k === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"} className="object-cover" />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* MARCAS */}
        <section id="marcas" className="overflow-hidden py-24 md:py-28">
          {/* Marcas propias de riego: van primero y con más peso que las representadas. */}
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionTitle title="Nuestras marcas de riego" kicker="Desarrollo propio Agrologico" />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {ownBrands.map((b, k) => (
                <Reveal key={b.id} delay={k * 120}>
                  <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_40px_-24px_rgba(0,53,43,0.35)] ring-1 ring-brand-700/10 md:p-10">
                    <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${b.accent}`} />
                    <div className="relative h-12 w-full max-w-[300px] md:h-14">
                      <Image src={`/img/own/${b.id}.png`} alt={b.name} fill sizes="300px" className="object-contain object-left" />
                    </div>
                    <p className={`mt-6 max-w-md ${body}`}>{b.desc}</p>
                    <div className="mt-auto pt-8">
                      <Button href="#contacto">
                        Cotizar {b.name}
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-7xl px-6 md:mt-28">
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
                  de nuestros socios comerciales.
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
                  <Leaf
                    className={`absolute -top-[9px] left-0 size-4 ${
                      k === history.length - 1 ? "text-sun" : "text-brand-500"
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

        {/* COBERTURA */}
        <section id="cobertura" className="relative isolate overflow-hidden bg-brand-800 py-24 text-white md:py-32">
          <Leaf line className="pointer-events-none absolute -top-[25%] -right-[22%] -z-10 w-[min(1000px,140vw)] rotate-[70deg] text-brand-300/25" />
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle title="Zonas de venta" kicker="Presencia en toda la región" light />
              <p className="max-w-md text-base leading-relaxed text-white/85 md:text-[17px]">
                Toca tu zona en el mapa para ver el teléfono de tu asesor. Equipos de ventas y soporte técnico en
                campo en cada etapa de tu proyecto.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-12 md:mt-14">
              <ZoneMap />
            </Reveal>
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
      <footer className="relative isolate overflow-hidden bg-brand-100">
        {/* Cierre con la composición de la marca: hoja sol sólida y hoja de contorno. */}
        <Leaf line className="pointer-events-none absolute -top-[10%] -left-[8%] -z-10 w-[min(1400px,160vw)] rotate-[4deg] text-brand-300/70" />
        <Leaf className="pointer-events-none absolute -top-24 -right-28 -z-10 w-[300px] rotate-[6deg] text-sun sm:w-[420px] lg:-top-32 lg:right-[6%] lg:w-[520px]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-4 md:pt-28">
          <Logo className="logo-hover h-16 w-auto md:h-20" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-brand-900">Agrologico</h3>
            <ul className="mt-4 space-y-1 text-[15px] text-brand-900/85">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-block py-1 transition-colors hover:text-brand-700 hover:underline">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-900">Productos</h3>
            <ul className="mt-4 space-y-1 text-[15px] text-brand-900/85">
              {products.map((p) => (
                <li key={p.img}>
                  <a href="#productos" className="inline-block py-1 transition-colors hover:text-brand-700 hover:underline">{p.title.join(" ").replace("- ", "")}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-900">Contacto</h3>
            <ul className="mt-4 space-y-1 text-[15px] text-brand-900/85">
              <li>{site.address}</li>
              <li><a href={`mailto:${site.email}`} className="inline-block py-1 transition-colors hover:text-brand-700 hover:underline">{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-block py-1 transition-colors hover:text-brand-700 hover:underline">{site.phone}</a></li>
            </ul>
          </div>
        </div>
        {/* Franja de lemas con la línea tricolor de la marca: verde · sol · verde. */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-2 pb-3 text-sm font-bold tracking-wide text-brand-700/70 uppercase sm:flex-row sm:items-end sm:justify-between md:text-base">
            <p>Soluciones y tecnología al alcance de todos</p>
            <p>“Por un mejor planeta Tierra”</p>
          </div>
          <div aria-hidden="true" className="grid h-[3px] grid-cols-3">
            <span className="bg-brand-300" />
            <span className="bg-sun" />
            <span className="bg-brand-300" />
          </div>
          <p className="py-6 text-sm text-brand-900/80">
            © {new Date().getFullYear()} Agrologico. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
