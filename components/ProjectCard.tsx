import { TagPill } from "./Tags"

type Props = {
  title: string
  desc: string
  tags: string[]
  url: string
  meta: string
  type: "code" | "art"
}

export default function ProjectCard({ title, desc, tags, url, meta, type }: Props) {
  const accent = type === "code" ? "var(--teal)" : "var(--pink)"

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl p-5 transition-colors duration-200"
      style={{
        background: "var(--dark)",
        border: "1.5px solid var(--dark3)",
        textDecoration: "none",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-lg font-bold" style={{ color: "#e5e5e5" }}>
          {title}
        </p>
        <span className="flex-shrink-0 text-xs" style={{ color: accent }}>
          {meta} ↗
        </span>
      </div>
      <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text)" }}>
        {desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {tags.map((t) => (
          <TagPill key={t} tag={t} type={type} />
        ))}
      </div>
    </a>
  )
}
