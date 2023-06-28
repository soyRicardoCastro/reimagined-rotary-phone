import type { MainNavItem, SidebarNavItem } from "@/types"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Cursos",
      href: "/cursos",
    },
    {
      title: "Talleres",
      href: "/talleres",
    },
    {
      title: "Contactanos",
      href: "/contacto",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  sidebarNav: [
    {
      title: "Para ti",
      items: [
        {
          title: "Tus Cursos",
          href: "/cursos/user",
          items: [],
        },
        {
          title: "Tus Talleres",
          href: "/talleres/user",
          items: [],
        },
        {
          title: "Comunidad",
          href: "/comunidad",
          items: [],
        },
        {
          title: "Recursos Gratuitos",
          href: "/recursos-gratuitos",
          items: [],
        },
      ],
    },
    {
      title: "Nuestros Cursos",
      items: [
        {
          title: "Accordion",
          href: "/cursos/",
          items: [],
        },
        {
          title: "Alert",
          href: "/cursos/",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/cursos/",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/cursos/",
          items: [],
        },
        {
          title: "Avatar",
          href: "/cursos/",
          items: [],
        },
      ],
    },
    {
      title: "Nuestros Talleres",
      items: [
        {
          title: "Accordion",
          href: "/talleres/",
          items: [],
        },
        {
          title: "Alert",
          href: "/talleres/",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/talleres/",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/talleres/",
          items: [],
        },
        {
          title: "Avatar",
          href: "/talleres/",
          items: [],
        },
      ],
    },
  ],
}
