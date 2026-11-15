'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { teko, inder } from '@/app/fonts';
import { useCart } from '@/app/context/CartContext';

// Klient Sanity
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
  tag?: string;
  images: string[];
  sizes?: string[];
  description?: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Stany formularza
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [notes, setNotes] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      if (!params?.id) return;

      try {
        const query = `*[_type == "product" && _id == $id][0] {
          "id": _id,
          name,
          price,
          category,
          tag,
          "images": images[].asset->url,
          sizes,
          description
        }`;
        
        const data = await client.fetch(query, { id: params.id });
        if (data) {
          setProduct(data);
          if (data.images && data.images.length > 0) {
            setSelectedImage(data.images[0]);
          }
          if (data.sizes && data.sizes.length > 0) {
            setSelectedSize(data.sizes[0]);
          }
        }
      } catch (error) {
        console.error('Błąd pobierania produktu:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params?.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const orderItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize || undefined,
      notes: notes || undefined,
      image: selectedImage || (product.images ? product.images[0] : ''),
    };

    addToCart(orderItem);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <main className={`${inder.className} min-h-screen bg-[#0A0C10] py-28 text-center text-neutral-400 font-bold uppercase tracking-widest text-sm flex items-center justify-center`}>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          <span>Ładowanie produktu...</span>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className={`${inder.className} min-h-screen bg-[#0A0C10] py-28 text-center text-neutral-100 flex flex-col items-center justify-center px-4`}>
        <div className="bg-[#11141C] border border-white/10 rounded-2xl p-8 max-w-md w-full text-center">
          <h2 className={`${teko.className} text-3xl font-bold uppercase text-white mb-2`}>
            Nie znaleziono produktu
          </h2>
          <p className="text-neutral-400 text-sm mb-6">Wybrany artykuł nie istnieje lub został wycofany.</p>
          <Link
            href="/sklep"
            className="inline-block rounded-full bg-green-500 px-6 py-3 text-xs uppercase font-extrabold tracking-wider text-black hover:bg-green-400 transition-colors"
          >
            ← Wróć do sklepu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`${inder.className} min-h-screen bg-[#0A0C10] pb-24 pt-8 text-neutral-100`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Nawigacja okruszkowa / Powrót */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
          <Link href="/sklep" className="hover:text-green-400 transition-colors flex items-center gap-1">
            <span>←</span> Sklep
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-green-400">{product.category}</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-200 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* GALERIA ZDJĘĆ */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 items-start">
            {product.images && product.images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto w-full sm:w-auto shrink-0 pb-2 sm:pb-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 w-20 shrink-0 rounded-xl border p-2 transition-all overflow-hidden ${
                      selectedImage === img
                        ? 'border-green-500 ring-2 ring-green-500/50 bg-[#11141C]'
                        : 'border-white/10 bg-[#0D0F16] hover:border-green-500/50'
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

            <div className="relative aspect-square w-full flex-grow border border-white/10 bg-[#0D0F16] rounded-2xl flex items-center justify-center p-8 overflow-hidden shadow-2xl">
              {product.tag && (
                <span className="absolute top-4 left-4 z-10 rounded-full bg-green-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-lg">
                  {product.tag}
                </span>
              )}
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.name}
                  width={450}
                  height={450}
                  className="object-contain max-h-full transition-all"
                  priority
                />
              ) : (
                <div className="text-neutral-500 text-sm font-bold uppercase tracking-wider">
                  Brak zdjęcia
                </div>
              )}
            </div>
          </div>

          {/* SZCZEGÓŁY PRODUKTU, WYBÓR ROZMIARU I UWAGI */}
          <div className="flex flex-col justify-start">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              {product.category}
            </span>
            <h1 className={`${teko.className} mt-1 text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight`}>
              {product.name}
            </h1>
            
            <p className="mt-3 text-3xl sm:text-4xl font-black text-green-400">
              {product.price.toFixed(2)} zł
            </p>

            {product.description && (
              <div className="my-6 border-t border-b border-white/10 py-5">
                <p className="text-sm leading-relaxed text-neutral-300 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Wybór rozmiaru */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
                  Wybierz rozmiar: <span className="text-green-400 font-bold">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 min-w-[48px] px-4 font-black uppercase text-sm rounded-xl transition-all border ${
                        selectedSize === size
                          ? 'border-green-500 bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.35)]'
                          : 'border-white/10 bg-[#11141C] text-neutral-200 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Uwagi */}
            <div className="mb-6">
              <label
                htmlFor="order-notes"
                className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2"
              >
                Uwagi do produktu (opcjonalnie):
              </label>
              <textarea
                id="order-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Np. poproszę zapakować na prezent, własny numer na koszulce itp."
                className="w-full rounded-xl border border-white/10 bg-[#11141C] p-3 text-sm text-white placeholder-neutral-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* Przycisk dodawania */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full rounded-full bg-green-500 py-4 font-black uppercase tracking-wider text-black transition-all hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-[0.99]"
            >
              Dodaj do koszyka • {product.price.toFixed(2)} zł
            </button>
          </div>

        </div>
      </div>

      {/* MODAL POTWIERDZENIA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md border border-white/15 bg-[#11141C] p-6 rounded-2xl shadow-2xl">
            
            <div className="flex items-center gap-2.5 border-b border-white/10 pb-3 text-green-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className={`${teko.className} text-2xl font-bold uppercase tracking-wider text-white`}>
                Dodano do koszyka!
              </h3>
            </div>

            <div className="my-5 flex items-center gap-4 bg-[#0D0F16] p-3.5 rounded-xl border border-white/10">
              {selectedImage && (
                <div className="relative h-16 w-16 shrink-0 bg-black/40 border border-white/10 rounded-lg p-1 overflow-hidden">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div className="overflow-hidden">
                <p className="font-bold text-white truncate">{product.name}</p>
                {selectedSize && (
                  <p className="text-xs uppercase text-neutral-400 mt-0.5">
                    Rozmiar: <span className="font-bold text-green-400">{selectedSize}</span>
                  </p>
                )}
                <p className="text-sm font-black text-green-400 mt-1">
                  {product.price.toFixed(2)} zł
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full rounded-full border border-white/20 py-3 text-xs font-bold uppercase tracking-wider text-neutral-300 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
              >
                Kontynuuj zakupy
              </button>

              <button
                type="button"
                onClick={() => router.push('/koszyk')}
                className="w-full rounded-full bg-green-500 py-3 text-xs font-black uppercase tracking-wider text-black transition-colors hover:bg-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] active:scale-95"
              >
                Przejdź do koszyka
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
