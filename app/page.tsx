import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SectionLabel } from "@/components/Tags"
import ProjectCard from "@/components/ProjectCard"
import SiteCard from "@/components/SiteCard"
import InstagramCard from "@/components/InstagramCard"
import Window from "@/components/Window"
import { softwareProjects, videojuegos, webSites, instagramPosts } from "@/lib/data"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Magalí Amato · Developer & Illustrator",
  description: "Portfolio de desarrollo web, videojuegos e ilustración digital de Magalí Amato",
}

const cosmos = videojuegos.find((v) => v.title === "Cosmos")!
const topSoftware = [...softwareProjects].sort((a, b) => Number(b.year) - Number(a.year))[0]

const destacados = [
  { title: cosmos.title, desc: cosmos.desc, tags: cosmos.tags, url: cosmos.githubUrl!, year: cosmos.year },
  { title: topSoftware.title, desc: topSoftware.desc, tags: topSoftware.tags, url: topSoftware.url, year: topSoftware.year },
]

export default function Home() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      {/* Hero */}
      <section className="mb-6">
        <p className="text-sm tracking-wide mb-2" style={{ color: "var(--teal)" }}>
          hola, soy
        </p>
        <h1 className="leading-none">
          <Image
            src={withBasePath("/art/maggie.webp")}
            alt="Magalí Amato"
            width={1200}
            height={573}
            priority
            className="h-auto w-auto"
            style={{ maxWidth: "clamp(308px, 60vw, 528px)" }}
          />
        </h1>
        <p
          className="text-sm tracking-[.2em] uppercase mt-2"
          style={{ color: "var(--muted)" }}
        >
          developer &amp; illustrator · buenos aires
        </p>
        <p className="text-base mt-5 max-w-lg leading-relaxed" style={{ color: "var(--text)" }}>
          Construyo interfaces web prolijas y dibujo personajes con estilo cartoon.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase px-5 py-3 rounded-full transition-opacity hover:opacity-70"
            style={{ background: "var(--pink)", color: "#fff" }}
          >
            ver portfolio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase px-5 py-3 rounded-full transition-opacity hover:opacity-70"
            style={{ border: "1.5px solid var(--dark3)", color: "var(--text)" }}
          >
            hablemos
          </Link>
        </div>
      </section>

      {/* Perfil */}
      <Window path="C:\theinsanemaggie\profile" className="mb-10">
        <div className="flex items-center gap-4">
          <div
            className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "2px solid var(--pink)" }}
          >
            <Image src={withBasePath("/perfil.webp")} alt="Magalí Amato" fill sizes="56px" className="object-cover" />
          </div>
          <div>
            <p className="text-base font-bold" style={{ color: "var(--pink)" }}>
              Magalí Amato
            </p>
            <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "var(--teal)" }}>
              front-end dev · ilustradora 
            </p>
            <p className="text-sm mt-1.5 italic" style={{ color: "var(--muted)" }}>
              &ldquo;Endure and survive&rdquo;
            </p>
          </div>
        </div>
      </Window>

      {/* Destacados */}
      <Window path="C:\theinsanemaggie\destacados" className="mb-10">
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
            className="card-hover flex flex-col justify-center rounded-xl p-5 transition-colors duration-200"
            style={{ background: "var(--dark2)", border: "1.5px solid rgba(227,0,106,0.35)" }}
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
      </Window>

      {/* Instagram */}
      <Window path="C:\theinsanemaggie\instagram" className="mb-10">
        <div className="flex items-center justify-between gap-3 mb-3 pb-3" style={{ borderBottom: "1px solid var(--dark3)" }}>
          <SectionLabel>instagram</SectionLabel>
          <a
            href="https://www.instagram.com/theinsanetomato"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--pink)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @theinsanetomato
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {instagramPosts.map((p) => (
            <InstagramCard key={p.url} {...p} />
          ))}
        </div>
      </Window>

      {/* Sitios web */}
      <Window path="C:\theinsanemaggie\sitios" className="mb-10">
        <SectionLabel>sitios web</SectionLabel>
        {webSites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {webSites.map((s) => (
              <SiteCard key={s.title} {...s} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2"
            style={{ border: "2px dashed var(--dark3)" }}
          >
            <span style={{ color: "var(--faint)", fontSize: "24px" }}>+</span>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Más sitios en camino.
            </p>
          </div>
        )}
      </Window>

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
          className="inline-flex items-center gap-2 mt-5 text-sm tracking-wide uppercase px-6 py-3 rounded-full transition-opacity hover:opacity-70"
          style={{ background: "var(--teal)", color: "#fff" }}
        >
          escribime →
        </Link>
      </section>
    </div>
  )
}
