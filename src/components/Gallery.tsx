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
  hideIconType?: boolean
}

export function Gallery({
  className,
  gallery,
  hideIconType = false,
  ...rest
}: GalleryProps) {
  return (
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
              alt={gallery?.altSrc}
              className={twMerge("w-[360px] h-[230px] object-cover", {
                "object-[50%_20%]": gallery.direction === "vertical",
              })}
            />
          ) : (
            <video
              src={gallery.src}
              controls={false}
              className="w-full h-full pointer-events-none aspect-video"
            />
          )}

          {!hideIconType && (
            <Icon
              name={icons[gallery.variant]}
              className="absolute top-3 right-3 text-sky-500"
            />
          )}
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
              "w-[95%] xs:w-4/5 lg:w-[56.25rem] lg:h-[37.5rem]":
                gallery.variant === "image",

              "w-[900px]":
                gallery.variant === "video" &&
                gallery.direction === "horizontal",
              "w-[1200px]":
                gallery.variant === "video" && gallery.direction === "vertical",
            }
          )}
        >
          {gallery.variant === "image" ? (
            <Image
              src={gallery.src}
              alt={gallery?.altSrc}
              width={gallery.direction === "horizontal" ? 900 : 550}
              height={600}
              className="w-full h-full object-cover"
            />
          ) : (
            <ReactPlayer
              url={gallery.src}
              width="100%"
              height="100%"
              controls
              volume={0.2}
              alt={gallery.altSrc || "Vídeo"}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
