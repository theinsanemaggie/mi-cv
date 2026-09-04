import type { Metadata } from "next"
import Image from "next/image"
import { SectionLabel, TagPill } from "@/components/Tags"
import Window from "@/components/Window"
import { experience, education, skillsCode, skillsArt } from "@/lib/data"

export const metadata: Metadata = {
  title: "Sobre mí · Magalí Amato",
  description: "Experiencia, educación y habilidades de Magalí Amato",
}

export default function SobreMi() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      <h1 className="text-3xl font-bold mb-8" style={{ color: "var(--pink)" }}>
        Sobre mí
      </h1>

      {/* Perfil */}
      <Window path="C:\theinsanemaggie\sobre-mi\perfil" className="mb-6">
        <div className="flex items-center gap-5">
          <div
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "2px solid var(--pink)" }}
          >
            <Image src="/perfil.webp" alt="Magalí Amato" fill sizes="80px" className="object-cover" />
          </div>
          <div>
            <p className="text-xl font-bold" style={{ color: "var(--pink)" }}>
              Magalí Amato
            </p>
            <p className="text-sm tracking-widest uppercase mt-1" style={{ color: "var(--teal)" }}>
              front-end dev · ilustradora · BsAs
            </p>
            <p className="text-base mt-2 italic" style={{ color: "var(--muted)" }}>
              &ldquo;Endure and survive&rdquo;
            </p>
          </div>
        </div>
      </Window>

      {/* Experiencia */}
      <Window path="C:\theinsanemaggie\sobre-mi\experiencia" className="mb-6">
        <SectionLabel>experiencia</SectionLabel>
        <div className="flex flex-col gap-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="pb-6"
              style={{ borderBottom: i < experience.length - 1 ? "1px solid var(--dark3)" : "none" }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-base font-bold" style={{ color: "#e5e5e5" }}>
                  {exp.title}
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {exp.period}
                </p>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--teal)" }}>
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text)" }}>
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {exp.tags.map((t) => (
                  <TagPill key={t} tag={t} type={exp.type} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>

      {/* Educación */}
      <Window path="C:\theinsanemaggie\sobre-mi\educacion" className="mb-6">
        <SectionLabel>Educación</SectionLabel>
        <div className="flex flex-col gap-5">
          {education.map((ed, i) => (
            <div key={i}>
              <p className="text-base font-bold leading-snug" style={{ color: "#e5e5e5" }}>
                {ed.degree}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--teal)" }}>
                {ed.school}
              </p>
              <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                {ed.period}
              </p>
              <p className="text-sm mt-1 italic" style={{ color: "var(--muted)" }}>
                {ed.note}
              </p>
            </div>
          ))}
        </div>
      </Window>

      {/* Skills */}
      <Window path="C:\theinsanemaggie\sobre-mi\skills">
        <SectionLabel>Skills</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
              código
            </p>
            <div className="flex flex-wrap gap-2">
              {skillsCode.map((s) => (
                <TagPill key={s} tag={s} type="code" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--pink)" }}>
              arte
            </p>
            <div className="flex flex-wrap gap-2">
              {skillsArt.map((s) => (
                <TagPill key={s} tag={s} type="art" />
              ))}
            </div>
          </div>
        </div>
      </Window>
    </div>
  )
}
