import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "VMGEF - Vince Memorial Garden and Education Foundation",
  description: "Dedicated to the legacy of Vince. Empowering Ghanaian youth and women via education and skills training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-vmgef-bg text-vmgef-ink min-h-screen flex flex-col font-sans`}>
        {children}
      </body>
    </html>
  );
}
