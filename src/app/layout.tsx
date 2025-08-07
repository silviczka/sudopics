import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `Sudopics`,
  description: 'Play anytime, anywhere',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-main`}>{children}</body>
    </html>
  );
}
