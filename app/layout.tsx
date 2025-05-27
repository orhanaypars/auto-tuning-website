import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import Banner from "@/_components/Banner";

export const metadata: Metadata = {
  title: "İzmir Auto Tuning",
  description: "İzmir Auto Tuning Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-black text-yellow-500">
        <div className="min-h-screen">
          <Banner />
          <div className="relative z-20">
            <Navbar />
          </div>
          <div className="pt-2 md:pt-4">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
