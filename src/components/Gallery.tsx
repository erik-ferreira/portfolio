"use client"

import Image from "next/image"
import { ComponentProps } from "react"
import ReactPlayer from "react-player"
import * as Dialog from "@radix-ui/react-dialog"

import { Icon } from "@/components/Icon"

import { twMerge } from "@/utils/twMerge"

import { GalleryDTO } from "@/dtos/GalleryDTO"

const icons = {
  image: "Image",
  video: "Play",
} as const

interface GalleryProps extends ComponentProps<"button"> {
  gallery: GalleryDTO
  isScreenshot?: boolean
}

export function Gallery({
  className,
  gallery,
  isScreenshot = false,
  ...rest
}: GalleryProps) {
  return isScreenshot ? (
    <button
      className={twMerge(
        "rounded-lg overflow-auto transition-all duration-300 cursor-auto",
        "hover:shadow-blue hover:scale-105"
      )}
      {...rest}
    >
      <Image src={gallery.src} width={350} height={230} alt="NBA" />
    </button>
  ) : (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={twMerge(
            "relative rounded-lg overflow-auto transition-all duration-300",
            "hover:shadow-blue hover:scale-105"
          )}
          {...rest}
        >
          {gallery.variant === "image" ? (
            <Image
              src={gallery.src}
              width={350}
              height={230}
              alt="NBA"
              className="w-[350px] h-[230px] object-cover"
            />
          ) : (
            <ReactPlayer
              url={gallery.src}
              width="100%"
              height="100%"
              alt="Teste"
            />
          )}

          <Icon
            name={icons[gallery.variant]}
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
            "aspect-video fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "data-[state=open]:animate-show-dialog data-[state=closed]:animate-hide-dialog",
            {
              "w-fit": gallery.variant === "image",
              "w-[900px]": gallery.variant === "video",
            }
          )}
        >
          {gallery.variant === "image" ? (
            <Image
              src={gallery.src}
              alt="NBA"
              width={gallery.direction === "horizontal" ? 900 : 400}
              height={600}
            />
          ) : (
            <ReactPlayer
              url={gallery.src}
              width="100%"
              height="100%"
              controls
              playing
              alt="Teste"
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
