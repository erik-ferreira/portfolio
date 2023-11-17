import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"
import { Navbar } from "@/components/Navbar"

import logo from "../assets/logo.svg"

interface HeaderProps extends ComponentProps<"header"> {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <header {...rest}>
      <div className="max-w-content w-content mx-auto flex items-center  justify-between py-4">
        <Image src={logo} alt="Erik Ferreira" width={150} height={40} />

        <Navbar />
      </div>

      <div className="mx-auto max-w-[400px]">
        <Link href="/" label="Ver mais" hideIcon />
      </div>
    </header>
  )
}
