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
      className={twMerge(
        "flex flex-col items-center gap-6",
        "border border-red-500",
        className
      )}
      {...rest}
    >
      <Title
        label="Certificados"
        labelBackground="Certificates"
        className="border border-blue-500"
      />

      <div
        className={twMerge(
          "flex items-center justify-center gap-6 flex-wrap border border-blue-500",
          "md:gap-12"
        )}
      >
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
