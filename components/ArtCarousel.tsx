"use client"

import { useState } from "react"
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
  const [lightbox, setLightbox] = useState<ArtItem | null>(null)
  const [page, setPage] = useState(0)
  const perPage = 6
  const totalPages = Math.ceil(items.length / perPage)
  const visible = items.slice(page * perPage, page * perPage + perPage)

  return (
    <>
      {/* Hint */}
      <p
        className="text-sm mb-4"
        style={{ color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}
      >
        tocá una imagen para ampliarla
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {visible.map((item, i) => (
          <button
            key={i}
            onClick={() => setLightbox(item)}
            className="art-tile relative aspect-square rounded-lg overflow-hidden group transition-all duration-200"
            style={{
              background: "var(--dark2)",
              border: "1px solid var(--dark3)",
            }}
            aria-label={`Ampliar: ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay: siempre visible en touch, on-hover en desktop */}
            <div
              className="art-tile-overlay absolute inset-0 flex items-center justify-center transition-opacity duration-200"
              style={{ background: "rgba(227,0,106,0.15)" }}
            >
              <span
                className="text-xs px-2.5 py-1.5 rounded"
                style={{
                  background: "rgba(0,0,0,0.8)",
                  color: "var(--pink)",
                  fontFamily: "'Space Mono', monospace",
                  border: "1px solid var(--pink)",
                }}
              >
                ⊕ ampliar
              </span>
            </div>
            {/* Título */}
            <div
              className="art-tile-title absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs tracking-wide transition-opacity duration-200"
              style={{
                background: "rgba(0,0,0,0.85)",
                color: "var(--text)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {item.title}
            </div>
          </button>
        ))}

        {/* Placeholders si hay menos de perPage */}
        {visible.length < perPage &&
          Array.from({ length: perPage - visible.length }).map((_, i) => (
            <div
              key={`ph-${i}`}
              className="aspect-square rounded-lg flex items-center justify-center"
              style={{
                background: "var(--dark2)",
                border: "1px dashed var(--dark3)",
              }}
            >
              <span style={{ color: "var(--faint)", fontSize: "18px" }}>+</span>
            </div>
          ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-all"
            style={{
              background: "var(--dark2)",
              border: "1px solid var(--dark3)",
              color: page === 0 ? "var(--faint)" : "var(--muted)",
              cursor: page === 0 ? "not-allowed" : "pointer",
            }}
          >
            ‹
          </button>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className="w-6 h-6 flex items-center justify-center"
              >
                <span
                  className="block w-2 h-2 rounded-full transition-all"
                  style={{ background: i === page ? "var(--pink)" : "var(--dark3)" }}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-all"
            style={{
              background: "var(--dark2)",
              border: "1px solid var(--dark3)",
              color: page === totalPages - 1 ? "var(--faint)" : "var(--muted)",
              cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}

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