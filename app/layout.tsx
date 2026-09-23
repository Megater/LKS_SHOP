import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { teko } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "LKS",
  description: "Lks-desc",
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
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}