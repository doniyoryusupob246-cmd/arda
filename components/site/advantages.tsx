import Image from 'next/image';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Sertifikalı Kalite',
    description:
      'FSC sertifikalı, sorumlu kaynaklı ahşaplar ve uluslararası standartlarda uygulamalar.',
  },
  {
    icon: Sparkles,
    title: 'Butik Yaklaşım',
    description: 'Her müşteriye özel atanan tasarım ekibi ve yalnız size ait tasarım çözümleri.',
  },
  {
    icon: Clock,
    title: 'Zamanında Teslim',
    description: 'Şeffaf süreç yönetimi ve ustalarımızın disipliniyle planlanan tarihte teslim.',
  },
];

export function Advantages() {
  return (
    <section id="avantajlar" className="relative overflow-hidden py-24 md:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/project-interior.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c140c]/85 via-[#1c140c]/75 to-[#1c140c]/90" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/50" />
            <span className="text-xs uppercase tracking-[0.4em] text-black/80">Avantajlar</span>
            <span className="h-px w-10 bg-white/50" />
          </div>
          <h2 className="font-serif text-4xl leading-tight text-balance text-black md:text-5xl lg:text-6xl">
            Detayları fark eden <span className="italic text-accent/90">bir ayrıcalık.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/75">
            Arda Luxury Timber Design&apos;ı tercih ettiğinizde, sadece bir yapı değil; kalıcı bir
            değer ediniyorsunuz.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border text-foreground/80 bg-foreground/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 ">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/80 text-foreground/80 backdrop-blur-md">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
