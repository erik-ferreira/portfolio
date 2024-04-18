import { useSwiper } from "swiper/react"

import { IconSvgExternal } from "@/components/IconSvgExternal"

interface SwiperNavButtonsProps {}

export function SwiperNavButtons({ ...rest }: SwiperNavButtonsProps) {
  const swiper = useSwiper()

  return (
    <>
      <button
        className="w-7 absolute top-0 left-0 bottom-0 z-10 transition-colors bg-black/20 hover:bg-black/40 disabled:bg-black"
        onClick={() => swiper.slidePrev()}
      >
        <IconSvgExternal
          type="CaretLeft"
          className="fill-slate-400"
          enabledHover={false}
        />
      </button>
      <button
        className="w-7 absolute top-0 right-0 bottom-0 z-10 transition-colors bg-black/20 hover:bg-black/40 disabled:bg-black"
        onClick={() => swiper.slideNext()}
      >
        <IconSvgExternal
          type="CaretRight"
          className="fill-slate-400"
          enabledHover={false}
        />
      </button>
    </>
  )
}
