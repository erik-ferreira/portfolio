import Image from "next/image"
import Link, { LinkProps } from "next/link"

import { CertificateDTO } from "@/dtos/CertificateDTO"

interface CertificateShortProps extends LinkProps {
  certificate: CertificateDTO
}

export function CertificateShort({
  certificate,
  ...rest
}: CertificateShortProps) {
  return (
    <Link {...rest} prefetch={false} target="_blank">
      <article className="flex flex-col gap-1 transition duration-300 hover:scale-105 hover:cursor-pointer">
        <h3 className="font-bold text-2xl w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
          {certificate.name}
        </h3>
        <p className="text-xl">{certificate.company}</p>

        <Image
          src={certificate.src}
          alt={`Certificado do curso de ${certificate.name}. Na imagem contém algumas informações do certificado, como nome, descrição, data de conclusão e empresa.`}
          width={300}
          height={208}
          className="rounded border border-sky-600"
        />
      </article>
    </Link>
  )
}
