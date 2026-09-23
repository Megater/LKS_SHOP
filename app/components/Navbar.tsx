'use client';

import Link from 'next/link';
import Image from 'next/image';
import {inder} from '@/app/fonts';


export default function Navbar() {
  return (
    <header className={`${inder.className} sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-sm`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Siatka 3-kolumnowa rozciągnięta na 100% szerokości */}
        <div className="grid h-20 w-full grid-cols-3 items-center">
          
          {/* Kolumna 1: Lewa (Herb) */}
          <div className="flex items-center justify-start">
            <Link href="/">
              <Image
                src="/herb.png"
                alt="Herb LKS Pniewy"
                width={48}
                height={48}
                priority
                className="h-12 w-12 object-contain"        
              />
            </Link>
          </div>

          {/* Kolumna 2: Środkowa (Napis LKS PNIEWY idealnie na środku) */}
          <div className="flex items-center ml-4 justify-center">
            <Link href="/" className="flex items-center gap-1.5 text-3xl sm:text-xl font-extrabold  tracking-wider">
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
                className="h-6 w-6 text-black"
              >
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>

              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}