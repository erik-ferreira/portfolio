"use client"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { Link } from "@/components/Link"

interface NavbarProps extends NavigationMenu.NavigationMenuProps {}

export function Navbar({ ...rest }: NavbarProps) {
  const listOptionsNavBar = [
    { id: 1, label: "Sobre", href: "/" },
    { id: 2, label: "Projetos", href: "/" },
    { id: 3, label: "Experiência", href: "/" },
    { id: 4, label: "Resumo", href: "/" },
    { id: 5, label: "Contato", href: "/" },
  ]

  return (
    <NavigationMenu.Root {...rest}>
      <NavigationMenu.List className="flex items-center gap-8">
        {listOptionsNavBar.map((item) => {
          return (
            <NavigationMenu.Item key={item.id}>
              <NavigationMenu.Link asChild>
                <Link href={item.href} label={item.label} hideIcon />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
