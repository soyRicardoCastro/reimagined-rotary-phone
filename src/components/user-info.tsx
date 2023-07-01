import Link from "next/link"
import type { User } from "@clerk/nextjs/dist/types/server"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"

import { Icons } from "./icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button, buttonVariants } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

interface SiteHeaderProps {
  user: User | null
}

export function UserInfo({ user }: SiteHeaderProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? ""

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.imageUrl} alt={user.username ?? ""} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account">
              <Icons.user className="mr-2 h-4 w-4" aria-hidden="true" />
              Cuenta
              <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/stores">
              <Icons.terminal className="mr-2 h-4 w-4" aria-hidden="true" />
              Dashboard
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild disabled>
            <Link href="/dashboard/settings">
              <Icons.settings className="mr-2 h-4 w-4" aria-hidden="true" />
              Configuracion
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/signout">
            <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
            Cerrar Sesion
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link href="/signin">
      <div
        className={buttonVariants({
          size: "sm",
        })}
      >
        Inicia Sesion
        <span className="sr-only">Inicia Sesion</span>
      </div>
    </Link>
  )
  // <DropdownMenu>
  //   <DropdownMenuTrigger asChild>
  //     <Button className="w-9 rounded-xl px-0">
  //       RC
  //       <span className="sr-only">Ver Usuario</span>
  //     </Button>
  //   </DropdownMenuTrigger>
  //   <DropdownMenuContent align="end" className="w-56">
  //     <DropdownMenuItem className="flex flex-col items-start">
  //       <p className="text-left text-sm font-bold">Ricardo Castro</p>
  //       <span className="text-xs dark:text-slate-400">
  //         ricardodavid.dev@hotmail.com
  //       </span>
  //     </DropdownMenuItem>
  //     <Separator />
  //     <DropdownMenuItem>
  //       <Link href="/perfil" className="flex gap-2">
  //         <Icons.user className="h-4 w-4" />
  //         Perfil
  //       </Link>
  //     </DropdownMenuItem>
  //     <DropdownMenuItem>
  //       <Link href="/cursos/user" className="flex gap-2">
  //         <Icons.user className="h-4 w-4" />
  //         Mis Cursos
  //       </Link>
  //     </DropdownMenuItem>
  //     <DropdownMenuItem>
  //       <Link href="/talleres/user" className="flex gap-2">
  //         <Icons.user className="h-4 w-4" />
  //         Mis Talleres
  //       </Link>
  //     </DropdownMenuItem>
  //     <Separator />
  //     <DropdownMenuItem>
  //       <Link href="/perfil/configuracion" className="flex gap-2">
  //         <Icons.settings className="h-4 w-4" />
  //         Configuracion
  //       </Link>
  //     </DropdownMenuItem>
  //     <DropdownMenuItem>
  //       <Link href="/sign-out" className="flex gap-2">
  //         <Icons.logout className="h-4 w-4" />
  //         Cerrar Sesions
  //       </Link>
  //     </DropdownMenuItem>
  //   </DropdownMenuContent>
  // </DropdownMenu>
}
