"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeSwitcher } from "./themeSwitcher"
import { LuMenu, LuX, LuQrCode } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "خانه", href: "/" },
  { name: "طرح‌ها", href: "/collection" },
  { name: "مستندات", href: "/mint" },
  { name: "داستان ما", href: "/about" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphism background with futuristic border */}
      <div className="absolute inset-0 backdrop-blur-md bg-background/70 transition-colors duration-300"></div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <nav className="relative mx-auto flex max-w-7xl h-[3.75rem] sm:h-[4.5rem] items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 bg-primary rounded-full"></div>
              <LuQrCode className="relative z-10 w-4 h-4 text-background" />
            </div>
            <h3 className="font-bold text-2xl bg-clip-text text-transparent bg-primary">
             کراکس 
            </h3>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 font-medium text-base text-foreground/80 hover:text-foreground transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative h-9 w-9 rounded-full overflow-hidden group bg-background/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <LuX className="h-5 w-5 group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
            ) : (
              <LuMenu className="h-5 w-5 group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
            )}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-hover:bg-primary transition-opacity duration-300"></div>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? " pointer-events-auto" : " pointer-events-none",
        )}
        style={{
            transitionProperty: "visibility",
            transitionDuration: "300ms",
            visibility: mobileMenuOpen ? "visible" : "hidden",
          }}
      >
        <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300" 
            style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transitionProperty: "opacity",
                transitionDuration: "300ms",
              }}
            onClick={() => setMobileMenuOpen(false)}></div>
        <div 
            className="fixed inset-x-0 left-0 w-full bg-background/80 backdrop-blur-lg p-6 shadow-xl"
            style={{
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
                transitionProperty: "transform",
                transitionDuration: "300ms",
              }}>
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <LuQrCode className="relative z-10 w-4 h-4 text-background" />
              </div>
              <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                کراکس
              </h2>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 rounded-full overflow-hidden group bg-background/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LuX className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-hover:bg-primary transition-opacity duration-300"></div>
            </Button>
          </div>
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-primary/5 rounded-md transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

