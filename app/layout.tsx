import type { Metadata, Viewport } from 'next'
import { Inter, Dancing_Script, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { StickyMobileBar } from './components/sticky-mobile-bar'
import { AgencyCTA } from './components/agency-cta'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  style: ['normal', 'italic'],
})

const siteUrl = 'https://chez-liqi.vercel.app'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#dc2626',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Chez Liqi – Restaurant Chinois Authentique Paris 16 | Nouilles & Raviolis Maison',
    template: '%s | Chez Liqi',
  },
  description:
    'Restaurant chinois authentique dans le 16e arrondissement de Paris. Nouilles et raviolis faits maison. Cuisine traditionnelle chinoise et ingrédients frais.',
  keywords: [
    'restaurant chinois paris 16',
    'restaurant chinois paris 16e arrondissement',
    'restaurant chinois authentique paris',
    'nouilles maison paris',
    'raviolis chinois paris',
    'chez liqi',
    'chez liqi paris',
    'cuisine chinoise paris 16',
    'restaurant asiatique paris 16',
    'meilleur restaurant chinois paris 16',
    'nouilles faites maison paris',
    'raviolis vapeur paris',
    'restaurant chinois rue chanez',
    'restaurant chinois metro michel ange molitor',
    'restaurant chinois auteuil',
    'traiteur chinois paris 16',
  ],
  authors: [{ name: 'Chez Liqi' }],
  creator: 'SIDIKOFF DIGITAL',
  publisher: 'Chez Liqi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Chez Liqi 醴琦餐厅',
    title: 'Chez Liqi | Restaurant Chinois Authentique Paris 16e – Nouilles & Raviolis Maison',
    description:
      'Chez Liqi vous invite à découvrir la cuisine chinoise traditionnelle au cœur du 16e arrondissement. Nouilles et raviolis faits maison, ingrédients frais, ambiance chaleureuse au 33 rue Chanez, Paris.',
    images: [
      {
        url: '/images/hero-interior.webp',
        width: 1200,
        height: 630,
        alt: 'Intérieur chaleureux du restaurant chinois Chez Liqi à Paris 16e arrondissement',
        type: 'image/webp',
      },
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Logo Chez Liqi – Restaurant chinois authentique Paris 16',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chez Liqi | Restaurant Chinois Authentique Paris 16e',
    description:
      'Nouilles & raviolis faits maison. Cuisine chinoise traditionnelle au 33 rue Chanez, Paris 16e. Réservation : 07 82 88 67 05.',
    images: ['/images/hero-interior.webp'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  category: 'restaurant',
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris',
    'geo.position': '48.843600;2.259800',
    ICBM: '48.843600, 2.259800',
    rating: 'general',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <meta
          name='google-site-verification'
          content='QHFKwnQeFNd1ZCvodevFYVbLZanvP68b3ZyjNO2MZJk'
        />
      </head>
      <body
        className={`${inter.variable} ${inter.className} ${dancingScript.variable} ${playfair.variable} bg-porcelain font-sans text-ink antialiased selection:bg-imperial-red selection:text-white`}>
        {children}
        <StickyMobileBar />
        <AgencyCTA />
        <Analytics />
      </body>
    </html>
  )
}
