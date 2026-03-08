'use client'

import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'
import { DecorativePattern } from './decorative-pattern'
import { EmbeddedMap } from './embedded-map'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section
      id='contact'
      className='py-24 md:py-32 bg-porcelain relative'
      aria-label='Nous trouver – Contact et horaires'>
      {/* Subtle Background Elements */}
      <DecorativePattern className='top-0 right-0 opacity-5 pointer-events-none' color='text-ink' />

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className='flex flex-col items-center mb-16 md:mb-24 text-center'>
          <span className='text-imperial-red font-semibold tracking-[0.2em] uppercase text-sm mb-4'>
            Nous Trouver
          </span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-ink'>
            Informations <span className='text-imperial-red ml-2 italic'>联系我们</span>
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-24 items-start'>
          {/* Contact Details Column */}
          <div className='lg:col-span-5 space-y-12'>
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className='group'>
              <h3 className='font-playfair text-2xl text-ink mb-6 flex items-center gap-3'>
                <MapPin className='w-5 h-5 text-imperial-red' aria-hidden='true' />
                Adresse
              </h3>
              <address className='not-italic text-ink/70 font-light leading-relaxed text-lg pl-8'>
                <p itemProp='streetAddress'>33 Rue Chanez</p>
                <p>
                  <span itemProp='postalCode'>75016</span>{' '}
                  <span itemProp='addressLocality'>Paris</span>, France
                </p>
                <p className='text-sm text-ink/40 mt-2 font-serif italic'>
                  Métro: Michel Ange Molitor (Lignes 9, 10)
                </p>
              </address>
            </motion.div>

            <div className='w-full h-px bg-ink/10' />

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}>
              <h3 className='font-playfair text-2xl text-ink mb-6 flex items-center gap-3'>
                <Clock className='w-5 h-5 text-imperial-red' aria-hidden='true' />
                Horaires
              </h3>
              <div className='text-ink/70 font-light leading-relaxed text-lg pl-8 space-y-4'>
                <div>
                  <span className='block text-ink font-medium mb-1'>Lundi - Samedi</span>
                  <time dateTime='11:30'>11h30</time> - <time dateTime='14:30'>14h30</time>
                  <br />
                  <time dateTime='18:30'>18h30</time> - <time dateTime='22:30'>22h30</time>
                </div>
                <div>
                  <span className='block text-ink font-medium mb-1'>Dimanche</span>
                  <time dateTime='18:30'>18h30</time> - <time dateTime='22:30'>22h30</time>
                </div>
              </div>
            </motion.div>

            <div className='w-full h-px bg-ink/10' />

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className='space-y-6'>
              <h3 className='font-playfair text-2xl text-ink mb-6 flex items-center gap-3'>
                <Phone className='w-5 h-5 text-imperial-red' aria-hidden='true' />
                Réservation
              </h3>
              <div className='pl-8 space-y-4'>
                <a
                  href='tel:0782886705'
                  className='group flex items-center justify-between p-4 border border-ink/10 hover:border-imperial-red/50 hover:bg-white transition-all duration-500'
                  itemProp='telephone'>
                  <span className='text-ink font-light tracking-wide'>07 82 88 67 05</span>
                  <ArrowRight className='w-4 h-4 text-imperial-red transform group-hover:translate-x-1 transition-transform' />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='lg:col-span-7 h-full'>
            <div className='aspect-[4/3] lg:aspect-square w-full relative bg-ink/5 p-2'>
              <div className='w-full h-full relative overflow-hidden'>
                <EmbeddedMap />
                <div className='absolute inset-0 border border-ink/10 pointer-events-none' />
              </div>
            </div>
            <div className='mt-6 flex justify-end'>
              <a
                href='https://maps.app.goo.gl/GgQqVkqqkMw1ASzs6'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-sm uppercase tracking-widest text-ink/60 hover:text-imperial-red transition-colors group'
                aria-label='Ouvrir la localisation du restaurant Chez Liqi dans Google Maps'>
                Ouvrir dans Google Maps
                <ArrowRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
