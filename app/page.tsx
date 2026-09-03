"use client"

import Link from "next/link"
import { SectionLabel } from "@/components/Tags"
import ProjectCard from "@/components/ProjectCard"
import { softwareProjects } from "@/lib/data"

const destacados = [...softwareProjects].sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 2)

export default function Home() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      {/* Hero */}
      <section className="mb-10">
        <p className="text-sm tracking-wide mb-2" style={{ color: "var(--teal)" }}>
          hola, soy
        </p>
        <h1
          className="font-bold leading-none uppercase"
          style={{
            fontSize: "clamp(52px,12vw,82px)",
            color: "var(--pink)",
            letterSpacing: "-0.02em",
          }}
        >
          magalí.
        </h1>
        <p
          className="text-sm tracking-[.2em] uppercase mt-2"
          style={{ color: "var(--muted)" }}
        >
          developer &amp; illustrator · buenos aires
        </p>
        <p className="text-base mt-5 max-w-lg leading-relaxed" style={{ color: "var(--text)" }}>
          Código de día, tinta de noche. Construyo interfaces web prolijas y dibujo
          personajes con demasiada personalidad — a veces al mismo tiempo.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase px-5 py-3 rounded-full transition-opacity hover:opacity-80"
            style={{ background: "var(--pink)", color: "#fff" }}
          >
            ver portfolio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase px-5 py-3 rounded-full transition-colors"
            style={{ border: "1.5px solid var(--dark3)", color: "var(--text)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--dark3)")}
          >
            hablemos
          </Link>
        </div>
      </section>

      {/* Destacados */}
      <section className="mb-10">
        <SectionLabel>destacados</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destacados.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              tags={p.tags}
              url={p.url}
              meta={p.year}
              type="code"
            />
          ))}

          <Link
            href="/proyectos"
            className="flex flex-col justify-center rounded-xl p-5 transition-colors duration-200"
            style={{ background: "var(--dark)", border: "1.5px solid rgba(227,0,106,0.35)" }}
          >
            <p className="text-lg font-bold" style={{ color: "var(--pink)" }}>
              Ilustración
            </p>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text)" }}>
              Personajes de series, videojuegos y comisiones a pedido. Estilo cartoon,
              color plano, mucha expresión.
            </p>
            <span className="text-sm mt-3" style={{ color: "var(--pink)" }}>
              ver galería →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section
        className="rounded-xl p-6 sm:p-8 mb-6 text-center"
        style={{ background: "var(--dark)", border: "1.5px solid var(--dark3)" }}
      >
        <p className="text-lg font-bold" style={{ color: "#e5e5e5" }}>
          ¿Tenés un proyecto en mente o querés una ilustración a medida?
        </p>
        <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
          Me encanta escuchar ideas nuevas.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 mt-5 text-sm tracking-wide uppercase px-6 py-3 rounded-full transition-opacity hover:opacity-80"
          style={{ background: "var(--teal)", color: "#fff" }}
        >
          escribime →
        </Link>
      </section>
    </div>
  )
}
