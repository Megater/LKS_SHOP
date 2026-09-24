'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/app/data/products';
import { inder } from '@/app/fonts';
import { useCart } from '@/app/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const product = PRODUCTS.find((p) => p.id === params.id);
  const {addToCart} = useCart();
  

  if (!product) {
    notFound();
  }

  // Stan wybranego zdjęcia głównego
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  // Stan wybranego rozmiaru
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : '');
  // Stan uwag do zamówienia
  const [notes, setNotes] = useState('');

  const handleAddToCart = () => {
    const orderItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      notes: notes,
      image: selectedImage,
    };

    
    addToCart(orderItem);
    console.log('Dodano do koszyka:', orderItem);
  };

  return (
    <main className={`${inder.className} min-h-screen bg-white pb-24 pt-8 text-neutral-900`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Okruszki / Powrót */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500 uppercase tracking-wider">
          <Link href="/sklep" className="hover:text-green-600 transition-colors">
            ← Wróć do sklepu
          </Link>
          <span>/</span>
          <span>{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEWA KOLUMNA: GALERIA ZDJĘĆ */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Miniaturki zdjęć */}
            {product.images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-visible">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 w-20 flex-shrink-0 border p-2 transition-all ${
                      selectedImage === img
                        ? 'border-neutral-900 ring-1 ring-neutral-900'
                        : 'border-neutral-200 hover:border-neutral-400 bg-neutral-50'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - miniatura ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Główne powiększone zdjęcie */}
            <div className="relative aspect-square w-full flex-grow border border-neutral-200 bg-neutral-50 flex items-center justify-center p-8">
              {product.tag && (
                <span className="absolute top-4 left-4 z-10 bg-green-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {product.tag}
                </span>
              )}
              <Image
                src={selectedImage}
                alt={product.name}
                width={450}
                height={450}
                className="object-contain max-h-full transition-all"
                priority
              />
            </div>
          </div>

          {/* PRAWA KOLUMNA: SZCZEGÓŁY, ROZMIARY, UWAGI */}
          <div className="flex flex-col justify-start">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              {product.category}
            </span>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
              {product.name}
            </h1>
            
            <p className="mt-3 text-2xl sm:text-3xl font-black text-neutral-900">
              {product.price.toFixed(2)} zł
            </p>

            <div className="my-6 border-t border-b border-neutral-200 py-4">
              <p className="text-sm leading-relaxed text-neutral-600">
                {product.description}
              </p>
            </div>

            {/* WYBÓR ROZMIARU (jeśli produkt posiada rozmiary) */}
            {product.sizes && (
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2">
                  Wybierz rozmiar: <span className="text-neutral-900">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 min-w-[44px] px-3 font-bold uppercase text-sm transition-all border ${
                        selectedSize === size
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* POLE NA UWAGI (np. nadruk na koszulce, imię kibica) */}
            <div className="mb-6">
              <label
                htmlFor="order-notes"
                className="block text-xs font-bold uppercase tracking-widest text-neutral-700 mb-2"
              >
                Uwagi do produktu (opcjonalnie):
              </label>
              <textarea
                id="order-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Np. poproszę zapakować na prezent, własny numer na koszulce itp."
                className="w-full border border-neutral-200 p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors"
              />
            </div>

            {/* PRZYCISK DODANIA DO KOSZYKA */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-neutral-900 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-green-600 active:scale-[0.99]"
            >
              Dodaj do koszyka • {product.price.toFixed(2)} zł
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}