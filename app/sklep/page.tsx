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
  useCdn: false,
});

// Typ produktu z bazy Sanity z dodanym polem targetGroup
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  targetGroup?: 'zawodnik' | 'rodzic';
  tag?: string;
  images: string[];
}

const CATEGORIES = ['Wszystko', 'Koszulki', 'Bluzy', 'Akcesoria'];

export default function SklepPage() {
  const [products, setProducts] = useState<Product[]>([]);
  // Domyślnie otwarta zakładka "Zawodnik"
  const [activeTab, setActiveTab] = useState<'zawodnik' | 'rodzic'>('zawodnik');
  const [activeCategory, setActiveCategory] = useState('Wszystko');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Dodano targetGroup do zapytania GROQ
        const query = `*[_type == "product"] | order(_createdAt desc) {
          "id": _id,
          name,
          price,
          category,
          targetGroup,
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

  // Filtrowanie: najpierw zakładka (Zawodnik / Rodzic), a potem kategoria (Koszulki, Bluzy itd.)
  const filteredProducts = products.filter((product) => {
    const productTarget = product.targetGroup || 'zawodnik';
    const matchesTab = productTarget === activeTab;
    const matchesCategory =
      activeCategory === 'Wszystko' ? true : product.category === activeCategory;

    return matchesTab && matchesCategory;
  });

  return (
    <main className={`${inder.className} min-h-screen bg-white pb-24 pt-8`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Górna belka: Tytuł */}
        <div className="border-b border-neutral-200 pb-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mt-1">
            Sklep Klubowy
          </h1>

          {/* GŁÓWNY PRZEŁĄCZNIK ZAKŁADEK: ZAWODNIK / RODZIC */}
          <div className="mt-8 flex border-b border-neutral-200 gap-8">
            <button
              type="button"
              onClick={() => {
                setActiveTab('zawodnik');
                setActiveCategory('Wszystko');
              }}
              className={`pb-3 text-lg sm:text-xl font-extrabold uppercase tracking-wider transition-all relative ${
                activeTab === 'zawodnik'
                  ? 'text-red-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-red-600'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Zawodnik
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('rodzic');
                setActiveCategory('Wszystko');
              }}
              className={`pb-3 text-lg sm:text-xl font-extrabold uppercase tracking-wider transition-all relative ${
                activeTab === 'rodzic'
                  ? 'text-red-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-red-600'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Rodzic
            </button>
          </div>

          {/* Podrzędne przyciski kategorii */}
          <div className="flex flex-wrap gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm sm:text-base font-bold uppercase transition-all rounded-sm ${
                  activeCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-neutral-800 hover:bg-green-600/10 hover:text-green-700'
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
            Brak produktów w tej sekcji
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

                {/* Link do podstrony produktu */}
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

                {/* Dolny pasek: Cena i przycisk */}
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