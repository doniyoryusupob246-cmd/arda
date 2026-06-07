'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navItems = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetler', href: '/#hizmetler' },
  { label: 'Avantajlar', href: '/#avantajlar' },
  { label: 'İletişim', href: '/#iletisim' },
];
interface Props {
  classNames?: string
}
export function Navbar({classNames = ''} :Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 py-3'
          : 'bg-transparent py-6',
      )}>
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10", classNames)}>
        <Link
          href="#"
          className={cn(
            'font-serif text-xl tracking-wide transition-colors',
            scrolled ? 'text-foreground' : 'text-white',
          )}>
          {scrolled ? (
            <Image src={'/logo.svg'} alt="Logo" width={80} height={80} priority style={{ width: 'auto', height: 'auto' }} />
          ) : (
            <Image src={'/logo-white.svg'} alt="Logo" width={80} height={80} priority style={{ width: 'auto', height: 'auto' }} />
          )}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm tracking-wide transition-colors hover:opacity-70',
                scrolled ? 'text-foreground/80' : 'text-white/85',
              )}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className={cn(
              'rounded-full px-6 transition-all',
              scrolled
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-white text-primary hover:bg-white/90',
            )}>
            <Link href="/#iletisim">Teklif Alın</Link>
          </Button>
        </div>

        <button
          aria-label="Menüyü aç"
          className={cn('md:hidden', scrolled ? 'text-foreground' : 'text-white')}
          onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-6 mt-3 rounded-2xl border border-border/60 bg-background/95 p-6 backdrop-blur-xl">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80 transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 rounded-full">
                <Link href="/#iletisim" onClick={() => setOpen(false)}>
                  Teklif Alın
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
