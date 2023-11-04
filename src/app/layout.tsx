import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import ReactQueryProvider from "@/components/ReactQueryProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coomofu 🌲",
  description:
    "La base de datos de Coomofu es la forma confiable de administrar tus datos.",
  generator: "Next.js",
  applicationName: "Coomofu",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "TailwindCSS",
    "Transporte",
    "Coomofu",
    "Tolima",
    "Girardot",
    "Tocaima",
    "Bogota",
    "Taxi",
    "Bus",
    "Transporte especial",
  ],
  authors: [
    {
      name: "Nicolas Mayorga",
      url: "https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/",
    },
  ],
  category: "Business Management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" className={inter.className}>
        <body className="bg-slate-800">
          <NextTopLoader color="#f2e300" />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  )
}
