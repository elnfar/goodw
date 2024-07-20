import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Providers from "@/components/providers/progress-provider";
import { ProviderRedux } from "./provider";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aiiz Project Management tool",
  description: "Light weight, easy to use and functional Jira alternative for small teams",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
            <body className={`${inter.className} min-h-screen w-full  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative `}>
              <ProviderRedux>
                <Providers>{children}</Providers>
              </ProviderRedux>
            </body>
    </html>

  );
}
