import Link from "next/link"
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
      className={twMerge("sticky top-0 bg-page z-20", className)}
      {...rest}
    >
      <div
        className={twMerge(
          "max-w-content w-content mx-auto px-8 py-4",
          "flex items-center justify-between"
        )}
      >
        <Link href="/" prefetch={false}>
          <Image src={logo} alt="Erik Ferreira" width={150} height={40} />
        </Link>

        <div className="flex items-center gap-8">
          <Navbar />
          <SwitchTheme />
        </div>
      </div>
    </header>
  )
}
