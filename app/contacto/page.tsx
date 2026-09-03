import type { Metadata } from "next"
import { SectionLabel } from "@/components/Tags"

export const metadata: Metadata = {
  title: "Contacto · Magalí Amato",
  description: "Contactate con Magalí Amato para proyectos web o ilustraciones",
}

const channels = [
  {
    label: "GitHub",
    handle: "@theinsanemaggie",
    href: "https://github.com/theinsanemaggie",
    desc: "Todo mi código, repos y proyectos de la carrera.",
    accent: "var(--teal)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@theinsanetomato",
    href: "https://www.instagram.com/theinsanetomato",
    desc: "Ilustraciones nuevas, comisiones abiertas y proceso de dibujo.",
    accent: "var(--pink)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "@theinsanemaggie",
    href: "https://www.youtube.com/@theinsanemaggie",
    desc: "Videos de dibujo, speedpaints y devlogs.",
    accent: "var(--red)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "escribime directo",
    href: "mailto:magalibelenamato@gmail.com",
    desc: "Para propuestas de trabajo, freelance o consultas puntuales.",
    accent: "var(--gold)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Magalí Amato",
    href: "https://www.linkedin.com/in/magal%C3%AD-amato/",
    desc: "Trayectoria profesional completa: experiencia, educación y recomendaciones.",
    accent: "var(--teal)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337V9.75H5.667v8.587h2.672zM7.004 8.62c.929 0 1.508-.615 1.508-1.384-.017-.785-.579-1.384-1.49-1.384-.913 0-1.509.599-1.509 1.384 0 .769.579 1.384 1.474 1.384h.017zM18.336 18.337h-.001v-4.716c0-2.526-1.349-3.703-3.148-3.703-1.453 0-2.104.797-2.467 1.357v-1.164h-2.668c.035.75 0 8.226 0 8.226h2.668v-4.594c0-.246.018-.492.089-.669.196-.492.641-1.002 1.386-1.002.978 0 1.369.746 1.369 1.84v4.425h2.672z" />
      </svg>
    ),
  },
]

export default function Contacto() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--pink)" }}>
        Contacto
      </h1>
      <p className="text-base max-w-lg mb-10" style={{ color: "var(--text)" }}>
        ¿Tenés un proyecto, una idea o solo querés saludar? Elegí el canal que
        más te acomode, te respondo apenas puedo.
      </p>

      <SectionLabel>canales</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === "Email" ? undefined : "_blank"}
            rel={c.label === "Email" ? undefined : "noopener noreferrer"}
            className="flex items-start gap-4 rounded-xl p-5 transition-colors duration-200"
            style={{ background: "var(--dark)", border: "1.5px solid var(--dark3)" }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--dark2)", color: c.accent }}
            >
              {c.icon}
            </div>
            <div>
              <p className="text-base font-bold" style={{ color: "#e5e5e5" }}>
                {c.label}
              </p>
              <p className="text-sm mt-0.5" style={{ color: c.accent }}>
                {c.handle}
              </p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>
                {c.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
