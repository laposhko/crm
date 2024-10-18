'use client';
import React from 'react';
import './globals.css';
import { Provider } from 'react-redux'; // Import Redux Provider
import { store } from '../redux/store';
import { Plus_Jakarta_Sans } from 'next/font/google';
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
