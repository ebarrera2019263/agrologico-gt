---
name: Agrologico
description: Soluciones y tecnología al alcance de todos
colors:
  verde-agrologico: "#009a46"
  verde-agrologico-texto: "#007a37"
  verde-noche: "#00352b"
  verde-noche-medio: "#004538"
  verde-bosque: "#005949"
  brote: "#6cbe45"
  rocio: "#dfeccb"
  sol: "#fbad18"
  campo-claro: "#f7f8f3"
  blanco: "#ffffff"
  tinta: "#1c2b26"
typography:
  display:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  subheadline:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
  title:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.375
  stat:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  campo: "16px"
  tarjeta-sm: "24px"
  tarjeta: "32px"
  tarjeta-lg: "40px"
  pildora: "9999px"
spacing:
  gap: "20px"
  gutter: "24px"
  tarjeta: "28px"
  bloque: "64px"
  seccion: "96px"
  seccion-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.verde-agrologico-texto}"
    textColor: "{colors.blanco}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pildora}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.verde-bosque}"
    textColor: "{colors.blanco}"
  button-light:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.verde-noche-medio}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pildora}"
    padding: "0 24px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.rocio}"
  input-field:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.verde-noche}"
    typography: "{typography.body}"
    rounded: "{rounded.campo}"
    padding: "14px 20px"
  chip-valor:
    textColor: "{colors.verde-noche-medio}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pildora}"
    padding: "6px 16px"
  badge-nuevo:
    backgroundColor: "{colors.sol}"
    textColor: "{colors.verde-noche}"
    rounded: "{rounded.pildora}"
    padding: "4px 12px"
  card-producto:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.tarjeta-lg}"
    width: "264px"
    height: "420px"
  card-solucion:
    backgroundColor: "{colors.verde-noche}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.tarjeta}"
  nav-link:
    textColor: "{colors.verde-noche}"
    typography: "{typography.body-small}"
---

# Design System: Agrologico

## 1. Overview

**Creative North Star: "El Campo Tecnificado"**

La tecnología de precisión puesta al servicio del productor. La fotografía real de campo (fincas, pivotes, invernaderos, equipo en operación) carga la historia. La interfaz se mantiene limpia, técnica y callada alrededor de ella, como un buen sistema de riego: funciona sin llamar la atención. La referencia es caudal.es: fotografía agrícola a sangre, titulares sans-serif con aplomo, espacio en blanco generoso y producto sobre fondo suave.

La densidad es baja y el ritmo pausado: secciones de 96–128px de alto vertical, una idea por pantalla y un llamado a conversar siempre a un paso (WhatsApp, teléfono, formulario). La paleta es de compromiso restringido: dos verdes de marca, un acento sol escaso, blanco y un claro de campo para alternar secciones. Las curvas aparecen en dos sitios: en los radios grandes de las tarjetas y en **la hoja del isotipo** (dos arcos de cuarto de círculo entre esquinas opuestas), usada a gran escala como contorno fino o como hoja sólida Sol, igual que en el manual de marca 2025. Esa hoja es la firma geométrica del sistema.

El sistema rechaza explícitamente el **cliché agro** (hojas ilustradas o clip-art que no sean la hoja geométrica del isotipo, beige rústico, ilustraciones de granja, tractores clip-art), el **look SaaS/startup genérico** (texto con gradiente, tarjetas de métricas, glassmorphism) y la **grilla densa de catálogo ferretero** con banners de oferta.

**Key Characteristics:**
- Fotografía real de campo a sangre; la UI nunca compite con ella.
- Una sola familia tipográfica (Montserrat) con contraste de peso y tamaño.
- Formas suaves y firmes: radios generosos (16–40px), píldoras y colores sólidos y decididos.
- La hoja del isotipo (contorno de 1px o sólida Sol) como única decoración gráfica.
- Legible bajo el sol: contraste AA en todo texto, cuerpo de 16–17px y objetivos táctiles de 44px o más.
- Movimiento sobrio: entradas suaves con ease-out-quart y nada que bloquee el contenido.

## 2. Colors

Dos verdes de marca sobre blanco y claro de campo, con un único acento cálido que se usa con cuentagotas.

### Primary
- **Verde Agrologico** (#009a46): el verde de la marca. Se usa en iconos, hojas de la línea de tiempo, hojas de contorno decorativas, bordes de foco y trazos. Mide 3.5:1 sobre claro, así que **no es apto para texto**.
- **Verde Agrologico Texto** (#007a37): la versión de trabajo del verde de marca. Se usa en botones primarios (texto blanco, 5.5:1), subtítulos de sección, etiquetas Misión/Visión, enlaces en hover y el icono del formulario. Es el verde por defecto para cualquier cosa que deba leerse.

### Secondary
- **Verde Noche** (#00352b): la tinta del sistema. Se usa en títulos, texto (a 75–85% de opacidad para cuerpo) y overlays de foto (gradientes de 90% a transparente).
- **Verde Noche Medio** (#004538): fondo de la sección oscura (Zonas de venta) y texto del botón claro.
- **Verde Bosque** (#005949): hover del botón primario y cifras de estadísticas.
- **Brote** (#6cbe45): la hoja derecha del isotipo. Subtítulos sobre fondos Verde Noche (4.8:1; solo se usa como texto sobre oscuro) y hojas de contorno sobre Rocío.
- **Rocío** (#dfeccb): fondo del cierre de marca en el pie de página, arcos de fondo detrás del producto en las tarjetas de producto (al 70%) y hover del botón claro.

### Tertiary
- **Sol** (#fbad18): la hoja izquierda del isotipo y el único acento cálido. Se usa en el badge "Nuevo", los pines de zona, la hoja del hito actual, el par de hojas de los subtítulos y como hoja sólida grande en Cobertura y el pie de página. Mide 1.9:1 sobre claro: **nunca como color de texto sobre fondos claros**.

### Neutral
- **Blanco** (#ffffff): fondo base de la página, superficie de tarjetas y campos.
- **Campo Claro** (#f7f8f3): fondo alterno de secciones (Somos, Productos, Compromiso, Contacto, footer). Da ritmo sin bordes.
- **Tinta** (#1c2b26): color de texto por defecto del body.

### Named Rules
**The Two-Greens Rule.** Verde Agrologico (#009a46) decora y Verde Agrologico Texto (#007a37) se lee. Si un verde lleva letras, es #007a37 o más oscuro. Sin excepciones.

**The Scarce Sun Rule.** El Sol es escaso salvo en dos momentos de marca: una hoja sólida grande en Cobertura y otra en el pie de página. Fuera de esos momentos, solo toques pequeños (badges, pines, el par de hojas). Nunca una hoja Sol sobre fotografía.

**The Contrast Floor Rule.** El texto de cuerpo nunca baja de Verde Noche al 75% sobre claro (6:1). Gris claro "por elegancia" está prohibido: esta página se lee en el campo, bajo el sol.

## 3. Typography

**Display Font:** Montserrat (con ui-sans-serif, system-ui)
**Body Font:** Montserrat (con ui-sans-serif, system-ui)

**Character:** Una sola familia geométrica con aperturas amplias, trabajada en cuatro pesos (400, 500, 600, 700). Es moderna sin ser fría y clara a distancia. El contraste de jerarquía se hace con tamaño y peso, no con una segunda familia.

### Hierarchy
- **Display** (600, 3.75rem → 6rem, 0.95): solo el titular del hero, "Agua. Campo. Futuro.", con un salto de línea por palabra.
- **Headline** (500, 2.125rem móvil → 2.75rem, 1.1, tracking -0.025em, `text-wrap: balance`): títulos de sección (h2).
- **Subheadline** (500, 1.125rem → 1.25rem, 1.4): el subtítulo verde bajo cada h2, en Verde Agrologico Texto (Brote sobre oscuro). Va debajo del título, nunca encima como eyebrow.
- **Title** (500, 1.25rem, 1.375): títulos de tarjeta de producto y de solución (15px en la grilla móvil de 2 columnas).
- **Stat** (600, 2.25rem): cifras de "Somos" (18+, 6, 15) en Verde Bosque.
- **Body** (400, 1rem móvil → 1.0625rem, 1.625): párrafos. El ancho máximo es de unos 65ch (`max-w-md`/`max-w-xl`). Para enfatizar se usa `<strong>` en Verde Noche.
- **Body Small** (400, 0.9375rem, 1.625): descripciones de tarjeta, línea de tiempo, footer, chips y botones.
- **Label** (700, 0.875rem, tracking 0.1em, mayúsculas): solo Misión, Visión y Valores dentro de Compromiso, y el badge "Nuevo" (0.75rem).

### Named Rules
**The 15px Floor Rule.** Ningún texto de lectura baja de 15px (el copyright puede usar 14px). Los usuarios mayores en celular son parte del público.

**The No-Eyebrow Rule.** Las etiquetas en mayúsculas espaciadas existen solo dentro de Compromiso. Nunca se ponen como kicker sobre los títulos de sección.

## 4. Elevation

Es un sistema híbrido. Las secciones son planas y se separan por cambio tonal (Blanco ↔ Campo Claro ↔ Verde Noche Medio), nunca con líneas ni sombras. Las tarjetas sí flotan, pero con sombras difusas, muy desplazadas hacia abajo, con spread negativo y teñidas de Verde Noche: es luz ambiental, no una caja recortada.

### Shadow Vocabulary
- **Tarjeta en reposo** (`box-shadow: 0 20px 40px -24px rgba(0,53,43,0.35)`): tarjetas de producto.
- **Tarjeta en hover** (`box-shadow: 0 28px 50px -24px rgba(0,53,43,0.45)`): tarjeta de producto al pasar el cursor, junto con un desplazamiento de -4px en Y.
- **Panel** (`box-shadow: 0 24px 60px -30px rgba(0,53,43,0.35)`): contenedores grandes (Compromiso, Contacto).
- **Header** (`box-shadow: 0 6px 24px -12px rgba(0,53,43,0.25)`): header fijo después de hacer scroll.
- **Flotante** (`box-shadow: 0 10px 30px -8px rgba(0,53,43,0.6)`): botón de WhatsApp en móvil.

### Named Rules
**The Green Shadow Rule.** Las sombras siempre van teñidas de Verde Noche (rgba(0,53,43,…)), nunca en negro puro. Si una sombra se ve gris o dura, el blur es muy pequeño o el spread no es lo bastante negativo.

## 5. Components

Suaves y firmes: formas redondeadas y amables, colores sólidos y decididos. Fáciles de tocar y sin ambigüedad.

### Buttons
- **Shape:** píldora completa (9999px), con una altura mínima de 48px (44px en el header).
- **Primary:** fondo Verde Agrologico Texto, texto blanco semibold de 15px, padding horizontal de 24px y una flecha a la derecha.
- **Hover / Focus:** el fondo pasa a Verde Bosque (200ms) y la flecha avanza 2px con ease-out-quart. El foco usa un anillo de 3px en Verde Agrologico con offset de 3px.
- **Light:** fondo blanco con texto Verde Noche Medio; en hover pasa a Rocío. Se usa sobre fotografía (hero).
- **Controles redondos:** círculos de 48px con borde Verde Bosque al 20%; en hover se rellenan de Verde Agrologico Texto. Al deshabilitarse bajan a 35% de opacidad. Se usan en el carril de productos.

### Chips
- **Style:** contorno de 1px en Verde Bosque al 20%, texto Verde Noche Medio de 15px y padding de 6×16px. Sin relleno.
- **State:** son estáticos (valores de la empresa) y no interactivos.
- **Badge "Nuevo":** píldora rellena de Sol con texto Verde Noche bold de 12px en mayúsculas, ubicada arriba a la izquierda de la tarjeta.

### Cards / Containers
- **Corner Style:** 40px en tarjetas de producto y paneles grandes; 32px en tarjetas de solución (24px en móvil). La foto del carrusel de "Somos" deja la esquina superior izquierda recta, como firma.
- **Background:** blanco sobre Campo Claro (productos, paneles) o foto con overlay Verde Noche de 90% a transparente (soluciones).
- **Shadow Strategy:** Tarjeta / Panel (ver Elevation). Las tarjetas de solución no llevan sombra.
- **Border:** ninguno.
- **Internal Padding:** 28px en tarjetas; de 28px a 64px en paneles según el breakpoint.

### Inputs / Fields
- **Style:** borde de 1px en Verde Bosque al 25%, fondo blanco, radio de 16px, padding de 14×20px y texto de 16px. La etiqueta siempre es visible arriba (15px, peso 500, Verde Noche) y el asterisco de obligatorio va en Verde Agrologico Texto.
- **Focus:** el borde pasa a Verde Agrologico Texto, con un halo de 4px en Verde Agrologico al 20%.
- **Placeholder:** Verde Noche al 65% (4.6:1). Se usa solo como pista de contenido, nunca como etiqueta.

### Navigation
- **Style:** header fijo. Sobre el hero es transparente con texto blanco y logo blanco. Al hacer scroll pasa a fondo blanco con sombra Header, texto Verde Noche y logo a color, con crossfade de 300ms entre logos.
- **Barra superior (≥768px):** slogan, teléfono, WhatsApp y Contacto en 13px.
- **Links:** 15px, peso 500; en hover pasan a Verde Agrologico Texto. CTA "Cotizar" como botón primario.
- **Móvil:** hamburguesa de 48px que abre un panel blanco con links de 18px separados por líneas finas y un CTA de ancho completo.
- **WhatsApp flotante (móvil):** círculo de 56px en Verde Agrologico Texto, abajo a la derecha. Aparece con fade y desplazamiento al dejar el hero.

### Carril de productos (signature)
Tarjetas blancas de 264×420px con radio de 40px: título en dos líneas, descripción siempre visible y la foto del producto sobre un arco Rocío. En escritorio el carril sangra hasta el borde derecho de la ventana y tiene flechas de navegación; en móvil se desplaza con scroll-snap.

### Ficha de solución (signature)
Las tarjetas de "Qué hacemos" son botones con un "+" y el texto "Ver detalle". Cada una abre un `<dialog>` nativo con: portada con el título sobre un overlay Verde Noche; resumen en 18px; etiquetas Rocío (por ejemplo "100 % biodegradable"); lista "Incluye" con checks en Verde Agrologico; logos de marcas aliadas en celdas blancas con radio de 16px; galería de equipos (los recortes de producto van sobre Campo Claro con `object-contain`, las fotografías con `object-cover`); los CTA "Cotizar esta solución" y WhatsApp; y navegación anterior/siguiente al pie. El botón de cotizar cierra la ficha, baja al formulario y deja preseleccionada esa línea. En el celular la ficha ocupa toda la pantalla. Entra con fundido y desplazamiento de 24px y el fondo se difumina. Cada ficha tiene su enlace compartible: `/#solucion-<slug>`.

### Banda de imagen (signature)
Una foto a sangre con frase en itálica. Al entrar en pantalla pasa de un marco redondeado (inset de 5%, radio de 40px) a sangre completa. La foto se desplaza más lento que la página (parallax de ±9%) y una hoja de contorno se dibuja a medida que avanza el scroll. Todo esto va ligado al scroll mediante `animation-timeline: view()`. La frase sube línea por línea desde una máscara.

### Coreografía de entrada
Cada sección tiene su propia entrada, nunca el mismo fade repetido en todas. Hero: las tres palabras entran escalonadas desde la derecha (120ms entre cada una), luego el subtítulo y los botones; la foto hace parallax al salir de pantalla. Compromiso: la curva de la foto se abre como el agua al extenderse (clip-path de 0% a 100%), y después entran el título, Misión, Visión y los valores uno por uno (55ms entre cada uno). El estado final siempre es el estado por defecto: sin JS o con `prefers-reduced-motion`, todo se ve completo y quieto. Los contenedores con animación de scroll usan `overflow: clip`, nunca `hidden`, porque `hidden` crea un contenedor de scroll y rompe `view()`.

### La hoja del isotipo (signature)
Componente `Leaf` (`src/components/Leaf.tsx`): la forma exacta de las hojas del logo, `M0 0A100 100 0 0 1 100 100A100 100 0 0 1 0 0Z`. Dos usos:
- **Contorno de 1px** a gran escala que sale del encuadre: blanco al 35% sobre foto, Verde Agrologico al 35% sobre claro, Brote al 40% sobre Verde Noche y Brote al 70% sobre Rocío. Nunca debe cruzar párrafos; puede pasar detrás de tarjetas.
- **Sólida Sol**, grande y cortada por el borde, solo en Cobertura y el pie de página (la composición del manual de marca).
- **`LeafPair`**: el par de hojas del isotipo (Sol + Brote) delante de cada subtítulo de sección; y hojas pequeñas como marcadores de la línea de tiempo.
Cada sección compone la hoja distinto (orientación, escala, posición); nunca el mismo adorno repetido.

## 6. Do's and Don'ts

### Do:
- **Do** dejar que la fotografía real de campo (fincas, equipo y proyectos de Agrologico) cargue cada sección visual.
- **Do** usar #007a37 para todo verde que lleve texto, y #009a46 solo para iconos, puntos y trazos.
- **Do** mantener el texto de cuerpo en 16–17px y Verde Noche al 75% o más de opacidad. Los subtítulos van bajo el título, en verde.
- **Do** dar a cada botón y control una altura mínima de 44px (48px por defecto).
- **Do** alternar Blanco / Campo Claro / Verde Noche Medio para separar secciones, sin líneas divisorias.
- **Do** teñir todas las sombras con Verde Noche y mantenerlas difusas, con spread negativo.
- **Do** cerrar cada sección con un camino a la conversación (WhatsApp, teléfono o formulario).
- **Do** dar a cada animación su alternativa en `prefers-reduced-motion`, y dejar el contenido visible por defecto aunque no haya JS.
- **Do** diseñar el movimiento por sección según lo que revela (curva que se abre, texto que sube por líneas, foto con parallax), con ease-out-quart.

### Don't:
- **Don't** caer en el **cliché agro**: nada de hojas ilustradas fuera de la hoja geométrica del isotipo, beige rústico, ilustraciones de granja ni tractores clip-art.
- **Don't** usar el **look SaaS/startup genérico**: texto con gradiente, tarjetas de métricas con gradiente o glassmorphism.
- **Don't** convertir los productos en una **grilla densa de catálogo ferretero** con banners de oferta.
- **Don't** usar Sol (#fbad18) ni Verde Agrologico (#009a46) como color de texto sobre fondos claros.
- **Don't** poner etiquetas en mayúsculas espaciadas (eyebrows) ni numeración 01/02/03 sobre los títulos de sección.
- **Don't** usar bordes laterales de color (border-left o border-right de más de 1px) como acento.
- **Don't** agregar una segunda familia tipográfica. Montserrat en cuatro pesos es la voz.
- **Don't** usar sombras negras o duras. Si se ve como una app de 2014, la sombra está demasiado oscura y el blur es demasiado chico.
- **Don't** depender del hover para mostrar información: en celular no existe.
- **Don't** aplicar el mismo fade-up idéntico a todas las secciones, ni animar contenido que no se pueda ver sin JS.
- **Don't** usar placeholders como etiquetas de formulario.
