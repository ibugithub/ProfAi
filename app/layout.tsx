"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import "../styles/index.css";
import type { Metadata } from 'next'
import "node_modules/react-modal-video/css/modal-video.css";

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProfAi',
  description: "Let's start learning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
