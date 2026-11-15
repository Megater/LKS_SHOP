'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { inder } from '@/app/fonts';
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
    <header className={`${inder.className} sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all shadow-xs`}>
      {/* Cienki pasek w barwach klubowych na samej górze */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-neutral-200 to-red-600" />

      {/* 1. GŁÓWNY PASEK NAVBARA */}
      <div className="border-b border-neutral-200/80">
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
                    className="h-11 w-11 sm:h-14 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-2xs"  
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
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase leading-none transition-transform duration-200 group-hover:scale-102">
                  <span className="text-green-600">LKS</span>
                  <span className="text-red-600">PNIEWY</span>
                </div>
                <span className="hidden sm:block text-[10px] font-bold tracking-widest text-neutral-400 uppercase mt-0.5">
                  Gminny Klub Sportowy
                </span>
              </Link>
            </div>

            {/* Kolumna 3: Prawa (Koszyk) */}
            <div className="flex items-center justify-end">
              <Link
                href="/koszyk"
                className="group relative flex items-center gap-2 rounded-xl border border-neutral-200/80 bg-neutral-50 px-3 sm:px-3.5 py-2 text-neutral-800 shadow-2xs transition-all hover:border-red-300 hover:bg-red-50/60 hover:text-red-700 active:scale-95"
                aria-label="Koszyk klubowy"
              >
                <div className="relative">
                  <ShoppingBag className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
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
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out border-b border-neutral-200/80 bg-white/95 backdrop-blur-xs ${
          isScrolled
            ? 'max-h-0 opacity-0 pointer-events-none'
            : 'max-h-16 opacity-100'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-2 gap-2 sm:gap-3 py-2">
            <Link
              href="/"
              className={`flex items-center justify-center py-2.5 rounded-xl text-center text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider transition-all active:scale-98 ${
                pathname === '/'
                  ? 'bg-green-600 text-white shadow-xs'
                  : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200/60'
              }`}
            >
              Strona Główna
            </Link>

            <Link
              href="/sklep"
              className={`flex items-center justify-center py-2.5 rounded-xl text-center text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider transition-all active:scale-98 ${
                pathname === '/sklep'
                  ? 'bg-green-600 text-white shadow-xs'
                  : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200/60'
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
