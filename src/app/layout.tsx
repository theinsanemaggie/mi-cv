import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Magalí Amato · Developer & Illustrator",
  description: "Portfolio de desarrollo web e ilustración digital",

  icons: {
    icon: "/favicon.png",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}