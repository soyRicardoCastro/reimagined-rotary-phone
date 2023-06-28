"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.dulcesdlissa300x300 className="h-16 w-16" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {docsConfig.mainNav.map((link, index) => (
          <NavLink
            href={link.href ? link.href : ""}
            key={`main-nav-${link.title}-${index}`}
            pathname={pathname}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  pathname?: string
}

function NavLink({
  href,
  children,
  className,
  pathname,
  ...props
}: NavLinkProps) {
  const isActive = pathname?.startsWith(String(href))

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "transition-colors hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60",
        className
      )}
    >
      {children}
    </Link>
  )
}

/*
{docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
*/
