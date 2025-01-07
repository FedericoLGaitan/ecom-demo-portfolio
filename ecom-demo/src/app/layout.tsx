import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import NextTopLoader from 'nextjs-toploader'


const urbanist = Urbanist({
  subsets: ["latin"],
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
      <body className={`${urbanist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader 
            color="#2299DD"
            initialPosition={0.8}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow='0 0 10px #2299DD, 0 0 5px #2299DD'
          />
          <Navbar />
         <main>{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
