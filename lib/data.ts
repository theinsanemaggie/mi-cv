export type ExperienceItem = {
  title: string
  company: string
  period: string
  location?: string
  desc: string
  tags: string[]
  type: "code" | "art" | "other"
}

export const experience: ExperienceItem[] = [
  {
    title: "Desarrolladora web",
    company: "PWH Design",
    period: "jun. 2026 – actualidad · 4 meses",
    location: "Buenos Aires y alrededores · remoto",
    desc: "Prácticas en soporte técnico y sistemas informáticos, en modalidad 100% remota.",
    tags: ["Soporte técnico", "Sistemas informáticos"],
    type: "code",
  },
  {
    title: "Desarrolladora de front-end",
    company: "habla.agency",
    period: "abr. 2026 – actualidad · 6 meses",
    location: "Provincia de Buenos Aires, Argentina · remoto",
    desc: "Me especializo en construir interfaces web que combinan estética y funcionalidad. Mi enfoque está en escribir código limpio y escalable que se traduzca en experiencias de usuario reales y significativas.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "code",
  },
  {
    title: "Desarrolladora de software",
    company: "Freelance",
    period: "mar. 2026 – actualidad · 7 meses",
    location: "Provincia de Buenos Aires, Argentina · remoto",
    desc: "Soy desarrolladora de software freelance, especializada en construir aplicaciones web que resuelven problemas reales. Me apasiona el desarrollo continuo y la comunicación clara con mis clientes.",
    tags: ["C#", "JavaScript", "Python", "Django", "HTML/CSS", "SQL"],
    type: "code",
  },
  {
    title: "Ilustradora",
    company: "Autónoma · @theinsanetomato",
    period: "ene. 2024 – actualidad · 2 años 9 meses",
    desc: "Soy ilustradora autodidacta, especializada en el estilo de dibujos animados. Me dedico a hacer dibujos a pedido de la mejor calidad posible, con la finalidad de comunicar un mensaje o emoción.",
    tags: ["Ilustración digital", "Ilustración vectorial"],
    type: "art",
  },
  {
    title: "Atención al cliente",
    company: "CIFA · UBA Agronomía",
    period: "feb. 2024 – actualidad",
    desc: "Impresiones, guías, escaneos y parciales en el Centro de Impresiones de la Facultad de Agronomía.",
    tags: ["Ventas", "Impresión"],
    type: "other",
  },
  {
    title: "Pasante",
    company: "UFLO – Universidad de Flores",
    period: "nov. 2022",
    desc: "Trabajos de investigación y análisis de datos en la oficina de informes.",
    tags: ["Excel", "Google Sheets"],
    type: "other",
  },
  {
    title: "Pasante",
    company: "Radio Frecuencia Zero",
    period: "oct. 2022",
    desc: "Investigación en producción sobre efemérides. Aplicación del Bachiller en Comunicación Social.",
    tags: ["Investigación", "Producción"],
    type: "other",
  },
]

export type EducationItem = {
  degree: string
  school: string
  period: string
  note: string
}

export const education: EducationItem[] = [
  {
    degree: "Lic. Desarrollo y Producción de Videojuegos",
    school: "Universidad de la Ciudad de Buenos Aires",
    period: "feb. 2026 – dic. 2028",
    note: "Animation · Interactive Technology · Video Graphics",
  },
  {
    degree: "Tecnicatura en Análisis de Sistemas",
    school: "Inst. Superior Ntra. Sra. de la Paz",
    period: "mar. 2023 – 2025",
    note: "Programación · Base de Datos · Redes · Gestión de Proyectos",
  },
  {
    degree: "Programación Backend I: Desarrollo Avanzado de Backend",
    school: "Coderhouse",
    period: "oct. 2025",
    note: "MongoDB · JavaScript · Node.js · Express · API REST",
  },
]

export const skillsCode = ["C#", "TypeScript", "JavaScript", "Python", "Django", "React", "Next.js", "Node.js", "HTML/CSS", "SQL", "Git", "Scrum", "Soporte técnico", "Sistemas informáticos"]
export const skillsArt = ["Illustrator", "PaintToolSai", "Ilustración digital", "Vectorial", "Character design", "Animación"]

export type SysProject = {
  title: string
  desc: string
  tags: string[]
  url: string
  year: string
  collab: boolean
}

export const softwareProjects: SysProject[] = [
  {
    title: "CoderHouse",
    desc: "Entrega final del curso Programación Backend I: Desarrollo Avanzado de Backend. Proyecto individual de cierre de cursada.",
    tags: ["JavaScript", "Node.js", "Backend"],
    url: "https://github.com/theinsanemaggie/CoderHouse",
    year: "2025",
    collab: false,
  },
  {
    title: "ActividadGrupalP6",
    desc: "Primer entrega grupal de Programación 6 (Analista de Sistemas, NSLP). App desarrollada en equipo de 8 personas.",
    tags: ["C#", "Equipo"],
    url: "https://github.com/theinsanemaggie/TrabajoProyecto",
    year: "2025",
    collab: true,
  },
  {
    title: "BackOfficeSantaRamona",
    desc: "Proyecto colaborativo de backoffice web. Contribución a sistema de gestión interna con HTML y estilos.",
    tags: ["HTML", "CSS"],
    url: "https://github.com/CarlaCarpi/BackOfficeCarli",
    year: "2025",
    collab: true,
  },
  {
    title: "SantaRamona",
    desc: "Proyecto colaborativo en C#. Desarrollo de sistema de gestión para negocio local.",
    tags: ["C#"],
    url: "https://github.com/CarlaCarpi/SantaRamona",
    year: "2025",
    collab: true,
  },
]

/*
  INSTRUCCIONES PARA AGREGAR UN JUEGO DE ITCH.IO:
  1. En itch.io, entrá a la configuración del proyecto y activá "embed" (solo funciona para juegos HTML5).
  2. Copiá la URL que te da el widget de embed y pegala en embedUrl.
  3. itchUrl es el link a la página del juego en itch.io (para "ver en itch.io ↗").
  4. Si el juego no es HTML5 (por ejemplo, un .exe descargable), dejá embedUrl sin definir
     y usá itchUrl para linkear a la página de descarga.
*/
export type VideojuegoItem = {
  title: string
  desc: string
  tags: string[]
  year: string
  collab: boolean
  githubUrl?: string
  itchUrl?: string
  embedUrl?: string
}

export const videojuegos: VideojuegoItem[] = [
  {
    title: "Cosmos",
    desc: "Plataformero 2D en desarrollo con Godot: salto, disparo y dash, con enemigos, coleccionables y niveles propios.",
    tags: ["Godot", "GDScript", "Plataformero"],
    githubUrl: "https://github.com/theinsanemaggie/cosmos",
    year: "2026",
    collab: false,
  },
  {
    title: "JuegoNacional",
    desc: "Videojuego desarrollado para Programación 2 de la carrera. Trabajo grupal con lógica de juego implementada en C#.",
    tags: ["C#", "Equipo"],
    githubUrl: "https://github.com/theinsanemaggie/JuegoNacional",
    year: "2023",
    collab: true,
  },
  {
    title: "P1UNICABAJ1",
    desc: "Primer juego de Programación 1 en UNICABA. Ejercicio introductorio de lógica y estructuras básicas en C#.",
    tags: ["C#"],
    githubUrl: "https://github.com/theinsanemaggie/P1UNICABAJ1",
    year: "2026",
    collab: false,
  },
]

/*
  INSTRUCCIONES PARA AGREGAR LA CAPTURA DE UN SITIO:
  1. Guardá la imagen en /public/pages/ (ej: /public/pages/mi-sitio.webp).
  2. Completá el campo "preview" de la entrada correspondiente acá abajo con ese path.
     Mientras "preview" esté vacío, la card muestra un placeholder en su lugar.
*/
export type WebSiteItem = {
  title: string
  desc: string
  tags: string[]
  url: string
  preview?: string
}

export const webSites: WebSiteItem[] = [
  {
    title: "Cuibel Propiedades",
    desc: "Diseño y desarrollo full stack de un sitio inmobiliario, de punta a punta.",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    url: "https://cquibelpropiedades.com.ar/",
    preview: "/pages/cquibel.webp",
  },
  {
    title: "Truver",
    desc: "Desarrollo front-end de la plataforma, con React.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://www.truver.com.ar/",
    preview: "/pages/truver.webp",
  },
  {
    title: "Santa Ramona",
    desc: "Backend del sistema de gestión, construido en C# con .NET (MVC).",
    tags: ["C#", ".NET", "MVC"],
    url: "https://santaramona.org/HomePublic/IndexPublic",
    preview: "/pages/santaramona.webp",
  },
  {
    title: "Indigo Sport",
    desc: "Desarrollo front-end sobre WordPress.",
    tags: ["WordPress"],
    url: "https://indigo.sport/argentina/",
    preview: "/pages/indigo.webp",
  },
]

/*
  INSTRUCCIONES PARA AGREGAR TUS IMÁGENES DE ARTE:
  1. Poné tus imágenes en la carpeta /public/art/
     Ej: /public/art/obra1.jpg, /public/art/obra2.png, etc.
  2. Actualizá el array artItems con src, alt y title de cada una.
*/
export type ArtItem = {
  src: string
  alt: string
  title: string
}

export const artItems: ArtItem[] = [
  { src: "/art/obra1.webp", alt: "Sam", title: "Sam - Stardew Valley" },
  { src: "/art/obra2.webp", alt: "Ramona", title: "Ramona Flowers" },
  { src: "/art/obra3.webp", alt: "Mark Grayson", title: "Mark - Invencible" },
  { src: "/art/obra4.webp", alt: "Pomni", title: "Pomni - TADC" },
  { src: "/art/obra5.webp", alt: "Fionna Campbell", title: "Sketch de Fionna Campbell - HDA" },
  { src: "/art/obra6.webp", alt: "Finn", title: "Finn el Humano - HDA" },
  { src: "/art/obra7.webp", alt: "obra 7", title: "Fionna Campbell - HDA" },
  { src: "/art/obra8.webp", alt: "Dave Mustaine", title: "Dave Mustaine - Megadeth" },
  { src: "/art/obra9.webp", alt: "The creature", title: "The creature - Frankenstein" },
  { src: "/art/obra10.webp", alt: "The creature", title: "The creature - Frankenstein Lineart" },
  // Título provisorio — corregilo cuando quieras, ver instrucciones arriba.
  { src: "/art/gerard-way.webp", alt: "Gerard Way", title: "Gerard Way" },
  { src: "/art/jake.webp", alt: "Jake", title: "Jake" },
  { src: "/art/objetivos-dorso.webp", alt: "Objetivos, dorso", title: "Objetivos (dorso)" },
  { src: "/art/papemeritus.webp", alt: "Papemeritus", title: "Papemeritus" },
  { src: "/art/robo-del-siglo-dorso.webp", alt: "Robo del Siglo, dorso", title: "Robo del Siglo (dorso)" },
  { src: "/art/room3-fondo.webp", alt: "Room 3, fondo", title: "Room 3 (fondo)" },
  { src: "/art/room5v2.webp", alt: "Room 5", title: "Room 5" },
  { src: "/art/sam.webp", alt: "Sam", title: "Sam" },
]

/*
  Íconos decorativos (fondo transparente) para usar como acento visual
  en secciones estratégicas — sobre todo en Proyectos → Ilustración.
*/
export type DecorItem = {
  src: string
  alt: string
}

export const decorIcons: DecorItem[] = [
  { src: "/art/comodin.webp", alt: "Sombrero de bufón" },
  { src: "/art/demencia.webp", alt: "Cara con espirales" },
  { src: "/art/hacker.webp", alt: "Cara con cinta en la boca" },
  { src: "/art/rehen.webp", alt: "Cara de diablito" },
  { src: "/art/secuaz.webp", alt: "Personaje con notebook" },
]

/*
  INSTRUCCIONES PARA AGREGAR LA CAPTURA DE UN POSTEO DE INSTAGRAM:
  1. Guardá la imagen en /public/ig/ (ej: /public/ig/mi-posteo.webp).
  2. Completá el campo "preview" de la entrada correspondiente acá abajo con ese path.
     Mientras "preview" esté vacío, la card muestra un placeholder en su lugar.
*/
export type InstagramPost = {
  title: string
  caption: string
  url: string
  preview?: string
}

export const instagramPosts: InstagramPost[] = [
  {
    title: "Speedpaint Dave Mustaine",
    caption: "Proceso de dibujo del Colo Mustaine, de Megadeth.",
    url: "https://www.instagram.com/reel/DF5dcVlxUG8/",
    preview: "/ig/dave-mustaine.webp",
  },
  {
    title: "Robo del Siglo — juego de cartas",
    caption: "Juego de cartas de mesa, proyecto universitario de diseño de juegos.",
    url: "https://www.instagram.com/p/DXhWuwmjb70/",
    preview: "/ig/robo-del-siglo.webp",
  },
  {
    title: "Dibujar o sobrevivir — juego",
    caption: "Ilustración de portada para el juego grupal, con Nicolás Castillo, Belén Campagnuolo y Facundo Teijido.",
    url: "https://www.instagram.com/p/DaN0QiVHJ6p/",
    preview: "/ig/dibujar-o-sobrevivir.webp",
  },
  {
    title: "Sketchbook 2025",
    caption: "Una página de mi cuaderno de bocetos.",
    url: "https://www.instagram.com/reel/DMi6sCKBlFx/",
    preview: "/ig/sketchbook-2025.webp",
  },
]
