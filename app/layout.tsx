import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { teko } from "@/app/fonts";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "LKS Pniewy - Oficjalna strona i sklep klubu",
  description: "Oficjalna strona i sklep LKS Pniewy. Gminny klub piłkarski - szkolenie dzieci i młodzieży, drużyny juniorskie i seniorskie.",
  other: {
    'darkreader-lock': '',
    'color-scheme': 'only dark',
  },
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
      data-darkreader-ignore=""
      data-darkreader-mode="none"
    >
      <head>
        <meta name="darkreader-lock" content="" />
        <meta name="color-scheme" content="only dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const observer = new MutationObserver((mutations) => {
                  for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                      if (node.nodeType === 1) {
                        const el = node;
                        if (
                          el.classList?.contains('darkreader') ||
                          el.getAttribute?.('class')?.includes('darkreader') ||
                          el.id?.includes('darkreader')
                        ) {
                          el.remove();
                        }
                      }
                    }
                  }
                });
                observer.observe(document.documentElement, { childList: true, subtree: true });
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#0A0C10] text-neutral-100"
        data-darkreader-ignore=""
      >
        <CartProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}