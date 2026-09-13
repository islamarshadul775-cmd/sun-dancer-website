import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Sun Dancer Cafe & Restaurant | Luxury Coastal Dining",
  description:
    "Experience premium coastal dining at Sun Dancer - Fresh seafood, regional flavours, and breathtaking sunset views on Marine Drive, Cox's Bazar",
  keywords: "restaurant, cafe, Cox's Bazar, seafood, coastal dining, Marine Drive",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sun Dancer Cafe & Restaurant",
    title: "Sun Dancer Cafe & Restaurant",
    description:
      "Experience premium coastal dining at Sun Dancer - Fresh seafood, regional flavours, and breathtaking sunset views",
    images: [
      {
        url: "/images/placeholder-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sun Dancer Cafe & Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun Dancer Cafe & Restaurant",
    description: "Luxury coastal dining experience",
    images: ["/images/placeholder-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#123B52" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23E2723A'>🌅</text></svg>" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
