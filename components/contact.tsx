import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from "lucide-react"
import { SectionHeader } from "./about"

const contactInfo = [
  {
    icon: Mail,
    label: "Email principal",
    value: "youssef.jouini@grenoble-inp.org",
    href: "mailto:youssef.jouini@grenoble-inp.org",
  },
  {
    icon: Mail,
    label: "Email secondaire",
    value: "jouini9youssef@gmail.com",
    href: "mailto:jouini9youssef@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 7 63 19 38 35",
    href: "tel:+33763193835",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Grenoble, France",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "Youssef2josef",
    href: "https://github.com/Youssef2josef",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "youssef-jouini93",
    href: "https://www.linkedin.com/in/youssef-jouini93/",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Contact"
          title="Travaillons ensemble"
          description="Je suis disponible pour un stage fullstack web de 4 mois à partir du 25 mai 2026. N'hésitez pas à me contacter."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: message & CTAs */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-card border border-border/60 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="size-9 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0 mt-0.5">
                  <Send size={15} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Disponible pour stage
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    25 mai 2026 – 13 septembre 2026
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actuellement étudiant à l&apos;Ensimag, je recherche un stage de fin
                d&apos;études en développement fullstack web. Je suis particulièrement
                intéressé par les projets impliquant{" "}
                <span className="text-primary font-medium">
                  Java , Spring Boot , Angular , React
                </span>{" "}, les technologies <span className="text-primary font-medium">d'IA </span>
                ou les architectures{" "}
                <span className="text-primary font-medium">
                  microservices & SaaS
                </span>
                .
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="mailto:youssef.jouini@grenoble-inp.org"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                >
                  <Mail size={15} />
                  Envoyer un email
                </a>
                <a
                  href="https://tt4ppr1zm0ieshup.public.blob.vercel-storage.com/CV-Youssef-Jouini-Fullstack-Web.pdf"
                  download="CV-Youssef-Jouini-Fullstack-Web.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold border border-border/60 hover:bg-secondary/80 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download size={15} />
                  Télécharger mon CV
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="size-9 flex items-center justify-center rounded-lg bg-secondary border border-border/60 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                    <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground truncate max-w-24">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider font-mono">
              Coordonnées
            </h3>
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/25 transition-all duration-200"
                >
                  <div className="size-9 flex items-center justify-center rounded-lg bg-primary/8 border border-primary/15 flex-shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-xs text-muted-foreground">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability chip */}
            <div className="flex items-center gap-3 mt-2 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-primary" />
              </span>
              <p className="text-sm text-foreground/80">
                <span className="text-primary font-semibold">Disponible</span> pour
                entretien et prise de contact immédiate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono text-primary font-semibold">YJ_</span>
          <span className="text-sm text-muted-foreground">
            Youssef Jouini - Développeur Fullstack Web
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Youssef2josef"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-jouini93/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <span className="text-xs text-muted-foreground/50">
            © 2026 Youssef Jouini
          </span>
        </div>
      </div>
    </footer>
  )
}
