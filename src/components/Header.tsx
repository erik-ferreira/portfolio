import Link from "next/link"
import Image from "next/image"
import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { Button } from "@/components/Button"
import { Navbar } from "@/components/Navbar"
import { SwitchTheme } from "@/components/SwitchTheme"

import { twMerge } from "@/utils/twMerge"

import logo from "@/assets/logo.svg"

interface HeaderProps extends ComponentProps<"header"> {}

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "sticky top-0 bg-page z-20 border border-red-500",
        "max-[890px]:border-blue-500",
        className
      )}
      {...rest}
    >
      <div
        className={twMerge(
          "max-w-content w-content mx-auto px-8 py-4",
          "flex items-center justify-between",
          "border border-red-500 max-[900px]:w-[95%]"
        )}
      >
        <Link href="/" className="border border-red-500">
          <Image src={logo} alt="Erik Ferreira" width={150} height={40} />
        </Link>

        <Button variant="outline">
          <Icon name="Menu" />
        </Button>

        <div className="flex items-center gap-8 border border-red-500">
          <Navbar />
          <SwitchTheme />
        </div>
      </div>
    </header>
  )
}
