import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"

import { twMerge } from "@/utils/twMerge"

interface HobbyProps extends ComponentProps<"article"> {}

export function Hobby({ className, ...rest }: HobbyProps) {
  return (
    <article
      className={twMerge(
        "max-w-[500px] space-y-8",
        "[&:nth-child(2n-2)]:relative [&:nth-child(2n-2)]:top-[25%]",
        className
      )}
      {...rest}
    >
      <Image
        src="/hobbies/basquete.png"
        width={500}
        height={333}
        alt="Hobby"
        className="rounded-lg"
      />

      <div className="space-y-2">
        <h1 className="text-4.75xl font-semibold leading-none">Basquete</h1>

        <p className="text-lg font-semibold text-slate-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s...
        </p>

        <Link href="/" label="Ler mais" variant="secondary" />
      </div>
    </article>
  )
}
