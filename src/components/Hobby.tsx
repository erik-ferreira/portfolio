import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"

import { cutText } from "@/utils/cutText"
import { twMerge } from "@/utils/twMerge"
import { HobbyDTO } from "@/dtos/HobbyDTO"

interface HobbyProps extends ComponentProps<"article"> {
  hobby: HobbyDTO
}

export function Hobby({ hobby, className, ...rest }: HobbyProps) {
  const formatDescription = cutText(hobby.description, 25)

  return (
    <article
      className={twMerge(
        "max-w-[500px] space-y-4",
        "sm:[&:nth-child(2n-2)]:relative sm:[&:nth-child(2n-2)]:top-[25%]",
        "md:space-y-8",
        className
      )}
      {...rest}
    >
      <Image
        src={hobby.src}
        width={500}
        height={333}
        alt={hobby.altSrc}
        className="rounded-lg"
      />

      <div className="space-y-2">
        <h1
          className={twMerge(
            "text-3xl font-semibold leading-none",
            "md:text-4.75xl"
          )}
        >
          {hobby.title}
        </h1>

        <p className="text-lg font-semibold text-slate-600">
          {formatDescription}
        </p>

        <Link href={hobby.href} label="Ler mais" variant="secondary" />
      </div>
    </article>
  )
}
