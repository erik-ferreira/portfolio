"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"

interface NavbarProps {}

export function Navbar({ ...rest }: NavbarProps) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center gap-8">
        <NavigationMenu.Item>
          <NavigationMenu.Link>Sobre</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link>Skills</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link>Projetos</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link>Resumo</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link>Contato</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
