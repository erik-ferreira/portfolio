import Link from "next/link"
import Image from "next/image"
import { ComponentProps } from "react"

import { HeaderSectionRight } from "@/components/HeaderSectionRight"

import { twMerge } from "@/utils/twMerge"

import { illustrations } from "@/defaults/illustrations"

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
          "max-[1000px]:w-[95%]",
          "max-[600px]:px-4",
          "max-xs:px-2"
        )}
      >
        <Link href="/">
          <svg
            width="150"
            height="40"
            viewBox="0 0 150 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-[1000px]:w-28 fill-slate-900 dark:fill-slate-200"
          >
            {illustrations.Logo}
          </svg>
        </Link>

        <HeaderSectionRight />
      </div>
    </header>
  )
}
