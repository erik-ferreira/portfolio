"use client"

import { HTMLAttributes } from "react"
import { usePathname } from "next/navigation"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { Link } from "@/components/Link"

import { listOptionsNavBar } from "@/defaults/navbar"

import { twMerge } from "@/utils/twMerge"

interface NavbarProps extends NavigationMenu.NavigationMenuProps {
  classNameContent?: string
}

export function Navbar({ classNameContent, ...rest }: NavbarProps) {
  const pathname = usePathname()

  return (
    <NavigationMenu.Root {...rest}>
      <NavigationMenu.List
        className={twMerge("flex items-center gap-8", classNameContent)}
      >
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
                  className="max-[900px]:text-2xl"
                />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
