"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export  default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9"></div>
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:ring-2 ring-gray-300 dark:ring-gray-600"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  )
}

