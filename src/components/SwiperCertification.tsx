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
          "before:content-normal before:w-full before:h-[300px] before:absolute before:top-0 before:left-0 before:right-0 before:z-[2]",

          "before:from-slate-100 dark:before:from-page",

          "before:bg-gradient-to-b before:from-0% before:to-transparent before:to-100%",

          // after styles
          "after:content-normal after:w-full after:h-[300px] after:absolute after:bottom-0 after:left-0 after:right-0 after:z-[2]",

          "after:from-slate-100 dark:after:from-page",

          "after:bg-gradient-to-t after:from-0% after:to-transparent after:to-100%"
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
