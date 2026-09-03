"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
]

const SOCIALS = [
  {
    href: "https://github.com/theinsanemaggie",
    label: "GitHub",
    bg: "var(--dark2)",
    border: "1.5px solid var(--dark3)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#999">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/theinsanetomato",
    label: "Instagram",
    bg: "var(--pink)",
    border: "none",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@theinsanemaggie",
    label: "YouTube",
    bg: "#1a0000",
    border: "1.5px solid #2a1010",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#ff0000">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

function SocialLinks({ className = "", bordered = false }: { className?: string; bordered?: boolean }) {
  return (
    <div
      className={`flex gap-2 ${className}`}
      style={bordered ? { borderTop: "1px solid var(--dark3)" } : undefined}
    >
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ background: s.bg, border: s.border }}
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="relative z-20 px-5 py-4 max-w-4xl mx-auto"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm tracking-[.18em] uppercase"
          style={{ color: "var(--pink)" }}
          onClick={() => setOpen(false)}
        >
          theinsane*
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide uppercase transition-opacity hover:opacity-80"
                style={{ color: active ? "var(--pink)" : "var(--text)" }}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden sm:block">
          <SocialLinks />
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: "var(--dark2)", border: "1.5px solid var(--dark3)" }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span style={{ color: "var(--pink)", fontSize: "18px" }}>{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div
          className="sm:hidden mt-4 rounded-xl p-4"
          style={{ background: "var(--dark)", border: "1.5px solid var(--dark3)" }}
        >
          <nav className="flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-wide uppercase py-3 px-2 rounded-lg transition-colors"
                  style={{
                    color: active ? "var(--pink)" : "var(--text)",
                    background: active ? "var(--dark2)" : "transparent",
                  }}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>
          <SocialLinks className="mt-4 pt-4" bordered />
        </div>
      )}
    </header>
  )
}
