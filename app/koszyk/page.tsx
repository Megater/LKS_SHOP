'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { inder } from '@/app/fonts';

export default function KoszykPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className={`${inder.className} min-h-[60vh] flex flex-col items-center justify-center px-4 bg-white`}>
        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
          Twój koszyk jest pusty
        </h1>
        <p className="text-neutral-500 mb-6">Nie dodałeś jeszcze żadnych klubowych gadżetów.</p>
        <Link
          href="/sklep"
          className="bg-neutral-900 px-6 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-green-600"
        >
          Przejdź do sklepu
        </Link>
      </main>
    );
  }

  return (
    <main className={`${inder.className} min-h-screen bg-white pb-24 pt-8 text-neutral-900`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight border-b border-neutral-200 pb-4 mb-8">
          Koszyk ({cart.length})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LISTA PRODUKTÓW W KOSZYKU */}
          <div className="lg:col-span-2 divide-y divide-neutral-200">
            {cart.map((item) => (
              <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="relative h-20 w-20 flex-shrink-0 bg-neutral-50 border border-neutral-200 p-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg leading-snug">{item.name}</h2>
                    {item.size && (
                      <p className="text-xs uppercase text-neutral-500 mt-0.5">
                        Rozmiar: <span className="font-bold text-neutral-800">{item.size}</span>
                      </p>
                    )}
                    {item.notes && (
                      <p className="text-xs italic text-neutral-500 mt-1 max-w-md">
                        Uwagi: {item.notes}
                      </p>
                    )}
                    <p className="text-sm font-black text-neutral-900 mt-1">
                      {item.price.toFixed(2)} zł
                    </p>
                  </div>
                </div>

                {/* Zmiana ilości i usuwanie */}
                <div className="flex items-center gap-6 self-end sm:self-center">
                  <div className="flex items-center border border-neutral-300">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 font-bold text-neutral-600 hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-bold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 font-bold text-neutral-600 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-bold uppercase text-red-600 hover:underline"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PODSUMOWANIE ZAMÓWIENIA */}
          <div className="border border-neutral-200 p-6 bg-neutral-50 h-fit">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-neutral-200 pb-2">
              Podsumowanie
            </h2>
            
            <div className="flex justify-between items-center text-sm mb-2 text-neutral-600">
              <span>Wartość produktów:</span>
              <span className="font-bold text-neutral-900">{totalPrice.toFixed(2)} zł</span>
            </div>

            <div className="flex justify-between items-center text-sm mb-4 text-neutral-600">
              <span>Dostawa:</span>
              <span className="text-xs text-neutral-500 uppercase">Kalkulowana przy kasie</span>
            </div>

            <div className="border-t border-neutral-200 pt-4 flex justify-between items-center text-xl font-black mb-6">
              <span>Łącznie:</span>
              <span>{totalPrice.toFixed(2)} zł</span>
            </div>

            <button
              onClick={() => alert('Przejście do płatności w budowie!')}
              className="w-full bg-neutral-900 py-3.5 font-bold uppercase tracking-wider text-white transition-colors hover:bg-green-600"
            >
              Przejdź do kasy
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}