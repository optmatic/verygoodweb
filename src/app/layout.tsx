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
  title: "dev - Optmatic",
  description: "Optmatic - dev",
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