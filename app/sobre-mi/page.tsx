import type { Metadata } from "next"
import { SectionLabel, TagPill } from "@/components/Tags"
import { experience, education, skillsCode, skillsArt } from "@/lib/data"

export const metadata: Metadata = {
  title: "Sobre mí · Magalí Amato",
  description: "Experiencia, educación y habilidades de Magalí Amato",
}

export default function SobreMi() {
  return (
    <div className="py-8 sm:py-12" style={{ fontFamily: "'Space Mono', monospace" }}>
      {/* Perfil */}
      <section className="mb-12 flex items-center gap-5">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
          style={{ background: "#1a0012", border: "2px solid var(--pink)", color: "var(--pink)" }}
        >
          MA
        </div>
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--pink)" }}>
            Magalí Amato
          </h1>
          <p className="text-sm tracking-widest uppercase mt-1" style={{ color: "var(--teal)" }}>
            front-end dev · ilustradora · BsAs
          </p>
          <p className="text-base mt-2 italic" style={{ color: "var(--muted)" }}>
            "código de día, tinta de noche"
          </p>
        </div>
      </section>

      {/* Experiencia */}
      <section className="mb-12">
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
      </section>

      {/* Educación */}
      <section className="mb-12">
        <SectionLabel>educación</SectionLabel>
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
      </section>

      {/* Skills */}
      <section>
        <SectionLabel>skills</SectionLabel>
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
      </section>
    </div>
  )
}
