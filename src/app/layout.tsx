import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Providers from "@/components/providers/progress-provider";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aiiz Project Management tool",
  description: "Light weight, easy to use and functional Jira alternative for small teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.className} min-h-screen w-full  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative `}>
        <Providers>{children}</Providers>
      </body>
    </html>

  );
}
