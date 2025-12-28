import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amrutha K",
  description: "Portfolio website of Amrutha K",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <div className="fixed inset-0 w-full h-full z-10">   
          <Image
            src="/bg.png"          // public/bg.png
            alt="Background"       // mandatory alt
            fill
            className="object-cover object-center"
            priority
          />
        </div>
          {/* <video autoPlay loop muted className="w-full h-full object-cover object-center">
            <source src="/bgvid.mp4" type="video/mp4"/>
          </video> */}
        <div className="absolute inset-0 backdrop-blur-none"></div>
        
        {children}
      </body>
    </html>
  );
}
