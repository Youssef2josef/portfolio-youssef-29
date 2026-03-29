"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#experiences", label: "Expériences" },
  { href: "#projets", label: "Projets" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm text-primary font-semibold tracking-wider hover:opacity-80 transition-opacity"
          aria-label="Retour en haut"
        >
          Youssef JOUINI<span className="text-muted-foreground"></span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map(({ href, label }) => {
            const sectionId = href.replace("#", "")
            const isActive = activeSection === sectionId
            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`text-sm transition-colors duration-200 font-medium relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive
                    ? "text-primary after:w-full"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
            aria-label="Basculer le thème"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* CTA - Desktop */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#contact")
            }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Disponible mai 2026
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-card/95 backdrop-blur-md border-b border-border/60`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className="w-full text-left py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors border-b border-border/30 last:border-0"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="mailto:youssef.jouini@grenoble-inp.org"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary text-primary text-sm font-medium"
            >
              Disponible mai 2026
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
