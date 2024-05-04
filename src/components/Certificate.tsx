import Image from "next/image"
import { format } from "date-fns"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"

import { twMerge } from "@/utils/twMerge"
import { CertificateDTO } from "@/dtos/CertificateDTO"

interface CertificateProps extends ComponentProps<"div"> {
  isActive?: boolean
  certificate: CertificateDTO
}

export function Certificate({
  className,
  isActive = false,
  certificate,
  ...rest
}: CertificateProps) {
  const formattedDate = format(certificate.dateOfIssue, "dd/MM/yyyy")

  return (
    <div
      className={twMerge(
        "max-w-[580px] mx-auto h-full flex flex-col gap-2 p-2 rounded",
        "lg:p-4",
        "xl:max-w-[520px] xl:p-8 xl:gap-6",
        "2xl:max-w-[720px] 2xl:flex-row",

        "bg-slate-300 border-2 border-slate-100",
        "dark:bg-transparent dark:border",
        {
          "border-sky-400": isActive,
          "dark:border-slate-500": !isActive,
        },
        className
      )}
      {...rest}
    >
      <div>
        <div className={twMerge("bg-section px-3 py-4 rounded mb-4")}>
          <Image
            src={certificate.srcCompany}
            width={180}
            height={34}
            alt={certificate.altSrcCompany}
            className={twMerge(
              "w-4/5 h-full object-contain mx-auto",
              "xs:max-w-[16.625rem] xs:w-full"
            )}
          />
        </div>

        <div
          className={twMerge(
            "flex justify-evenly",
            "md:flex-col md:items-center",
            "lg:items-start"
          )}
        >
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
      </div>

      <div>
        <h3
          className={twMerge(
            "text-3xl font-bold text-sky-700 text-center",
            "lg:text-start",

            "dark:text-sky-500"
          )}
        >
          {certificate.name}
        </h3>
        <p
          className={twMerge(
            "text-2xl font-bold text-violet-400 text-center",
            "lg:text-start",

            "dark:text-violet-300"
          )}
        >
          {certificate.company}
        </p>
        <span className="font-semibold text-slate-900 dark:text-slate-300">
          {certificate.description}
        </span>
      </div>
    </div>
  )
}
