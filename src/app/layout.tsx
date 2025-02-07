import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'My english courses',
  description: 'My english courses for everyone who want to learn english',
  icons: {
    icon: '/images/favicon.ico', // /public path
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} h-full flex flex-col justify-between`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
