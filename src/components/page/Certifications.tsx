import { Link } from "@/components/Link"
import { Title } from "@/components/Title"
import { CertificateShort } from "@/components/CertificateShort"

import { certificates } from "@/defaults/certificates"

interface CertificationsProps {}

export function Certifications({ ...rest }: CertificationsProps) {
  return (
    <div className="max-w-content w-content mx-auto flex flex-col items-center gap-6 p-8">
      <Title label="Certificados" labelBackground="Certificates" />

      <div className="flex items-center justify-center gap-12">
        {certificates.map((certificate) => (
          <CertificateShort
            key={certificate.id}
            href={certificate.href}
            certificate={certificate}
          />
        ))}

        <Link
          href="/"
          label="Mais detalhes"
          className="text-slate-600 whitespace-nowrap"
        />
      </div>
    </div>
  )
}
