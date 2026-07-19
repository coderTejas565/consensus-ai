import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Raleway,
} from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

import { cn } from "@/lib/utils";


const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const raleway = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Consensus AI",
  description:
    "Generate better answers by combining multiple AI perspectives.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={cn(
        "h-full",
        geistSans.variable,
        geistMono.variable,
        raleway.variable
      )}
    >

      <body
        className="
          min-h-screen
          bg-background
          font-sans
          text-foreground
          antialiased
        "
      >

          <ThemeProvider>
    {children}
  </ThemeProvider>


      </body>

    </html>

  );
}