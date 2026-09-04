import Image from "next/image"
import { TagPill } from "./Tags"
import type { WebSiteItem } from "@/lib/data"
import { withBasePath } from "@/lib/basePath"

export default function SiteCard({ title, desc, tags, url, preview }: WebSiteItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover block rounded-xl overflow-hidden transition-colors duration-200"
      style={{ background: "var(--dark)", border: "1.5px solid var(--dark3)" }}
    >
      <div
        className="relative w-full aspect-video flex items-center justify-center"
        style={{ background: "var(--dark2)" }}
      >
        {preview ? (
          <Image
            src={withBasePath(preview)}
            alt={`Captura de ${title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--faint)" }}>
            vista previa próximamente
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-base font-bold" style={{ color: "#e5e5e5" }}>
            {title}
          </p>
          <span className="text-xs flex-shrink-0" style={{ color: "var(--teal)" }}>
            ↗
          </span>
        </div>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text)" }}>
          {desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((t) => (
            <TagPill key={t} tag={t} type="code" />
          ))}
        </div>
      </div>
    </a>
  )
}
