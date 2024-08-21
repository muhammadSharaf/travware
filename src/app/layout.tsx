import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Listing products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between px-8 pt-12 pb-36 md:px-24 md:py-12">
          <div className="flex flex-1 flex-col z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
            <StoreProvider>{children}</StoreProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
