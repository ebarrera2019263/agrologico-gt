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
  { label: "Somos Agrologico", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Marcas", href: "#marcas" },
  { label: "Cobertura", href: "#cobertura" },
];

export const products = [
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
  { id: "rainwater", name: "Rain Water" },
  { id: "landwater", name: "Land Water" },
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

export const zones = [
  { name: "Guatemala", detail: "Nor Oriente · Altiplano y Verapaces · Costa Sur" },
  { name: "El Salvador", detail: "Cobertura nacional" },
  { name: "Honduras", detail: "Cobertura nacional" },
  { name: "Belice", detail: "Cobertura nacional" },
  { name: "Costa Rica y Nicaragua", detail: "Presencia histórica" },
  { name: "Otros países", detail: "Consúltanos" },
];
