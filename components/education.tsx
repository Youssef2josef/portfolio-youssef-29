import { GraduationCap, MapPin } from "lucide-react"
import { SectionHeader } from "./about"

const formations = [
  {
    school: "Ensimag, Grenoble INP - UGA",
    period: "2025 - Présent",
    diploma: "Diplôme d'ingénieur",
    specialty: "Ingénierie des Systèmes d'Information",
    location: "Grenoble, France",
    current: true,
    description:
      "Grande école d'ingénieurs reconnue, spécialisation en systèmes d'information, développement logiciel, bases de données et architecture des systèmes.",
  },
  {
    school: "Institut Supérieur d'Informatique (ISI)",
    period: "2024 - 2025",
    diploma: "Diplôme d'ingénieur",
    specialty: "Génie Logiciel",
    location: "Ariana, Tunisie",
    current: false,
    description:
      "Formation approfondie en génie logiciel, conception orientée objet, architecture logicielle et développement d'applications.",
  },
  {
    school: "Institut Supérieur d'Informatique (ISI)",
    period: "2021 - 2024",
    diploma: "Licence",
    specialty: "Sciences de l'informatique",
    location: "Ariana, Tunisie",
    current: false,
    description:
      "Fondamentaux en algorithmique, programmation, bases de données, conception orientée objet, réseaux et systèmes d'exploitation.",
  },
  {
    school: "Lycée Pilot Bourguiba Tunis (LPBT)",
    period: "2017 - 2021",
    diploma: "Baccalauréat",
    specialty: "Mathématiques",
    location: "Tunis, Tunisie",
    current: false,
    description:
      "Fondamentaux en algorithmique, programmation, mathématiques.",
  },
]

export function Education() {
  return (
    <section id="formation" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Formation"
          title="Parcours académique"
          description="Un double cursus franco-tunisien alliant rigueur académique et pratique du développement logiciel."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {formations.map((f, i) => (
            <article
              key={i}
              className={`relative group flex flex-col gap-4 p-6 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 ${f.current
                ? "bg-card border-primary/30 hover:border-primary/50"
                : "bg-card border-border/60 hover:border-border"
                }`}
            >
              {/* Current badge */}
              {f.current && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30">
                  <span className="relative flex size-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full size-1.5 bg-primary" />
                  </span>
                  <span className="text-[10px] font-mono text-primary">En cours</span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`size-10 flex items-center justify-center rounded-lg border flex-shrink-0 transition-colors ${f.current
                  ? "bg-primary/10 border-primary/25 group-hover:bg-primary/15"
                  : "bg-secondary border-border/60 group-hover:border-primary/20"
                  }`}
              >
                <GraduationCap
                  size={18}
                  className={f.current ? "text-primary" : "text-muted-foreground"}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-mono text-muted-foreground">{f.period}</p>
                <h3 className={`text-sm font-bold leading-snug ${f.current ? "text-foreground" : "text-foreground/90"}`}>
                  {f.school}
                </h3>
                <p className={`text-sm font-semibold ${f.current ? "text-primary" : "text-muted-foreground"}`}>
                  {f.diploma}
                </p>
                <p className="text-xs text-muted-foreground">{f.specialty}</p>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {f.description}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto pt-2 border-t border-border/40">
                <MapPin size={11} />
                {f.location}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
