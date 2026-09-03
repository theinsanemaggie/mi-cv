import type { Metadata } from "next"
import { SectionLabel } from "@/components/Tags"
import FolderCard from "@/components/FolderCard"
import GameCard from "@/components/GameCard"
import ArtCarousel from "@/components/ArtCarousel"
import { softwareProjects, videojuegos, artItems } from "@/lib/data"

export const metadata: Metadata = {
  title: "Proyectos · Magalí Amato",
  description: "Ilustración, videojuegos y desarrollo de software de Magalí Amato",
}

export default function Proyectos() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      <div className="mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--pink)" }}>
          De la ilustración al código
        </h1>
        <p className="text-base max-w-xl" style={{ color: "var(--text)" }}>
          Arte, videojuegos y desarrollo de software — todo lo que hago, en un mismo lugar.
        </p>
      </div>

      {/* Arte */}
      <section className="mb-14">
        <SectionLabel>arte</SectionLabel>
        <ArtCarousel items={artItems} />
      </section>

      {/* Videojuegos */}
      <section className="mb-14">
        <SectionLabel>videojuegos</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videojuegos.map((v) => (
            <GameCard key={v.title} {...v} />
          ))}
          <div
            className="rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2"
            style={{ border: "2px dashed var(--dark3)" }}
          >
            <span style={{ color: "var(--faint)", fontSize: "24px" }}>+</span>
            <p className="text-sm" style={{ color: "var(--muted)" }}>Más juegos en camino.</p>
          </div>
        </div>
      </section>

      {/* Software */}
      <section>
        <SectionLabel>software</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {softwareProjects.map((p) => (
            <FolderCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  )
}
