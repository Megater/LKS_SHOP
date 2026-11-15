'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { inder, teko } from '@/app/fonts';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Jeśli strona drgnie w dół o więcej niż 10px, dolny pasek płynnie się zwija
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jeśli jesteśmy w panelu Sanity Studio, nie renderuj Navbara
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0C10]/95 backdrop-blur-md transition-all shadow-xl border-b border-white/10 text-white">
      {/* Cienki pasek w barwach klubowych na samej górze */}
      <div className="h-1 w-full bg-gradient-to-r from-green-500 via-white/20 to-red-500" />

      {/* 1. GŁÓWNY PASEK NAVBARA */}
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-18 sm:h-20 w-full grid-cols-3 items-center">
            
            {/* Kolumna 1: Lewa (Herb) */}
            <div className="flex items-center justify-start">
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/herb.png"
                    alt="Herb LKS Pniewy"
                    width={56}
                    height={56}
                    priority
                    className="h-11 w-11 sm:h-14 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"  
                  />
                </div>
              </Link>
            </div>

            {/* Kolumna 2: Środkowa (Napis LKS PNIEWY idealnie na środku) */}
            <div className="flex items-center justify-center text-center">
              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className={`${teko.className} flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase leading-none transition-transform duration-200 group-hover:scale-102`}>
                  <span className="text-green-400">LKS</span>
                  <span className="text-red-500">PNIEWY</span>
                </div>
                <span className="hidden sm:block text-[10px] font-bold tracking-widest text-neutral-400 uppercase mt-0.5">
                  Gminny Klub Sportowy • Zał. 2003
                </span>
              </Link>
            </div>

            {/* Kolumna 3: Prawa (Koszyk) */}
            <div className="flex items-center justify-end">
              <Link
                href="/koszyk"
                className="group relative flex items-center gap-2 rounded-full border border-white/15 bg-[#12151D] px-4 py-2 text-white shadow-md transition-all hover:border-green-500/50 hover:bg-[#161B26] active:scale-95"
                aria-label="Koszyk klubowy"
              >
                <div className="relative">
                  <ShoppingBag className="h-5 w-5 text-green-400 transition-transform duration-200 group-hover:scale-110" />
                  {totalCount > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white shadow-xs">
                      {totalCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-wider">
                  Koszyk
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 2. DWA KAFELKI POD SPODEM (Zwijają się płynnie przy scrollowaniu) */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out border-t border-white/5 bg-[#080A0E]/95 backdrop-blur-xs ${
          isScrolled
            ? 'max-h-0 opacity-0 pointer-events-none'
            : 'max-h-16 opacity-100'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-2 gap-3 py-2.5">
            <Link
              href="/"
              className={`flex items-center justify-center py-2 rounded-full text-center text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all active:scale-98 ${
                pathname === '/'
                  ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                  : 'bg-[#12151D] text-neutral-300 hover:text-white hover:bg-[#161B26] border border-white/10'
              }`}
            >
              Strona Główna
            </Link>

            <Link
              href="/sklep"
              className={`flex items-center justify-center py-2 rounded-full text-center text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all active:scale-98 ${
                pathname === '/sklep'
                  ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                  : 'bg-[#12151D] text-neutral-300 hover:text-white hover:bg-[#161B26] border border-white/10'
              }`}
            >
              Sklep Klubowy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
