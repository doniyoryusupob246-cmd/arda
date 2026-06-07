import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Sapanca Orman Villası",
    category: "Lüks Konut",
    image: "/images/project-villa.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Bodrum Sahil Terası",
    category: "Dış Mekân",
    image: "/images/project-terrace.jpg",
    span: "",
  },
  {
    title: "Uludağ Bungalov Evi",
    category: "Tatil Yapısı",
    image: "/images/project-bungalow.jpg",
    span: "",
  },
  {
    title: "Beykoz İç Mekân Projesi",
    category: "İç Tasarım",
    image: "/images/project-interior.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Çamlıca Sedir Sauna",
    category: "Wellness",
    image: "/images/project-sauna.jpg",
    span: "",
  },
  {
    title: "Yeniköy Mutfak Tasarımı",
    category: "Özel Üretim",
    image: "/images/project-kitchen.jpg",
    span: "",
  },
]

export function Projects() {
  return (
    <section id="projeler" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
                Projelerimiz
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Her proje,{" "}
              <span className="italic text-primary/80">bir karakter taşır.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Türkiye&apos;nin dört bir yanında hayata geçirdiğimiz seçilmiş çalışmalardan
            küçük bir derleme.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[280px] grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-[300px] lg:grid-cols-4 lg:auto-rows-[260px]">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#iletisim"
              className={`group relative overflow-hidden rounded-2xl ${project.span}`}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hover accent */}
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/70 transition-all duration-500 group-hover:text-accent">
                  {project.category}
                </span>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <h3 className="font-serif text-xl text-white text-balance md:text-2xl lg:text-[1.6rem] lg:leading-tight">
                    {project.title}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Top-left line accent */}
              <div className="absolute left-6 top-6 h-px w-0 bg-white/60 transition-all duration-700 group-hover:w-12" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
