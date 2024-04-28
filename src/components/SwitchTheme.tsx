"use client"

import { useEffect, useMemo, useState } from "react"
import * as Switch from "@radix-ui/react-switch"
import { useTheme } from "next-themes"

import { Icon } from "@/components/Icon"

import { twMerge } from "@/utils/twMerge"

interface SwitchThemeProps extends Switch.SwitchProps {}

export function SwitchTheme({ className, ...rest }: SwitchThemeProps) {
  const { theme, setTheme } = useTheme()

  const [checked, setChecked] = useState(false)

  function handleCheckedChange() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    const isSameValueChecked = (theme === "light") === checked

    if (isSameValueChecked) return

    setChecked(theme === "light")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <Switch.Root
      className={twMerge(
        "w-16 h-7 bg-section rounded-full relative",
        className
      )}
      checked={checked}
      onCheckedChange={handleCheckedChange}
      {...rest}
    >
      <Icon
        name="MoonStar"
        isSelected
        className="w-5 h-5 absolute left-1 top-1/2 -translate-y-1/2"
      />

      <Icon
        name="Sun"
        isSelected
        className="w-5 h-5 absolute right-1 top-1/2 -translate-y-1/2"
      />

      <Switch.Thumb
        className={twMerge(
          "block w-6 h-6 rounded-full bg-slate-700",
          "transition-transform translate-x-1 data-[state=checked]:translate-x-[36px] duration-100"
        )}
      />
    </Switch.Root>
  )
}
