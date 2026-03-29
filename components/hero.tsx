"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, Download, FolderOpen } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty("--mouse-x", `${x}%`)
      el.style.setProperty("--mouse-y", `${y}%`)
    }
    el.addEventListener("mousemove", handleMouse)
    return () => el.removeEventListener("mousemove", handleMouse)
  }, [])

  const scrollToProjects = () => {
    document.querySelector("#projets")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Radial glow that follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), oklch(0.72 0.15 195 / 0.08), transparent 60%)",
        }}
      />
      {/* Static top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.15 195 / 0.3) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col gap-8">
        {/* Available badge */}
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 w-fit">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-mono font-medium tracking-wide">
              Disponible · Stage 25 mai – 13 sept. 2026
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="flex flex-col gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight tracking-tight">
            <span className="text-foreground">Youssef</span>{" "}
            <span className="text-gradient">Jouini</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium tracking-wide">
            Étudiant ingénieur Ensimag{" "}
            <span className="text-foreground/70">–</span>{" "}
            Développeur Fullstack Web
          </p>
        </div>

        {/* Tagline */}
        <p
          className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Je conçois des applications web et logicielles modernes avec{" "}
          <TechHighlight>Java</TechHighlight>,{" "}
          <TechHighlight>Spring Boot</TechHighlight>,{" "}
          <TechHighlight>Angular</TechHighlight>,{" "}
          <TechHighlight>React</TechHighlight> et{" "}
          <TechHighlight>SQL</TechHighlight>, avec un intérêt fort pour les
          produits{" "}
          <TechHighlight>SaaS</TechHighlight>,{" "}
          <TechHighlight>API REST</TechHighlight>,{" "}
          <TechHighlight>microservices</TechHighlight> et{" "}
          l&apos;intelligence artificielle appliquée.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <FolderOpen size={16} />
            Voir mes projets
          </button>
          <a
            href="/cv-youssef-jouini.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 transition-all duration-200 border border-border/60 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-muted-foreground text-sm font-semibold hover:border-primary/50 hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Me contacter
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com/Youssef2josef"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-jouini93/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:youssef.jouini@grenoble-inp.org"
            aria-label="Email"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Mail size={18} />
          </a>
          <div className="h-4 w-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground">
            Grenoble, France
          </span>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-6 pt-4 border-t border-border/40 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "1", label: "An d'expérience" },
            { value: "5+", label: "Projets réalisés" },
            { value: "3", label: "Stages effectués" },
            { value: "Bac+5", label: "Diplôme visé" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-xl font-bold text-primary font-mono">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#a-propos")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown size={14} />
      </button>
    </section>
  )
}

function TechHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary font-medium">{children}</span>
  )
}
