"use client"

import Image from "next/image"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { SwiperNavButtons } from "@/components/SwiperNavButtons"

import "swiper/css"
import "swiper/css/navigation"

interface SwiperCertificationProps {}

export function SwiperCertification({ ...rest }: SwiperCertificationProps) {
  return (
    <Swiper
      // loop
      modules={[Navigation]}
      className="w-[500px] h-[345px] relative"
    >
      <SwiperSlide>
        <Image
          src="/certificates/figma-controller.png"
          width={500}
          height={345}
          alt="Certificate"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/certificates/figma-controller.png"
          width={500}
          height={345}
          alt="Certificate"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/certificates/figma-controller.png"
          width={500}
          height={345}
          alt="Certificate"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/certificates/figma-controller.png"
          width={500}
          height={345}
          alt="Certificate"
        />
      </SwiperSlide>

      <SwiperNavButtons />
    </Swiper>
  )
}
