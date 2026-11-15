import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { teko } from "@/app/fonts";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "LKS Pniewy - Oficjalna strona i sklep klubu",
  description: "Oficjalna strona i sklep LKS Pniewy. Gminny klub piłkarski - szkolenie dzieci i młodzieży, drużyny juniorskie i seniorskie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${teko.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white">
        <CartProvider>
        <Navbar />
        {children}
        </CartProvider>
      </body>
    </html>
  );
}