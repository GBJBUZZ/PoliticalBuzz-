import type { Metadata } from "next";
import {
  Inter,
  Montserrat_Alternates,
  Nunito_Sans,
  Rufina,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rufina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narendra Bhondekar",
  description:
    "Narendra Bhojraj Bhondekar is a prominent politician and dedicated public servant from Bhandara district, Maharashtra. Born on June 28, 1979, in Bhandara, he has risen to become a significant figure in Maharashtra's political landscape, known for his unwavering commitment to solving the problems of the common man.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${rufina.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
