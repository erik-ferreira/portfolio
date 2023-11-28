import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"

import { twMerge } from "@/utils/twMerge"
import { HobbyDTO } from "@/dtos/HobbyDTO"

interface HobbyProps extends ComponentProps<"article"> {
  hobby: HobbyDTO
}

export function Hobby({ hobby, className, ...rest }: HobbyProps) {
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
        src={hobby.src}
        width={500}
        height={333}
        alt="Hobby"
        className="rounded-lg"
      />

      <div className="space-y-2">
        <h1 className="text-4.75xl font-semibold leading-none">
          {hobby.title}
        </h1>

        <p className="text-lg font-semibold text-slate-600">
          {hobby.description}
        </p>

        <Link href={hobby.href} label="Ler mais" variant="secondary" />
      </div>
    </article>
  )
}
