"use client"

import { useEffect, useRef, useState } from "react"
import {
  Globe,
  Server,
  Layout,
  BarChart2,
  GitMerge,
  BrainCircuit,
} from "lucide-react"
import { SectionHeader } from "./about"

const services = [
  {
    icon: Globe,
    title: "Développement d'applications web fullstack",
    description:
      "Conception et implémentation de fonctionnalités complètes — interfaces front-end modernes, logique métier back-end, intégration API et communication entre couches.",
    tags: ["Angular", "React", "Spring Boot", "API REST"],
    accent: "primary",
    borderClass: "border-primary/20 hover:border-primary/50",
    iconClass: "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary/20",
    tagClass: "bg-primary/10 text-primary border-primary/20",
    glowClass: "group-hover:shadow-[0_0_30px_oklch(0.72_0.15_195_/_0.12)]",
  },
  {
    icon: Server,
    title: "Développement backend & API REST",
    description:
      "Création de services backend structurés, d'endpoints REST documentés, avec gestion des erreurs, sécurisation des accès et respect des bonnes pratiques d'architecture.",
    tags: ["Java", "Spring Security", "Hibernate", "Node.js"],
    accent: "blue",
    borderClass: "border-blue-500/20 hover:border-blue-500/50",
    iconClass: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20",
    tagClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glowClass: "group-hover:shadow-[0_0_30px_oklch(0.60_0.20_240_/_0.12)]",
  },
  {
    icon: Layout,
    title: "Interfaces utilisateur modernes",
    description:
      "Développement d'interfaces claires, responsives et accessibles. Amélioration de l'expérience utilisateur, composants réutilisables et intégration fluide avec le back-end.",
    tags: ["Angular", "React", "TypeScript", "CSS3"],
    accent: "teal",
    borderClass: "border-teal-500/20 hover:border-teal-500/50",
    iconClass: "bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20",
    tagClass: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    glowClass: "group-hover:shadow-[0_0_30px_oklch(0.70_0.15_185_/_0.12)]",
  },
  {
    icon: BarChart2,
    title: "Applications SaaS & outils métier",
    description:
      "Contribution à des produits web orientés métier — tableaux de bord, gestion de données, automatisation de flux et interfaces d'administration robustes.",
    tags: ["SaaS", "Dashboard", "PostgreSQL", "Docker"],
    accent: "indigo",
    borderClass: "border-indigo-400/20 hover:border-indigo-400/50",
    iconClass: "bg-indigo-400/10 border-indigo-400/20 text-indigo-300 group-hover:bg-indigo-400/20",
    tagClass: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
    glowClass: "group-hover:shadow-[0_0_30px_oklch(0.65_0.18_280_/_0.12)]",
  },
  {
    icon: GitMerge,
    title: "Microservices, qualité logicielle & CI/CD",
    description:
      "Contribution à des architectures distribuées — tests unitaires et d'intégration, conteneurisation Docker, pipelines GitLab CI/CD et respect des standards de qualité.",
    tags: ["Docker", "GitLab CI/CD", "JUnit", "Kafka"],
    accent: "slate",
    borderClass: "border-slate-400/20 hover:border-slate-400/50",
    iconClass: "bg-slate-400/10 border-slate-400/20 text-slate-300 group-hover:bg-slate-400/20",
    tagClass: "bg-slate-400/10 text-slate-300 border-slate-400/20",
    glowClass: "group-hover:shadow-[0_0_30px_oklch(0.60_0.01_240_/_0.12)]",
  },
  {
    icon: BrainCircuit,
    title: "IA appliquée & NLP",
    description:
      "Participation à des fonctionnalités d'analyse de données textuelles, d'extraction d'information et d'intégration de logique intelligente dans un produit existant.",
    tags: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
    accent: "violet",
    borderClass: "border-violet-400/20 hover:border-violet-400/50",
    iconClass: "bg-violet-400/10 border-violet-400/20 text-violet-300 group-hover:bg-violet-400/20",
    tagClass: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    glowClass: "group-hover:shadow-[0_0_30px_oklch(0.65_0.20_300_/_0.12)]",
  },
]

function useInView(ref: React.RefObject<Element | null>, threshold = 0.1) {
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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col gap-5 p-6 rounded-2xl bg-card border transition-all duration-500 ${service.borderClass} ${service.glowClass}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 70}ms, transform 0.55s ease ${index * 70}ms, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, currentColor 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Icon */}
      <div
        className={`size-11 flex items-center justify-center rounded-xl border transition-all duration-300 flex-shrink-0 ${service.iconClass}`}
      >
        <Icon size={20} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold text-foreground leading-snug text-balance">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 rounded-md text-xs font-medium border transition-colors ${service.tagClass}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Services() {
  const headRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headRef, 0.2)

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headRef}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <SectionHeader
            label="Ce que je peux apporter"
            title="Domaines d'intervention"
            description="Des contributions concrètes sur des sujets techniques variés — du développement d'applications web fullstack à l'intégration d'intelligence artificielle."
          />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Subtle bottom note */}
        <p
          className="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          Ces domaines reflètent mes compétences actuelles et ma capacité à contribuer
          de manière opérationnelle sur des projets industriels, en stage ou en alternance.
        </p>
      </div>
    </section>
  )
}
