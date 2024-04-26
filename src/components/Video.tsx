"use client"

import Image from "next/image"
import ReactPlayer from "react-player"
import { ComponentProps, useEffect, useState } from "react"

import { twMerge } from "@/utils/twMerge"

interface VideoProps extends ComponentProps<"div"> {
  srcBackground: string
  srcVideo: string
}

export function Video({
  className,
  srcBackground,
  srcVideo,
  ...rest
}: VideoProps) {
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className={twMerge("relative", className)} {...rest}>
      <Image
        src={srcBackground}
        width={1870}
        height={962}
        alt="NBA"
        className="max-w-[1870px] w-full mx-auto aspect-video opacity-60"
      />

      <div
        className={twMerge(
          "aspect-video max-w-[1200px] w-4/5",
          "absolute top-1/2 left-1/2",
          "-translate-x-1/2 -translate-y-1/2",
          "xl:w-full"
        )}
      >
        {hasWindow && (
          <ReactPlayer url={srcVideo} width="100%" height="100%" controls />
        )}
      </div>
    </div>
  )
}
