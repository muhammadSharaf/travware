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
        <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
          <div className="flex flex-1 flex-col z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
            <StoreProvider>{children}</StoreProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
