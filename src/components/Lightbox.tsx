"use client"

import { useEffect } from "react"
import Image from "next/image"

type Props = {
  src: string
  alt: string
  onClose: () => void
}

export default function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full text-sm transition-opacity hover:opacity-70"
        style={{
          background: "var(--dark2)",
          border: "1px solid var(--dark3)",
          color: "var(--pink)",
          fontFamily: "'Space Mono', monospace",
        }}
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Imagen */}
      <div
        className="relative max-w-3xl w-full max-h-[85vh] rounded-xl overflow-hidden"
        style={{ border: "1.5px solid var(--dark3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={900}
          className="w-full h-auto object-contain"
          style={{ maxHeight: "85vh" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs tracking-widest uppercase"
          style={{
            background: "rgba(0,0,0,0.7)",
            color: "var(--pink)",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {alt}
        </div>
      </div>

      {/* Hint teclado */}
      <p
        className="absolute bottom-5 text-xs tracking-widest"
        style={{ color: "var(--muted)" }}
      >
        ESC para cerrar
      </p>
    </div>
  )
}