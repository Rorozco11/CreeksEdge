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
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌳</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌳</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌳</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: "Creek's Edge Landscape",
    description: "Bring Paradise to you - Professional landscape design and services in New England",
    images: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌳</text></svg>',
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
    images: [
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌳</text></svg>',
    ],
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
