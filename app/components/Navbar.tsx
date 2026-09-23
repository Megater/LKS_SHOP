import Link from 'next/link';
import { Inder } from 'next/font/google';
import Image from 'next/image';

const inder = Inder({
  subsets: ['latin'],
  weight: '400',
})


export default function Navbar() {
  return (
    <div className="Inder.variable sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-sm">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Image
          src="/herb.jpg"
          alt="Herb LKS Pniewy"
          width={50}
          height={50}
          priority
          className="h-10 w-auto object-contain"
        />
        {/* Logo */}
        <Link href="/" className="hidden md:flex items-center gap-2">
          <span>
            <strong className='text-green-600 font-extrabold'>LKS </strong><strong className="text-red-600 font-extrabold">PNIEWY</strong>
          </span>
        </Link>

        {/* Menu desktopowe */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link href="/kategoria/koszulki" className="text-neutral-700 hover:text-red-600 transition-colors">
            Koszulki
          </Link>
          <Link href="/kategoria/bluzy" className="text-neutral-700 hover:text-red-600 transition-colors">
            Bluzy
          </Link>
          <Link href="/kategoria/akcesoria" className="text-neutral-700 hover:text-red-600 transition-colors">
            Akcesoria
          </Link>
        </nav>

        {/* Koszyk */}
        <div className="flex items-center gap-4">
          <Link
            href="/koszyk"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            Koszyk (0)
          </Link>
        </div>
      </div>
    </div>
  );
}