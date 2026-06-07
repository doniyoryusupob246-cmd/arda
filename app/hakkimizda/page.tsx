import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Button } from "@/components/ui/button"
import { 
  Hammer, 
  Leaf, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  History, 
  Calendar, 
  Sparkles, 
  Users 
} from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Doğallık & Sürdürülebilirlik",
    description: "Sadece sertifikalı ve sorumlu kaynaklardan elde edilen birinci sınıf ahşap kullanıyor, çevreye saygılı tasarımlar üretiyoruz.",
  },
  {
    icon: Hammer,
    title: "Geleneksel Ustalık",
    description: "İki nesildir biriken el işçiliği tecrübesini, ahşabın damarlarını hissederek her projeye titizlikle aktarıyoruz.",
  },
  {
    icon: Award,
    title: "Kusursuz Finiş & Lüks",
    description: "Lüks bizim için gösteriş değil; detaylardaki kusursuzluk, dokunulduğunda hissedilen pürüzsüzlüktür.",
  },
  {
    icon: ShieldCheck,
    title: "Ömürlük Dayanıklılık",
    description: "Gelişmiş koruma teknikleri ve doğru ağaç seçimiyle, nesiller boyu yaşayacak miras yapılar inşa ediyoruz.",
  },
]

const timelineEvents = [
  {
    year: "1986",
    title: "Atölyenin Kuruluşu",
    description: "Arda ailesinin büyükleri tarafından küçük bir ahşap işleme atölyesi olarak kuruldu. Klasik marangozluk ve el oymacılığı ile üretime başlandı.",
    icon: Calendar,
  },
  {
    year: "2004",
    title: "Modern Entegrasyon",
    description: "İkinci neslin yönetime katılmasıyla geleneksel teknikler, modern mimari çizgiler ve mühendislik çözümleri ile birleştirildi.",
    icon: Sparkles,
  },
  {
    year: "2018",
    title: "Lüks Ahşap Tasarımına Geçiş",
    description: "Marka 'Arda Luxury Timber Design' adını alarak butik, kişiye özel tasarlanmış lüks ahşap villa ve dış mekân restorasyonuna odaklandı.",
    icon: History,
  },
  {
    year: "Bugün",
    title: "Uluslararası Standartlarda Üretim",
    description: "Türkiye'nin ve dünyanın dört bir yanındaki elit projeler için anahtar teslim ahşap yapılar ve üst düzey iç mekân mobilyaları üretmeye devam ediyor.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden flex items-end pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-wooden-house.jpg"
            alt="Arda Luxury Timber Design Atölyesi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1f15]/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                Biz Kimiz?
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hakkımızda
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg max-w-xl">
              Doğanın sabrını öğrendik, ahşaba o sabırla dokunuyoruz. İki nesildir süren tutku ve uzmanlıkla yaşam alanları inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz ve Ustalarımız (Story Section) */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-24">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary/60" />
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                  Hikayemiz
                </span>
              </div>
              
              <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
                Nesiller Boyu Süren <br />
                <span className="italic text-primary/80 font-normal">Ahşap Tutkusu.</span>
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  <strong>Arda Luxury Timber Design</strong>, ormanın derinliklerindeki en asil ağaçları hayalinizdeki lüks yapılara dönüştürmek amacıyla kurulmuştur. İki nesil önce bir aile atölyesi olarak başlayan bu yolculuk, bugün en son teknolojiyi geleneksel el işçiliği sanatı ile birleştiren lider bir tasarım stüdyosuna dönüşmüştür.
                </p>
                <p>
                  Her bir projemizde meşe, sedir, ceviz ve çam ağaçlarının doğal dokularına sadık kalarak modern mimarinin konforunu entegre ediyoruz. Bizim için ahşap sadece yapısal bir malzeme değil; yaşayan, nefes alan ve içinde hayat bulan zamansız bir sanat eseridir.
                </p>
                <p>
                  Mimariden dekorasyona, konsept tasarımdan anahtar teslim uygulamaya kadar her detayda doğaya ve insana saygıyı ön planda tutuyor, geleceğe bırakılacak bir miras yaratıyoruz.
                </p>
              </div>
            </div>

            {/* Side Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 rounded-3xl border border-primary/10 rotate-1 scale-[1.01] pointer-events-none" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/about-craftsmanship.jpg"
                  alt="Usta Ahşap İşçiliği"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Değerlerimiz (Core Values Grid) */}
      <section className="relative bg-secondary/35 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                Temel Değerlerimiz
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Bizi Biz Yapan <span className="italic text-primary/80 font-normal">İlkelerimiz.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Her çivide, her tasarımda ve kurduğumuz her ilişkide bu değerleri korumayı kendimize söz bildik.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, idx) => (
              <div 
                key={title} 
                className="group relative rounded-2xl border border-border/60 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="absolute top-4 right-6 font-mono text-[10px] text-muted-foreground/45 group-hover:text-primary/45 transition-colors">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarihçe / Zaman Tüneli (Timeline Section) */}
      <section className="relative py-24 md:py-32">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                Tarihçemiz
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Zamanı Aşan <span className="italic text-primary/80 font-normal">Gelişim Çizgisi.</span>
            </h2>
          </div>

          {/* Timeline Vertical Layout */}
          <div className="relative mx-auto max-w-3xl border-l border-border/80 pl-8 space-y-12">
            {timelineEvents.map(({ year, title, description, icon: Icon }) => (
              <div key={year} className="relative group">
                
                {/* Bullet node */}
                <div className="absolute -left-[49px] top-1.5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm">
                  <Icon className="h-4 w-4" />
                </div>

                {/* Event Card */}
                <div className="rounded-2xl border border-border/60 bg-card/20 p-6 md:p-8 hover:bg-card/40 hover:border-primary/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-serif text-3xl font-light text-primary">{year}</span>
                    <h3 className="text-base font-semibold text-foreground tracking-wide">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="relative bg-[#1a1209] py-20 text-white overflow-hidden">
        {/* Background wood trace effect */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/project-villa.jpg"
            alt="Background timber villa"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1209] via-[#1a1209]/90 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
              Sizin için de zamansız bir <br />
              <span className="italic text-accent font-normal">eser inşa edelim.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              Hayalinizdeki ahşap yapı projesini en üst düzey el işçiliği ve mimari kaliteyle hayata geçirmek için teklif alın.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-white px-8 text-primary hover:bg-white/90"
              >
                <Link href="/#iletisim" className="flex items-center gap-2">
                  Bizimle İletişime Geçin
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
