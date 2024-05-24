"use client"

import Image from "next/image"
import { ComponentProps, useState } from "react"
import { Navigation, Controller } from "swiper/modules"
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react"

import { Certificate } from "@/components/Certificate"
import { SwiperNavButtons } from "@/components/SwiperNavButtons"

import { breakpoints } from "@/defaults/swiper"
import { certificates } from "@/defaults/certificates"

import { twMerge } from "@/utils/twMerge"

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
      className={twMerge(
        "flex flex-col items-center gap-8",
        "xl:flex-row",
        className
      )}
      {...rest}
    >
      <Swiper
        className={twMerge(
          "w-full",
          "min-[500px]:w-[31.25rem] min-[500px]:h-[21.5rem]"
        )}
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
              alt={`Certificado do curso de ${certificate.name}. Na imagem contém algumas informações do certificado, como nome, descrição, data de conclusão e empresa.`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>

      <Swiper
        className={twMerge(
          "w-full",
          "xl:w-fit xl:h-[500px]",
          "2xl:h-[1006px]",

          "relative",

          // before styles
          "2xl:before:content-normal 2xl:before:w-full 2xl:before:h-[300px] 2xl:before:absolute 2xl:before:top-0 2xl:before:left-0 2xl:before:right-0 2xl:before:z-[2]",

          "2xl:before:from-slate-100 2xl:dark:before:from-page",

          "2xl:before:bg-gradient-to-b 2xl:before:from-0% 2xl:before:to-transparent 2xl:before:to-100%",

          // after styles
          "2xl:after:content-normal 2xl:after:w-full 2xl:after:h-[300px] 2xl:after:absolute 2xl:after:bottom-0 2xl:after:left-0 2xl:after:right-0 2xl:after:z-[2]",

          "2xl:after:from-slate-100 2xl:dark:after:from-page",

          "2xl:after:bg-gradient-to-t 2xl:after:from-0% 2xl:after:to-transparent 2xl:after:to-100%"
        )}
        spaceBetween={32}
        centeredSlides
        enabled={false}
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        breakpoints={breakpoints}
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id}>
            {({ isActive }) => (
              <Certificate isActive={isActive} certificate={certificate} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
