"use client"

import { useState } from "react"
import { TagPill } from "./Tags"
import type { VideojuegoItem } from "@/lib/data"

export default function GameCard({ title, desc, tags, year, collab, githubUrl, itchUrl, embedUrl }: VideojuegoItem) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-200"
      style={{ background: "var(--dark)", border: `1.5px solid ${playing ? "var(--teal)" : "var(--dark3)"}` }}
    >
      {embedUrl && playing && (
        <div className="relative w-full" style={{ paddingBottom: "62%" }}>
          <iframe
            src={embedUrl}
            title={title}
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      )}

      {embedUrl && !playing && (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Jugar ${title}`}
          className="relative w-full aspect-video flex items-center justify-center"
          style={{ background: "var(--dark2)" }}
        >
          <span
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.55)", border: "2px solid #fff" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-base font-bold" style={{ color: "#e5e5e5" }}>{title}</p>
          <span className="text-xs flex-shrink-0" style={{ color: "var(--teal)" }}>
            {year}{collab ? " · equipo" : ""}
          </span>
        </div>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text)" }}>{desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((t) => (
            <TagPill key={t} tag={t} type="code" />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
          {embedUrl && playing && (
            <button
              onClick={() => setPlaying(false)}
              className="text-sm tracking-wide"
              style={{ color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}
            >
              ✕ cerrar
            </button>
          )}
          {embedUrl && !playing && (
            <button
              onClick={() => setPlaying(true)}
              className="text-sm font-bold tracking-wide"
              style={{ color: "var(--teal)", fontFamily: "'Space Mono', monospace" }}
            >
              ▶ jugar acá
            </button>
          )}
          {itchUrl && (
            <a
              href={itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-wide transition-opacity hover:opacity-70"
              style={{ color: "var(--teal)", fontFamily: "'Space Mono', monospace" }}
            >
              ver en itch.io ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-wide transition-opacity hover:opacity-70"
              style={{ color: "var(--teal)", fontFamily: "'Space Mono', monospace" }}
            >
              ver en GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
