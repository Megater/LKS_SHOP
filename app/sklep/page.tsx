'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { inder } from '@/app/fonts';

// Klient Sanity do pobierania danych
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // false podczas tworzenia gwarantuje natychmiastowe odświeżanie po publikacji
});

// Typ produktu z bazy Sanity
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  tag?: string;
  images: string[];
}

const CATEGORIES = ['Wszystko', 'Koszulki', 'Bluzy', 'Akcesoria'];

export default function SklepPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState('Wszystko');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) {
          "id": _id,
          name,
          price,
          category,
          tag,
          "images": images[].asset->url
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error('Błąd pobierania produktów z Sanity:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === 'Wszystko'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className={`${inder.className} min-h-screen bg-white pb-24 pt-8`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Górna belka: Tytuł i filtry */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-6 gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mt-1">
              Sklep Klubowy
            </h1>
          </div>

          {/* Przyciski kategorii */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm sm:text-base font-bold uppercase transition-all rounded-sm ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Informacja o ładowaniu lub pustym stanie */}
        {loading ? (
          <div className="py-24 text-center text-neutral-400 font-bold uppercase tracking-widest text-sm">
            Ładowanie produktów...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-24 text-center text-neutral-400 font-bold uppercase tracking-widest text-sm">
            Brak produktów w tej kategorii
          </div>
        ) : (
          /* Siatka z produktami */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between border border-neutral-200 bg-white p-4 transition-all duration-200 hover:border-neutral-400 hover:shadow-sm"
              >
                {/* Etykieta (Nowość / Bestseller) */}
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-green-600 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white pointer-events-none">
                    {product.tag}
                  </span>
                )}

                {/* KROK 3: Link do podstrony produktu (obejmuje zdjęcie oraz nazwę) */}
                <Link href={`/sklep/${product.id}`} className="block flex-grow cursor-pointer">
                  {/* Zdjęcie produktu */}
                  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-neutral-50 mb-4 p-8">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={260}
                        height={260}
                        className="object-contain transition-transform duration-300 group-hover:scale-105 max-h-full"
                      />
                    ) : (
                      <div className="text-neutral-300 text-xs font-bold">Brak zdjęcia</div>
                    )}
                  </div>

                  {/* Kategoria i Tytuł */}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400">
                      {product.category}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-neutral-900 line-clamp-1 mt-0.5 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h2>
                  </div>
                </Link>

                {/* Dolny pasek: Cena i przycisk "Zobacz" */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-neutral-100">
                  <span className="text-xl sm:text-2xl font-black text-neutral-900">
                    {product.price.toFixed(2)} zł
                  </span>

                  <Link
                    href={`/sklep/${product.id}`}
                    className="flex items-center gap-1.5 bg-neutral-900 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-green-600 active:scale-95"
                  >
                    Zobacz
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}