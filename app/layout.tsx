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
  title: 'Chez Liqi - Restaurant Chinois Authentique Paris',
  description: 'Découvrez la cuisine chinoise authentique au cœur de Paris. Restaurant traditionnel avec des spécialités de Pékin et du Sichuan.',
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
