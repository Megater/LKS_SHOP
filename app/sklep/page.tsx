'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { inder, teko } from '@/app/fonts';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

// Klient Sanity do pobierania danych
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

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
  const [activeTab, setActiveTab] = useState<'zawodnik' | 'rodzic'>('zawodnik');
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

  const filteredProducts = products.filter((product) => {
    const productTarget = product.targetGroup || 'zawodnik';
    const matchesTab = productTarget === activeTab;
    const matchesCategory =
      activeCategory === 'Wszystko' ? true : product.category === activeCategory;

    return matchesTab && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#0A0C10] text-neutral-100 pb-24 pt-10 selection:bg-green-500 selection:text-black">
      
      {/* Subtelne światła w tle */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[140px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Górna belka w stylu FOOTY LIVE */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingBag className="h-4 w-4 text-green-400" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-green-400">
              Oficjalna Kolekcja Zielono-Czerwonych
            </span>
          </div>

          <h1 className={`${teko.className} text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none`}>
            Sklep Klubowy LKS Pniewy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-2xl">
            Wybierz oficjalne stroje meczowe, dresy treningowe oraz akcesoria klubowe przygotowane dla zawodników i dumnych rodziców.
          </p>

          {/* GŁÓWNY PRZEŁĄCZNIK ZAKŁADEK: ZAWODNIK / RODZIC */}
          <div className="mt-8 flex gap-3 border-b border-white/10 pb-4">
            <button
              type="button"
              onClick={() => {
                setActiveTab('zawodnik');
                setActiveCategory('Wszystko');
              }}
              className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'zawodnik'
                  ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                  : 'bg-[#12151D] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Dla Zawodnika
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('rodzic');
                setActiveCategory('Wszystko');
              }}
              className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'rodzic'
                  ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                  : 'bg-[#12151D] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Dla Rodzica & Kibica
            </button>
          </div>

          {/* Podrzędne przyciski kategorii */}
          <div className="flex flex-wrap gap-2 mt-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'border border-green-500 bg-green-500/10 text-green-400'
                    : 'border border-white/10 bg-black/40 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stan ładowania / puste wyniki */}
        {loading ? (
          <div className="py-28 text-center text-neutral-400 font-extrabold uppercase tracking-widest text-sm flex flex-col items-center gap-3">
            <div className="h-6 w-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
            <span>Ładowanie produktów...</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-28 text-center text-neutral-400 font-extrabold uppercase tracking-widest text-sm">
            Brak produktów w wybranej kategorii
          </div>
        ) : (
          /* Siatka z produktami w stylu FOOTY LIVE */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11141C] p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-green-500/50 hover:bg-[#141822] hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Etykieta (Nowość / Bestseller) */}
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 rounded-md bg-green-500 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black shadow-md pointer-events-none">
                    {product.tag}
                  </span>
                )}

                {/* Link do produktu */}
                <Link href={`/sklep/${product.id}`} className="block flex-grow cursor-pointer">
                  {/* Zdjęcie produktu */}
                  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-[#090B10] border border-white/5 mb-4 p-8">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={280}
                        height={280}
                        className="object-contain transition-transform duration-300 group-hover:scale-105 max-h-full drop-shadow-md"
                      />
                    ) : (
                      <div className="text-neutral-500 text-xs font-bold uppercase">Brak zdjęcia</div>
                    )}
                  </div>

                  {/* Kategoria i Tytuł */}
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-green-400 font-bold block">
                      {product.category}
                    </span>
                    <h2 className={`${teko.className} text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white line-clamp-1 mt-0.5 group-hover:text-green-400 transition-colors leading-tight`}>
                      {product.name}
                    </h2>
                  </div>
                </Link>

                {/* Dolny pasek: Cena i przycisk */}
                <div className="mt-4 flex items-center justify-between pt-3.5 border-t border-white/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold">Cena:</span>
                    <span className={`${teko.className} text-2xl sm:text-3xl font-black text-white leading-none`}>
                      {product.price.toFixed(2)} zł
                    </span>
                  </div>

                  <Link
                    href={`/sklep/${product.id}`}
                    className="flex items-center gap-1.5 rounded-full bg-green-500 px-5 py-2 text-xs font-black uppercase tracking-wider text-black shadow-md transition-all hover:bg-green-400 active:scale-95"
                  >
                    <span>Wybierz</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
