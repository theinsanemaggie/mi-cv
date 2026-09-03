"use client"

import { useEffect } from "react"
import Window from "./Window"

export default function InstagramWidget() {
  useEffect(() => {
    // Carga el script de embeds de Instagram
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Window path="C:\theinsanetomato\instagram">
      <div
        className="text-[9px] tracking-[.2em] uppercase mb-4 pb-1.5"
        style={{
          color: "var(--pink)",
          borderBottom: "1px solid var(--dark3)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        últimas publicaciones · @theinsanetomato
      </div>

      {/*
        INSTRUCCIONES PARA AGREGAR TUS POSTS:
        1. Andá a instagram.com y abrí cualquier publicación tuya
        2. Hacé click en los tres puntos (⋯) → "Insertar"
        3. Copiá solo la URL del blockquote (data-instgrm-permalink)
        4. Reemplazá las URLs de abajo con las tuyas

        NOTA: Instagram requiere que tu cuenta sea pública para que los embeds funcionen.
        El widget oficial de Instagram carga automáticamente la imagen y el caption.
      */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Post 1 — reemplazá la URL */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/REEMPLAZA_CON_TU_POST_1/"
          data-instgrm-version="14"
          style={{
            background: "var(--dark2)",
            border: "1px solid var(--dark3)",
            borderRadius: "8px",
            maxWidth: "100%",
            minWidth: "0",
            width: "100%",
          }}
        />

        {/* Post 2 — reemplazá la URL */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/REEMPLAZA_CON_TU_POST_2/"
          data-instgrm-version="14"
          style={{
            background: "var(--dark2)",
            border: "1px solid var(--dark3)",
            borderRadius: "8px",
            maxWidth: "100%",
            minWidth: "0",
            width: "100%",
          }}
        />
      </div>

      <a
        href="https://www.instagram.com/theinsanetomato"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{
          color: "var(--pink)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        ver perfil completo →
      </a>
    </Window>
  )
}