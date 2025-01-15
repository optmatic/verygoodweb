import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { GradientBackground } from "@/components/radiant/gradient";
import { Navigation } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col w-full bg-deepBlue`}
      >
        <Navbar />
          <main>
          {children}
          </main>
      </body>
    </html>
  );
}