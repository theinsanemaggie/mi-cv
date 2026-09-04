// Debe coincidir con BASE_PATH en next.config.ts.
// Cuando el sitio se sirva en la raíz de un dominio propio, cambiá
// BASE_PATH a "" en next.config.ts y esto se ajusta solo en todas partes.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string) {
  return `${basePath}${path}`
}
