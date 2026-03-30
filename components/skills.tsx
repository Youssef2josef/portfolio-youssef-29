"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./about"

const skillCategories = [
  {
    id: "frontend",
    name: "Front-end",
    tagline: "Interfaces modernes",
    description: "Expériences utilisateur dynamiques, composants réactifs et design systems scalables.",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    accent: "cyan",
    accentClass: "text-cyan-400",
    borderClass: "hover:border-cyan-500/40",
    dotClass: "bg-cyan-400",
    badgeClass: "bg-cyan-500/8 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/15 hover:border-cyan-400/40",
    glowColor: "oklch(0.72 0.15 195 / 0.12)",
    lineClass: "bg-cyan-400/60",
    featured: false,
  },
  {
    id: "backend",
    name: "Back-end",
    tagline: "Services robustes",
    description: "APIs REST, architectures microservices, sécurité applicative et persistance des données.",
    skills: ["Java", "Spring Boot", "API REST", "Microservices", "Hibernate", "Spring Security", "Node.js", "Express"],
    accent: "blue",
    accentClass: "text-blue-400",
    borderClass: "hover:border-blue-500/40",
    dotClass: "bg-blue-400",
    badgeClass: "bg-blue-500/8 text-blue-300 border-blue-500/20 hover:bg-blue-500/15 hover:border-blue-400/40",
    glowColor: "oklch(0.60 0.20 240 / 0.12)",
    lineClass: "bg-blue-400/60",
    featured: true,
  },
  {
    id: "databases",
    name: "Bases de données",
    tagline: "Modélisation & requêtes",
    description: "Schémas relationnels avancés, indexation et stockage NoSQL.",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    accent: "teal",
    accentClass: "text-teal-400",
    borderClass: "hover:border-teal-500/40",
    dotClass: "bg-teal-400",
    badgeClass: "bg-teal-500/8 text-teal-300 border-teal-500/20 hover:bg-teal-500/15 hover:border-teal-400/40",
    glowColor: "oklch(0.70 0.15 185 / 0.12)",
    lineClass: "bg-teal-400/60",
    featured: false,
  },
  {
    id: "devops",
    name: "DevOps & Outils",
    tagline: "CI/CD & conteneurisation",
    description: "Pipelines automatisés, tests, infrastructure Docker et workflows Git.",
    skills: ["Docker", "GitLab CI/CD", "Git", "Linux", "Kafka", "JUnit", "Mockito"],
    accent: "slate",
    accentClass: "text-slate-300",
    borderClass: "hover:border-slate-400/40",
    dotClass: "bg-slate-400",
    badgeClass: "bg-slate-500/8 text-slate-300 border-slate-400/20 hover:bg-slate-500/15 hover:border-slate-300/40",
    glowColor: "oklch(0.60 0.01 240 / 0.12)",
    lineClass: "bg-slate-400/60",
    featured: false,
  },
  {
    id: "ai",
    name: "IA & NLP",
    tagline: "Logique intelligente",
    description: "Machine learning, traitement du langage naturel et intégration de modèles dans des applications web.",
    skills: ["Python", "Machine Learning", "NLP", "Traitement de texte"],
    accent: "indigo",
    accentClass: "text-indigo-400",
    borderClass: "hover:border-indigo-400/40",
    dotClass: "bg-indigo-400",
    badgeClass: "bg-indigo-500/8 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/15 hover:border-indigo-400/40",
    glowColor: "oklch(0.65 0.18 280 / 0.12)",
    lineClass: "bg-indigo-400/60",
    featured: false,
  },
]

const coreStack = ["Java", "Spring Boot", "Angular", "React", "API REST", "Docker", "CI/CD", "TypeScript"]

function useInView(ref: React.RefObject<Element | null>, threshold = 0.12) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])
  return inView
}

function SkillCard({
  cat,
  index,
}: {
  cat: (typeof skillCategories)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border/60 transition-all duration-500 overflow-hidden ${cat.borderClass} ${cat.featured ? "lg:col-span-2" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.98)",
        transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, border-color 0.3s, box-shadow 0.4s`,
        boxShadow: hovered
          ? `0 0 0 1px ${cat.glowColor.replace("0.12", "0.3")}, 0 8px 40px -8px ${cat.glowColor}`
          : undefined,
      }}
    >
      {/* Ambient glow — top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${cat.glowColor.replace("0.12", "0.6")}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          {/* Category label */}
          <div className="flex items-center gap-2.5">
            <span
              className={`size-2 rounded-full flex-shrink-0 transition-all duration-300 ${cat.dotClass}`}
              style={{ boxShadow: hovered ? `0 0 8px ${cat.glowColor.replace("0.12", "0.8")}` : undefined }}
            />
            <span className={`text-xs font-mono font-bold uppercase tracking-[0.12em] ${cat.accentClass}`}>
              {cat.name}
            </span>
          </div>
          {/* Tagline */}
          <p className="text-lg font-semibold text-foreground leading-tight pl-[18px]">
            {cat.tagline}
          </p>
        </div>

        {/* Tech count chip */}
        <div className="flex-shrink-0 px-2.5 py-1 rounded-full bg-muted/60 border border-border/40">
          <span className="text-xs font-mono text-muted-foreground">
            {cat.skills.length} tech{cat.skills.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed -mt-2">
        {cat.description}
      </p>

      {/* Divider */}
      <div className="h-px bg-border/40" />

      {/* Skills badges */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default hover:scale-105 hover:-translate-y-0.5 ${cat.badgeClass}`}
            style={{
              opacity: inView ? 1 : 0,
              transitionDelay: `${index * 90 + i * 35 + 200}ms`,
              transitionProperty: "opacity, transform, background-color, border-color",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom accent line that grows on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-b-2xl">
        <div
          className={`h-full transition-all duration-500 ease-out ${cat.lineClass}`}
          style={{ width: hovered ? "100%" : "0%" }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, 0.05)

  return (
    <section id="competences" className="py-24 bg-card/20">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">

        <SectionHeader
          label="Compétences"
          title="Stack technique"
          description="Un ensemble cohérent de technologies modernes — du front-end au back-end, DevOps inclus — avec un intérêt particulier pour les projets autour de l'IA et du NLP."
        />

        {/* Core stack highlight — animated in */}
        <div
          className="mt-8 flex flex-wrap items-center gap-3"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mr-1">
            Core
          </span>
          {coreStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/25 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 cursor-default hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Bottom note — IA interest */}
        <div
          className="mt-8 flex items-start gap-4 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
          }}
        >
          <div className="flex-shrink-0 mt-0.5 size-7 flex items-center justify-center rounded-md bg-indigo-500/15 border border-indigo-500/25">
            <span className="text-indigo-400 text-sm font-bold font-mono">∿</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground">
              Intérêt pour les projets IA, NLP et logiciel intelligent
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Je suis particulièrement attiré par les applications combinant développement fullstack et traitement du langage naturel — que ce soit l&apos;intégration de modèles, la construction de pipelines NLP ou le développement de features IA dans un produit web.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
