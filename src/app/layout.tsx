import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth Interseptor',
  description: 'Next Interseptor Route',
};

export default function RootLayout({
  children,
  modalRoutes,
}: Readonly<{
  children: React.ReactNode;
  modalRoutes: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mt-20">{children}</main>
        {modalRoutes}
      </body>
    </html>
  );
}
