import { Title } from "@/components/Title"
import { Description } from "@/components/Description"

import { SwiperCertification } from "@/components/SwiperCertification"

export default function Certifications() {
  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title
        label="Certificados"
        labelBackground="Certifications"
        isTitlePage
      />
      <Description label="Uma breve descrição bem aqui" />

      <SwiperCertification />
    </main>
  )
}
