'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { inder } from '@/app/fonts';
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
      <main className={`${inder.className} min-h-screen bg-white py-24 text-center text-neutral-400 font-bold uppercase tracking-widest text-sm`}>
        Ładowanie produktu...
      </main>
    );
  }

  if (!product) {
    return (
      <main className={`${inder.className} min-h-screen bg-white py-24 text-center`}>
        <h2 className="text-xl font-bold uppercase text-neutral-900 mb-4">Nie znaleziono produktu</h2>
        <Link href="/sklep" className="text-sm uppercase font-bold text-green-600 hover:underline">
          ← Wróć do sklepu
        </Link>
      </main>
    );
  }

  return (
    <main className={`${inder.className} min-h-screen bg-white pb-24 pt-8 text-neutral-900`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Nawigacja okruszkowa / Powrót */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500 uppercase tracking-wider">
          <Link href="/sklep" className="hover:text-green-600 transition-colors">
            ← Wróć do sklepu
          </Link>
          <span>/</span>
          <span>{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* GALERIA ZDJĘĆ */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 items-start">
            {product.images && product.images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto w-full sm:w-auto shrink-0 pb-2 sm:pb-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 w-20 shrink-0 border p-2 transition-all ${
                      selectedImage === img
                        ? 'border-green-600 ring-green-600 bg-white'
                        : 'border-neutral-200 bg-neutral-50 hover:bg-green-600/10 hover:border-green-600'
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

            <div className="relative aspect-square w-full flex-grow border border-neutral-200 bg-neutral-50 flex items-center justify-center p-8">
              {product.tag && (
                <span className="absolute top-4 left-4 z-10 bg-green-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
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
                <div className="text-neutral-300 text-sm font-bold uppercase">Brak zdjęcia</div>
              )}
            </div>
          </div>

          {/* SZCZEGÓŁY PRODUKTU, WYBÓR ROZMIARU I UWAGI */}
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

            {product.description && (
              <div className="my-6 border-t border-b border-neutral-200 py-4">
                <p className="text-sm leading-relaxed text-neutral-600 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Wybór rozmiaru */}
            {product.sizes && product.sizes.length > 0 && (
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

            {/* Uwagi */}
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

            {/* Przycisk dodawania */}
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

      {/* MODAL POTWIERDZENIA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md border border-neutral-200 bg-white p-6 shadow-2xl">
            
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3 text-green-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-neutral-900">
                Dodano do koszyka!
              </h3>
            </div>

            <div className="my-5 flex items-center gap-4 bg-neutral-50 p-3 border border-neutral-100">
              {selectedImage && (
                <div className="relative h-16 w-16 shrink-0 bg-white border border-neutral-200 p-1">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div className="overflow-hidden">
                <p className="font-bold text-neutral-900 truncate">{product.name}</p>
                {selectedSize && (
                  <p className="text-xs uppercase text-neutral-500">
                    Rozmiar: <span className="font-bold text-neutral-800">{selectedSize}</span>
                  </p>
                )}
                <p className="text-sm font-extrabold text-neutral-900 mt-0.5">
                  {product.price.toFixed(2)} zł
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full border border-neutral-300 py-3 text-sm font-bold uppercase tracking-wider text-neutral-800 transition-colors hover:bg-neutral-100 active:scale-95"
              >
                Kontynuuj zakupy
              </button>

              <button
                type="button"
                onClick={() => router.push('/koszyk')}
                className="w-full bg-neutral-900 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-green-600 active:scale-95"
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