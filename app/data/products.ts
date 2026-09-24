// app/data/products.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  sizes?: string[];
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Koszulka Meczowa Domowa 26/27',
    category: 'Koszulki',
    price: 199.0,
    description:
      'Oficjalna koszulka meczowa LKS Pniewy na sezon 2026/2027. Wykonana z oddychającego materiału poliestrowego odprowadzającego wilgoć. Herb naniesiony metodą precyzyjnego haftu.',
    images: ['/herb.png', '/herb.png', '/herb.png'], // galeria min. kilku zdjęć
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Nowość',
  },
  {
    id: '2',
    name: 'Bluza z Kapturem Klasyk',
    category: 'Bluzy',
    price: 229.0,
    description:
      'Ciepła, gruba bawełniana bluza klubowa z kieszenią typu kangurka. Ściągacze przy mankietach i w pasie.',
    images: ['/herb.png', '/herb.png'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Szalik Pasiak LKS Pniewy',
    category: 'Akcesoria',
    price: 49.0,
    description:
      'Tradycyjny, dwustronny szalik dziany w barwach klubowych LKS Pniewy z frędzlami.',
    images: ['/herb.png'],
  },
  {
    id: '4',
    name: 'Koszulka Mateusza',
    category: 'Koszulki',
    price: 49.0,
    description:
    'Koszuleczka taka pyk pyk',
    images: ['/herb.png'],
    sizes: ['M', 'L', 'XL']
  },
];