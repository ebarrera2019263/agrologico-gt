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
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Quiénes somos", href: "#nosotros" },
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
