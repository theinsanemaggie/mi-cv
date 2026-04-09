"use client"

import { useState } from "react"
import Window from "@/components/Window"
import ArtCarousel from "@/components/ArtCarousel"
import path from "path/win32"


/* ─── DATOS ──────────────────────────────────────────── */

const experience = [
  {
    title: "Desarrolladora de front-end",
    company: "habla.agency",
    period: "abr. 2026 – actualidad",
    desc: "Interfaces web que combinan estética y funcionalidad. Código limpio y escalable orientado a experiencias de usuario reales.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "code",
  },
  {
    title: "Desarrolladora de software",
    company: "Freelance",
    period: "mar. 2026 – actualidad",
    desc: "Aplicaciones web que resuelven problemas reales. Enfoque en comunicación clara con clientes y entrega de calidad.",
    tags: ["C#", "JavaScript", "Python", "Django", "HTML/CSS", "SQL"],
    type: "code",
  },
  {
    title: "Ilustradora",
    company: "Autónoma · @theinsanetomato",
    period: "ene. 2024 – actualidad",
    desc: "Estilo de dibujos animados. Comisiones digitales orientadas a comunicar mensajes y emociones a pedido.",
    tags: ["Ilustración digital", "Vectorial"],
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

const education = [
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

const skillsCode = ["C#","TypeScript", "JavaScript", "Python","Django", "React", "Next.js", "Node.js", "HTML/CSS", "SQL", "Git", "Scrum"]
const skillsArt  = ["Illustrator", "PaintToolSai", "Ilustración digital", "Vectorial", "Character design", "Animación"]

const sysProjects = [
    {
    title: "P1UNICABAJ1",
    desc: "Primer juego de Programación 1 en UNICABA. Ejercicio introductorio de lógica y estructuras básicas en C#.",
    tags: ["C#"],
    url: "https://github.com/theinsanemaggie/P1UNICABAJ1",
    year: "2026",
    collab: false,
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
    title: "JuegoNacional",
    desc: "Videojuego desarrollado para Programación 2 de la carrera. Trabajo grupal con lógica de juego implementada en C#.",
    tags: ["C#", "Videojuego", "Equipo"],
    url: "https://github.com/theinsanemaggie/JuegoNacional",
    year: "2023",
    collab: true,
  },


]

/*
  INSTRUCCIONES PARA AGREGAR TUS IMÁGENES DE ARTE:
  1. Poné tus imágenes en la carpeta /public/art/
     Ej: /public/art/obra1.jpg, /public/art/obra2.png, etc.
  2. Actualizá el array artItems con src, alt y title de cada una.
*/
const artItems = [
  { src: "/art/obra1.png",  alt: "Sam",             title: "Sam - Stardew Valley" },
  { src: "/art/obra2.png",  alt: "Ramona",           title: "Ramona Flowers" },
  { src: "/art/obra3.png",  alt: "Mark Grayson",     title: "Mark - Invencible" },
  { src: "/art/obra4.png",  alt: "Pomni",            title: "Pomni - TADC" },
  { src: "/art/obra5.png",  alt: "Fionna Campbell",  title: "Sketch de Fionna Campbell - HDA" },
  { src: "/art/obra6.png",  alt: "Finn",             title: "Finn el Humano - HDA" },
  { src: "/art/obra7.png",  alt: "obra 7",           title: "Fionna Campbell - HDA" },
  { src: "/art/obra8.png",  alt: "Dave Mustaine",    title: "Dave Mustaine - Megadeth" },
  { src: "/art/obra9.png",  alt: "The creature",     title: "The creature - Frankenstein" },
  { src: "/art/obra10.png", alt: "The creature",     title: "The creature - Frankenstein Lineart" },
]

/* ─── TAG HELPERS ─────────────────────────────────────── */

function TagPill({ tag, type }: { tag: string; type: string }) {
  const style =
    type === "code"
      ? { background: "#0a1a1a", color: "var(--teal)",  border: "1px solid rgba(2,124,125,0.3)" }
      : type === "art"
      ? { background: "#1a0012", color: "var(--pink)",  border: "1px solid rgba(227,0,106,0.3)" }
      : { background: "#1a1500", color: "var(--gold)",  border: "1px solid rgba(207,183,135,0.3)" }
  return (
    <span
      className="text-[9px] px-2 py-0.5 rounded-full tracking-wider"
      style={{ ...style, fontFamily: "'Space Mono', monospace" }}
    >
      {tag}
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[9px] tracking-[.2em] uppercase mb-3 pb-1.5"
      style={{
        color: "var(--pink)",
        borderBottom: "1px solid var(--dark3)",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {children}
    </div>
  )
}

/* ─── PAGE ────────────────────────────────────────────── */

export default function Home() {
  const [portfolioTab, setPortfolioTab] = useState<"sistemas" | "dibujo">("sistemas")
  const [expPage, setExpPage] = useState(0)
  const expPerPage = 2
  const expPages = Math.ceil(experience.length / expPerPage)
  const visibleExp = experience.slice(expPage * expPerPage, expPage * expPerPage + expPerPage)

  return (
    <main
      className="min-h-screen px-8 py-6 max-w-4xl mx-auto"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      {/* ── Grid background ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(227,0,106,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(227,0,106,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Top bar ── */}
      <header className="flex items-center justify-between mb-6 relative z-10">
        <span
          className="text-xs tracking-[.18em] uppercase"
          style={{ color: "var(--pink)" }}
        >
          theinsane*
        </span>
        <div className="flex gap-2">
          <a
            href="https://github.com/theinsanemaggie"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ background: "var(--pink)" }}
            aria-label="GitHub"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/magalí-amato/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ background: "var(--pink)" }}
            aria-label="LinkedIn"
          >

            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/theinsanetomato"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ background: "var(--pink)" }}
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a   href="https://www.youtube.com/@theinsanemaggie"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ background: "var(--pink)" }}
            aria-label="YouTube"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="mb-6 relative z-10">
        <h1
          className="font-bold leading-none uppercase"
          style={{
            fontSize: "clamp(52px,12vw,82px)",
            color: "var(--pink)",
            letterSpacing: "-0.02em",
          }}
        >
          magali.
        </h1>
        <p
          className="text-xs tracking-[.22em] uppercase mt-1"
          style={{ color: "var(--muted)" }}
        >
          developer &amp; illustrator
        </p>
      </section>

      {/* ── Profile ── */}
      <Window path="C:\theinsanemaggie\profile" className="mb-3.5 relative z-10">
        <div className="flex items-center gap-4">
          <div
              className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden"
              style={{ border: "2px solid var(--pink)" }}
            >
              <img
                src="/foto.png"
                alt="Magalí Amato"
                className="w-full h-full object-cover"
              />
          </div>
          <div>
            <p className="text-base font-bold" style={{ color: "var(--pink)" }}>
              Magalí Amato
            </p>
            <p
              className="text-[10px] tracking-widest uppercase mt-0.5"
              style={{ color: "var(--teal)" }}
            >
              analista de sistemas · ilustradora · BsAs
            </p>
            <p
              className="text-xs mt-1.5 italic"
              style={{ color: "var(--muted)" }}
            >
              "código de día, tinta de noche"
            </p>
          </div>
        </div>
      </Window>

      {/* ── Portfolio + Experiencia ── */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 relative z-10 mb-3.5">

        {/* Portfolio window */}
        <Window path="C:\theinsanemaggie\portfolio">
          {/* Tabs */}
          <div className="flex mb-4 rounded-lg overflow-hidden" style={{ border: "1px solid var(--dark3)" }}>
            {(["sistemas", "dibujo"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setPortfolioTab(tab)}
                className="flex-1 py-2 text-[10px] tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background: portfolioTab === tab ? "var(--pink)" : "var(--dark2)",
                  color: portfolioTab === tab ? "#fff" : "var(--muted)",
                  borderRight: tab === "sistemas" ? "1px solid var(--dark3)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Panel sistemas */}
          {portfolioTab === "sistemas" && (
            <div>
              <SectionLabel>proyectos · github</SectionLabel>
              <div className="flex flex-col gap-2">
                {sysProjects.map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg transition-all duration-200"
                    style={{
                      background: "var(--dark2)",
                      border: "1px solid var(--dark3)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--teal)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--dark3)")}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold" style={{ color: "#ccc" }}>
                          {p.title}
                        </p>
                        {p.collab && (
                          <span
                            className="text-[8px] px-1.5 py-0.5 rounded-full tracking-wider"
                            style={{
                              background: "#1a1500",
                              color: "var(--gold)",
                              border: "1px solid rgba(207,183,135,0.25)",
                              fontFamily: "'Space Mono', monospace",
                            }}
                          >
                            collab
                          </span>
                        )}
                      </div>
                      <span
                        className="text-[9px] flex-shrink-0 mt-0.5"
                        style={{ color: "var(--teal)" }}
                      >
                        {p.year} ↗
                      </span>
                    </div>
                    <p
                      className="text-[11px] mt-1.5 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {p.tags.map((t) => (
                        <TagPill key={t} tag={t} type="code" />
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Panel dibujo */}
          {portfolioTab === "dibujo" && (
            <ArtCarousel items={artItems} />
          )}
        </Window>

        {/* Experiencia window */}
        <Window path="C:\theinsanemaggie\experience">
          <SectionLabel>experiencia</SectionLabel>

          {/* Slides */}
          <div>
            {visibleExp.map((exp, i) => (
              <div
                key={i}
                className="mb-3 pb-3"
                style={{ borderBottom: i < visibleExp.length - 1 ? "1px solid var(--dark3)" : "none" }}
              >
                <p className="text-xs font-bold" style={{ color: "#ccc" }}>{exp.title}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>
                  {exp.company} · {exp.period}
                </p>
                <p className="text-[11px] mt-1.5 leading-relaxed" style={{ color: "#999999" }}>
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.tags.map((t) => <TagPill key={t} tag={t} type={exp.type} />)}
                </div>
              </div>
            ))}
          </div>

          {/* Nav carrusel experiencia */}
          <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid var(--dark3)" }}>
            <button
              onClick={() => setExpPage((p) => Math.max(0, p - 1))}
              disabled={expPage === 0}
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all"
              style={{
                background: "var(--dark2)",
                border: "1px solid var(--dark3)",
                color: expPage === 0 ? "var(--faint)" : "var(--muted)",
                cursor: expPage === 0 ? "not-allowed" : "pointer",
              }}
            >
              ‹
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: expPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setExpPage(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === expPage ? "14px" : "6px",
                    height: "6px",
                    background: i === expPage ? "var(--pink)" : "var(--dark3)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => setExpPage((p) => Math.min(expPages - 1, p + 1))}
              disabled={expPage === expPages - 1}
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all"
              style={{
                background: "var(--dark2)",
                border: "1px solid var(--dark3)",
                color: expPage === expPages - 1 ? "var(--faint)" : "var(--muted)",
                cursor: expPage === expPages - 1 ? "not-allowed" : "pointer",
              }}
            >
              ›
            </button>
          </div>

          {/* Educación */}
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--dark3)" }}>
            <SectionLabel>educación</SectionLabel>
            {education.map((ed, i) => (
              <div
                key={i}
                className="mb-3"
              >
                <p className="text-[11px] font-bold leading-snug" style={{ color: "#ccc" }}>{ed.degree}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--teal)" }}>{ed.school}</p>
                <p className="text-[9px] mt-0.5" style={{ color: "var(--muted)" }}>{ed.period}</p>
                <p className="text-[9px] mt-0.5 italic" style={{ color: "#777777" }}>{ed.note}</p>
              </div>
            ))}
          </div>
        </Window>
      </div>

      {/* ── Skills ── */}
      <Window path="C:\theinsanemaggie\stack" className="mb-3.5 relative z-10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <SectionLabel>código</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {skillsCode.map((s) => <TagPill key={s} tag={s} type="code" />)}
            </div>
          </div>
          <div>
            <SectionLabel>arte</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {skillsArt.map((s) => <TagPill key={s} tag={s} type="art" />)}
            </div>
          </div>
        </div>
      </Window>


      {/* ── Footer ── */}
      <footer
        className="flex gap-3 pt-4 relative z-10"
        style={{ borderTop: "1px solid var(--dark3)" }}
      >
        <a
          href="https://github.com/theinsanemaggie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-70"
          style={{
            color: "var(--pink)",
            border: "1px solid rgba(227,0,106,0.35)",
            background: "#0d0010",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          theinsanemaggie
        </a>
        <a
          href="https://www.linkedin.com/in/magalí-amato/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-70"
          style={{
            color: "var(--pink)",
            border: "1px solid rgba(227,0,106,0.35)",
            background: "#0d0010",
          }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            magalí amato
          </a>
        <a
          href="https://www.instagram.com/theinsanetomato"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-70"
          style={{
            color: "var(--pink)",
            border: "1px solid rgba(227,0,106,0.35)",
            background: "#0d0010",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          theinsanetomato
        </a>
        <a href="https://www.youtube.com/@theinsanemaggie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-70"
          style={{
            color: "var(--pink)",
            border: "1px solid rgba(227,0,106,0.35)",
            background: "#0d0010",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          theinsanemaggie
        </a>
      </footer>
    </main>
  )
}