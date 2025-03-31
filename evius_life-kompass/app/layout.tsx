import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "evius life/kompass",
  description: "A platform to help you navigate life's challenges",
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
      { url: './icon.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: './favicon.ico',
    apple: './apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
