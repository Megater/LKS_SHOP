'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { teko } from '@/app/fonts';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Nie wyświetlaj stopki w panelu administracyjnym Sanity Studio
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <footer className="bg-[#050608] text-neutral-400 py-12 border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Kolumna 1: O klubie */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11">
                <Image
                  src="/herb.png"
                  alt="Herb LKS Pniewy"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={`${teko.className} text-3xl font-black uppercase tracking-wider leading-none`}>
                <span className="text-green-400">LKS </span>
                <span className="text-red-500">PNIEWY</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              Gminny klub piłkarski zrzeszający 140 młodych zawodników i zawodniczek. Rozwijamy pasję, kształtujemy charaktery i reprezentujemy Gminę Pniewy.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wider text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>Zielono-Czerwoni • Załęże Duże</span>
            </div>
          </div>

          {/* Kolumna 2: Szybkie linki */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Nawigacja
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#druzyny" className="hover:text-white transition-colors">
                  Roczniki i Trenerzy
                </Link>
              </li>
              <li>
                <Link href="/#rozwoj" className="hover:text-white transition-colors">
                  Rozwój Klubu (2022–2027)
                </Link>
              </li>
              <li>
                <Link href="/#stadion" className="hover:text-white transition-colors">
                  Stadion w Załężu Dużym
                </Link>
              </li>
              <li>
                <Link href="/#kadra" className="hover:text-white transition-colors">
                  Władze i Kadra
                </Link>
              </li>
              <li>
                <Link href="/#historia" className="hover:text-white transition-colors">
                  Historia Klubu
                </Link>
              </li>
              <li>
                <Link href="/#cele" className="hover:text-white transition-colors">
                  Cele na przyszłość
                </Link>
              </li>
              <li>
                <Link href="/sklep" className="text-red-400 hover:text-red-300 transition-colors font-bold">
                  Sklep Klubowy →
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Baza sportowa */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Lokalizacja & Baza
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              <strong className="text-white">Baza Główna:</strong> Załęże Duże, Gmina Pniewy
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Główne boisko z naturalną murawą oraz boczne boisko żak (5vs5). W 2027 planowane otwarcie kompleksu Orlik z nowymi szatniami.
            </p>
          </div>

          {/* Kolumna 4: Kontakt */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kontakt
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                    Telefon do klubu
                  </span>
                  <a
                    href="tel:603755830"
                    className="text-sm font-bold text-white hover:text-green-400 transition-colors"
                  >
                    603 755 830
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                    Adres Bazy
                  </span>
                  <span className="text-xs text-neutral-300">
                    Załęże Duże, Gmina Pniewy
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dolny pasek z prawami autorskimi i informacją o autorze projektu */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2027 LKS Pniewy. Wszelkie prawa zastrzeżone.</p>
          
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Projekt i wdrożenie:</span>
            <a
              href="https://zolcik-strony.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-bold transition-colors underline decoration-green-500/40 underline-offset-2"
            >
              Mateusz Żółcik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
