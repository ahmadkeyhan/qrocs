"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the UI after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" className="w-9 h-9" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={theme}
          initial={{ scale: 0.5, opacity: 0, rotate: theme === "dark" ? -45 : 45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: theme === "dark" ? 45 : -45 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}
