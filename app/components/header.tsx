'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled && !isMenuOpen
          ? 'bg-porcelain/80 backdrop-blur-md border-b border-ink/10 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
      role='banner'>
      <div className='container mx-auto px-6 max-w-7xl'>
        <div className='flex items-center justify-between'>
          <a
            href='#accueil'
            className={`flex items-center gap-3 transition-colors duration-500`}
            aria-label='Chez Liqi – Accueil'>
            <Image
              src='/logo.png'
              alt='Logo Chez Liqi'
              width={40}
              height={40}
              className={`transition-opacity duration-500 ${isScrolled && !isMenuOpen ? 'opacity-100' : 'opacity-90 contrast-200 brightness-0 invert'}`}
              priority
            />
            <span
              className={`font-playfair text-2xl font-semibold tracking-wide ${isScrolled && !isMenuOpen ? 'text-ink' : 'text-porcelain'}`}>
              Chez Liqi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className='hidden md:flex items-center space-x-10'
            aria-label='Navigation principale'>
            <a
              href='#accueil'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-ink/60 hover:text-imperial-red' : 'text-porcelain/80 hover:text-white'}`}>
              Le Lieu
            </a>
            <a
              href='#about'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-ink/60 hover:text-imperial-red' : 'text-porcelain/80 hover:text-white'}`}>
              L&apos;Héritage
            </a>
            <a
              href='#carte'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-ink/60 hover:text-imperial-red' : 'text-porcelain/80 hover:text-white'}`}>
              La Carte
            </a>
            <a
              href='#contact'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-ink/60 hover:text-imperial-red' : 'text-porcelain/80 hover:text-white'}`}>
              Contact
            </a>
            <a
              href='tel:0782886705'
              className={`text-sm uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${
                isScrolled
                  ? 'border-imperial-red text-imperial-red hover:bg-imperial-red hover:text-white'
                  : 'border-porcelain/50 text-porcelain hover:bg-porcelain hover:text-ink'
              }`}
              aria-label='Réserver une table par téléphone'>
              Réserver
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 -mr-2 relative z-50 transition-colors duration-300 ${isScrolled && !isMenuOpen ? 'text-ink' : 'text-porcelain'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-navigation'
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown (Premium Fullscreen Overlay) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              id='mobile-navigation'
              className='md:hidden fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center min-h-[100dvh]'
              aria-label='Menu de navigation mobile'>
              {/* Decorative Background Elements */}
              <div className='absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center overflow-hidden'>
                <span className='font-playfair text-[40vw] text-white whitespace-nowrap opacity-20'>
                  醴琦
                </span>
              </div>

              <div className='flex flex-col items-center gap-10 relative z-10 w-full px-8'>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  href='#accueil'
                  className='text-porcelain text-3xl font-playfair tracking-wider hover:text-imperial-red transition-colors'>
                  Le Lieu
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 40 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='h-[1px] bg-white/20'
                />

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  href='#about'
                  className='text-porcelain text-3xl font-playfair tracking-wider hover:text-imperial-red transition-colors'>
                  L&apos;Héritage
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 40 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className='h-[1px] bg-white/20'
                />

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  href='#carte'
                  className='text-porcelain text-3xl font-playfair tracking-wider hover:text-imperial-red transition-colors'>
                  La Carte
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 40 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className='h-[1px] bg-white/20'
                />

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={() => setIsMenuOpen(false)}
                  href='#contact'
                  className='text-porcelain text-3xl font-playfair tracking-wider hover:text-imperial-red transition-colors'>
                  Contact
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onClick={() => setIsMenuOpen(false)}
                  href='tel:0782886705'
                  className='mt-8 bg-imperial-red text-white uppercase tracking-widest text-sm px-10 py-5 w-full max-w-xs text-center transition-colors shadow-xl'>
                  Réserver—07 82 88 67 05
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
