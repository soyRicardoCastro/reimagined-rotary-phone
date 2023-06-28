import type { MainNavItem } from "@/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dulcesdlissa",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js 13.",
  url: "https://dulcesdlissa.com/",
  ogImage: "https://dulcesdlissa.com/opengraph-image.png",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  links: {
    twitter: "https://twitter.com/sadmann17",
    github: "https://github.com/sadmann7/skateshop",
    instagram: "https://instagram.com/dulcesdlissa",
  },
}
