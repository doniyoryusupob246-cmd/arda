import Image from "next/image"
import { Award, Leaf, Hammer } from "lucide-react"

const stats = [
  { value: "40+", label: "Yıllık Deneyim" },
  { value: "200+", label: "Tamamlanan Proje" },
  { value: "%100", label: "Doğal Malzeme" },
]

const highlights = [
  {
    icon: Hammer,
    title: "Usta İşçilik",
    description:
      "Her bir parça, kuşaklardan süzülen el emeğiyle özenle şekillendirilir.",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik",
    description:
      "Sertifikalı, sorumlu kaynaklı ahşapla doğaya saygılı tasarımlar üretiyoruz.",
  },
  {
    icon: Award,
    title: "Lüks Detay",
    description:
      "Mimari estetik ve dayanıklılığı, kusursuz finiş kalitesinde buluşturuyoruz.",
  },
]

export function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative background light accents */}
      <div className="absolute top-1/4 -left-64 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-24">
          
          {/* Left: Text & Grid Info */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                Hakkımızda
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl md:text-[3.5rem] lg:leading-[1.15]">
              Ahşaba dokunan{" "}
              <span className="italic text-primary/80 font-normal">ellerin hikâyesi.</span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                <strong className="text-foreground font-medium">Arda Luxury Timber Design</strong>, 
                iki nesli aşan bir ustalık geleneğinin çağdaş yorumudur. Her projemizde; 
                doğanın saf zarafetini, modern mimarinin sade çizgileriyle harmanlıyor, 
                yaşam alanlarınıza karakter ve sıcaklık taşıyoruz.
              </p>
              <p>
                Seçilmiş meşe, ceviz ve sedir ağaçlarından sabırla işlenen yapılarımız; 
                yalnızca bir mekân değil, içinde yaşandıkça güzelleşen ve nesilden nesle aktarılan bir 
                miras yaratır. Lüks, bizim için gösterişten uzak; dokunulduğunda hissedilen o benzersiz 
                özenin adıdır.
              </p>
            </div>

            {/* Stats section with premium touch */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-b border-border/80 py-8">
              {stats.map((stat) => (
                <div key={stat.label} className="group text-center sm:text-left">
                  <div className="font-serif text-3xl font-light text-foreground transition-all duration-300 group-hover:text-primary md:text-4xl lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80 md:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Pillars / Highlights */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div 
                  key={title} 
                  className="group relative rounded-2xl border border-border/60 bg-card/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-card/80 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground tracking-wide">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Immersive Image with Floating Accents */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Image Frame Accent */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/10 -rotate-2 scale-[1.02] pointer-events-none" />
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 hover:scale-[1.01]">
                <Image
                  src="/images/about-craftsmanship.jpg"
                  alt="Ahşap ustalığı el işçiliği"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                  priority
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f15]/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating accent card (Glassmorphic) */}
              <div className="absolute -bottom-8 -left-6 hidden max-w-[280px] rounded-2xl border border-border/60 bg-background/90 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:block">
                <div className="font-serif text-3xl leading-none text-primary/60">“</div>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80 italic font-medium">
                  Doğanın sabrını öğrendik, ahşaba o sabırla dokunuyoruz.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-px w-6 bg-primary/40" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Kurucu Atölye
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

