import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Inter, Dancing_Script } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Chez Lìqí 醴琦餐厅',
  description: 'Restaurant chinois traditionnel à Paris',
  generator: 'Next.js',
  applicationName: 'Chez Lìqí',
  keywords: [
    'restaurant chinois',
    'cuisine chinoise',
    'Paris',
    'restaurant traditionnel',
    'gastronomie chinoise',
    'restaurant asiatique',
    'cuisine authentique',
    'restaurant familial',
    'restaurant à Paris',
    'restaurant chinois Paris',
    'restaurant gastronomique',
    'restaurant chinois traditionnel',
    'restaurant chinois authentique',
    'restaurant chinois Paris 16',
    'restaurant chinois 75016',
    'restaurant chinois près de la Tour Eiffel',
    'restaurant chinois près de la Seine',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
