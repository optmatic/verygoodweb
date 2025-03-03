import type { Metadata } from "next";
import "./css/globals.css";
import "./css/theme.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Alegreya, Alegreya_Sans, Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Very Good Websites",
  description:
    "We build lightning-fast static websites for businesses across Australia.",
};

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alegreya.variable} ${alegreyaSans.variable} antialiased min-h-screen flex flex-col w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
