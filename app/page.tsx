import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact, Footer } from "@/components/contact"

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
