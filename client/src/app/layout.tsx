'use client'
import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: { title: string; description: string } = {
  title: 'HealthHub360',
  description: 'Find the nearest hospital to you and make an appointment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  <html lang="en">
      <body className="">{children}</body>
    </html>
}
