"use client"

import Image from "next/image"
import { ComponentProps } from "react"
import ReactPlayer from "react-player"
import * as Dialog from "@radix-ui/react-dialog"

import { Icon } from "@/components/Icon"

import { twMerge } from "@/utils/twMerge"

const icons = {
  image: "Image",
  video: "Play",
} as const

interface GalleryProps extends ComponentProps<"button"> {
  variant?: keyof typeof icons
  src: string
}

export function Gallery({
  className,
  variant = "video",
  src,
  ...rest
}: GalleryProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={twMerge(
            "relative rounded-lg overflow-auto transition-shadow duration-300 hover:shadow-blue"
          )}
          {...rest}
        >
          <Image src={src} width={350} height={230} alt="NBA" />
          <Icon
            name={icons[variant]}
            className="absolute top-3 right-3 text-sky-500"
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={twMerge(
            "fixed inset-0 bg-black/70",
            "data-[state=open]:animate-show-dialog data-[state=closed]:animate-hide-dialog"
          )}
        />

        <Dialog.Content
          className={twMerge(
            "aspect-video w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "data-[state=open]:animate-show-dialog data-[state=closed]:animate-hide-dialog"
          )}
        >
          {variant === "image" ? (
            <Image src="/basquete/9.png" alt="NBA" width={900} height={500} />
          ) : (
            <ReactPlayer
              url="/basquete/video1.mp4"
              width="100%"
              height="100%"
              controls
              playing
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
