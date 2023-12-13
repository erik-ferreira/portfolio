"use client"

import { usePathname } from "next/navigation"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { Link } from "@/components/Link"

import { listOptionsNavBar } from "@/defaults/navbar"

interface NavbarProps extends NavigationMenu.NavigationMenuProps {}

export function Navbar({ ...rest }: NavbarProps) {
  const pathname = usePathname()

  return (
    <NavigationMenu.Root {...rest}>
      <NavigationMenu.List className="flex items-center gap-8">
        {listOptionsNavBar.map((item) => {
          const isLinkSelected = pathname.includes(item.href)
          return (
            <NavigationMenu.Item key={item.id}>
              <NavigationMenu.Link asChild>
                <Link
                  href={item.href}
                  label={item.label}
                  hideIcon
                  variant={isLinkSelected ? "selected" : "default"}
                />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
