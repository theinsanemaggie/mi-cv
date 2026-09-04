import type { Metadata } from "next"
import Image from "next/image"
import { SectionLabel } from "@/components/Tags"
import FolderCard from "@/components/FolderCard"
import GameCard from "@/components/GameCard"
import SiteCard from "@/components/SiteCard"
import InstagramCard from "@/components/InstagramCard"
import ArtCarousel from "@/components/ArtCarousel"
import Window from "@/components/Window"
import { softwareProjects, videojuegos, artItems, webSites, decorIcons, instagramPosts } from "@/lib/data"

const rotations = [-8, 6, -4, 9, -6]

export const metadata: Metadata = {
  title: "Proyectos · Magalí Amato",
  description: "Ilustración, videojuegos y desarrollo de software de Magalí Amato",
}

export default function Proyectos() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--pink)" }}>
          De la ilustración al código
        </h1>
        <p className="text-base max-w-xl" style={{ color: "var(--text)" }}>
          Arte, videojuegos y desarrollo de software.
        </p>
      </div>

      {/* Arte */}
      <Window path="C:\theinsanemaggie\proyectos\arte" className="mb-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <SectionLabel>arte</SectionLabel>
          <div className="hidden sm:flex items-center gap-1 flex-shrink-0 -mt-1">
            {decorIcons.map((d, i) => (
              <div
                key={d.src}
                className="relative w-[57px] h-[57px]"
                style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
              >
                <Image src={d.src} alt={d.alt} fill sizes="57px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
        <ArtCarousel items={artItems} />
      </Window>

      {/* Instagram */}
      <Window path="C:\theinsanemaggie\proyectos\instagram" className="mb-6">
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
      <Window path="C:\theinsanemaggie\proyectos\sitios" className="mb-6">
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

      {/* Videojuegos */}
      <Window path="C:\theinsanemaggie\proyectos\videojuegos" className="mb-6">
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
      </Window>

      {/* Software */}
      <Window path="C:\theinsanemaggie\proyectos\software">
        <SectionLabel>software</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {softwareProjects.map((p) => (
            <FolderCard key={p.title} {...p} />
          ))}
        </div>
      </Window>
    </div>
  )
}
