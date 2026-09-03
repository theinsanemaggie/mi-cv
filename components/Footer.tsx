export default function Footer() {
  return (
    <footer
      className="relative z-10 max-w-4xl mx-auto px-5 py-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-3"
      style={{ borderTop: "1px solid var(--dark3)", fontFamily: "'Space Mono', monospace" }}
    >
      <p className="text-xs tracking-wide" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()} Magalí Amato · hecho con código y un poco de tinta
      </p>
      <div className="flex gap-4 text-xs tracking-wide uppercase">
        <a
          href="https://github.com/theinsanemaggie"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
          style={{ color: "var(--muted)" }}
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/theinsanetomato"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
          style={{ color: "var(--pink)" }}
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@theinsanemaggie"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
          style={{ color: "#ff4444" }}
        >
          YouTube
        </a>
      </div>
    </footer>
  )
}
