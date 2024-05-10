import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppLayout } from "@/components/layout";
import { PrimeReactProvider } from "primereact/api";
import { cn } from "@/libs/utils";

import "./globals.css";
import { QueryClientProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cefrio Invoice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={cn(inter.className, "overflow-hidden")}>
        <QueryClientProvider>
          <PrimeReactProvider>
            <AppLayout>{children}</AppLayout>
          </PrimeReactProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
