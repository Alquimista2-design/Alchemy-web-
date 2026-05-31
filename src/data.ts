/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Metric } from './types';

export const METRICS: Metric[] = [
  { value: "12+", label: "SERVICIOS LANZADOS" },
  { value: "100%", label: "SATISFACCIÓN CLIENTE" },
  { value: "48H", label: "ENTREGA PROMEDIO" },
  { value: "4", label: "INDUSTRIAS CLAVE" }
];

export const PROJECTS: Project[] = [
  {
    id: "iron-temple",
    title: "IRON TEMPLE",
    industry: "Fitness & Performance",
    year: "2026",
    slogan: "TRANSFORMA TU CUERPO, DESPIERTA TU FUERZA",
    description: "Fondo negro profundo, tipografía ultrabold mayúscula y un acento rojo de alta potencia. Diseñado para un gimnasio de alta intensidad.",
    detailedDescription: "Inspirado en la fuerza cruda y la urgencia. Desarrollamos un embudo ultraoptimizado con contadores regresivos de oferta, tipografías condensadas impactantes y badges fluorescentes que aumentaron las conversiones presenciales en un 140%.",
    accentColor: "red",
    accentHex: "#E5192A",
    styleReference: "Estilo Gimnasio Hardcore (Rojo vibrante + Badges de urgencia + Countdown)",
    tags: ["MAYÚSCULAS ULTRABOLD", "COUNTDOWN REGRESIVO", "Urgencia extrema", "Estilo Ripped"],
    features: ["Equipos Premium", "Clases Grupales", "Trainers Elite", "Comunidad Real"],
    countdownEnabled: true,
    pillText: "🔥 PRIMER MES 50% OFF",
    customFont: "display"
  },
  {
    id: "nova-motors",
    title: "NOVA MOTORS",
    industry: "Automotriz Eléctrico",
    year: "2026",
    slogan: "THE FUTURE OF DRIVING STARTS HERE",
    description: "Fría magnificencia automotriz. Una tipografía display gigantesca, fondos atmosféricos oscuros y destellos color azul eléctrico.",
    detailedDescription: "Para una marca de súper SUVs y autos de lujo chinos. Fusionamos renders automotrices cinematográficos en tonalidades de azul profundo con llamadas de atención a configuradores de IA y simulaciones de conducción fluidas.",
    accentColor: "blue",
    accentHex: "#4A9EFF",
    styleReference: "Estilo High-Tech Eléctrico (Azul eléctrico + Renders interactivos + Pills espaciadas)",
    tags: ["NEÓN ELÉCTRICO", "TIPOGRAFÍA DISPLAY GIGANTE", "Pill superior espaciada", "Atmósfera cyberpunk"],
    features: ["Simulador IA", "Modelos EV Inteligentes", "Batería de Siguiente Gen", "Prueba de Manejo en un Click"],
    countdownEnabled: false,
    pillText: "⚡ BESPOKE INTELLIGENT MOTORS FROM CHINA",
    customFont: "display"
  },
  {
    id: "nokia-ia",
    title: "NOKIA-STYLE IA",
    industry: "Agencia de Inteligencia Artificial",
    year: "2025",
    slogan: "Bold Ideas That Start With Vision.",
    description: "Sofisticación monocromática pura. Fotografía en blanco y negro sutilmente velada con un diseño suizo de rejilla de hierro y elegancia brutalista.",
    detailedDescription: "Creado para una consultora tecnológica europea. Estructurado rigurosamente sobre proporciones de tipografía condensed black, con un flujo de conversión elegante en el centro y píldoras transparentes minimalistas.",
    accentColor: "silver",
    accentHex: "#F5F5F7",
    styleReference: "Estilo Agencia IA B&N (Minimalismo Suizo + Contraste Extremo + Píldoras centradas)",
    tags: ["MONÓCROMO SUIZO", "SANS-SERIF CONDENSED BLACK", "Pills flotantes", "Filtro grano B&N"],
    features: ["Alineación Ética", "Sistemas Inteligentes", "Modelos Dedicados", "Automatización Extrema"],
    countdownEnabled: false,
    pillText: "✦ PIONEERING DYNAMIC AESTHETICS",
    customFont: "display"
  },
  {
    id: "lumina-university",
    title: "LUMINA UNIVERSITY",
    industry: "Educación & Investigación",
    year: "2026",
    slogan: "Where ideas of the future come to life.",
    description: "Elegancia suntuosa, aspiracional y cinemática. Una paleta de acentos dorados acompañada de una tipografía serif refinada.",
    detailedDescription: "Para una institución académica disruptiva del mañana. El objetivo era evocar prestigio y ambición estelar a través de ilustraciones nocturnas cósmicas, transiciones fluidas de letras serif clásicas y llamadas de acción dobles altamente persuasivas.",
    accentColor: "gold",
    accentHex: "#D4A84B",
    styleReference: "Estilo Editorial Premium (Tipografía Serif + Acentos Dorados + Composición Cinematográfica)",
    tags: ["SERIF EDITORIAL", "DETALLES EN DORADO LUX", "Dual CTAs", "Gradientes cósmicos"],
    features: ["Prestigio Global", "Redes Astrofísicas", "Mentores Exclusivos", "Inmersión Completa"],
    countdownEnabled: false,
    pillText: "🌌 CONSTRUYENDO EL DESTINO HUMANO",
    customFont: "serif"
  }
];

export const SERVICES: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page Premium",
    price: "799",
    description: "Un sitio de una sola página pulido, enfocado obsesivamente en la conversión de alta velocidad y un impacto visual instantáneo.",
    features: [
      "Estructura orientada a la venta directa",
      "Copywriting complementado por IA para máxima conversión",
      "Optimización de velocidad móvil extrema (98+ Core Web Vitals)",
      "Hasta 4 integraciones API (CRM, Calendly, Stripe)"
    ],
    isFeatured: false,
    accentColor: "blue"
  },
  {
    id: "sitio-corporativo",
    title: "Sitio Corporativo & IA",
    price: "1,550",
    description: "La joya de la corona. Un portal web de varias secciones que posiciona a tu empresa en la cúspide de la vanguardia estética.",
    features: [
      "Diseño editorial a medida de tu sector",
      "Implementación de animaciones Fluid-Scroll de alta velocidad",
      "Soporte multilenguaje y SEO avanzado integrado",
      "Formularios inteligentes y optimización de leads"
    ],
    isFeatured: true, // Esto destaca la tarjeta!
    accentColor: "gold"
  },
  {
    id: "e-commerce",
    title: "E-Commerce Inmersivo",
    price: "2,200",
    description: "Una tienda digital de ultra-alta velocidad que redefine la experiencia de compra de tus clientes de principio a fin.",
    features: [
      "Ficha de producto inmersiva interactiva",
      "Flujo de pago exprés en un solo paso",
      "Gestor de inventario automatizado",
      "Métricas avanzadas integradas en tiempo de ejecución"
    ],
    isFeatured: false,
    accentColor: "red"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Briefing & Estrategia",
    duration: "1 Día",
    description: "Desglosamos tu propuesta de valor, analizamos tu sector y extraemos los rasgos visuales que te diferencian de la competencia."
  },
  {
    number: "02",
    title: "Diseño con IA & Revisiones",
    duration: "2-3 Días",
    description: "Utilizamos las mejores tecnologías de IA para iterar diseños de forma ultra-rápida, refinando la estética hasta rozar la perfección."
  },
  {
    number: "03",
    title: "Despegue & Entrega",
    duration: "1 Día",
    description: "Publicación. Tu sitio premium queda alojado, optimizado, con certificados de seguridad activos y listo para dominar el mercado."
  }
];
