"use client"

import { useEffect, useState } from "react"

import { Icon } from "@/components/Icon"
import { Navbar } from "@/components/Navbar"
import { SwitchTheme } from "@/components/SwitchTheme"
import { SocialIcons } from "@/components/SocialIcons"

import { twMerge } from "@/utils/twMerge"

export function HeaderSectionRight() {
  const [showNavbar, setShowNavbar] = useState(false)

  function handleToggleNavbar() {
    const screenWidth = window.innerWidth
    if (screenWidth > 900) return

    document.body.classList.toggle("stop-scroll", !showNavbar)

    setShowNavbar((prevState) => !prevState)
  }

  return (
    <>
      <div
        className={twMerge(
          "hidden",
          "max-[900px]:z-20 max-[900px]:flex max-[900px]:gap-4"
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
          "max-[900px]:w-screen max-[900px]:h-screen max-[900px]:z-10",
          "max-[900px]:fixed max-[900px]:left-0 max-[900px]:bottom-0",
          "max-[900px]:transition-transform max-[900px]:duration-500 max-[900px]:ease-in-out",
          "max-[900px]:flex-col max-[900px]:justify-center",

          "max-[900px]:bg-slate-100 max-[900px]:opacity-90",
          "dark:max-[900px]:bg-page dark:max-[900px]:opacity-85",
          {
            "max-[900px]:translate-x-0": showNavbar,
            "max-[900px]:translate-x-full": !showNavbar,
          }
        )}
      >
        <Navbar
          classNameContent="max-[900px]:flex-col"
          onCloseNavBar={handleToggleNavbar}
        />

        <SwitchTheme className="max-[900px]:hidden" />

        <SocialIcons className="hidden max-[900px]:flex" />
      </div>
    </>
  )
}
