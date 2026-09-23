import { Teko } from "next/font/google";
import { Inder } from 'next/font/google';

export const teko = Teko({
  subsets: ['latin'],
  weight: ['400', '700'], // dodana grubość 700 pod pogrubienia
});

export const inder = Inder({
  subsets: ['latin'],
  weight: '400',
});