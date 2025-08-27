import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creek's Edge Landscape",
  description: "Bring Paradise to you - Professional landscape design and services in New England",
  icons: {
    icon: '/favIcon.ico',
    shortcut: '/favIcon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Creek's Edge Landscape",
    description: "Bring Paradise to you - Professional landscape design and services in New England",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Creek's Edge Landscape",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Creek's Edge Landscape",
    description: "Bring Paradise to you - Professional landscape design and services in New England",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: 'var(--background)',
          color: 'var(--foreground)'
        }}
      >
        {children}
      </body>
    </html>
  );
}
