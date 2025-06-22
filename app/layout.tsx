import type { Metadata } from 'next'
import { Dancing_Script, Geist, Geist_Mono, Lora } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
  preload: true,
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
  preload: true,
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Chez Liqi - Restaurant Gastronomique Paris',
  description: 'Découvrez une cuisine française authentique et raffinée au cœur de Paris. Restaurant gastronomique avec chef étoilé Michelin.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${lora.variable} font-lora`}>{children}</body>
    </html>
  )
}
