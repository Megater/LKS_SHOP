import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/app/components/Navbar';
import { Teko } from "next/font/google";
import { renderToWebFlightStream } from "next/dist/server/app-render/stream-ops.web";

const teko = Teko({
  subsets:['latin'],
  weight:'400'
})

export const metadata: Metadata = {
  title: "LKS",
  description: "Lks-desc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${teko.className} ${teko.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Navbar/>

      {children}

      </body>
    </html>
  );
}
