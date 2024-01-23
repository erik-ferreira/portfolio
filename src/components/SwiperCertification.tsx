"use client"

import Image from "next/image"
import { ComponentProps, useState } from "react"
import { Navigation, Controller } from "swiper/modules"
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react"

import { Certificate } from "@/components/Certificate"
import { SwiperNavButtons } from "@/components/SwiperNavButtons"

import { twMerge } from "@/utils/twMerge"
import { certificates } from "@/defaults/certificates"

import "swiper/css"
import "swiper/css/navigation"

interface SwiperCertificationProps extends ComponentProps<"article"> {}

export function SwiperCertification({
  className,
  ...rest
}: SwiperCertificationProps) {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(
    null
  )

  return (
    <article
      className={twMerge("flex items-center gap-8", className)}
      {...rest}
    >
      <Swiper
        className="w-[500px] h-[345px]"
        modules={[Navigation, Controller]}
        controller={{ control: controlledSwiper }}
        initialSlide={1}
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id}>
            <Image
              src={certificate.src}
              width={500}
              height={345}
              alt="Certificate"
              className="w-[500px] h-[345px]"
            />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>

      <Swiper
        className="h-[1006px]"
        direction="vertical"
        spaceBetween={32}
        slidesPerView={3}
        centeredSlides
        enabled={false}
        modules={[Controller]}
        onSwiper={setControlledSwiper}
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id}>
            {({ isActive, isPrev, isNext }) => (
              <Certificate
                className={isActive ? "border-sky-400" : ""}
                isPrev={isPrev}
                isNext={isNext}
                certificate={certificate}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
