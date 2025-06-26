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
  title: 'Restaurant Chez Liqi - Cuisine Chinoise Authentique à Paris | 丽琪餐厅',
  description: 'Découvrez l\'authenticité de la cuisine chinoise traditionnelle au Restaurant Chez Liqi à Paris. Spécialités de raviolis faits maison, nouilles fraîches et plats du Sichuan depuis 1995. Réservation recommandée.',
  keywords: 'restaurant chinois Paris, cuisine authentique, raviolis maison, nouilles chinoises, Sichuan, Pékin, dim sum, cuisine asiatique, restaurant traditionnel',
  openGraph: {
    title: 'Restaurant Chez Liqi - Cuisine Chinoise Authentique à Paris',
    description: 'Vivez une expérience culinaire authentique avec nos spécialités chinoises traditionnelles préparées par le Chef Liqi.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Chez Liqi - Cuisine Chinoise Authentique',
    description: 'Découvrez les saveurs authentiques de la Chine au cœur de Paris',
  },
  robots: {
    index: true,
    follow: true,
  },
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
