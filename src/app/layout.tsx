import "./globals.css"

import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Dulcesdlissa",
    "Tocuyito",
    "Reposteria Artesanal",
    "Reposteria Venezuela",
    "Talleres de Reposteria",
    "Cursos de Reposteria",
    "Tortas",
    "Panes",
    "Cursos Online",
  ],
  metadataBase: new URL("http://dulcesdlissa.com"),
  authors: [
    {
      name: "Ricardo Castro",
      url: "https://ricardodev.pro",
    },
  ],
  creator: "soyRicardoCastro",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@imRicardoJS",
  },
  icons: {
    icon: "/images/logo-100x100.webp",
    shortcut: "/images/logo-100x100.webp",
    apple: "/images/logo-100x100.webp",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <TailwindIndicator />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
