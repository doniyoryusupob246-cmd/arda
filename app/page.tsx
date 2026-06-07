import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Projects } from "@/components/site/projects"
import { Advantages } from "@/components/site/advantages"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Projects />*/}
      <Advantages />
      <Contact />
      <Footer />
    </main>
  )
}
