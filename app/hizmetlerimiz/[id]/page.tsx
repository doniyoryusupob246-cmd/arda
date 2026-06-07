import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Button } from "@/components/ui/button"
import {
  Compass,
  Home,
  Sofa,
  TreePine,
  CheckCircle2,
  ArrowRight,
  Wrench,
  ArrowLeft
} from "lucide-react"

// Rich database for the 4 categories
const servicesData: Record<string, {
  title: string
  subtitle: string
  image: string
  icon: any
  description1: string
  description2: string
  description3: string
  features: string[]
  workflow: { step: string; title: string; desc: string }[]
}> = {
  "tarihi-kosk-restorasyonlari": {
    title: "Tarihi Köşk Restorasyonları",
    subtitle: "Tarihi mirası geleceğe taşıyan tescilli eser restorasyonları.",
    image: "/images/project-interior.jpg",
    icon: Compass,
    description1: "Yüzyıllık tarihi ahşap yapıların ruhunu bozmadan, aslına uygun malzemeler ve geleneksel marangozluk teknikleriyle yeniden hayat bulmasını sağlıyoruz. Kültür mirasımızın korunması bilinciyle, her detayı titizlikle inceliyor ve belgeliyoruz.",
    description2: "Restorasyon projelerimiz, Anıtlar Kurulu standartlarına tam uyumlu olarak yürütülür. Zamanın ve hava şartlarının yıprattığı taşıyıcı ahşap karkasları güçlendiriyor, tavan süslemelerini, pencere doğramalarını ve cephe kaplamalarını orijinal dokusunu koruyarak yeniden canlandırıyoruz.",
    description3: "Doğru tekniklerle kurutulmuş ve fırınlanmış dayanıklı meşe, sedir ve çam keresteleri kullanarak yaptığımız restorasyonlar, yapıların hem statik gücünü geri kazanmasını sağlar hem de estetik ömrünü asırlar boyu uzatır.",
    features: [
      "Anıtlar Kurulu Onaylı Restorasyon Süreci",
      "Döneme Özgü Geleneksel El İşçiliği Uygulamaları",
      "Orijinal Ahşap Koruma ve Konservasyon Yöntemleri",
      "Rölöve, Restitüsyon ve Restorasyon Projelendirme",
      "Taşıyıcı Ahşap Karkas Statik Güçlendirme"
    ],
    workflow: [
      { step: "01", title: "Rölöve & Analiz", desc: "Yapının mevcut durumu milimetrik ölçümlerle ve fotoğraflarla kayıt altına alınır." },
      { step: "02", title: "Malzeme Tedariği", desc: "Tarihi dokuya uygun, yüzyıllık sedir ve meşe keresteleri sorumlu kaynaklardan temin edilir." },
      { step: "03", title: "Atölye İşçiliği", desc: "Eski ustaların teknikleriyle oyma, geçme ve birleştirme detayları atölyemizde el emeğiyle üretilir." },
      { step: "04", title: "Yerinde Montaj", desc: "Yapının restorasyonu tamamlanarak geleceğe miras kalacak şekilde teslim edilir." }
    ]
  },
  "ahsap-villa-bungalov": {
    title: "Ahşap Villa & Bungalov",
    subtitle: "Doğayla iç içe, modern ve zamansız ahşap konut tasarımları.",
    image: "/images/project-villa.jpg",
    icon: Home,
    description1: "Sıcaklığı, doğallığı ve huzuru en üst düzeyde hissettiren, modern mimari çizgilerde tasarlanmış anahtar teslim ahşap konutlar inşa ediyoruz. Yaşayan ve nefes alan duvar teknolojileriyle hem sağlıklı hem de çevre dostu yaşam alanları sunuyoruz.",
    description2: "Tüm ahşap villa ve bungalovlarımız, yüksek ısı yalıtımı ve deprem dayanıklılığı ön planda tutularak tasarlanır. Kullandığımız lamine ahşap kirişler ve çelik konstrüksiyon entegrasyonu sayesinde, betonarmeden çok daha güvenli taşıyıcı sistemler kuruyoruz.",
    description3: "Sertifikalı sürdürülebilir ormanlardan elde edilen ahşaplarımızı, modern emprenye tesislerinde işleyerek böceklenme, çürüme ve yangın gibi risklere karşı en üst düzeyde korumalı hale getiriyoruz.",
    features: [
      "Depreme ve Zorlu Hava Şartlarına Üstün Dayanım",
      "Ekolojik ve Nefes Alan Duvar Sistemleri",
      "Kişiye Özel Mimari Planlama ve 3D Modelleme",
      "A Sınıfı Enerji Verimliliği ve Isı Yalıtımı",
      "Anahtar Teslim İnşaat ve Ruhsatlandırma Desteği"
    ],
    workflow: [
      { step: "01", title: "Mimari Tasarım", desc: "Arsanızın topografyasına ve sizin ihtiyaçlarınıza uygun özgün 3D projeler çizilir." },
      { step: "02", title: "Fabrika Üretimi", desc: "Ahşap karkas ve duvar panelleri milimetrik CNC makinelerde ön üretime alınır." },
      { step: "03", title: "Kaba Kurulum", desc: "Arsada hazırlanan zemin üzerine taşıyıcı sistemler ve duvarlar hızla kurulur." },
      { step: "04", title: "İnce İşçilik & Teslim", desc: "İç dekorasyon, yalıtım ve tesisatlar tamamlanarak anahtar teslim edilir." }
    ]
  },
  "ic-mekan-tasarimi": {
    title: "İç Mekân Tasarımı",
    subtitle: "Ahşabın sıcaklığını ve asaletini lüks detaylarla iç mekânlara taşıyoruz.",
    image: "/images/ic-tasarim.jpg",
    icon: Sofa,
    description1: "Özel üretim ahşap tavanlar, lüks duvar panelleri, el yapımı mobilyalar ve kapılarla iç mekânları benzersiz birer sanat eserine dönüştürüyoruz. Her detayda minimalist ve karakter sahibi çözümler üreterek, yaşam alanlarınıza prestij katıyoruz.",
    description2: "Ceviz, meşe, dişbudak ve tik gibi seçkin ağaç türlerini usta marangozlarımızın titiz el emeğiyle şekillendiriyoruz. Modern CNC hassasiyeti ile geleneksel birleştirme detaylarını bir araya getirerek, ömür boyu formunu koruyan mobilyalar üretiyoruz.",
    description3: "Sadece görsel estetiğe değil, akustik konfora da odaklanıyoruz. Ofisler, ev sinemaları ve geniş salonlar için ahşap akustik panel sistemleri geliştirerek ses kalitesini ve mekân deneyimini zirveye taşıyoruz.",
    features: [
      "Özel Üretim Lüks Masif Mobilyalar",
      "Dekoratif Duvar Kaplama ve Akustik Tavanlar",
      "Zengin Ağaç Türü ve Doğal Cila Seçenekleri",
      "Mekâna Özel Ergonomik ve Fonksiyonel Çözümler",
      "Entegre Aydınlatmalı Ahşap Tasarımlar"
    ],
    workflow: [
      { step: "01", title: "Ölçü & Analiz", desc: "Mekânın ışık, akustik ve fiziksel ölçüleri detaylı olarak analiz edilir." },
      { step: "02", title: "Konsept Tasarım", desc: "Kullanılacak ağaç dokuları ve renk paletleri 3D görsellerle sunulur." },
      { step: "03", title: "Hassas Üretim", desc: "Kurutulmuş masif ahşaplar atölyemizde el işçiliğiyle şekillendirilir." },
      { step: "04", title: "Montaj & Teslimat", desc: "Kusursuz finiş ve montaj kalitesiyle yaşam alanınız kullanıma hazır hale getirilir." }
    ]
  },
  "bahce-teras-yapilari": {
    title: "Bahçe & Teras Yapıları",
    subtitle: "Dış mekânları konforlu, estetik ve lüks yaşam alanlarına dönüştürüyoruz.",
    image: "/images/bahce.jpg",
    icon: TreePine,
    description1: "Bahçe ve teraslarınızı yıl boyu keyifle kullanabileceğiniz lüks veranda, pergola, dış mekân saunaları, havuz deck kaplamaları ve kış bahçeleriyle zenginleştiriyoruz. Açık havada geçirilen her anı lüks bir deneyime dönüştürüyoruz.",
    description2: "Dış mekân projelerimizde, yağmura, güneşe ve dona karşı en yüksek mukavemeti gösteren İroko, Teak, Thermowood Çam ve Dişbudak gibi özel fırınlanmış ağaçları tercih ediyoruz. Bağlantı elemanlarında paslanmaz çelik kullanarak yapının ömrünü güvenceye alıyoruz.",
    description3: "Modern gölgelendirme sistemleri, entegre gizli aydınlatmalar ve ısıtıcı entegrasyonu ile terasınızı her mevsim yaşayan aktif bir sosyal alana dönüştürmek bizim uzmanlığımızdır.",
    features: [
      "Dış Mekân Şartlarına Dayanıklı Egzotik Ahşap Seçimi",
      "Lüks Pergola, Deck ve Veranda Uygulamaları",
      "Entegre Dış Mekân Sauna ve Jakuzi Çevreleri",
      "UV Korumalı Özel Cila ve Bakım Sistemleri",
      "Paslanmaz Çelik Gizli Bağlantı Teknolojileri"
    ],
    workflow: [
      { step: "01", title: "Keşif & Peyzaj Uyumu", desc: "Dış mekânın rüzgar, güneş ve çevre peyzaj ilişkisi incelenir." },
      { step: "02", title: "3D Modelleme", desc: "Bahçenizle bütünleşen lüks dış mekân yerleşim planı tasarlanır." },
      { step: "03", title: "Emprenye & Koruma", desc: "Seçilen ahşaplar çürümeye karşı koruyucu işlemlerden geçirilir." },
      { step: "04", title: "Yerinde Uygulama", desc: "Zemin deckleri ve taşıyıcı pergolalar monte edilerek teslim edilir." }
    ]
  }
}

const slugMapping: Record<string, string> = {
  "1": "tarihi-kosk-restorasyonlari",
  "01": "tarihi-kosk-restorasyonlari",
  "2": "ahsap-villa-bungalov",
  "02": "ahsap-villa-bungalov",
  "3": "ic-mekan-tasarimi",
  "03": "ic-mekan-tasarimi",
  "4": "bahce-teras-yapilari",
  "04": "bahce-teras-yapilari",
}

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return [
    { id: "tarihi-kosk-restorasyonlari" },
    { id: "ahsap-villa-bungalov" },
    { id: "ic-mekan-tasarimi" },
    { id: "bahce-teras-yapilari" },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ]
}

export default async function ServicesPage({ params }: Props) {
  const { id } = await params
  const resolvedId = slugMapping[id] || id
  const service = servicesData[resolvedId]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-end pb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1f15]/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl animate-fade-up">

            {/* Back to Home Link */}
            <Link
              href="/#hizmetler"
              className="inline-flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm Hizmetlerimiz
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                Hizmet Detayı
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {service.title}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg max-w-2xl text-pretty">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content & Features Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">

            {/* Left Column: Descriptions */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary/60" />
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                  Uygulama & Ustalık
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Doğadan Gelen Zarafeti <br />
                <span className="italic text-primary/80 font-normal">Mühendislikle Buluşturuyoruz.</span>
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>{service.description1}</p>
                <p>{service.description2}</p>
                <p>{service.description3}</p>
              </div>
            </div>

            {/* Right Column: Features List Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border/70 bg-card/40 p-8 shadow-xl shadow-primary/5 backdrop-blur-sm md:p-10">
                <h3 className="font-serif text-2xl text-foreground mb-6">Öne Çıkan Özellikler</h3>

                <ul className="space-y-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-medium leading-normal text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Small Logo Icon */}
                <div className="mt-10 border-t border-border/75 pt-6 flex items-center gap-3 text-xs tracking-wider text-muted-foreground uppercase font-semibold">
                  <Wrench className="h-4 w-4 text-primary" />
                  Arda Luxury Timber Design
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workflow Section (Step by Step) */}
      <section className="relative bg-secondary/35 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                İş Akışımız
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Proje Uygulama <span className="italic text-primary/80 font-normal">Süreci.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Her adımı titizlikle planlayarak hayalinizdeki tasarımı gerçeğe dönüştürüyoruz.
            </p>
          </div>

          {/* Workflow Steps Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
            {service.workflow.map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Horizontal Connecting line (Only visible on large screen) */}
                {idx < 3 && (
                  <div className="absolute top-8 left-1/2 w-full h-px bg-border/60 hidden lg:block pointer-events-none" />
                )}

                {/* Step Card */}
                <div className="relative z-10 rounded-2xl border border-border/50 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                  <div className="font-mono text-3xl font-light text-primary/40 group-hover:text-primary transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="relative bg-[#1a1209] py-20 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1209] via-[#1a1209]/90 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
              {service.title} için <br />
              <span className="italic text-accent font-normal">hemen teklif alın.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              Projeniz ve hayalinizdeki ahşap tasarım hakkında uzman ekibimizle görüşmek için formu doldurun, sizinle iletişime geçelim.
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