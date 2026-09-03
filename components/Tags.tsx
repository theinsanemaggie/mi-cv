export function TagPill({ tag, type }: { tag: string; type: "code" | "art" | "other" }) {
  const style =
    type === "code"
      ? { background: "#0a1a1a", color: "var(--teal)", border: "1px solid rgba(2,124,125,0.35)" }
      : type === "art"
      ? { background: "#1a0012", color: "var(--pink)", border: "1px solid rgba(227,0,106,0.35)" }
      : { background: "#1a1500", color: "var(--gold)", border: "1px solid rgba(207,183,135,0.3)" }
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full tracking-wide"
      style={{ ...style, fontFamily: "'Space Mono', monospace" }}
    >
      {tag}
    </span>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-xs tracking-[.2em] uppercase mb-3 pb-2"
      style={{
        color: "var(--pink)",
        borderBottom: "1px solid var(--dark3)",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {children}
    </div>
  )
}
