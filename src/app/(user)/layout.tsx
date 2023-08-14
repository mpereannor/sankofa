"use client"
import { AppContextProvider } from "@/context/AppContext"
import "../../app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sankofa Art Studio</title>
        <meta title="description" content="Sankofa Art Studio" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="sankofa.jpg" />
      </head>
      <body className={inter.className}>
        <AppContextProvider>
          {children}
          </AppContextProvider>
      </body>
    </html>
  )
}
