import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";

import StarBackground from "@/components/StarBackground";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Momenta",
  description: "Where Every Moment Lives Forever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable}`}
    >
      <body>
        <StarBackground />

        {children}
      </body>
    </html>
  );
}