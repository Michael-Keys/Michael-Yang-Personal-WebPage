"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    // 直接在light和dark之间切换，跳过system
    console.log('resolvedTheme:', resolvedTheme)
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    // console.log('切换主题:', newTheme)
    setTheme(newTheme)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 hover:border-white/50 dark:hover:border-white/30 shadow-lg transition-all duration-200 rounded-xl focus:outline-none focus:ring-0"
    >
      {resolvedTheme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-200 text-foreground" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-200 text-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 