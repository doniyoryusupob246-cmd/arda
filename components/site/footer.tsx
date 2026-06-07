import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

const navColumns = [
  {
    title: "Şirket",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Kariyer", href: "#" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { label: "Ahşap Villa", href: "/#hizmetler" },
      { label: "İç Mekân", href: "/#hizmetler" },
      { label: "Bahçe & Teras", href: "/#hizmetler" },
    ],
  },
  {
    title: "Keşfet",
    links: [
      { label: "Avantajlar", href: "/#avantajlar" },
      { label: "İletişim", href: "/#iletisim" },
    ],
  },
]

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/arda_luxury?igsh=YTN6cHpjdHlocHFv" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/arda-luxury/" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1209] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="#" className="font-serif text-2xl tracking-wide text-white">
              ARDA LUXURY
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Doğanın zarafetini, ustaların el emeğiyle birleştiren lüks ahşap tasarım
              stüdyosu. 40 yılı aşkın deneyimimizle her projeye karakter katıyoruz.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-accent hover:bg-accent hover:text-[#1a1209]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Arda Luxury Timber Design. Tüm hakları
            saklıdır.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            <Link href="#" className="hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="hover:text-white">
              Kullanım Koşulları
            </Link>
            <Link href="#" className="hover:text-white">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
