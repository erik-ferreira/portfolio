import { Title } from "@/components/Title"
import { Description } from "@/components/Description"
import { Certificate } from "@/components/Certificate"
import { SwiperCertification } from "@/components/SwiperCertification"

export default function Certifications() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <section>
        <Title label="Certificados" labelBackground="Certifications" />
        <Description label="Uma breve descrição bem aqui" />

        <article className="">
          <SwiperCertification />
          <Certificate />
        </article>
      </section>
    </main>
  )
}
