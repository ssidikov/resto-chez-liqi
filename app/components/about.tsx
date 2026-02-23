'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DecorativePattern } from './decorative-pattern'

export function About() {
  return (
    <section id='about' className='py-24 md:py-32 bg-white relative' aria-label='Notre héritage'>
      {/* Subtle Background Elements */}
      <DecorativePattern
        className='bottom-0 left-0 opacity-5 pointer-events-none'
        color='text-imperial-red'
      />

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          {/* Asymmetrical Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className='relative'>
            {/* Main large image */}
            <div className='aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full relative overflow-hidden bg-ink/5'>
              <Image
                src='/images/about-sculpture.webp'
                alt="Sculpture en bois traditionnelle représentant l'art et la culture chinoise au restaurant Chez Liqi"
                fill
                className='object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
              <div className='absolute inset-4 border border-white/20 pointer-events-none' />
            </div>

            {/* Floating decorative element (optional, could be a smaller image or stamp) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className='absolute -bottom-8 -right-8 w-40 h-40 bg-porcelain shadow-2xl p-4 hidden md:block'>
              <div className='w-full h-full border border-ink/10 flex items-center justify-center flex-col text-center'>
                <span className='font-playfair text-3xl text-imperial-red'>100%</span>
                <span className='text-xs uppercase tracking-widest text-ink/40 mt-1'>
                  Fait Maison
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Editorial Content Section */}
          <div className='flex flex-col justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-100px' }}>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-ink mb-6 md:mb-10 leading-tight'>
                Héritage &amp; <br />
                <span className='italic text-imperial-red'>Savoir-Faire</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className='space-y-6 text-ink/70 font-light leading-relaxed text-lg'>
              <p>
                Niché au cœur du{' '}
                <strong className='font-normal text-ink'>16e arrondissement de Paris</strong>, à
                quelques pas du métro Michel Ange Molitor, <strong>Chez Liqi</strong> est une
                véritable ambassade de la gastronomie chinoise traditionnelle.
              </p>

              <p>
                <strong>Depuis toujours</strong>, notre établissement célèbre la richesse des
                terroirs asiatiques. Loin des clichés, notre approche culinaire est une lettre
                d&apos;amour aux recettes ancestrales, transmises de génération en génération.
                L&apos;art du geste se retrouve dans chacune de nos préparations, notamment nos{' '}
                <strong>nouilles et raviolis confectionnés à la main</strong> chaque matin.
              </p>

              <p>
                Dans un cadre pensé comme un écrin hors du temps, notre équipe veille à vous offrir
                une parenthèse d&apos;élégance. De la sélection minutieuse d&apos;ingrédients frais
                à la présentation soignée de nos assiettes, chaque détail est pensé pour éveiller
                vos sens.
              </p>
            </motion.div>

            {/* Minimalist Stats / Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className='grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-ink/10'>
              <div>
                <span className='block text-imperial-red text-sm uppercase tracking-widest font-semibold mb-2'>
                  Fait Maison
                </span>
                <span className='text-ink/60 font-serif italic text-lg'>
                  L&apos;art du geste quotidien
                </span>
              </div>
              <div>
                <span className='block text-imperial-red text-sm uppercase tracking-widest font-semibold mb-2'>
                  Authenticité
                </span>
                <span className='text-ink/60 font-serif italic text-lg'>Recettes préservées</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
