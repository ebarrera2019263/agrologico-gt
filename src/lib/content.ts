// Contenido de la landing. Los datos de contacto marcados con TODO
// son provisionales: reemplazar por los reales de Agrologico.

export const site = {
  name: "Agrologico",
  slogan: "Soluciones y tecnología al alcance de todos",
  phone: "+502 6632 4158",
  whatsapp: "50257879431", // solo dígitos, con código de país
  email: "ventas@agrologico-ca.com",
  url: "https://www.agrologico-ca.com",
  address: "Ciudad de Guatemala, Guatemala", // TODO: dirección real
  whatsappGreeting: "¡Hola, Agrologico! 👋 Vi su página web y me gustaría recibir información sobre sus productos y soluciones. ¿Me pueden ayudar?",
};

// Enlace a WhatsApp con un mensaje ya escrito (por defecto, el saludo general).
export const waLink = (text: string = site.whatsappGreeting) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Líneas de negocio", href: "#lineas-de-negocio" },
  { label: "Productos", href: "#productos" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Quiénes somos", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
];

export const products = [
  {
    title: ["Cinta de goteo", "Mago"],
    img: "/img/products/mago.png",
    desc: "Cinta de goteo de alto rendimiento de SAB, hecha en Italia: riego uniforme y resistente a obstrucciones.",
  },
  {
    title: ["Riego", "por goteo"],
    img: "/img/products/goteo.jpg",
    desc: "Mangueras y cintas con gotero integrado, goteros autocompensados y accesorios.",
  },
  {
    title: ["Micro-", "aspersión"],
    img: "/img/products/microaspersion.jpg",
    desc: "Microaspersores y nebulizadores para frutales, viveros e invernaderos.",
  },
  {
    title: ["Aspersión", "y cañones"],
    img: "/img/products/aspersion.jpg",
    desc: "Aspersores de impacto, cañones y equipos de riego por aspersión.",
  },
  {
    title: ["Válvulas", "hidráulicas"],
    img: "/img/products/valvula.jpg",
    desc: "Válvulas de control, mariposa, ventosas y reguladoras de presión.",
  },
  {
    title: ["Filtración", "de agua"],
    img: "/img/products/filtro.jpg",
    desc: "Filtros de malla, anillas y arena para proteger todo el sistema.",
  },
  {
    title: ["Tuberías y", "conexiones"],
    img: "/img/products/conexiones.jpg",
    desc: "Tubería de polietileno y PVC, conectores, collarines y uniones.",
  },
];

// Líneas de negocio. Textos, equipos y marcas tomados de la presentación
// "Agrologico 2.0 (Agosto 2026)". Las fotos de detalle viven en /img/solutions.
type Partner = { name: string; logo: string };
const p = (name: string, file: string, dir = "partners"): Partner => ({ name, logo: `/img/${dir}/${file}.png` });
const sol = (file: string) => `/img/solutions/${file}.jpg`;

// Fotografías a sangre (se recortan para llenar el recuadro); el resto son recortes de producto o diagramas.
const PHOTOS = new Set([
  "agua-bihox", "auto-controlador", "empaque-bolsas", "empaque-esquineros", "empaque-fundas", "ganaderia-lecheria",
  "granos-planta", "granos-robot", "granos-volcador", "plasticos-acolchado", "plasticos-geomembrana",
  "plasticos-tutoreo", "precision-sensor", "protegidos-flores", "protegidos-macrotunel", "protegidos-nave",
  "proyectos-aguacate", "proyectos-campo", "proyectos-invernaderos", "proyectos-planta", "riego-pivote",
]);
export const isPhoto = (src: string) => PHOTOS.has(src.split("/").pop()!.replace(".jpg", ""));

export type Solution = {
  slug: string;
  title: string;
  img: string;
  isNew?: boolean;
  summary: string;
  items: string[];
  tags?: string[];
  gallery: { src: string; alt: string }[];
  partners: Partner[];
};

export const solutions: Solution[] = [
  {
    slug: "riego",
    title: "Sistemas y equipos de riego",
    img: "/img/photos/riego-campo.jpg",
    summary:
      "Soluciones que cubren todas las necesidades del mercado, con marcas de prestigio mundial y marcas de desarrollo propio: desde el gotero hasta el pivote central.",
    items: [
      "Riego por goteo: mangueras, cintas y goteros autocompensados",
      "Microaspersión y nebulización",
      "Aspersión y cañones de riego",
      "Riego mecanizado: pivotes y enrolladores",
      "Válvulas hidráulicas, filtración, tuberías y conexiones",
    ],
    gallery: [
      { src: sol("riego-mangueras"), alt: "Rollos de manguera de goteo" },
      { src: sol("riego-microaspersores"), alt: "Microaspersores de distintos caudales" },
      { src: sol("riego-canones"), alt: "Cañones de riego por aspersión" },
      { src: sol("riego-enrollador"), alt: "Enrollador de riego Bauer" },
      { src: sol("riego-valvula"), alt: "Válvula hidráulica de control" },
      { src: sol("riego-pivote"), alt: "Pivote central regando un campo" },
    ],
    partners: [
      p("NaanDanJain", "naandanjain", "brands"),
      p("Rivulis", "rivulis", "brands"),
      p("Bermad", "bermad", "brands"),
      p("Valley", "valley", "brands"),
      p("Bauer", "bauer", "brands"),
      p("Nelson", "nelson", "brands"),
      p("Rain Bird", "rainbird", "brands"),
      p("Amiad", "amiad", "brands"),
    ],
  },
  {
    slug: "cultivos-protegidos",
    title: "Cultivos protegidos",
    img: "/img/photos/invernadero.jpg",
    summary: "Invernaderos, casas malla, túneles, naves agrícolas, equipos complementarios e insumos.",
    items: [
      "Invernaderos, macrotúneles y casas malla",
      "Naves agrícolas y tanques de almacenamiento de agua",
      "Ventilación, calefacción y paneles de enfriamiento",
      "Iluminación LED para cultivo",
      "Motorreductores y cremalleras para apertura de ventanas",
    ],
    gallery: [
      { src: sol("protegidos-macrotunel"), alt: "Macrotúneles con cultivo" },
      { src: sol("protegidos-flores"), alt: "Túneles con cultivo de flores" },
      { src: sol("protegidos-nave"), alt: "Nave agrícola" },
      { src: sol("protegidos-ventilador"), alt: "Ventilador de circulación para invernadero" },
      { src: sol("protegidos-calefactor"), alt: "Calefactor para invernadero" },
      { src: sol("protegidos-panel"), alt: "Panel evaporativo de enfriamiento" },
    ],
    partners: [
      p("Ridder", "ridder"),
      p("Vostermans Ventilation", "vostermans"),
      p("Multifan", "multifan"),
      p("Fluence by Osram", "fluence"),
      p("Termotecnica Pericoli", "pericoli"),
      p("Asthor Agrícola", "asthor"),
      p("Buwatec", "buwatec"),
    ],
  },
  {
    slug: "automatizacion",
    title: "Automatización y ferti-riego",
    img: "/img/photos/control.jpg",
    summary:
      "Controladores, equipos de fertirrigación y control de clima para regar y nutrir con precisión, con monitoreo desde la computadora.",
    items: [
      "Controladores de riego",
      "Equipos de inyección y mezcla para ferti-riego",
      "Control de clima para invernaderos",
      "Estaciones meteorológicas y sensores",
      "Software de monitoreo",
    ],
    gallery: [
      { src: sol("auto-controlador"), alt: "Controlador de riego instalado en campo" },
      { src: sol("auto-fertirriego"), alt: "Equipo de ferti-riego" },
      { src: sol("auto-tableros"), alt: "Tableros de control de clima" },
      { src: sol("auto-cx500"), alt: "Sistema de control con software de monitoreo" },
    ],
    partners: [
      p("Talgil", "talgil"),
      p("Ridder", "ridder"),
      p("Skov-Sercom", "skov-sercom"),
      p("Sercom", "sercom"),
      p("Spectrum Technologies", "spectrum"),
      p("WatchDog", "watchdog"),
    ],
  },
  {
    slug: "proyectos",
    title: "Diseño y desarrollo de proyectos",
    img: "/img/photos/tanques.jpg",
    summary:
      "Acompañamos el proyecto completo: diseño, suministro, instalación y puesta en marcha, con soporte técnico en campo.",
    items: [
      "Diseño de sistemas de riego y estaciones de bombeo",
      "Proyectos de cultivos protegidos e infraestructura agrícola",
      "Instalación y puesta en marcha",
      "Proyectos llave en mano",
    ],
    gallery: [
      { src: sol("proyectos-planta"), alt: "Vista aérea de un proyecto agroindustrial" },
      { src: sol("proyectos-campo"), alt: "Riego por aspersión en campo" },
      { src: sol("proyectos-aguacate"), alt: "Plantación de aguacate con riego" },
      { src: sol("proyectos-invernaderos"), alt: "Invernaderos de un proyecto" },
    ],
    partners: [],
  },
  {
    slug: "granos",
    title: "Manejo de granos",
    img: "/img/photos/granos.jpg",
    summary:
      "Almacenamiento, recepción y procesamiento de granos, con agrointeligencia para monitorear la poscosecha.",
    items: [
      "Silos y plantas de almacenamiento",
      "Volcadores de camiones y recepción de grano",
      "Equipos de procesamiento",
      "Agrointeligencia y monitoreo del grano almacenado",
    ],
    gallery: [
      { src: sol("granos-planta"), alt: "Planta de silos al atardecer" },
      { src: sol("granos-volcador"), alt: "Volcador de camiones Saur" },
      { src: sol("granos-robot"), alt: "Robot de monitoreo dentro de un silo" },
      { src: sol("granos-agrointeligencia"), alt: "Esquema de agrointeligencia de poscosecha" },
    ],
    partners: [
      p("Kepler Weber", "kepler-weber"),
      p("Saur", "saur"),
      p("Ferraz", "ferraz"),
      p("Zaccaria", "zaccaria"),
      p("Procer", "procer"),
    ],
  },
  {
    slug: "precision",
    title: "Agricultura de precisión / IA",
    img: "/img/photos/indoor.jpg",
    summary:
      "Software y sensores para tomar decisiones con datos: gestión de la finca, monitoreo del cultivo y analítica.",
    items: [
      "Software de gestión agrícola (ERP agro)",
      "Sensores de campo y monitoreo del cultivo",
      "Tableros de datos para producción, almacén, logística y trazabilidad",
    ],
    gallery: [
      { src: sol("precision-tablero"), alt: "Tablero de datos de producción agrícola" },
      { src: sol("precision-erp"), alt: "Procesos que cubre el ERP agro" },
      { src: sol("precision-sensor"), alt: "Sensor instalado en un árbol frutal" },
    ],
    partners: [p("Hispatec", "hispatec"), p("SensiGrow", "sensigrow")],
  },
  {
    slug: "motores",
    title: "Generadores y motobombas",
    img: "/img/photos/generador.jpg",
    summary: "Generadores eléctricos, motobombas, motores y bombas, con repuestos originales.",
    items: ["Generadores eléctricos", "Motobombas y bombas de agua", "Motores", "Torres de iluminación", "Repuestos"],
    gallery: [
      { src: sol("motores-generador"), alt: "Generador eléctrico MWM" },
      { src: sol("motores-motobomba"), alt: "Motobomba sobre remolque" },
      { src: sol("motores-motor"), alt: "Motor diésel" },
      { src: sol("motores-torre"), alt: "Torre de iluminación" },
    ],
    partners: [
      p("MWM", "mwm"),
      p("Goulds Pumps", "goulds-pumps"),
      p("Goulds Water Technology", "goulds-xylem"),
      p("Hayward", "hayward"),
      p("US Motors", "us-motors"),
      p("Zebol", "zebol"),
      p("HCP", "hcp"),
      p("Well Mate", "wellmate"),
    ],
  },
  {
    slug: "ganaderia",
    title: "Ganadería",
    img: "/img/photos/ganaderia.jpg",
    isNew: true,
    summary: "Soluciones llave en mano para instalaciones de bovinos, porcinos y aves: clima, ventilación y control.",
    items: ["Soluciones llave en mano", "Control de clima y ventilación para galpones", "Monitoreo desde la computadora"],
    gallery: [
      { src: sol("ganaderia-galpon"), alt: "Esquema de galpón equipado con control de clima" },
      { src: sol("ganaderia-sistema"), alt: "Galpón con sistema de monitoreo" },
      { src: sol("ganaderia-lecheria"), alt: "Establo lechero" },
    ],
    partners: [p("Skov-Sercom", "skov-sercom")],
  },
  {
    slug: "poscosecha",
    title: "Equipos de post-cosecha",
    img: "/img/photos/postcosecha.jpg",
    summary: "Líneas de lavado, selección y empaque para preparar la fruta y la hortaliza para el mercado.",
    items: ["Líneas de lavado y selección", "Equipos de empaque"],
    gallery: [
      { src: sol("poscosecha-linea"), alt: "Línea de selección de fruta" },
      { src: sol("poscosecha-linea-2"), alt: "Línea de lavado y empaque" },
    ],
    partners: [p("Rochin", "rochin")],
  },
  {
    slug: "nutricion",
    title: "Nutrición vegetal y bioprotectores",
    img: "/img/photos/nutricion.jpg",
    summary: "Fertilizantes foliares, bioestimulantes y bioprotectores para un cultivo sano y productivo.",
    items: ["Nutrición foliar", "Bioestimulantes", "Bioprotectores", "Correctores de magnesio"],
    gallery: [{ src: sol("nutricion-fico"), alt: "Línea de productos de Grupo Fico" }],
    partners: [p("TIM FoliUp", "foliup"), p("Sunfortis", "sunfortis"), p("TIMAB Magnesium", "timab"), p("Grupo Fico", "fico")],
  },
  {
    slug: "empaque",
    title: "Material de empaque y pallet",
    img: "/img/photos/empaque.jpg",
    isNew: true,
    summary: "Empaque 100 % biodegradable y compostable, 100 % libre de PE.",
    tags: ["100 % biodegradable", "100 % compostable", "Libre de PE"],
    items: ["Esquineros de cartón", "Fundas para racimo", "Bolsas para caja de exportación", "Pallets de madera"],
    gallery: [
      { src: sol("empaque-esquineros"), alt: "Esquineros de cartón" },
      { src: sol("empaque-fundas"), alt: "Fundas protegiendo racimos de banano" },
      { src: sol("empaque-bolsas"), alt: "Bolsa dentro de caja de exportación" },
      { src: sol("empaque-pallets"), alt: "Pallets de madera" },
    ],
    partners: [p("Ângulo Reto", "angulo-reto"), p("TEX", "tex"), p("Zero Plástico", "zero-plastico")],
  },
  {
    slug: "plasticos",
    title: "Plásticos agrícolas y geomembranas",
    img: "/img/photos/acolchado.jpg",
    summary: "Acolchado, películas, mallas y geomembranas para cultivos, reservorios y canales.",
    tags: ["Acolchado cristal", "Acolchado negro", "Acolchado verde"],
    items: [
      "Acolchado plástico",
      "Película para invernadero",
      "Mallas de sombra y de tutoreo",
      "Geomembranas para reservorios y canales",
    ],
    gallery: [
      { src: sol("plasticos-acolchado"), alt: "Campo con acolchado plástico" },
      { src: sol("plasticos-geomembrana"), alt: "Canal revestido con geomembrana" },
      { src: sol("plasticos-tutoreo"), alt: "Malla de tutoreo con planta" },
      { src: sol("plasticos-malla"), alt: "Rollo de malla de sombra" },
    ],
    partners: [p("Cotexa", "cotexa"), p("Agroplásticos", "agroplasticos")],
  },
  {
    slug: "insumos",
    title: "Insumos y control de plagas",
    img: "/img/photos/plagas.jpg",
    summary: "Sustratos, bandejas, macetas y productos para el control de plagas y roedores.",
    items: ["Sustratos de fibra de coco", "Bandejas de germinación y macetas", "Control de plagas", "Control de roedores"],
    gallery: [
      { src: sol("insumos-sustrato"), alt: "Sustrato de coco con hortalizas" },
      { src: sol("insumos-bandejas"), alt: "Bandeja de germinación" },
      { src: sol("insumos-macetas"), alt: "Macetas plásticas" },
      { src: sol("insumos-cebo"), alt: "Producto para control de roedores" },
    ],
    partners: [p("Zapi", "zapi"), p("SEDA", "seda"), p("Grupo Fico", "fico")],
  },
  {
    slug: "solar",
    title: "Energía solar",
    img: "/img/photos/solar.jpg",
    summary: "Soluciones de energía solar para la finca y el bombeo de agua.",
    items: ["Sistemas solares para la finca", "Energía para bombeo"],
    gallery: [{ src: sol("solar-planta"), alt: "Planta solar junto a un cultivo" }],
    partners: [],
  },
  {
    slug: "agua",
    title: "Tratamiento de agua",
    img: "/img/photos/agua.jpg",
    summary: "Oxigenación, nanoburbujas, separación de sólidos y reutilización del agua de drenaje.",
    items: [
      "Oxigenación del agua de riego",
      "Tecnología de nanoburbujas",
      "Separadores de sólidos",
      "Reutilización del agua de drenaje",
    ],
    gallery: [
      { src: sol("agua-moleaer"), alt: "Equipo de nanoburbujas Moleaer" },
      { src: sol("agua-bihox"), alt: "Equipo de oxigenación Bihox instalado" },
      { src: sol("agua-separador"), alt: "Separador de sólidos" },
      { src: sol("agua-reuso"), alt: "Esquema de reutilización del agua de drenaje" },
    ],
    partners: [p("Bihox", "bihox"), p("Moleaer", "moleaer"), p("Ridder", "ridder")],
  },
];

// Soluciones por cultivo. BORRADOR redactado a partir de las líneas de negocio:
// revisar con el equipo comercial qué ofrecer a cada cultivo.
// Cada recomendación enlaza a la ficha de su línea (`line` = slug en `solutions`).
export type Crop = {
  slug: string;
  name: string;
  img: string;
  alt: string;
  intro: string;
  offer: { line: string; text: string }[];
};

export const crops: Crop[] = [
  {
    slug: "banano",
    name: "Banano",
    img: "/img/crops/banano.jpg",
    alt: "Racimo de banano en la planta",
    intro: "Del campo a la caja de exportación: riego, nutrición y empaque para una fruta pareja y de calidad.",
    offer: [
      { line: "riego", text: "Microaspersión y riego por goteo" },
      { line: "nutricion", text: "Nutrición foliar y bioestimulantes" },
      { line: "empaque", text: "Fundas para racimo, esquineros y bolsas biodegradables" },
      { line: "poscosecha", text: "Líneas de lavado, selección y empaque" },
    ],
  },
  {
    slug: "cafe",
    name: "Café",
    img: "/img/crops/cafe.jpg",
    alt: "Rama de cafeto con frutos maduros",
    intro: "Cafetales más productivos desde el vivero, con riego eficiente en ladera y nutrición a la medida.",
    offer: [
      { line: "insumos", text: "Bandejas, sustratos y macetas para vivero" },
      { line: "riego", text: "Riego por goteo autocompensado para ladera" },
      { line: "nutricion", text: "Nutrición foliar y correctores de magnesio" },
      { line: "precision", text: "Sensores y monitoreo del cultivo" },
    ],
  },
  {
    slug: "cana",
    name: "Caña de azúcar",
    img: "/img/crops/cana.jpg",
    alt: "Plantación de caña de azúcar",
    intro: "Riego mecanizado y bombeo para grandes extensiones, con el agua bajo control.",
    offer: [
      { line: "riego", text: "Pivotes, enrolladores y cañones de riego" },
      { line: "motores", text: "Motobombas y generadores" },
      { line: "plasticos", text: "Geomembranas para reservorios y canales" },
      { line: "automatizacion", text: "Controladores y ferti-riego" },
    ],
  },
  {
    slug: "hortalizas",
    name: "Hortalizas",
    img: "/img/crops/hortalizas.jpg",
    alt: "Hileras de hortalizas en campo abierto",
    intro: "Producción intensiva con agua, nutrición y protección exactas para cada ciclo.",
    offer: [
      { line: "riego", text: "Cintas de goteo y goteros" },
      { line: "plasticos", text: "Acolchado plástico y mallas de tutoreo" },
      { line: "cultivos-protegidos", text: "Macrotúneles y casas malla" },
      { line: "automatizacion", text: "Equipos de ferti-riego" },
      { line: "insumos", text: "Bandejas de germinación y control de plagas" },
    ],
  },
  {
    slug: "flores",
    name: "Flores y ornamentales",
    img: "/img/crops/flores.jpg",
    alt: "Flores de colores dentro de un invernadero",
    intro: "Clima, agua y luz controlados para flores y plantas de exportación.",
    offer: [
      { line: "cultivos-protegidos", text: "Invernaderos, ventilación e iluminación LED" },
      { line: "automatizacion", text: "Control de clima para invernaderos" },
      { line: "riego", text: "Nebulización y microaspersión" },
      { line: "agua", text: "Oxigenación y reúso del agua de drenaje" },
    ],
  },
  {
    slug: "palma",
    name: "Palma de aceite",
    img: "/img/crops/palma.jpg",
    alt: "Plantación de palma de aceite",
    intro: "Agua y energía para plantaciones extensas, con datos para gestionar la finca.",
    offer: [
      { line: "riego", text: "Aspersión y riego por goteo" },
      { line: "motores", text: "Motobombas y generadores" },
      { line: "solar", text: "Energía solar para bombeo" },
      { line: "precision", text: "Software de gestión agrícola" },
    ],
  },
  {
    slug: "frutales",
    name: "Aguacate y frutales",
    img: "/img/solutions/proyectos-aguacate.jpg",
    alt: "Plantación de aguacate con riego",
    intro: "Huertos de alto valor con riego preciso por árbol y monitoreo del cultivo.",
    offer: [
      { line: "riego", text: "Microaspersión y goteo autocompensado" },
      { line: "automatizacion", text: "Controladores de riego" },
      { line: "precision", text: "Sensores instalados en el árbol" },
      { line: "poscosecha", text: "Lavado y selección de fruta" },
    ],
  },
];

// Proyectos: cómo trabajamos. Las fotos son de proyectos de referencia;
// TODO: sumar casos reales (finca, lugar, qué se instaló) cuando el equipo los comparta.
export const projectSteps = [
  { title: "Diagnóstico y diseño", text: "Visitamos la finca, medimos el agua y el suelo, y diseñamos el sistema a la medida del cultivo." },
  { title: "Suministro", text: "Equipos de marcas de prestigio mundial y de desarrollo propio, con entrega en la región." },
  { title: "Instalación", text: "Nuestro equipo técnico instala y prueba cada componente en campo." },
  { title: "Puesta en marcha y soporte", text: "Capacitamos a tu personal y te acompañamos con soporte técnico después de la entrega." },
];

export const projectPhotos = [
  { src: "/img/solutions/proyectos-planta.jpg", alt: "Vista aérea de un proyecto agroindustrial con naves y bodegas" },
  { src: "/img/solutions/proyectos-bombeo.jpg", alt: "Estación de bombeo instalada junto a un río" },
  { src: "/img/photos/tanques.jpg", alt: "Vista aérea de invernaderos y parcelas tecnificadas" },
  { src: "/img/solutions/proyectos-invernaderos.jpg", alt: "Invernaderos de un proyecto de cultivos protegidos" },
];

// Marcas propias de Agrologico para riego. Logos en /img/own.
// TODO: confirmar con Agrologico las líneas de producto exactas de cada marca.
export const ownBrands = [
  {
    id: "landwater",
    name: "Land Water",
    desc: "Nuestra marca de riego para el campo: equipos confiables a precio justo, pensados para el productor centroamericano.",
    accent: "from-sun to-brand-300",
  },
  {
    id: "rainwater",
    name: "Rain Water",
    desc: "Nuestra marca de soluciones de agua y riego: calidad respaldada por Agrologico, con asesoría y repuestos en la región.",
    accent: "from-[#2d6299] to-[#00aeef]",
  },
];

export const brands = [
  { id: "naandanjain", name: "NaanDanJain" },
  { id: "rivulis", name: "Rivulis" },
  { id: "bermad", name: "Bermad" },
  { id: "rainbird", name: "Rain Bird" },
  { id: "valley", name: "Valley" },
  { id: "amiad", name: "Amiad" },
  { id: "nelson", name: "Nelson" },
  { id: "plasson", name: "Plasson" },
  { id: "genebre", name: "Genebre" },
  { id: "tavlit", name: "Tavlit" },
  { id: "bauer", name: "Bauer" },
  { id: "cornell", name: "Cornell" },
  { id: "grundfos", name: "Grundfos" },
  { id: "johndeere", name: "John Deere" },
  { id: "durman", name: "Durman" },
  { id: "ari", name: "A.R.I." },
  { id: "caudal", name: "Caudal" },
  { id: "metzer", name: "Metzer" },
  { id: "lama", name: "Lama" },
  { id: "antelco", name: "Antelco" },
  { id: "raphael", name: "Raphael" },
  { id: "automat", name: "Automat" },
  { id: "ridder", name: "Ridder" },
  { id: "talgil", name: "Talgil" },
  { id: "mwm", name: "MWM" },
  { id: "goulds", name: "Goulds" },
  { id: "hayward", name: "Hayward" },
  { id: "asab", name: "ASAB" },
  { id: "multitubo", name: "Multitubo" },
  { id: "rovatti", name: "Rovatti Pompe" },
  { id: "buwatec", name: "Buwatec" },
];

export const history = [
  { year: "Origen", title: "Costa Rica · Guatemala · Nicaragua", text: "Nace Agrologico Sistemas Tecnológicos con presencia regional." },
  { year: "2025", title: "Fusión", text: "Agrologico se integra con NaanDanJain Irrigation." },
  { year: "2026", title: "Adquisición", text: "Se suma la operación de NaanDan by Rivulis." },
  { year: "2026", title: "Agrologico 2.0", text: "Una nueva etapa: más soluciones, más tecnología, más región." },
];

export const values = [
  "Responsabilidad", "Excelencia", "Honestidad", "Servicio", "Disciplina", "Lealtad", "Respeto",
];

// Zonas de venta del mapa. `paths` son las claves de `mapPaths` (src/lib/map-paths.ts).
// TODO: los teléfonos de zona son de EJEMPLO, reemplazar por los reales de cada asesor.
// La división de Guatemala por departamentos también es provisional.
export type Zone = {
  id: string;
  country: string;
  name: string;
  detail: string;
  paths: string[];
  phone: string;
  whatsapp: string; // solo dígitos, con código de país
};

export const zones: Zone[] = [
  {
    id: "gt-central",
    country: "Guatemala",
    name: "Central",
    detail: "Guatemala, Sacatepéquez y Chimaltenango",
    paths: ["gt-central"],
    phone: site.phone,
    whatsapp: site.whatsapp,
  },
  {
    id: "gt-altiplano",
    country: "Guatemala",
    name: "Altiplano y Verapaces",
    detail: "Huehuetenango, San Marcos, Quetzaltenango, Quiché y las Verapaces",
    paths: ["gt-altiplano"],
    phone: "+502 5000 0102",
    whatsapp: "50250000102",
  },
  {
    id: "gt-nororiente",
    country: "Guatemala",
    name: "Nor Oriente",
    detail: "Petén, Izabal, Zacapa, Chiquimula, Jalapa y Jutiapa",
    paths: ["gt-nororiente"],
    phone: "+502 5000 0103",
    whatsapp: "50250000103",
  },
  {
    id: "gt-costasur",
    country: "Guatemala",
    name: "Costa Sur",
    detail: "Escuintla, Suchitepéquez, Retalhuleu y Santa Rosa",
    paths: ["gt-costasur"],
    phone: "+502 5000 0104",
    whatsapp: "50250000104",
  },
  { id: "sv", country: "El Salvador", name: "El Salvador", detail: "Cobertura nacional", paths: ["sv"], phone: "+503 7000 0001", whatsapp: "50370000001" },
  { id: "hn", country: "Honduras", name: "Honduras", detail: "Cobertura nacional", paths: ["hn"], phone: "+504 9000 0001", whatsapp: "50490000001" },
  { id: "bz", country: "Belice", name: "Belice", detail: "Cobertura nacional", paths: ["bz"], phone: "+501 600 0001", whatsapp: "5016000001" },
  {
    id: "ni-cr",
    country: "Costa Rica y Nicaragua",
    name: "Costa Rica y Nicaragua",
    detail: "Presencia histórica",
    paths: ["ni", "cr"],
    phone: "+506 8000 0001",
    whatsapp: "50680000001",
  },
];

// Enlace de WhatsApp a un número específico (p. ej. el asesor de una zona).
export const waTo = (number: string, text: string = site.whatsappGreeting) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

// Catálogo por marca representada. Productos verificados en los sitios oficiales (octubre 2026).
// Sin `logo`, la pestaña muestra el nombre de la marca.
export type BrandCatalog = {
  id: string;
  name: string;
  group: "riego" | "otras";
  logo?: string;
  url: string;
  line: string;
  summary: string;
  products: { name: string; desc: string }[];
};

const plogo = (file: string) => `/img/partners/${file}.png`;
const blogo = (file: string) => `/img/brands/${file}.png`;

export const brandCatalog: BrandCatalog[] = [
  {
    id: "bermad",
    name: "Bermad",
    group: "riego",
    logo: blogo("bermad"),
    url: "https://www.bermad.com/es/products/control-valves/",
    line: "Válvulas de control",
    summary: "Válvulas hidráulicas de control para riego, agua potable e incendio, desde Israel.",
    products: [
      { name: "Serie 400 (IR-400)", desc: "Válvulas hidráulicas de diafragma para control automático del riego." },
      { name: "IR-405", desc: "Válvula on/off de mando hidráulico, ideal para riego computarizado." },
      { name: "IR-410", desc: "Válvula con solenoide que abre y cierra por señal eléctrica." },
      { name: "IR-420", desc: "Reductora que mantiene estable la presión aguas abajo." },
      { name: "IR-430", desc: "Sostenedora y aliviadora que protege la línea aguas arriba." },
    ],
  },
  {
    id: "raphael",
    name: "Raphael",
    group: "riego",
    logo: blogo("raphael"),
    url: "https://www.raphael-valves.com/",
    line: "Válvulas hidráulicas",
    summary: "Fabricante israelí de válvulas de control de agua desde 1949, para riego y redes de agua.",
    products: [
      { name: "RAF", desc: "Válvula hidráulica de diafragma sin resorte para control de riego." },
      { name: "RAF 60", desc: "Reductora de presión con piloto para mantener la presión aguas abajo." },
      { name: "RAF 80", desc: "Sostenedora y aliviadora: abre solo si la presión supera el ajuste." },
      { name: "RAF-P", desc: "Válvulas de cuerpo plástico para riego agrícola y paisajismo." },
      { name: "Ultraf", desc: "Válvula a batería que controla presión y caudal sin mantenimiento." },
    ],
  },
  {
    id: "ari",
    name: "A.R.I.",
    group: "riego",
    logo: blogo("ari"),
    url: "https://www.arivalves.com",
    line: "Ventosas y válvulas de aire",
    summary: "Ventosas, válvulas de retención y de control para riego y redes de agua, desde Israel.",
    products: [
      { name: "D-040 Barak", desc: "Ventosa combinada de triple función, de 1/2\" a 2\", para líneas de riego." },
      { name: "S-050", desc: "Ventosa automática que libera el aire acumulado en tuberías a presión." },
      { name: "D-060", desc: "Ventosa combinada de alto caudal, de 1\" a 10\", para líneas grandes." },
      { name: "D-46", desc: "Ventosa combinada de paso total de 2\" a 6\" en nylon reforzado." },
      { name: "R-30", desc: "Válvula hidráulica metálica que reduce o sostiene presión y controla caudal." },
    ],
  },
  {
    id: "nelson",
    name: "Nelson",
    group: "riego",
    logo: blogo("nelson"),
    url: "https://www.nelsonirrigation.com/",
    line: "Aspersión y cañones",
    summary: "Aspersores, cañones y válvulas para riego agrícola, fabricados en Estados Unidos.",
    products: [
      { name: "Big Gun SR100", desc: "Cañón de 11 a 34 m³/h con alcance de 28 a 37 m." },
      { name: "Big Gun SR150", desc: "Cañón de alta presión y gran caudal para amplios espaciamientos." },
      { name: "R3000 Rotator", desc: "Aspersor rotativo para pivotes: gran alcance y baja tasa de aplicación." },
      { name: "S3000 Spinner", desc: "Aspersor de giro libre con gota suave para cultivos sensibles." },
      { name: "Válvula Big Gun serie 800", desc: "Válvula tipo wafer de 2\" y 3\" que se monta en el cañón." },
    ],
  },
  {
    id: "bauer",
    name: "Bauer",
    group: "riego",
    logo: blogo("bauer"),
    url: "https://www.bauer-at.com/",
    line: "Riego mecanizado",
    summary: "Más de 90 años en riego desde Austria: enrolladores, pivotes y equipos de avance lineal.",
    products: [
      { name: "Rainstar T61", desc: "Enrollador con turbina y computadora de riego Ecostar." },
      { name: "Rainstar E", desc: "Línea de enrolladores para riego por cañón en campo abierto." },
      { name: "Rainstar A", desc: "Enrolladores compactos para riego móvil." },
      { name: "Centerstar", desc: "Pivote central para grandes áreas de caña, maíz y hortalizas." },
      { name: "Linestar", desc: "Riego de avance lineal para parcelas rectangulares." },
    ],
  },
  {
    id: "komet",
    name: "Komet",
    group: "riego",
    logo: blogo("komet"),
    url: "https://www.kometirrigation.com/es",
    line: "Aspersores para pivote y cañones",
    summary: "Aspersores para pivotes y cañones de gran alcance, diseñados y fabricados en Austria.",
    products: [
      { name: "KPT Twister Black", desc: "Aspersor para pivote y lineal con distribución uniforme tipo lluvia." },
      { name: "KPT Twister Grey PC 180°", desc: "Aspersor de pivote en semicírculo que mantiene secas las huellas." },
      { name: "Komet Precision Spray", desc: "Emisor de baja presión que aplica el agua cerca del suelo." },
      { name: "Twin Max", desc: "Cañón compacto de gran caudal para final de pivote y enrolladores." },
      { name: "Twin Ultra 140", desc: "Cañón de gran alcance con ángulo ajustable de 15° a 45°." },
    ],
  },
  {
    id: "metzer",
    name: "Metzer",
    group: "riego",
    logo: blogo("metzer"),
    url: "https://mx.metzer-group.com",
    line: "Riego por goteo",
    summary: "Cintas, mangueras y goteros para riego por goteo agrícola, desde Israel.",
    products: [
      { name: "Vered", desc: "Manguera de pared gruesa con gotero autocompensado, para huertos." },
      { name: "Vered AS", desc: "Gotero autocompensado antisifón, diseñado para goteo subterráneo." },
      { name: "Inbar", desc: "Gotero autocompensado antidrenante para riego por pulsos e invernadero." },
      { name: "Yuval", desc: "Manguera de pared delgada con gotero regulado, 100 % reciclable." },
      { name: "MetzerTape", desc: "Cinta de goteo de laberinto continuo, muy resistente a obstrucciones." },
    ],
  },
  {
    id: "azud",
    name: "Azud",
    group: "riego",
    logo: blogo("azud"),
    url: "https://azud.com/",
    line: "Filtración y goteo",
    summary: "Equipos de filtración y tuberías de riego por goteo para la agricultura, desde España.",
    products: [
      { name: "AZUD HELIX AUTOMATIC", desc: "Filtración autolimpiante por anillas para riego." },
      { name: "AZUD LUXON", desc: "Filtros de malla autolimpiantes para sistemas de riego." },
      { name: "AZUD PREMIER", desc: "Tubería de goteo autocompensante para uso agrícola." },
      { name: "AZUD PRO", desc: "Tubería de goteo de flujo turbulento para cultivos agrícolas." },
      { name: "AZUD SPRINT", desc: "Tubería de goteo de flujo turbulento para riego agrícola." },
    ],
  },
  {
    id: "caudal",
    name: "Caudal",
    group: "riego",
    logo: blogo("caudal"),
    url: "https://www.caudal.es/",
    line: "Riego por goteo",
    summary: "Tuberías con gotero integrado y polietileno para riego, fabricadas en España.",
    products: [
      { name: "Caudal PC700", desc: "Tubería con gotero autocompensante para desniveles y líneas largas." },
      { name: "Caudal S200", desc: "Tubería de bajo espesor con gotero plano turbulento para hortalizas." },
      { name: "Caudal S400", desc: "Tubería con gotero turbulento para terreno llano y laterales cortos." },
      { name: "Rootguard", desc: "Tubería con gotero antirraíces para riego por goteo subterráneo." },
      { name: "Microtubería flexible EVA", desc: "Microtubo flexible para conexiones de riego localizado." },
    ],
  },
  {
    id: "sab",
    name: "SAB",
    group: "riego",
    logo: blogo("sab"),
    url: "https://www.sabspa.com/es/",
    line: "Cintas y conexiones",
    summary: "Cintas de goteo, mangueras layflat y conectores de riego fabricados en Italia.",
    products: [
      { name: "Mago", desc: "Cinta de goteo de alto rendimiento, hecha en Italia." },
      { name: "SABtape", desc: "Cinta de goteo con excelente relación calidad-precio." },
      { name: "SKY", desc: "Cinta de goteo de alta calidad, hecha en Italia." },
      { name: "RioFlex", desc: "Manguera layflat de polietileno para conducir agua, 100 % reciclable." },
      { name: "Conectores rápidos", desc: "Conectores y accesorios para cinta y tubería de goteo." },
    ],
  },
  {
    id: "multitubo",
    name: "Multitubo",
    group: "riego",
    logo: blogo("multitubo"),
    url: "https://multitubo.com.gt/",
    line: "Tubería y accesorios de PVC",
    summary: "Fabricante guatemalteco de tubería y accesorios de PVC para agua potable y riego, con más de 20 años.",
    products: [
      { name: "Tubería agua potable y riego", desc: "Tubería PVC a presión para agua potable y riego, de 1/2\" a 12\"." },
      { name: "ASTM D-2241 junta cementada", desc: "Tubo PVC de presión con unión cementada, de 1/2\" a 12\"." },
      { name: "ASTM D-2241 junta rápida", desc: "Tubo PVC con junta de empaque, de 2\" a 12\", para líneas de conducción." },
      { name: "Accesorios agua potable y riego", desc: "Codos, tees, uniones, adaptadores y abrazaderas PVC cédula 40." },
      { name: "Multijardín", desc: "Manguera de jardín de 7/16\" en rollos de 25 a 150 pies." },
    ],
  },
  {
    id: "gerfor",
    name: "Gerfor",
    group: "riego",
    logo: blogo("gerfor"),
    url: "https://www.gerfor.com/",
    line: "Tubosistemas de PVC para riego",
    summary: "Tubosistemas de PVC para riego e infraestructura, de Colombia, con planta y ventas en Guatemala.",
    products: [
      { name: "Tubería Riego extremo liso", desc: "Tubería PVC para riego agrícola de extremo liso, norma NTC 3317." },
      { name: "Tubería Riego unión mecánica", desc: "Tubería PVC con unión mecánica para riego predial y distritos de riego." },
      { name: "Tubería Riego PVC orientado", desc: "Tubería de PVC orientado para conducción de agua de riego." },
      { name: "Tubería Riego de compuertas", desc: "Para riego por superficie, según la norma USDA S-430-HH." },
      { name: "Accesorios Riego", desc: "Línea de accesorios de PVC para la tubería de riego Gerfor." },
    ],
  },
  {
    id: "lama",
    name: "Lama",
    group: "riego",
    logo: blogo("lama"),
    url: "https://lama.es/",
    line: "Filtración para riego",
    summary: "Sistemas de filtrado para riego desde 1948, fabricados en Sevilla, España.",
    products: [
      { name: "EkoFiber", desc: "Filtro de malla automático 100 % hidráulico, de 3\" y 4\"." },
      { name: "Autosenior", desc: "Filtro de anillas automático de 3\" con retrolavado por giro." },
      { name: "Automesh", desc: "Filtro de malla automático para riego agrícola." },
      { name: "Filtros de arena", desc: "Para agua de riego con alta carga orgánica." },
      { name: "Globo Plastic", desc: "Válvula hidráulica de poliamida para el lavado de filtros." },
    ],
  },
  {
    id: "automat",
    name: "Automat",
    group: "riego",
    logo: blogo("automat"),
    url: "https://www.automatworld.in/global/",
    line: "Microirrigación",
    summary: "Componentes de microirrigación desde 1972, fabricados en India y vendidos en más de 110 países.",
    products: [
      { name: "AquaDisc", desc: "Filtros de discos automáticos de alto caudal para riego por goteo." },
      { name: "Filtro de discos tipo Y", desc: "Filtro manual de 3/4\" a 2\", de 3 a 25 m³/h." },
      { name: "Filtro de arena polimérico", desc: "Filtro de arena para goteo y microaspersión." },
      { name: "Inyector Venturi", desc: "Fertirriego de 3/4\" a 2\", succión de 35 a 720 L/h." },
      { name: "AQ-230 Robin", desc: "Microaspersor de baja presión, de 12 a 17 m de diámetro mojado." },
    ],
  },
  {
    id: "talgil",
    name: "Talgil",
    group: "riego",
    logo: plogo("talgil"),
    url: "https://www.talgil.com/",
    line: "Automatización de riego",
    summary: "Controladores israelíes de riego, fertirriego y retrolavado, con gestión remota por internet.",
    products: [
      { name: "DREAM2", desc: "Controlador multilínea con internet para proyectos de riego de gran escala." },
      { name: "SAPIR2", desc: "Riego y fertilización volumétrica con internet para escala media y grande." },
      { name: "OASIS", desc: "Riego, fertilización y retrolavado para proyectos pequeños y medianos." },
      { name: "AGROTAL", desc: "Controlador agrícola de riego por tiempo, con conexión a internet." },
      { name: "FILTRON 1-10", desc: "Retrolavado automático de hasta 10 filtros por presión diferencial." },
    ],
  },
  {
    id: "ridder",
    name: "Ridder",
    group: "otras",
    logo: plogo("ridder"),
    url: "https://ridder.com/",
    line: "Clima y fertirriego en invernadero",
    summary: "Control de clima y riego, pantallas climáticas y tratamiento de agua para invernaderos, desde Países Bajos.",
    products: [
      { name: "Hortimax Go", desc: "Control de clima y riego sencillo y asequible para cualquier invernadero." },
      { name: "Hortimax Pro", desc: "Computador de clima que integra todo el invernadero, con acceso remoto." },
      { name: "Fertimix", desc: "Unidad de fertirriego con control preciso de nutrientes y pH." },
      { name: "Vitalite", desc: "Desinfección UV-C del agua de drenaje para recircularla sin químicos." },
      { name: "Pantallas de sombreo", desc: "Mallas y pantallas para manejar luz y temperatura dentro del invernadero." },
    ],
  },
  {
    id: "asthor",
    name: "Asthor Agrícola",
    group: "otras",
    logo: plogo("asthor"),
    url: "https://asthor.com/",
    line: "Invernaderos",
    summary: "Invernaderos de plástico y policarbonato diseñados y fabricados en España, con proyectos llave en mano.",
    products: [
      { name: "Asthor PV", desc: "Multicapilla con ventilación cenital fija, pensado para clima cálido y tropical." },
      { name: "Asthor Gótico", desc: "Multicapilla de alto rendimiento para hortaliza hidropónica y ornamentales." },
      { name: "Smarttúnel", desc: "Invernadero ligero para grandes superficies de fresa, arándano y mora." },
      { name: "Invernadero Túnel", desc: "Túnel económico y robusto que se monta sin hormigón." },
      { name: "Umbráculo", desc: "Casa sombra de techo plano en módulos de 5 × 5 m para cultivos sensibles." },
    ],
  },
  {
    id: "cotexa",
    name: "Cotexa Agro",
    group: "otras",
    logo: plogo("cotexa"),
    url: "https://www.cotexaagro.com/principal/",
    line: "Mallas agrícolas",
    summary: "Textiles agrícolas y tejidos técnicos fabricados en España, con protección UV.",
    products: [
      { name: "Malla sombreo", desc: "Sombra del 40 % al 100 % para macrotúneles, viveros y casas malla." },
      { name: "Malla anti-insectos", desc: "Malla antitrips para invernadero, de 20 × 10 a 6 × 6 hilos." },
      { name: "Malla antigranizo", desc: "Monofilamento de baja sombra que protege la cosecha del granizo y el viento." },
      { name: "Malla antihierba", desc: "Cubresuelo de 100 o 130 g/m² que impide el crecimiento de maleza." },
      { name: "Malla antipájaros", desc: "Malla ligera que protege frutales y cultivos de las aves." },
    ],
  },
  {
    id: "fico",
    name: "Grupo Fico",
    group: "otras",
    logo: plogo("fico"),
    url: "https://grupofico.com/",
    line: "Nutrición vegetal",
    summary: "Bioestimulantes, correctores de carencias y sustratos de fibra de coco fabricados en España.",
    products: [
      { name: "FicoRoot", desc: "Aminoácidos enzimáticos al 18 % con triptófano para estimular el enraizamiento." },
      { name: "FicoNutrón 40", desc: "L-aminoácidos bioestimulantes de alta concentración." },
      { name: "FicoCarboxil", desc: "Calcio y boro para el engorde del fruto y evitar su caída." },
      { name: "FicoFerro 7", desc: "Corrector líquido de carencias de hierro." },
      { name: "Saco de cultivo", desc: "Saco de fibra de coco para hidroponía, con protección UV." },
    ],
  },
  {
    id: "timab",
    name: "TIMAB Magnesium",
    group: "otras",
    logo: plogo("timab"),
    url: "https://www.terresis.com/es/",
    line: "Nutrición con magnesio",
    summary: "Especialistas en magnesio para nutrición vegetal (hoy Terresis, del Groupe Roullier).",
    products: [
      { name: "TIM FoliUp", desc: "Magnesio foliar ultrafino que aumenta la clorofila del cultivo." },
      { name: "Sunfortis", desc: "Mineral con magnesio que protege los cultivos de quemaduras solares." },
      { name: "CR-MAG", desc: "Magnesio de liberación controlada (60 % MgO) con baja lixiviación." },
    ],
  },
  {
    id: "kepler-weber",
    name: "Kepler Weber",
    group: "otras",
    logo: plogo("kepler-weber"),
    url: "https://www.kepler.com.br/",
    line: "Manejo de granos",
    summary: "Almacenamiento, secado y transporte de granos, fabricado en Brasil.",
    products: [
      { name: "Silos planos", desc: "Silos de fondo plano automatizados, hasta 28,000 m³ de capacidad." },
      { name: "Silos elevados", desc: "Silos de fondo cónico con descarga por gravedad." },
      { name: "Secadoras KW MAX", desc: "Secadora de torre para un secado uniforme de maíz, soya y arroz." },
      { name: "KW Select", desc: "Seleccionadora para clasificar y limpiar el grano almacenado." },
    ],
  },
  {
    id: "mwm",
    name: "MWM",
    group: "otras",
    logo: plogo("mwm"),
    url: "https://mwm.com.br/es/",
    line: "Motores y energía",
    summary: "Motores diésel y grupos generadores del grupo Tupy, Brasil.",
    products: [
      { name: "Motores diésel", desc: "Series 4.12 y 6.12, de 61 a 305 kW, para bombeo y uso agrícola." },
      { name: "Generadores diésel", desc: "Grupos electrógenos para energía de respaldo o principal." },
      { name: "Generadores de biogás", desc: "Energía a partir de residuos orgánicos y estiércol." },
      { name: "Torres de iluminación", desc: "Torres móviles con motor diésel para trabajo nocturno en campo." },
    ],
  },
  {
    id: "skov",
    name: "SKOV",
    group: "otras",
    logo: plogo("skov-sercom"),
    url: "https://www.skov.com/en/",
    line: "Clima para granjas",
    summary: "Ventilación, climatización y control de producción para granjas avícolas y porcinas, desde Dinamarca.",
    products: [
      { name: "BlueControl Avícola", desc: "Clima del galpón según temperatura, humedad, CO₂ y amoníaco." },
      { name: "BlueControl Porcino", desc: "Control de clima para producción porcina." },
      { name: "BF 50 BlueFan", desc: "Extractor de 50\" de alto rendimiento y bajo consumo." },
      { name: "Pad cooling", desc: "Paneles evaporativos para ventilación de túnel en época de calor." },
      { name: "Nebulización de alta presión", desc: "Reduce el estrés por calor y la mortalidad de los animales." },
    ],
  },
  {
    id: "big-dutchman",
    name: "Big Dutchman",
    group: "otras",
    url: "https://www.bigdutchman.com/es/pagina-de-inicio/",
    line: "Equipos avícolas y porcinos",
    summary: "Alimentación, bebederos y equipamiento para producción avícola y porcina, desde Alemania.",
    products: [
      { name: "AugerMatic", desc: "Alimentación automática con platos comederos para pollo de engorde." },
      { name: "Platos FLUXX 330 y 360", desc: "Platos comederos para pollo de engorde en dos tamaños." },
      { name: "Sistemas de bebederos", desc: "Líneas de bebederos para galpones de engorde." },
      { name: "DryRapid", desc: "Alimentación seca automatizada para engorde de cerdos." },
      { name: "Tolvas de alimentación", desc: "Tolvas comederos para cerdos de engorde y lechones." },
    ],
  },
  {
    id: "hispatec",
    name: "Hispatec",
    group: "otras",
    logo: plogo("hispatec"),
    url: "https://www.hispatec.com/",
    line: "Software agrícola",
    summary: "ERPagro: software que conecta campo, empaque, bodega y finanzas, desde España.",
    products: [
      { name: "Operaciones en campo", desc: "Tareas, aplicaciones y personal de todas las fincas en un solo lugar." },
      { name: "Planificación agronómica", desc: "Recomendaciones por parcela y por cultivo." },
      { name: "Costos y finanzas", desc: "Costos en tiempo real por proceso, orden o cultivo." },
      { name: "Producción y almacén", desc: "De la recepción de materia prima al despacho." },
      { name: "Margaret (IA)", desc: "Inteligencia artificial que genera recomendaciones con datos y sensores." },
    ],
  },
  {
    id: "zapi",
    name: "Zapi",
    group: "otras",
    logo: plogo("zapi"),
    url: "https://zapigarden.it/",
    line: "Nutrición y control de plagas",
    summary: "Nutrición y protección de cultivos y control de roedores, desde Italia.",
    products: [
      { name: "Organico Plus", desc: "Abono orgánico peletizado con nitrógeno de liberación lenta." },
      { name: "Concime Fogliare", desc: "Fertilizante foliar líquido con microelementos para hortalizas y frutales." },
      { name: "Rat Bait Station Next", desc: "Estación portacebos con llave para bodegas y fincas." },
    ],
  },
];
