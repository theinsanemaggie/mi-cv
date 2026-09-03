import Window from "./Window"

/*
  INSTRUCCIONES PARA AGREGAR TUS VIDEOS:
  1. Abrí cualquier video tuyo en YouTube
  2. Hacé click en "Compartir" → "Insertar"
  3. Copiá SOLO el ID del video de la URL del iframe
     Ej: en src="https://www.youtube.com/embed/dQw4w9WgXcQ"
     el ID es: dQw4w9WgXcQ
  4. Reemplazá los IDs del array videos de abajo
*/

const videos = [
  {
    id: "REEMPLAZA_CON_ID_VIDEO_1",
    title: "título del video 1",
  },
  {
    id: "REEMPLAZA_CON_ID_VIDEO_2",
    title: "título del video 2",
  },
]

const YT_ICON = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function YouTubeWidget() {
  return (
    <Window path="C:\theinsanemaggie\youtube">
      <div
        className="text-[9px] tracking-[.2em] uppercase mb-4 pb-1.5"
        style={{
          color: "#ff4444",
          borderBottom: "1px solid var(--dark3)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        últimos videos · @theinsanemaggie
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {videos.map((v) => (
          <div
            key={v.id}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid var(--dark3)" }}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
            <div
              className="px-3 py-2 text-[10px] tracking-wider truncate"
              style={{
                color: "var(--muted)",
                background: "var(--dark2)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {v.title}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://www.youtube.com/@theinsanemaggie"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{
          color: "#ff4444",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {YT_ICON}
        ver canal completo →
      </a>
    </Window>
  )
}