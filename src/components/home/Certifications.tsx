import Link from "next/link"
import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { CertificateShort } from "@/components/CertificateShort"

import { twMerge } from "@/utils/twMerge"
import { someCertificates } from "@/defaults/certificates"

interface CertificationsProps extends ComponentProps<"section"> {}

export function Certifications({ className, ...rest }: CertificationsProps) {
  return (
    <section
      className={twMerge("flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <Title label="Certificados" labelBackground="Certificates" />

      <div className="flex items-center justify-center gap-12 flex-wrap">
        {someCertificates.map((certificate) => (
          <CertificateShort
            key={certificate.id}
            href={certificate.href}
            certificate={certificate}
          />
        ))}
      </div>

      <Button variant="outline-gradient" size="large" asChild>
        <Link href="/certifications">
          Todos os Certificados
          <Icon size="large" />
        </Link>
      </Button>
    </section>
  )
}
