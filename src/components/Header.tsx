import Image from "next/image"
import { ComponentProps } from "react"

import { Navbar } from "@/components/Navbar"
import { ButtonIcon } from "@/components/ButtonIcon"

import logo from "../assets/logo.svg"

interface HeaderProps extends ComponentProps<"header"> {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <header {...rest}>
      <div className="max-w-content w-content mx-auto flex items-center  justify-between py-4">
        <Image src={logo} alt="Erik Ferreira" width={150} height={40} />

        <div className="flex items-center gap-8">
          <Navbar />
          <ButtonIcon />
        </div>
      </div>
    </header>
  )
}
