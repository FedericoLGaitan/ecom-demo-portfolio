import type { Metadata } from "next";
import { Urbanist } from "next/font/google"
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const urbanist = Urbanist({
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Ecom-demo",
  description: "Generated by Lopez Gaitan Fede ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased`} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
