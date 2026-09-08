// Se define con una variable de entorno REAL (no la clave "env" legacy de
// next.config.ts, que en este proyecto no se aplicaba bien en CI).
// - Build para GitHub Pages (sirve en /mi-cv): npm run build:ghpages
// - Build para dominio propio / Hostinger (sirve en la raíz): npm run build
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string) {
  return `${basePath}${path}`
}
