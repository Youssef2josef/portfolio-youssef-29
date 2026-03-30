import { SectionHeader } from "./about"

const skillCategories = [
  {
    name: "Front-end",
    color: "cyan",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "Back-end",
    color: "blue",
    skills: [
      "Java",
      "Spring Boot",
      "API REST",
      "Microservices",
      "Hibernate",
      "Spring Security",
      "Node.js",
      "Express",
    ],
  },
  {
    name: "Bases de données",
    color: "teal",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "DevOps & Outils",
    color: "slate",
    skills: ["Docker", "GitLab CI/CD", "Git", "Linux", "Kafka", "JUnit", "Mockito"],
  },
  {
    name: "IA & Data",
    color: "indigo",
    skills: ["Python", "machine learning", "NLP", "Traitement de texte"],
  },
]

// Map category name to specific styling
const categoryStyles: Record<
  string,
  { card: string; badge: string; dot: string; label: string }
> = {
  "Front-end": {
    card: "border-primary/20 hover:border-primary/40",
    badge: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15",
    dot: "bg-primary",
    label: "text-primary",
  },
  "Back-end": {
    card: "border-blue-500/20 hover:border-blue-500/40",
    badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/15",
    dot: "bg-blue-400",
    label: "text-blue-400",
  },
  "Bases de données": {
    card: "border-teal-500/20 hover:border-teal-500/40",
    badge: "bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500/15",
    dot: "bg-teal-400",
    label: "text-teal-400",
  },
  "DevOps & Outils": {
    card: "border-slate-400/20 hover:border-slate-400/40",
    badge: "bg-slate-400/10 text-slate-300 border border-slate-400/20 hover:bg-slate-400/15",
    dot: "bg-slate-400",
    label: "text-slate-300",
  },
  "IA / Data": {
    card: "border-indigo-400/20 hover:border-indigo-400/40",
    badge: "bg-indigo-400/10 text-indigo-300 border border-indigo-400/20 hover:bg-indigo-400/15",
    dot: "bg-indigo-400",
    label: "text-indigo-300",
  },
}

export function Skills() {
  return (
    <section id="competences" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Compétences"
          title="Stack technique"
          description="Un ensemble de technologies modernes couvrant le développement fullstack, le DevOps et l'intelligence artificielle."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured categories span 2 cols on lg for Back-end */}
          {skillCategories.map((cat) => {
            const styles = categoryStyles[cat.name]
            const isBackend = cat.name === "Back-end"
            return (
              <div
                key={cat.name}
                className={`group flex flex-col gap-4 p-6 rounded-xl bg-card border transition-all duration-300 ${styles.card} ${isBackend ? "lg:col-span-2" : ""}`}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5">
                  <span className={`size-2 rounded-full flex-shrink-0 ${styles.dot}`} />
                  <span className={`text-sm font-semibold font-mono ${styles.label}`}>
                    {cat.name}
                  </span>
                  <span className="ml-auto text-xs font-mono text-muted-foreground">
                    {cat.skills.length} techs
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${styles.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Core expertise banner */}
        <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary">◆</span>
            <span className="text-sm font-semibold text-foreground">Expertise principale :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring Boot", "Angular", "React", "API REST", "Docker", "CI/CD"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/30"
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
