import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ContactUs } from "@/components/contact-us"
import { FaqAccordion } from "@/components/faq"
import { Features } from "@/components/features"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Testimonials } from "@/components/testimonials"

export default function IndexPage() {
  return (
    <div className="container relative flex flex-col gap-28">
      <PageHeader className="pb-8">
        <Link
          href="/docs/changelog"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          <Star className="h-4 w-4" />{" "}
          <Separator className="mx-1 h-4" orientation="vertical" />{" "}
          <span className="sm:hidden">
            Marquesas, todo tipo de donas y mas.
          </span>
          <span className="hidden sm:inline">
            Nuevo curso de marquesas, donas y mas.
          </span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>
          Aprende Reposteria, Pasteleria y Panaderia con las mejores.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Hazlo online, con videos, recursos en imagenes y texto de ayuda, paga
          una vez es tuyo siempre.
        </PageHeaderDescription>
        <div className="flex w-full items-center justify-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Empieza Ahora
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.instagram className="mr-2 h-4 w-4" />
            Instagram
          </Link>
        </div>
      </PageHeader>
      <section className="">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:place-content-center md:place-items-center">
          <div className="flex w-full gap-5 md:grid">
            <Image
              className="h-auto max-w-full rounded-3xl lg:w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="flex w-full flex-wrap gap-4 md:grid">
            <Image
              className="h-auto max-w-full rounded-3xl lg:w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
              width={300}
              height={300}
            />
            <Image
              className="h-auto max-w-full rounded-3xl lg:w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="hidden w-full gap-4 md:grid">
            <Image
              className="h-auto max-w-full rounded-3xl lg:w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="flex w-full flex-wrap gap-4 md:grid">
            <Image
              className="h-auto max-w-full rounded-3xl lg:w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
              width={300}
              height={300}
            />
            <Image
              className="h-auto max-w-full rounded-3xl lg:w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="flex w-full gap-4 md:grid">
            <Image
              className="h-auto max-w-full rounded-3xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Icons.help className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 text-white" />
          <h3 className="text-2xl font-semibold md:text-3xl md:font-bold">
            Preguntas Frecuentes
          </h3>
          <p className="text-base  dark:text-slate-400 md:text-lg">
            Aun tienes dudas? No te preocupes, contactanos
          </p>
        </div>

        <FaqAccordion />
      </section>

      <ContactUs />
    </div>
  )
}
