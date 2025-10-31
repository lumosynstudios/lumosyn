"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/theme-context"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="h-9 w-9 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-4 w-4 transition-all duration-300" />
      ) : (
        <Sun className="h-4 w-4 transition-all duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}