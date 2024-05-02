"use client"

import { useTheme } from "next-themes"
import * as Switch from "@radix-ui/react-switch"
import { ComponentProps, useEffect, useState } from "react"

import { Icon } from "@/components/Icon"

import { twMerge } from "@/utils/twMerge"

interface SwitchThemeProps extends ComponentProps<"div"> {
  switchProps?: Switch.SwitchProps
}

export function SwitchTheme({
  className,
  switchProps,
  ...rest
}: SwitchThemeProps) {
  const { theme, setTheme } = useTheme()

  const [checked, setChecked] = useState(false)
  const isDarkTheme = theme === "dark"
  const isLightTheme = theme === "light"

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
    <div className={twMerge("flex items-center gap-1", className)} {...rest}>
      <Icon
        name="MoonStar"
        isSelected={isDarkTheme}
        className={`w-5 h-5 ${isLightTheme && "text-slate-400"}`}
      />

      <Switch.Root
        className={twMerge(
          "w-16 h-7.5 bg-slate-400 rounded-full relative",
          "dark:bg-section",
          switchProps?.className
        )}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        {...switchProps}
      >
        <Switch.Thumb
          className={twMerge(
            "block w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700",
            "transition-transform translate-x-1 data-[state=checked]:translate-x-[36px] duration-100"
          )}
        />
      </Switch.Root>

      <Icon name="Sun" isSelected={isLightTheme} className="w-5 h-5" />
    </div>
  )
}
