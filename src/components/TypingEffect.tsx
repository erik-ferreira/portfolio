"use client"

import Typewriter from "typewriter-effect"

interface TypingEffectProps {}

export function TypingEffect({ ...rest }: TypingEffectProps) {
  return (
    <Typewriter
      options={{
        strings: ["Desenvolvedor Frontend"],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
