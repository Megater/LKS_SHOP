'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { teko, inder } from '@/app/fonts';

export default function KoszykPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className={`${inder.className} min-h-[75vh] flex flex-col items-center justify-center px-4 bg-[#0A0C10] text-neutral-100`}>
        <div className="bg-[#11141C] border border-white/10 rounded-2xl p-8 sm:p-12 text-center max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className={`${teko.className} text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-2`}>
            Twój koszyk jest pusty
          </h1>
          <p className="text-neutral-400 text-sm mb-6">
            Nie dodałeś jeszcze żadnych oficjalnych gadżetów i strojów klubowych.
          </p>
          <Link
            href="/sklep"
            className="inline-block rounded-full bg-green-500 px-8 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
          >
            Przejdź do sklepu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`${inder.className} min-h-screen bg-[#0A0C10] pb-24 pt-8 text-neutral-100`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* NAGŁÓWEK */}
        <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-green-400 font-bold block mb-1">
              Oficjalny Sklep LKS Pniewy
            </span>
            <h1 className={`${teko.className} text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-none`}>
              Koszyk ({cart.length})
            </h1>
          </div>
          <Link
            href="/sklep"
            className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-green-400 transition-colors flex items-center gap-1.5"
          >
            ← Kontynuuj zakupy
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* LISTA PRODUKTÓW W KOSZYKU */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#11141C] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center justify-between hover:border-white/20 transition-colors overflow-hidden"
              >
                <div className="flex gap-3.5 sm:gap-4 items-center flex-1 min-w-0 w-full">
                  <div className="relative h-20 w-20 shrink-0 bg-[#0D0F16] border border-white/10 rounded-xl p-2 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-base sm:text-lg text-white leading-snug break-words">
                      {item.name}
                    </h2>
                    {item.size && (
                      <p className="text-xs uppercase text-neutral-400 mt-0.5">
                        Rozmiar: <span className="font-bold text-green-400">{item.size}</span>
                      </p>
                    )}
                    {item.notes && (
                      <p className="text-xs text-neutral-400 mt-1 max-w-md bg-black/40 border border-white/5 rounded px-2 py-1 break-words">
                        <span className="text-neutral-500 font-semibold">Uwagi:</span> {item.notes}
                      </p>
                    )}
                    <p className="text-base font-black text-white mt-1.5">
                      {(item.price * item.quantity).toFixed(2)} zł
                      {item.quantity > 1 && (
                        <span className="text-xs font-normal text-neutral-500 ml-2">
                          ({item.price.toFixed(2)} zł / szt.)
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Zmiana ilości i usuwanie */}
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t border-white/5 sm:border-t-0 shrink-0">
                  <div className="flex items-center border border-white/15 bg-black/50 rounded-full p-0.5">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center font-bold text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                      aria-label="Zmniejsz ilość"
                    >
                      -
                    </button>
                    <span className="px-3 font-bold text-sm text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center font-bold text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                      aria-label="Zwiększ ilość"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors px-3 py-1.5 rounded-full hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PODSUMOWANIE ZAMÓWIENIA */}
          <div className="border border-white/10 p-6 bg-[#11141C] rounded-2xl h-fit sticky top-24">
            <h2 className={`${teko.className} text-2xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3 mb-5`}>
              Podsumowanie
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm text-neutral-400">
                <span>Wartość produktów:</span>
                <span className="font-bold text-white">{totalPrice.toFixed(2)} zł</span>
              </div>

              <div className="flex justify-between items-center text-sm text-neutral-400">
                <span>Dostawa:</span>
                <span className="text-xs text-green-400 uppercase font-semibold">Kalkulowana przy kasie</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-wider font-bold text-neutral-300">Łącznie:</span>
              <span className="text-2xl font-black text-green-400">{totalPrice.toFixed(2)} zł</span>
            </div>

            <button
              onClick={() => alert('Przejście do płatności w budowie!')}
              className="w-full rounded-full bg-green-500 py-3.5 font-black uppercase tracking-wider text-black transition-all hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
            >
              Przejdź do kasy
            </button>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-neutral-500 uppercase tracking-widest block">
                Bezpieczne zamówienie klubowe • LKS Ślesin
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
