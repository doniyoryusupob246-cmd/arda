import { Home, Sofa, TreePine, Compass, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Compass,
    title: "Tarihi köşk restorasyonları",
    slug: "tarihi-kosk-restorasyonlari",
    description:
      "Konseptten uygulamaya; vizyonunuzu tek elden yöneten butik proje danışmanlığı.",
  },
  {
    icon: Home,
    title: "Ahşap Villa & Bungalov",
    slug: "ahsap-villa-bungalov",
    description:
      "Doğayla iç içe, zamansız mimari çizgilerde anahtar teslim ahşap konutlar tasarlıyoruz.",
  },
  {
    icon: Sofa,
    title: "İç Mekân Tasarımı",
    slug: "ic-mekan-tasarimi",
    description:
      "Sıcak, sade ve karakterli iç mekânlar; özel üretim mobilya ve kaplamalarla bütünleşir.",
  },
  {
    icon: TreePine,
    title: "Bahçe & Teras Yapıları",
    slug: "bahce-teras-yapilari",
    description:
      "Pergola, sauna, çardak ve dış mekân çözümlerinde dayanıklılık ve estetik bir arada.",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
                Hizmetlerimiz
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Ahşapla şekillenen{" "}
              <span className="italic text-primary/80">eksiksiz çözümler.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, slug, description }, idx) => (
            <Link
              key={title}
              href={`/hizmetlerimiz/${slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>

              <div className="relative mt-10 flex items-center gap-2 text-sm font-medium text-primary">
                <span className="opacity-80 transition-opacity group-hover:opacity-100">
                  Keşfet
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
