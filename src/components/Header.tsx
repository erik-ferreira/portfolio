import Link from "next/link"
import Image from "next/image"
import { ComponentProps } from "react"

import { HeaderSectionRight } from "@/components/HeaderSectionRight"

import { twMerge } from "@/utils/twMerge"

import logoSVG from "@/assets/logo.png"

interface HeaderProps extends ComponentProps<"header"> {}

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "sticky top-0 z-20 border-b border-b-slate-300 bg-slate-100 shadow-lg",
        "dark:border-b-0 dark:bg-page dark:shadow-none",
        className
      )}
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
        <Link href="/">
          <div className="w-32 min-[900px]:w-[162px]">
            <Image
              src={logoSVG}
              alt="Logo"
              width={162}
              height={40}
              className="w-full h-full"
            />
          </div>
        </Link>

        <HeaderSectionRight />
      </div>
    </header>
  )
}
