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
    <div className="flex items-center gap-1">
      <Icon name="MoonStar" isSelected={theme === "dark"} className="w-5 h-5" />

      <Switch.Root
        className={twMerge(
          "w-16 h-7.5 bg-slate-400 rounded-full relative",
          "dark:bg-section",
          className
        )}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        {...rest}
      >
        <Switch.Thumb
          className={twMerge(
            "block w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700",
            "transition-transform translate-x-1 data-[state=checked]:translate-x-[36px] duration-100"
          )}
        />
      </Switch.Root>

      <Icon name="Sun" isSelected={theme === "light"} className="w-5 h-5" />
    </div>
  )
}
