"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import { LanguageDTO } from "@/dtos/LanguageDTO"

interface LanguageProviderData {
  language: LanguageDTO
  handleToggleLanguage: () => void
}

export const LanguageProvider = createContext({} as LanguageProviderData)

interface LanguageFnProviderProps {
  children: ReactNode
}

export function LanguageFnProvider({ children }: LanguageFnProviderProps) {
  const [language, setLanguage] = useState<LanguageDTO>("BR")

  function handleToggleLanguage() {
    setLanguage((prevState) => (prevState === "BR" ? "USA" : "BR"))

    localStorage.setItem("@portfolio:erik-ferreira", language)
  }

  useEffect(() => {
    const storageLanguage = localStorage.getItem(
      "@portfolio:erik-ferreira"
    ) as LanguageDTO

    if (storageLanguage) {
      setLanguage(storageLanguage)
    }
  }, [])

  return (
    <LanguageProvider.Provider
      value={{
        language,
        handleToggleLanguage,
      }}
    >
      {children}
    </LanguageProvider.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageProvider)

  return context
}
