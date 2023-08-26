import './globals.css';
import Navbar from './(components)/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIPHOPEAT',
  description: '힙합과 R&B 커뮤니티',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
