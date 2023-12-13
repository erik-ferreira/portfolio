"use client"

import Image from "next/image"
import { useState } from "react"
import { Navigation, Controller } from "swiper/modules"
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react"

import { Certificate } from "@/components/Certificate"
import { SwiperNavButtons } from "@/components/SwiperNavButtons"

import { certificates } from "@/defaults/certificates"

import "swiper/css"
import "swiper/css/navigation"

interface SwiperCertificationProps {}

export function SwiperCertification({ ...rest }: SwiperCertificationProps) {
  const list = [0, 1, 2, 3, 4, 5, 6]
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(
    null
  )

  return (
    <article className="flex items-center gap-8">
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
            />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>

      <Swiper
        className="h-[862px]"
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

{
  /* <Swiper
        className="border h-[820px]"
        direction="vertical"
        spaceBetween={32}
        slidesPerView={3}
        centeredSlides
        enabled={false}
        allowSlideNext={false}
        allowSlidePrev={false}
        initialSlide={val}
        slidesOffsetBefore={-300 * val}
      >
        {list.map((item, index) => (
          <SwiperSlide key={item}>
            <Certificate className={val === index ? "border-sky-400" : ""} />
          </SwiperSlide>
        ))}
        <Test index={val} />
      </Swiper> */
}

{
  /* <div className="border h-[848px] overflow-hidden space-y-6 transition">
        {list.map((item, index) => (
          <Certificate
            key={item}
            className={
              val === index ? "border-sky-400" : "transform translate-y-[400px]"
            }
          />
        ))}
      </div> */
}

{
  /* <div className="border w-[700px] h-[820px] space-y-8 overflow-hidden pt-[250px] transform">
        <div className={`border-4 duration-400 ${translate[val]}`}>
          {list.map((item, index) => (
            <div
              key={item}
              className={`${colors[index]} w-[695px] h-[250px] mx-auto  ${
                val === index ? "opacity-50" : ""
              }`}
            />
          ))}
        </div>
      </div> */
}
