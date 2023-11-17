import Image from "next/image"

import { Navbar } from "@/components/Navbar"

import logo from "../assets/logo.svg"

export default function Home() {
  return (
    <main className="">
      <header className="border flex items-center justify-evenly">
        <Image src={logo} alt="Erik Ferreira" width={150} height={40} />

        <Navbar />
      </header>
    </main>
  )
}
