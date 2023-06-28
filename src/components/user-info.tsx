import Link from "next/link"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Separator } from "./ui/separator"

export function UserInfo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-9 rounded-xl px-0">
          RC
          <span className="sr-only">Ver Usuario</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem className="flex flex-col items-start">
          <p className="text-left text-sm font-bold">Ricardo Castro</p>
          <span className="text-xs dark:text-slate-400">
            ricardodavid.dev@hotmail.com
          </span>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Link href="/perfil" className="flex gap-2">
            <Icons.user className="h-4 w-4" />
            Perfil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/cursos/user" className="flex gap-2">
            <Icons.user className="h-4 w-4" />
            Mis Cursos
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/talleres/user" className="flex gap-2">
            <Icons.user className="h-4 w-4" />
            Mis Talleres
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Link href="/perfil/configuracion" className="flex gap-2">
            <Icons.settings className="h-4 w-4" />
            Configuracion
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/sign-out" className="flex gap-2">
            <Icons.logout className="h-4 w-4" />
            Cerrar Sesions
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
