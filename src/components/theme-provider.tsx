"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  attribute?: string
  disableTransitionOnChange?: boolean
}

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "dark" | "light"
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("light")

  React.useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null
    if (saved) {
      setThemeState(saved)
    }
  }, [])

  React.useEffect(() => {
    let currentTheme: "dark" | "light" = theme === "system" ? "light" : theme

    if (theme === "system" && enableSystem) {
      currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    
    setResolvedTheme(currentTheme)
    const root = window.document.documentElement
    
    if (attribute === "class") {
      root.classList.remove("light", "dark")
      root.classList.add(currentTheme)
    } else {
      root.setAttribute(attribute, currentTheme)
    }
  }, [theme, enableSystem, attribute])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
  }, [])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const root = window.document.documentElement
        const newTheme = e.matches ? "dark" : "light"
        setResolvedTheme(newTheme)
        if (attribute === "class") {
          root.classList.remove("light", "dark")
          root.classList.add(newTheme)
        } else {
          root.setAttribute(attribute, newTheme)
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, attribute])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
