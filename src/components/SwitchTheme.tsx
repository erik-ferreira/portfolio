"use client"

import { useState } from "react"
import * as Switch from "@radix-ui/react-switch"

import { Icon } from "@/components/Icon"

import { twMerge } from "@/utils/twMerge"

interface SwitchThemeProps extends Switch.SwitchProps {}

export function SwitchTheme({ className, ...rest }: SwitchThemeProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const checked = theme === "light"

  function handleCheckedChange() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"))
  }

  return (
    <div className="flex items-center gap-1">
      <Icon name="MoonStar" isSelected={theme === "dark"} disabledHover />

      <Switch.Root
        className={twMerge("w-16 h-7 bg-section rounded-full", className)}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        {...rest}
      >
        <Switch.Thumb
          className={twMerge(
            "block w-6 h-6 rounded-full bg-slate-700",
            "transition-transform translate-x-1 data-[state=checked]:translate-x-[36px] duration-100"
          )}
        />
      </Switch.Root>

      <Icon name="Sun" isSelected={theme === "light"} disabledHover />
    </div>
  )
}
