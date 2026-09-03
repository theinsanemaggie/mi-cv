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
    desc: "Primer entrega grupal de Programación 6 (Analista de Sistemas, UNICABA). App desarrollada en equipo de 8 personas.",
    tags: ["C#", "Equipo"],
    url: "https://github.com/theinsanemaggie/TrabajoProyecto",
    year: "2024",
    collab: true,
  },
  {
    title: "BackOfficeSantaRamona",
    desc: "Proyecto colaborativo de backoffice web. Contribución a sistema de gestión interna con HTML y estilos.",
    tags: ["HTML", "CSS"],
    url: "https://github.com/CarlaCarpi/BackOfficeCarli",
    year: "2024",
    collab: true,
  },
  {
    title: "SantaRamona",
    desc: "Proyecto colaborativo en C#. Desarrollo de sistema de gestión para negocio local.",
    tags: ["C#"],
    url: "https://github.com/CarlaCarpi/SantaRamona",
    year: "2024",
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
    title: "JuegoNacional",
    desc: "Videojuego desarrollado para Programación 2 de la carrera. Trabajo grupal con lógica de juego implementada en C#.",
    tags: ["C#", "Equipo"],
    githubUrl: "https://github.com/theinsanemaggie/JuegoNacional",
    year: "2024",
    collab: true,
  },
  {
    title: "P1UNICABAJ1",
    desc: "Primer juego de Programación 1 en UNICABA. Ejercicio introductorio de lógica y estructuras básicas en C#.",
    tags: ["C#"],
    githubUrl: "https://github.com/theinsanemaggie/P1UNICABAJ1",
    year: "2023",
    collab: false,
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
  { src: "/art/obra1.jpg", alt: "Sam", title: "Sam - Stardew Valley" },
  { src: "/art/obra8.jpg", alt: "Dave Mustaine", title: "Dave Mustaine - Megadeth" },
  { src: "/art/obra9.jpg", alt: "The creature", title: "The creature - Frankenstein" },
  { src: "/art/obra10.jpg", alt: "The creature", title: "The creature - Frankenstein - Lineart" },
  { src: "/art/obra2.jpg", alt: "Ramona", title: "Ramona Flowers" },
  { src: "/art/obra3.jpg", alt: "Mark Grayson", title: "Mark - Invencible" },
  { src: "/art/obra4.jpg", alt: "Pomni", title: "Pomni - TADC" },
  { src: "/art/obra5.jpg", alt: "Fionna Campbell", title: "Sketch de Fionna Campbell - HDA" },
  { src: "/art/obra6.jpg", alt: "Finn", title: "Finn el Humano - HDA" },
]
