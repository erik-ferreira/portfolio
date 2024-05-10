"use client"

import { useState } from "react"

import { Icon } from "@/components/Icon"
import { Navbar } from "@/components/Navbar"
import { SwitchTheme } from "@/components/SwitchTheme"
import { SocialIcons } from "@/components/SocialIcons"
import { ToggleLanguage } from "@/components/ToggleLanguage"

import { twMerge } from "@/utils/twMerge"

export function HeaderSectionRight() {
  const [showNavbar, setShowNavbar] = useState(false)

  function handleToggleNavbar() {
    const screenWidth = window.innerWidth
    if (screenWidth > 1000) return

    document.body.classList.toggle("stop-scroll", !showNavbar)

    setShowNavbar((prevState) => !prevState)
  }

  return (
    <>
      <div
        className={twMerge(
          "hidden",
          "max-[1000px]:z-20 max-[1000px]:flex max-[1000px]:gap-4"
        )}
      >
        <SwitchTheme />

        <button type="button" onClick={handleToggleNavbar}>
          <Icon name={showNavbar ? "X" : "Menu"} className="w-7 h-7 z-50" />
        </button>
      </div>

      <div
        className={twMerge(
          "flex items-center gap-8",
          "max-[1000px]:w-screen max-[1000px]:h-screen max-[1000px]:z-10",
          "max-[1000px]:fixed max-[1000px]:left-0 max-[1000px]:bottom-0",
          "max-[1000px]:transition-transform max-[1000px]:duration-500 max-[1000px]:ease-in-out",
          "max-[1000px]:flex-col max-[1000px]:justify-center",

          "max-[1000px]:bg-slate-100 max-[1000px]:opacity-90",
          "dark:max-[1000px]:bg-page dark:max-[1000px]:opacity-85",
          {
            "max-[1000px]:translate-x-0": showNavbar,
            "max-[1000px]:translate-x-full": !showNavbar,
          }
        )}
      >
        <Navbar
          classNameContent="max-[1000px]:flex-col"
          onCloseNavBar={handleToggleNavbar}
        />

        <SwitchTheme className="max-[1000px]:hidden" />

        <ToggleLanguage />

        <SocialIcons className="hidden max-[1000px]:flex" />
      </div>
    </>
  )
}
