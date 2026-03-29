import { Calendar, MapPin, GraduationCap, Briefcase, Code2, Brain } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    label: "Formation",
    value: "Ensimag - Grenoble INP",
    sub: "Ingénierie des Systèmes d'Information",
  },
  {
    icon: Calendar,
    label: "Disponibilité",
    value: "25 mai - 13 sept. 2026",
    sub: "Stage fullstack web · 4 mois",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Grenoble, France",
    sub: "Mobilité possible",
  },
  {
    icon: Briefcase,
    label: "Expérience",
    value: "3 stages réalisés",
    sub: "Java · Angular · Spring Boot",
  },
]

const focuses = [
  { icon: Code2, label: "Développement web & API REST" },
  { icon: Briefcase, label: "Produits SaaS & microservices" },
  { icon: Brain, label: "Intelligence artificielle & NLP" },
]

export function About() {
  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="À propos"
          title="Qui suis-je ?"
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Text block */}
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Je suis étudiant ingénieur à l&apos;{" "}
              <span className="text-foreground font-medium">
                Ensimag (Grenoble INP - UGA)
              </span>{" "}
              en Ingénierie des Systèmes d&apos;Information. Je recherche un{" "}
              <span className="text-primary font-medium">
                stage fullstack web avec la possibilité de pipelines CI/CD de 4 mois
              </span>{" "}
              à partir du{" "}
              <span className="text-foreground font-medium">25 mai 2026</span>{" "}
              jusqu&apos;au 13 septembre 2026.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Je développe principalement avec{" "}
              <span className="text-primary font-medium">Spring Boot</span> et{" "}
              <span className="text-primary font-medium">Angular</span>, et j&apos;ai
              également pratiqué{" "}
              <span className="text-primary font-medium">React</span>, avec une
              bonne base en{" "}
              <span className="text-foreground font-medium">
                API REST, microservices, Docker, tests et CI/CD
              </span>
              .
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Je souhaite contribuer à la conception et au développement de
              produits web et SaaS, à la création d&apos;interfaces et de
              fonctionnalités métier, ainsi qu&apos;à l&apos;amélioration de la qualité
              logicielle, des performances et de l&apos;expérience utilisateur.
            </p>

            {/* Focus areas */}
            <div className="flex flex-col gap-2.5 pt-2">
              {focuses.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-7 rounded-md bg-primary/10 border border-primary/20 flex-shrink-0">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 glow-cyan hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {label}
                  </span>
                  <div className="size-8 flex items-center justify-center rounded-md bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                    <Icon size={14} className="text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-primary" />
        <span className="text-xs font-mono text-primary uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
