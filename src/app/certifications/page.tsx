import { Title } from "@/components/Title"
import { Description } from "@/components/Description"

import { SwiperCertification } from "@/components/SwiperCertification"

import { twMerge } from "@/utils/twMerge"

export default function Certifications() {
  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto px-0 py-2",
        "md:p-4",
        "lg:p-8"
      )}
    >
      <Title
        label="Certificados"
        labelBackground="Certifications"
        isTitlePage
      />
      <Description label="Aqui você vai encontrar os meus certificados" />

      <SwiperCertification />
    </main>
  )
}
