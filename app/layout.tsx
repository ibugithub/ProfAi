"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import "../styles/index.css";
import "node_modules/react-modal-video/css/modal-video.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
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
