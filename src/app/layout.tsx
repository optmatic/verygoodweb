import type { Metadata } from "next";
import { Geist, Geist_Mono, Alegreya, Alegreya_Sans } from "next/font/google";
import "./css/globals.css";
import "./css/prose.css";
import "./css/topography.css";

// import { Navbar } from "@/components/navigation/Navbar";
import PrimaryNav from "@/components/navigation/PrimaryNav";
// import Footer from "@/components/navigation/ContactFooter";// import { GradientBackground } from "@/components/radiant/gradient";
// import { Navigation } from "lucide-react";
// import FooterLight from "@/components/navigation/ContactFooterLight";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});





export const metadata: Metadata = {
  title: "[optmatic] -  Web Development & E-commerce",
  description: "Future-proof your digital presence with Optmatic. We specialise in web development and e-commerce solutions, ensuring your business stays ahead in the digital age.",
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alegreya.variable} ${alegreyaSans.variable} antialiased min-h-screen flex flex-col w-full bg-deepBlue`}
      >
        <PrimaryNav />
          <main>
          {children}
          </main>
      </body>
    </html>
  );
}