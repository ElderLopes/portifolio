import MainContainer from '@/components/MainContainer';
import '@/styles/style.css'; // Importe o arquivo CSS aqui

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}