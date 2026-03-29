import { MapPin, Calendar } from "lucide-react"
import { SectionHeader } from "./about"

const experiences = [
  {
    company: "IT-SERV",
    period: "02/2024 – 06/2024",
    role: "Développeur Full-Stack (Java / Angular)",
    type: "Stage",
    location: "Ariana, Tunisie",
    description:
      "Développement d'une application web SaaS dans une architecture microservices moderne.",
    missions: [
      "Développement d'une application web SaaS avec Spring Boot dans une architecture microservices exposant des API REST sécurisées",
      "Développement d'interfaces dynamiques sous Angular",
      "Amélioration des performances front-end pour renforcer la fluidité et l'expérience utilisateur",
      "Développement de calendriers interactifs et dynamiques pour la gestion des plannings et des activités quotidiennes",
    ],
    stack: ["Java", "Spring Boot", "Angular", "Microservices", "API REST"],
  },
  {
    company: "LA GRIFFE Internationale",
    period: "07/2023 – 09/2023",
    role: "Développeur Logiciel",
    type: "Stage",
    location: "Ben Arous, Tunisie",
    description:
      "Conception et développement d'un CRM web avec automatisation de workflows métiers.",
    missions: [
      "Conception et développement d'un CRM web avec gestion des données et automatisation de workflows métiers",
      "Intégration d'API métier",
      "Amélioration de l'ergonomie de l'interface utilisateur",
    ],
    stack: ["CRM", "Web", "API"],
  },
  {
    company: "JustSmart",
    period: "07/2022 – 08/2022",
    role: "Développeur Web",
    type: "Stage",
    location: "Ariana, Tunisie",
    description:
      "Création d'interfaces utilisateur et optimisation de requêtes SQL pour la gestion financière.",
    missions: [
      "Création d'interfaces utilisateur",
      "Optimisation de requêtes SQL complexes pour la gestion financière",
      "Analyse des besoins utilisateurs pour la mise en place de modules de validation de données",
    ],
    stack: ["Web", "SQL", "UI/UX"],
  },
]

export function Experience() {
  return (
    <section id="experiences" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Expériences"
          title="Parcours professionnel"
          description="Trois stages enrichissants dans des environnements techniques variés, du développement fullstack web à la gestion de données."
        />

        <div className="mt-12 relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-[11.5rem] top-0 bottom-0 w-px bg-border/60" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <article
                key={i}
                className="group relative md:flex gap-8"
              >
                {/* Left: period */}
                <div className="hidden md:flex flex-col items-end gap-1 w-44 flex-shrink-0 pt-1">
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin size={10} />
                    {exp.location}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 relative">
                  <div className="size-4 rounded-full bg-primary/20 border-2 border-primary flex-shrink-0 mt-1 group-hover:bg-primary/40 transition-colors z-10" />
                </div>

                {/* Right: content card */}
                <div className="flex-1 flex flex-col gap-4 p-6 rounded-xl bg-card border border-border/60 group-hover:border-primary/25 transition-all duration-300">
                  {/* Mobile period */}
                  <div className="md:hidden flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={11} className="text-primary" />
                    <span className="font-mono text-primary">{exp.period}</span>
                    <span>·</span>
                    <MapPin size={11} />
                    {exp.location}
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-primary/80 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Missions */}
                  <ul className="flex flex-col gap-2" role="list">
                    {exp.missions.map((m, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/40">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs font-mono text-muted-foreground bg-secondary/60 border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
