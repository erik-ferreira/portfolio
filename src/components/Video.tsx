"use client"

import Image from "next/image"
import ReactPlayer from "react-player"
import { ComponentProps, useEffect, useState } from "react"

import { twMerge } from "@/utils/twMerge"

interface VideoProps extends ComponentProps<"div"> {}

export function Video({ className, ...rest }: VideoProps) {
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className={twMerge("relative", className)} {...rest}>
      <Image
        src="/hobbies/basquete/09.png"
        width={1440}
        height={960}
        alt="NBA"
        className="aspect-video h-[960px] mx-auto opacity-60"
      />

      <div className="aspect-video w-[900px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {hasWindow && (
          <ReactPlayer
            url="/hobbies/basquete/06.mp4"
            width="100%"
            height="100%"
            controls
          />
        )}
      </div>
    </div>
  )
}
