"use client"

import { pdfjs, Document, Page, DocumentProps } from "react-pdf"

import { twMerge } from "@/utils/twMerge"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString()

import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

interface CurriculumProps extends DocumentProps {}

export function Curriculum({ className, ...rest }: CurriculumProps) {
  return (
    <Document
      file="/erik.pdf"
      className={twMerge("flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <Page pageNumber={1} scale={1.6} />
      <Page pageNumber={2} scale={1.6} />
    </Document>
  )
}
