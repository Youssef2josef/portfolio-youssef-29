import { Github, ExternalLink, Video, Grid3X3, BrainCircuit, MessageSquare, Package, Lock, Truck } from "lucide-react"
import { SectionHeader } from "./about"

type Project = {
  title: string
  description: string
  longDescription: string
  stack: string[]
  codeUrl?: string
  demoUrl?: string
  extraCode?: { label: string; url: string }
  icon: React.ElementType
  featured?: boolean
  tag?: string
}

const projects: Project[] = [
  {
    title: "Application gestion livreur et merchant",
    description:
      "Plateforme web et mobile de gestion de livraisons locales avec suivi en temps réel et dispatch intelligent.",
    longDescription:
      "Conception d’un écosystème logistique complet combinant dashboard web pour commerçants, application mobile pour livreurs et API centrale de dispatch. Le système automatise la transmission des commandes, le suivi GPS en temps réel et la sécurisation des livraisons via un double code de validation.",
    stack: [
      "Next.js",
      "TypeScript",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Socket.io",
      "WooCommerce",
      "Tailwind CSS",
      "Prisma"
    ],
    icon: Truck,
    featured: true,
    tag: "Fullstack"
  },
  {
    title: "Application Web Video Chat",
    description:
      "Application web de visioconférence multi-utilisateurs, permettant la communication par vidéo et la messagerie en temps réel.",
    longDescription:
      "Développement d'une application web de visioconférence permettant à plusieurs utilisateurs de communiquer par vidéo et d'échanger des messages pendant une réunion, dans un esprit proche de Zoom.",
    stack: ["Java", "WebRTC", "Messagerie", "WebSockets", "Web"],
    codeUrl: "https://github.com/Youssef2josef/VideoChat",
    icon: Video,
    featured: true,
    tag: "Backend",
  },
  {
    title: "Système de Gestion de Stock & Inventaire",
    description:
      "Architecture microservices avec Spring Boot, Docker et communication asynchrone via Kafka, avec monitoring et tests complets.",
    longDescription:
      "Conception d'une application en architecture microservices avec Spring Boot, Docker et communication asynchrone via Kafka, avec mise en place du monitoring et d'une couverture de tests.",
    stack: ["Spring Boot", "Microservices", "Docker", "Kafka", "JUnit", "Mockito", "Spring Security"],
    icon: Package,
    featured: true,
    tag: "Back-end",
  },
  {
    title: "Analyse de CV en NLP",
    description:
      "Projet IA d'analyse automatique de CV : entraînement d'un modèle par arbre de décision et système d'exploitation du modèle.",
    longDescription:
      "Projet d'initiation à l'intelligence artificielle et au NLP, centré sur l'analyse automatique de CV. Comprend une partie entraînement de modèle (arbre de décision) et une partie système.",
    stack: ["Python", "NLP", "Machine Learning", "Arbre de décision", "IA"],
    codeUrl: "https://github.com/Youssef2josef/Resume_Model",
    extraCode: { label: "Système", url: "https://github.com/Youssef2josef/Resume_System" },
    icon: BrainCircuit,
    featured: true,
    tag: "IA / NLP",
  },
  {
    title: "Jeu Web Tic-Tac-Toe 4x4",
    description:
      "Application web interactive de jeu en grille 4x4 avec React front-end et backend Node.js / Express. Déployée en production.",
    longDescription:
      "Développement d'une application web interactive de jeu en grille 4x4 avec interface réactive côté front et backend Node.js / Express. Projet déployé en ligne.",
    stack: ["React", "Node.js", "Express", "JavaScript"],
    codeUrl: "https://github.com/Youssef2josef/Reac_App_Connect_4",
    demoUrl: "https://precious-centaur-a4c695.netlify.app/",
    icon: Grid3X3,
    tag: "Fullstack",
  },
  {
    title: "Chat App Java",
    description:
      "Application de messagerie instantanée Java type mini Messenger, permettant l'échange de messages entre utilisateurs en temps réel.",
    longDescription:
      "Développement d'une application de messagerie instantanée en Java, de type mini Messenger, permettant l'échange de messages entre utilisateurs.",
    stack: ["Java", "Client-Serveur", "Messagerie", "Réseau"],
    codeUrl: "https://github.com/Youssef2josef/ChatApp",
    icon: MessageSquare,
    tag: "Back-end",
  },
]

const tagColors: Record<string, string> = {
  Fullstack: "text-primary bg-primary/10 border-primary/20",
  "Back-end": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "IA / NLP": "text-indigo-300 bg-indigo-400/10 border-indigo-400/20",
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projets" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Projets"
          title="Réalisations techniques"
          description="Des projets concrets couvrant le développement fullstack, les microservices, l'IA et le temps réel."
        />

        {/* Featured projects */}
        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-5 grid sm:grid-cols-2 gap-5">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, codeUrl, demoUrl, extraCode, icon: Icon, tag } = project
  const noCode = !codeUrl

  return (
    <article className="group flex flex-col gap-4 p-6 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0 group-hover:bg-primary/15 transition-colors">
          <Icon size={18} className="text-primary" />
        </div>
        {tag && (
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium border ${tagColors[tag] ?? "text-muted-foreground bg-secondary border-border"}`}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-xs font-mono text-muted-foreground bg-secondary/60 border border-border/40"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/40">
        {noCode ? (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
            <Lock size={11} />
            <span>Code privé</span>
          </div>
        ) : (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground bg-secondary/60 border border-border/40 hover:text-foreground hover:border-border transition-all"
          >
            <Github size={12} />
            Voir le code
          </a>
        )}
        {extraCode && (
          <a
            href={extraCode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground bg-secondary/60 border border-border/40 hover:text-foreground hover:border-border transition-all"
          >
            <Github size={12} />
            {extraCode.label}
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-primary bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-all ml-auto"
          >
            <ExternalLink size={12} />
            Voir la démo
          </a>
        )}
      </div>
    </article>
  )
}
