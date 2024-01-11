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
        width={1870}
        height={962}
        alt="NBA"
        className="max-w-[1870px] mx-auto aspect-video opacity-60"
      />

      <div className="aspect-video w-[1200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
