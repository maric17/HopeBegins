import type { Metadata } from 'next';
import { Poppins, DM_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'HopeBegins',
  description: 'A platform for hope and prayer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
