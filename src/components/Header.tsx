import Link from "next/link"
import Image from "next/image"
import { ComponentProps } from "react"

import { HeaderSectionRight } from "@/components/HeaderSectionRight"

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
          "flex items-center justify-between",
          "max-[900px]:w-[95%]",
          "max-[600px]:px-4",
          "max-xs:px-2"
        )}
      >
        <Link href="/" className="">
          <Image
            src={logo}
            alt="Erik Ferreira"
            className="max-[900px]:w-28"
            width={150}
            height={40}
          />
        </Link>

        <HeaderSectionRight />
      </div>
    </header>
  )
}
