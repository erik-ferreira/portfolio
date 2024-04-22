import { SwiperOptions } from "swiper/types"

interface BreakPointsProps {
  [width: number]: SwiperOptions
  [ratio: string]: SwiperOptions
}

export const breakpoints: BreakPointsProps = {
  1280: {
    direction: "vertical",
  },
  1536: {
    direction: "vertical",
    slidesPerView: 3,
  },
}
