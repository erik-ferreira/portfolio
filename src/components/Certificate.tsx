import Image from "next/image"
import { format } from "date-fns"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"

import { twMerge } from "@/utils/twMerge"
import { CertificateDTO } from "@/dtos/CertificateDTO"

interface CertificateProps extends ComponentProps<"div"> {
  isPrev?: boolean
  isNext?: boolean
  certificate: CertificateDTO
}

export function Certificate({
  className,
  isPrev = false,
  isNext = false,
  certificate,
  ...rest
}: CertificateProps) {
  const formattedDate = format(certificate.dateOfIssue, "dd/MM/yyyy")

  return (
    <div
      className={twMerge(
        "max-w-[720px] h-fit flex gap-6 p-8 border border-slate-500 rounded",
        {
          "relative after:absolute after:top-0 after:left-0 after:right-0 after:h-full after:rounded after:from-black after:to-[rgba(8, 2, 5, 0.00)]":
            isPrev || isNext,
        },
        {
          "after:bg-gradient-to-b": isPrev,
        },
        {
          "after:bg-gradient-to-t": isNext,
        },
        className
      )}
      {...rest}
    >
      <div>
        <Image
          src={certificate.srcCompany}
          width={180}
          height={34}
          alt={certificate.altSrcCompany}
          className="bg-section px-3 py-4 rounded mb-4"
        />

        <time className="text-lg font-semibold text-slate-600">
          {formattedDate}
        </time>

        <Link
          href={certificate.href}
          label="Acesse o certificado"
          hideIcon
          className="whitespace-nowrap text-slate-600"
          target="_blank"
        />
      </div>

      <div>
        <h3 className="text-3.5xl font-bold text-sky-500">
          {certificate.name}
        </h3>
        <p className="text-2xl font-bold text-violet-300">
          {certificate.company}
        </p>
        <span className="font-semibold text-slate-300">
          {certificate.description}
        </span>
      </div>
    </div>
  )
}
