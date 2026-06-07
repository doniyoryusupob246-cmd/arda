"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (212) 555 24 18",
    href: "tel:+902125552418",
  },
  {
    icon: Mail,
    label: "E-Posta",
    value: "info@ardatimber.com",
    href: "mailto:info@ardatimber.com",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Demo submit — would post to a server action / API in production
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="iletisim" className="relative bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Heading + info */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
                İletişim
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Hayalinizdeki{" "}
              <span className="italic text-primary/80">mekânı birlikte tasarlayalım.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Projelerinizi, beklentilerinizi ve hayallerinizi dinlemeyi seviyoruz.
              Formu doldurun, en kısa sürede sizinle iletişime geçelim.
            </p>

            <div className="mt-10 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-border hover:bg-background"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-1 text-base text-foreground">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/70 bg-background p-8 shadow-xl shadow-primary/5 md:p-12">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-foreground">
                    Mesajınız bize ulaştı.
                  </h3>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Değerli ilginiz için teşekkür ederiz. Tasarım ekibimiz en kısa
                    sürede sizinle iletişime geçecek.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs uppercase tracking-widest">
                        İsim
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Adınız ve soyadınız"
                        className="h-12 rounded-xl border-border bg-background/60 px-4 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs uppercase tracking-widest">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+90 (___) ___ __ __"
                        className="h-12 rounded-xl border-border bg-background/60 px-4 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest">
                      E-Posta
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ornek@mail.com"
                      className="h-12 rounded-xl border-border bg-background/60 px-4 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-widest">
                      Mesajınız
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Projeniz, beklentileriniz ve hayalinizdeki tasarım hakkında kısaca bilgi verin..."
                      className="rounded-xl border-border bg-background/60 px-4 py-3 text-base"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                      Bilgileriniz yalnızca sizinle iletişime geçmek amacıyla kullanılır
                      ve üçüncü taraflarla paylaşılmaz.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="group h-14 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                    >
                      <span>{loading ? "Gönderiliyor..." : "Gönder"}</span>
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
