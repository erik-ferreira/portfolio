import Image from "next/image"
import { ComponentProps } from "react"

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
    <button
      className={twMerge(
        "rounded-lg relative overflow-auto transition-shadow duration-300 hover:shadow-blue",
        className
      )}
      {...rest}
    >
      <Image
        src={src}
        width={350}
        height={230}
        alt="NBA"
        className="w-full h-full"
      />
      <Icon
        name={icons[variant]}
        className="absolute top-3 right-3 text-sky-500"
      />
    </button>
  )
}
