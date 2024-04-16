import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chancellor Richey",
  description: "Software Engineer",
  icons: {
    icon: './favicon.ico',
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative bg-zinc-900 text-gray-50 text-opacity-90`}>
        <Navbar />        
        {children}
      </body>
    </html>
  );
}
