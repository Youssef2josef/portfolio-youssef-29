"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./about"

const skillCategories = [
  {
    name: "Front-end",
    description: "Interfaces modernes & expériences utilisateur dynamiques",
    skills: [
      { name: "Angular", level: 90 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
    ],
    colorVar: "primary",
    borderClass: "border-primary/20 hover:border-primary/50",
    dotClass: "bg-primary",
    labelClass: "text-primary",
    badgeClass: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
    barClass: "bg-primary",
    glowClass: "group-hover:shadow-[0_0_24px_oklch(0.72_0.15_195_/_0.15)]",
  },
  {
    name: "Back-end",
    description: "Services robustes, APIs REST & architectures microservices",
    skills: [
      { name: "Java", level: 88 },
      { name: "Spring Boot", level: 88 },
      { name: "API REST", level: 85 },
      { name: "Microservices", level: 78 },
      { name: "Hibernate", level: 75 },
      { name: "Spring Security", level: 72 },
      { name: "Node.js", level: 65 },
      { name: "Express", level: 62 },
    ],
    colorVar: "blue",
    borderClass: "border-blue-500/20 hover:border-blue-500/50",
    dotClass: "bg-blue-400",
    labelClass: "text-blue-400",
    badgeClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20",
    barClass: "bg-blue-400",
    glowClass: "group-hover:shadow-[0_0_24px_oklch(0.60_0.20_240_/_0.15)]",
    featured: true,
  },
  {
    name: "Bases de données",
    description: "Modélisation, requêtes avancées & stockage NoSQL",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 65 },
    ],
    colorVar: "teal",
    borderClass: "border-teal-500/20 hover:border-teal-500/50",
    dotClass: "bg-teal-400",
    labelClass: "text-teal-400",
    badgeClass: "bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500/20",
    barClass: "bg-teal-400",
    glowClass: "group-hover:shadow-[0_0_24px_oklch(0.70_0.15_185_/_0.15)]",
  },
  {
    name: "DevOps & Outils",
    description: "Conteneurisation, CI/CD, tests & bonnes pratiques",
    skills: [
      { name: "Docker", level: 78 },
      { name: "GitLab CI/CD", level: 75 },
      { name: "Git", level: 88 },
      { name: "Linux", level: 72 },
      { name: "Kafka", level: 60 },
      { name: "JUnit", level: 75 },
      { name: "Mockito", level: 70 },
    ],
    colorVar: "slate",
    borderClass: "border-slate-400/20 hover:border-slate-400/50",
    dotClass: "bg-slate-400",
    labelClass: "text-slate-300",
    badgeClass: "bg-slate-400/10 text-slate-300 border border-slate-400/20 hover:bg-slate-400/20",
    barClass: "bg-slate-400",
    glowClass: "group-hover:shadow-[0_0_24px_oklch(0.60_0.01_240_/_0.15)]",
  },
  {
    name: "IA / Data",
    description: "Machine learning, NLP & intégration de logique intelligente",
    skills: [
      { name: "Python", level: 72 },
      { name: "Machine Learning", level: 60 },
      { name: "NLP", level: 58 },
      { name: "Traitement de texte", level: 62 },
    ],
    colorVar: "indigo",
    borderClass: "border-indigo-400/20 hover:border-indigo-400/50",
    dotClass: "bg-indigo-400",
    labelClass: "text-indigo-300",
    badgeClass: "bg-indigo-400/10 text-indigo-300 border border-indigo-400/20 hover:bg-indigo-400/20",
    barClass: "bg-indigo-400",
    glowClass: "group-hover:shadow-[0_0_24px_oklch(0.65_0.18_280_/_0.15)]",
  },
]

function useInView(ref: React.RefObject<Element | null>, threshold = 0.15) {
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

function SkillBar({ level, barClass, delay }: { level: number; barClass: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  return (
    <div ref={ref} className="h-0.5 w-full bg-border/40 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out ${barClass}`}
        style={{
          width: inView ? `${level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  )
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

  return (
    <div
      ref={ref}
      className={`group flex flex-col gap-5 p-6 rounded-2xl bg-card border transition-all duration-500 ${cat.borderClass} ${cat.glowClass} ${cat.featured ? "lg:col-span-2" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className={`size-2 rounded-full flex-shrink-0 ${cat.dotClass}`} />
            <span className={`text-sm font-bold font-mono ${cat.labelClass}`}>
              {cat.name}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed pl-4">
            {cat.description}
          </p>
        </div>
        <span className="text-xs font-mono text-muted-foreground flex-shrink-0 mt-0.5">
          {cat.skills.length} techs
        </span>
      </div>

      {/* Badges grid */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <span
            key={skill.name}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-default hover:scale-105 ${cat.badgeClass}`}
            style={{
              opacity: inView ? 1 : 0,
              transitionDelay: `${index * 80 + i * 40}ms`,
            }}
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Top-3 skill bars for context */}
      <div className="flex flex-col gap-2 pt-1 border-t border-border/30">
        {cat.skills.slice(0, cat.featured ? 4 : 3).map((skill, i) => (
          <div key={skill.name} className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-28 flex-shrink-0 truncate font-mono">
              {skill.name}
            </span>
            <div className="flex-1">
              <SkillBar
                level={skill.level}
                barClass={cat.barClass}
                delay={index * 80 + i * 60}
              />
            </div>
            <span className={`text-xs font-mono ${cat.labelClass} w-8 text-right flex-shrink-0`}>
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="competences" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Compétences"
          title="Stack technique"
          description="Un ensemble de technologies modernes couvrant le développement fullstack, le DevOps et l'intelligence artificielle appliquée."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>

        {/* Core expertise banner */}
        <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-primary font-mono font-bold text-sm">◆</span>
            <span className="text-sm font-semibold text-foreground">Expertise principale</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring Boot", "Angular", "React", "API REST", "Docker", "CI/CD"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/30 hover:bg-primary/25 transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
