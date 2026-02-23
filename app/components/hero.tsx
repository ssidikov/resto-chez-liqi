'use client'

import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      id='accueil'
      ref={ref}
      className='relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-ink'
      aria-label='Accueil – Restaurant chinois authentique Paris 16e'>
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className='absolute inset-0 z-0'>
        <Image
          src='/images/chinese-new-year-dish-with-chopsticks.jpg'
          alt='Intérieur élégant du restaurant chinois Chez Liqi, Paris 16e'
          fill
          priority
          className='object-cover object-center transform scale-105'
          quality={90}
        />
        {/* Dark overlay for contrast */}
        <div className='absolute inset-0 bg-ink/70' />
        <div className='absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90' />
      </motion.div>

      <div className='container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center mt-20'>
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className='mb-6'>
          <span className='uppercase tracking-[0.3em] text-sm text-muted-gold font-semibold'>
            L&apos;Art Culinaire Chinois
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className='text-5xl md:text-7xl lg:text-8xl font-playfair text-porcelain mb-8 leading-tight drop-shadow-lg'>
          <span className='block'>Le Goût de</span>
          <span className='block text-imperial-red italic'>l&apos;Authentique</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className='max-w-2xl text-lg md:text-xl text-porcelain/80 font-light leading-relaxed mb-12'>
          Une expérience gastronomique raffinée au cœur du 16e arrondissement de Paris. Découvrez la
          quintessence des traditions culinaires chinoises.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-6 items-center'>
          <a href='tel:0782886705' aria-label='Réserver une table par téléphone au 07 82 88 67 05'>
            <Button
              size='lg'
              className='bg-imperial-red hover:bg-imperial-red-hover text-white px-10 py-7 text-sm uppercase tracking-widest font-semibold rounded-none transition-colors duration-500'>
              Réserver une table
            </Button>
          </a>
          <a
            href='#carte'
            aria-label='Découvrir notre menu'
            className='group flex items-center gap-4 text-porcelain hover:text-muted-gold transition-colors duration-500'>
            <span className='uppercase tracking-widest text-sm font-semibold'>
              Découvrir le Menu
            </span>
            <div className='h-[1px] w-12 bg-porcelain group-hover:bg-muted-gold group-hover:w-16 transition-all duration-500' />
          </a>
        </motion.div>

        {/* SEO-enriched hidden paragraph for search crawlers */}
        <p className='sr-only'>
          Chez Liqi est un restaurant chinois authentique et élégant situé au 33 rue Chanez, 75016
          Paris, dans le 16e arrondissement, à proximité du métro Michel Ange Molitor (lignes 9 et
          10). Spécialisé dans les nouilles et raviolis faits maison, nous proposons une cuisine
          chinoise traditionnelle de qualité supérieure. Ouvert du lundi au samedi de 11h30 à 14h30
          et de 18h30 à 22h30, et le dimanche de 18h30 à 22h30. Réservation recommandée au 07 82 88
          67 05.
        </p>
      </div>
    </section>
  )
}
