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
  const { setTheme, resolvedTheme } = useTheme()

  const [isLightTheme, setIsLightTheme] = useState(false)

  function handleCheckedChange(checked: boolean) {
    setTheme(checked ? "light" : "dark")
  }

  useEffect(() => {
    setIsLightTheme(resolvedTheme === "light")
  }, [resolvedTheme])

  return (
    <div className={twMerge("flex items-center gap-1", className)} {...rest}>
      <Icon
        name="MoonStar"
        isSelected={!isLightTheme}
        className={`w-5 h-5 ${isLightTheme && "text-slate-400"}`}
      />

      <Switch.Root
        className={twMerge(
          "w-16 h-8 bg-slate-400 rounded-full relative",
          "dark:bg-section",
          switchProps?.className
        )}
        checked={isLightTheme}
        onCheckedChange={handleCheckedChange}
        {...switchProps}
      >
        <Switch.Thumb
          className={twMerge(
            "block w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700",
            "transition-transform translate-x-1 duration-100",
            "data-[state=checked]:translate-x-9"
          )}
        />
      </Switch.Root>

      <Icon name="Sun" isSelected={isLightTheme} className="w-5 h-5" />
    </div>
  )
}
