import { MapPin, GraduationCap, Briefcase, Code2, Brain, Layers } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    label: "Formation",
    value: "Ensimag – Grenoble INP",
    sub: "Ingénierie des Systèmes d'Information",
  },
  {
    icon: Briefcase,
    label: "Expérience",
    value: "3 stages réalisés",
    sub: "Java · Angular · Spring Boot",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Grenoble, France",
    sub: "Mobilité nationale et internationale",
  },
  {
    icon: Layers,
    label: "Profil",
    value: "Fullstack & Logiciel",
    sub: "Web · SaaS · Microservices · IA",
  },
]

const focuses = [
  { icon: Code2, label: "Développement web fullstack & API REST" },
  { icon: Briefcase, label: "Produits SaaS, microservices & architecture cloud" },
  { icon: Brain, label: "Intelligence artificielle appliquée & NLP" },
]

export function About() {
  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="À propos" title="Qui suis-je ?" />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Text block */}
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Étudiant ingénieur à l&apos;
              <span className="text-foreground font-medium">
                Ensimag (Grenoble INP – UGA)
              </span>{" "}
              en Ingénierie des Systèmes d&apos;Information, je me positionne comme
              un développeur{" "}
              <span className="text-primary font-medium">fullstack web et logiciel</span>,
              capable de prendre en charge aussi bien la conception front-end que la
              structuration back-end d&apos;une application.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Mon stack principal repose sur{" "}
              <span className="text-primary font-medium">Spring Boot</span> et{" "}
              <span className="text-primary font-medium">Angular</span>, complété par{" "}
              <span className="text-primary font-medium">React</span>, avec une
              maîtrise solide des{" "}
              <span className="text-foreground font-medium">
                API REST, microservices, Docker, tests unitaires et pipelines CI/CD
              </span>
              .
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Je cherche à contribuer à la conception de produits web et SaaS
              sérieux — en apportant rigueur technique, capacité d&apos;adaptation
              rapide et sens des responsabilités sur des sujets concrets.
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
