"use client"

import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  return <NextThemeProvider {...rest}>{children}</NextThemeProvider>
}
