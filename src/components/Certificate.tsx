import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"

import { twMerge } from "@/utils/twMerge"

interface CertificateProps extends ComponentProps<"div"> {}

export function Certificate({ className, ...rest }: CertificateProps) {
  return (
    <div
      className={twMerge(
        "max-w-[695px] h-fit flex gap-6 p-8 border border-slate-500 rounded",
        className
      )}
      {...rest}
    >
      {/* Left */}
      <div>
        <Image
          src="/certificates/rocketseat.svg"
          width={180}
          height={34}
          alt="Company"
          className="bg-section px-3 py-4 rounded mb-4"
        />

        <time className="text-lg font-semibold text-slate-600">03/05/2023</time>

        <Link
          href="/"
          label="Acesse o certificado"
          hideIcon
          className="whitespace-nowrap text-slate-600"
        />
      </div>

      {/* Right */}
      <div>
        <h3 className="text-3.5xl font-bold text-sky-500">Figma for devs</h3>
        <p className="text-2xl font-bold text-violet-300">Rocketseat</p>
        <span className="font-semibold text-slate-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>
    </div>
  )
}
