"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/lab", label: "研究记录" },
    { href: "/log", label: "开发日志" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold text-white tracking-wider hover:text-purple-400 transition-colors duration-300"
          >
            ELYRA
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                  "text-slate-400 hover:text-white",
                  "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5",
                  "after:bg-purple-500 after:transition-all after:duration-300 after:-translate-x-1/2",
                  "hover:after:w-full",
                  pathname === item.href && "text-white"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute inset-0 bg-purple-500/10 rounded-lg" />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
