import Image from "next/image"
import { ComponentProps } from "react"

import { Navbar } from "@/components/Navbar"
import { SwitchTheme } from "@/components/SwitchTheme"

import { twMerge } from "@/utils/twMerge"

import logo from "@/assets/logo.svg"

interface HeaderProps extends ComponentProps<"header"> {}

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={twMerge("flex items-center justify-between py-4", className)}
      {...rest}
    >
      <Image src={logo} alt="Erik Ferreira" width={150} height={40} />

      <div className="flex items-center gap-8">
        <Navbar />
        <SwitchTheme />
      </div>
    </header>
  )
}
