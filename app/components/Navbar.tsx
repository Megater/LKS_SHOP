'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { inder } from '@/app/fonts';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Jeśli strona drgnie w dół o więcej niż 10px, kafelki płynnie znikają
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${inder.className} sticky top-0 z-50 w-full bg-white shadow-sm transition-all`}>
      {/* 1. TWÓJ ORYGINALNY NAVBAR (pozostaje na stałe na samej górze) */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-20 w-full grid-cols-3 items-center">
            
            {/* Kolumna 1: Lewa (Herb) */}
            <div className="flex items-center justify-start">
              <Link href="/">
                <Image
                  src="/herb.png"
                  alt="Herb LKS Pniewy"
                  width={124}
                  height={124}
                  priority
                  className="h-12 md:h-18 w-12 md:w-18 object-contain"        
                />
              </Link>
            </div>

            {/* Kolumna 2: Środkowa (Napis LKS PNIEWY idealnie na środku) */}
            <div className="flex items-center ml-4 justify-center">
              <Link href="/" className="flex items-center gap-1.5 text-3xl sm:text-xl md:text-5xl font-extrabold tracking-wider">
                <span className="text-green-600">LKS</span>
                <span className="text-red-600">PNIEWY</span>
              </Link>
            </div>

            {/* Kolumna 3: Prawa (Koszyk) */}
            <div className="flex items-center justify-end">
              <Link
                href="/koszyk"
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100"
                aria-label="Koszyk"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 md:h-12 w-6 md:w-12 text-black"
                >
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>

                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                  {totalCount}
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 2. DWA KAFELKI POD SPODEM (Zwijają się przy scrollowaniu) */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out border-b border-neutral-200 bg-white ${
          isScrolled
            ? 'max-h-0 opacity-0 pointer-events-none'
            : 'max-h-20 opacity-100'
        }`}
      >
        <nav className="grid grid-cols-2 w-full text-center text-lg sm:text-2xl font-bold uppercase tracking-wider">
          <Link
            href="/"
            className={`flex items-center justify-center py-3 transition-colors border-r border-neutral-200 ${
              pathname === '/'
                ? 'bg-green-600 text-white'
                : 'bg-white text-neutral-800 hover:bg-green-600/10 hover:text-green-700'
            }`}
          >
            Strona Główna
          </Link>

          <Link
            href="/sklep"
            className={`flex items-center justify-center py-3 transition-colors ${
              pathname === '/sklep'
                ? 'bg-green-600 text-white'
                : 'bg-white text-neutral-800 hover:bg-green-600/10 hover:text-green-700'
            }`}
          >
            Sklep
          </Link>
        </nav>
      </div>
    </header>
  );
}