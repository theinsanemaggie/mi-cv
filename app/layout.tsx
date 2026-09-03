import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Magalí Amato · Developer & Illustrator",
  description: "Portfolio de desarrollo web e ilustración digital",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen relative">
        <div className="bg-grid fixed inset-0 pointer-events-none" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1 max-w-4xl w-full mx-auto px-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}