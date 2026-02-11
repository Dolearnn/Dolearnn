import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import logo from "./public/logo.png";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dolearn',
  description: 'Practice Smarter, Improve Faster and Master Your Exams',

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    images: [
      {
        url: '/logo.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/logo.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
