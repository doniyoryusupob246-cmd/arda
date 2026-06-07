import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wooden-house.jpg"
          alt="Doğa içinde modern ahşap ev"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1f15]/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-28 pt-40 lg:px-10 lg:pb-36">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-white/60" />
            <span className="text-xs uppercase tracking-[0.4em] text-white/80">
              Arda Luxury Timber Design
            </span>
          </div>

          <h1 className="font-serif text-4xl leading-[1.05] text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ahşap, sadece bir malzeme değil;{" "}
            <span className="italic text-white/90">yaşamın en doğal halidir.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 text-pretty md:text-lg">
            Doğanın zarafetini, ustaların el emeğiyle birleştiriyor; her detayı özenle
            işlenmiş, zamana meydan okuyan lüks yaşam alanları tasarlıyoruz.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-full bg-white px-8 text-primary hover:bg-white/90"
            >
              <Link href="#iletisim" className="flex items-center gap-2">
                Bizimle İletişime Geçin
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-white/40 bg-white/5 px-8 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/70">
          Aşağı Kaydırın
        </span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <div className="h-2 w-1 animate-scroll-down rounded-full bg-white/80" />
        </div>
        <ChevronDown className="h-4 w-4 text-white/60" aria-hidden="true" />
      </div>
    </section>
  )
}
