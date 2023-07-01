import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"

export function SiteFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0">
        <a href="#">
          <Icons.dulcesdlissa300x300 className="h-7 w-7" />
        </a>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2023. Todos los derechos Reservados.
        </p>

        <div className="-mx-2 flex">
          <Link
            href="#"
            target="_blank"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            aria-label="Reddit"
          >
            <Icons.instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
