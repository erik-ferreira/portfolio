import { Title } from "@/components/Title"

import { Header } from "@/components/page/Header"
import { Resume } from "@/components/page/Resume"

export default function Home() {
  return (
    <main>
      <Header />

      <Resume />

      <div className="flex items-center justify-center gap-6 p-8">
        <Title />
      </div>
    </main>
  )
}
