import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutrawell Organics - Pure Nutrition from Uganda",
  description:
    "Discover Nutrawell Organics - Uganda's premium nutrition company offering organic foods and Happy Sips juices. Experience pure, natural goodness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
