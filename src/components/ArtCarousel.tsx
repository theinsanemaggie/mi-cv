"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Lightbox from "./Lightbox"

type ArtItem = {
  src: string
  alt: string
  title: string
}

type Props = {
  items: ArtItem[]
}

export default function ArtCarousel({ items }: Props) {
  const [cur, setCur] = useState(0)
  const [lightbox, setLightbox] = useState<ArtItem | null>(null)

  const move = (dir: number) => {
    setCur((c) => (c + dir + items.length) % items.length)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox) return
      if (e.key === "ArrowLeft") move(-1)
      if (e.key === "ArrowRight") move(1)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightbox, items.length])

  const current = items[cur]

  return (
    <>
      <div
        className="text-[9px] tracking-[.2em] uppercase mb-3 pb-1.5"
        style={{
          color: "var(--pink)",
          borderBottom: "1px solid var(--dark3)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        portfolio · click para ampliar
      </div>

      {/* Imagen principal */}
      <button
        onClick={() => setLightbox(current)}
        className="relative w-full rounded-lg overflow-hidden group transition-all duration-200"
        style={{
          aspectRatio: "1",
          background: "var(--dark2)",
          border: "1px solid var(--dark3)",
          display: "block",
          cursor: "pointer",
        }}
        aria-label={`Ampliar: ${current.title}`}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(227,0,106,0.12)" }}
        >
          <span
            className="text-[10px] px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(0,0,0,0.8)",
              color: "var(--pink)",
              fontFamily: "'Space Mono', monospace",
              border: "1px solid rgba(227,0,106,0.5)",
            }}
          >
            ⊕ ampliar
          </span>
        </div>
      </button>

      {/* Puntitos */}
      <div className="flex justify-center gap-1.5 mt-2.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className="rounded-full transition-all duration-300"
            style={{
              height: "3px",
              width: i === cur ? "20px" : "6px",
              background: i === cur ? "var(--pink)" : "var(--dark3)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => move(-1)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150"
          style={{
            background: "var(--dark2)",
            border: "1px solid var(--dark3)",
            color: "var(--muted)",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--pink)"
            e.currentTarget.style.color = "var(--pink)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "var(--dark3)"
            e.currentTarget.style.color = "var(--muted)"
          }}
        >
          ‹
        </button>

        <div className="text-center">
          <p className="text-[11px] font-bold" style={{ color: "#ccc" }}>
            {current.title}
          </p>
          <p className="text-[9px]" style={{ color: "var(--muted)" }}>
            {cur + 1} / {items.length}
          </p>
        </div>

        <button
          onClick={() => move(1)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150"
          style={{
            background: "var(--dark2)",
            border: "1px solid var(--dark3)",
            color: "var(--muted)",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--pink)"
            e.currentTarget.style.color = "var(--pink)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "var(--dark3)"
            e.currentTarget.style.color = "var(--muted)"
          }}
        >
          ›
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}