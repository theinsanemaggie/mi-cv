// Fuente única de verdad, importada también por next.config.ts.
// Cuando el sitio se sirva en la raíz de un dominio propio, cambiá
// esto a "" y se ajusta solo en todas partes (config + imágenes).
export const basePath = "/mi-cv"

export function withBasePath(path: string) {
  return `${basePath}${path}`
}
