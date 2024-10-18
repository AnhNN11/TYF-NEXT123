import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

import { Footer } from "@/components/landing/Footer";
import { ContactSection } from "@/components/landing/Contact";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Take care your future",
  description: "Feel at home, away from home.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
