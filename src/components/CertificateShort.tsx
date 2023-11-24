import Image from "next/image"
import { ComponentProps } from "react"

import figmaPNG from "@/assets/figma.png"

interface CertificateShortProps extends ComponentProps<"article"> {}

export function CertificateShort({ ...rest }: CertificateShortProps) {
  return (
    <article className="flex flex-col gap-1" {...rest}>
      <h3 className="font-bold text-2xl">Figma for Devs</h3>
      <p className="text-xl">Rocketseat</p>

      <Image
        src={figmaPNG}
        alt="Certificado de figma for devs"
        width={300}
        height={208}
        className="rounded border border-sky-600"
      />
    </article>
  )
}
