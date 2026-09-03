"use client"

import { useState } from "react"
import { TagPill } from "./Tags"
import type { SysProject } from "@/lib/data"

function FolderIcon({ collab }: { collab: boolean }) {
  const color = collab ? "var(--red)" : "var(--teal)"
  return (
    <svg width="34" height="28" viewBox="0 0 24 20" fill="none" aria-hidden="true">
      <path
        d="M1 3.5C1 2.12 2.12 1 3.5 1H9l2 2.5h9.5C21.88 3.5 23 4.62 23 6v10.5c0 1.38-1.12 2.5-2.5 2.5h-17C2.12 19 1 17.88 1 16.5v-13Z"
        fill={color}
        fillOpacity="0.18"
        stroke={color}
        strokeWidth="1.4"
      />
    </svg>
  )
}

export default function FolderCard({ title, desc, tags, url, year, collab }: SysProject) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-200"
      style={{
        background: "var(--dark)",
        border: `1.5px solid ${open ? (collab ? "var(--red)" : "var(--teal)") : "var(--dark3)"}`,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <FolderIcon collab={collab} />
        <div className="flex-1 min-w-0">
          <p className="text-base font-bold truncate" style={{ color: "#e5e5e5" }}>
            {title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            {year} {collab ? "· colaborativo" : ""}
          </p>
        </div>
        <span
          className="flex-shrink-0 text-lg leading-none transition-transform duration-200"
          style={{ color: "var(--muted)", transform: open ? "rotate(90deg)" : "none" }}
        >
          ›
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4" style={{ borderTop: "1px solid var(--dark3)" }}>
          <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text)" }}>
            {desc}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((t) => (
              <TagPill key={t} tag={t} type="code" />
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm tracking-wide transition-opacity hover:opacity-70"
            style={{ color: "var(--teal)", fontFamily: "'Space Mono', monospace" }}
          >
            ver en GitHub ↗
          </a>
        </div>
      )}
    </div>
  )
}
