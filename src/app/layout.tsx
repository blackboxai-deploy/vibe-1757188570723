import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAGAJ - Kajaki Roztocze | Ultra-Nowoczesne Wypożyczalnia Kajaków",
  description: "Odkryj magię spływów kajakowych po Roztoczu z PAGAJ. Nowoczesna wypożyczalnia kajaków, profesjonalny sprzęt, niezapomniane trasy. Zarezerwuj swój spływ już dziś!",
  keywords: "kajaki, roztocze, spływy kajakowe, wypożyczalnia, pagaj, turystyka wodna, natura",
  openGraph: {
    title: "PAGAJ - Kajaki Roztocze",
    description: "Ultra-nowoczesna wypożyczalnia kajaków na Roztoczu",
    type: "website",
    url: "https://pagaj-roztocze.com",
    images: [
      {
        url: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0d2dc575-897b-4e22-a9d0-72217904bec8.png",
        width: 1200,
        height: 630,
        alt: "PAGAJ - Ultra nowoczesne przygody kajakowe na wodach Roztocza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAGAJ - Kajaki Roztocze",
    description: "Ultra-nowoczesna wypożyczalnia kajaków na Roztoczu",
    images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a8f2715-0733-43e6-8508-3e987b28b080.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0EA5E9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  );
}