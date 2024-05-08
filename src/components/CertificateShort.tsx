import Image from "next/image"
import Link, { LinkProps } from "next/link"

import { CertificateDTO } from "@/dtos/CertificateDTO"

import { twMerge } from "@/utils/twMerge"

interface CertificateShortProps extends LinkProps {
  certificate: CertificateDTO
}

export function CertificateShort({
  certificate,
  ...rest
}: CertificateShortProps) {
  return (
    <Link
      {...rest}
      target="_blank"
      className={twMerge("w-full", "xs:w-[350px]", "md:w-[300px]")}
    >
      <article
        className={twMerge(
          "flex flex-col gap-1 transition duration-300",
          "hover:scale-105 hover:cursor-pointer"
        )}
      >
        <h3
          className={twMerge(
            "font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap",
            "xs:text-2xl"
          )}
        >
          {certificate.name}
        </h3>
        <p className={twMerge("text-lg", "xs:text-xl")}>
          {certificate.company}
        </p>

        <Image
          src={certificate.src}
          alt={`Certificado do curso de ${certificate.name}. Na imagem contém algumas informações do certificado, como nome, descrição, data de conclusão e empresa.`}
          width={300}
          height={208}
          className="rounded border-2 border-sky-600 w-full h-full object-contain"
        />
      </article>
    </Link>
  )
}
