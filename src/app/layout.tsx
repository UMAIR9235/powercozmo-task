import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/context/cart.context";
import CartModal from "@/components/cart/cart-modal";
import { AuthProvider } from "@/context/auth.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Premium Store",
//   description: "A collection of premium products.",
// };
export const metadata: Metadata = {
  title: {
    default: "PowerCozmo",
    template: "%s | PowerCozmo",
  },
  description: "A modern e-commerce demo built with Next.js App Router",

  openGraph: {
    title: "PowerCozmo",
    description: "A modern e-commerce demo built with Next.js App Router",
    url: "https://my-gsap-portfolio.vercel.app", // replace with your domain
    siteName: "PowerCozmo",
    images: [
      {
        url: "https://my-gsap-portfolio.vercel.app/_next/image?url=%2Fgemini01.png&w=3840&q=75", // public image
        width: 1200,
        height: 630,
        alt: "PowerCozmo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <AuthProvider>
          <CartProvider>
            <div className="max-w-7xl mx-auto">
              <Header />
              {children}
              <CartModal />
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
