"use client"

import Image from "next/image"
import ReactPlayer from "react-player"
import { useEffect, useState } from "react"

interface VideoProps {}

export function Video({ ...rest }: VideoProps) {
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className="relative ">
      <Image
        src="/basquete/9.png"
        width={1440}
        height={960}
        alt="NBA"
        className="aspect-video h-[960px] mx-auto opacity-60"
      />

      <div className="aspect-video w-[900px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {hasWindow && (
          <ReactPlayer
            url="/basquete/video1.mp4"
            width="100%"
            height="100%"
            controls
          />
        )}
      </div>
    </div>
  )
}
