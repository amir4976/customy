import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/modules/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/BYekan.ttf",
  variable: "--font-y",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/BYekan+Bold.ttf",
  variable: "--font-y-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-md:mb-[80px]`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
