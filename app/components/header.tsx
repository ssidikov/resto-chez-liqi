'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
        isScrolled
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
              className={`transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-90 contrast-200 brightness-0 invert'}`}
              priority
            />
            <span
              className={`font-playfair text-2xl font-semibold tracking-wide ${isScrolled ? 'text-ink' : 'text-porcelain'}`}>
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
            className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${isScrolled ? 'text-ink' : 'text-porcelain'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-navigation'
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav
            id='mobile-navigation'
            className='md:hidden absolute top-full left-0 w-full bg-porcelain/95 backdrop-blur-xl border-b border-ink/10 shadow-2xl py-6 px-6 flex flex-col items-center gap-6'
            aria-label='Menu de navigation mobile'>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#accueil'
              className='text-ink text-lg font-playfair tracking-wider hover:text-imperial-red transition-colors'>
              Le Lieu
            </a>
            <div className='w-8 h-px bg-ink/10' />
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#about'
              className='text-ink text-lg font-playfair tracking-wider hover:text-imperial-red transition-colors'>
              L&apos;Héritage
            </a>
            <div className='w-8 h-px bg-ink/10' />
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#carte'
              className='text-ink text-lg font-playfair tracking-wider hover:text-imperial-red transition-colors'>
              La Carte
            </a>
            <div className='w-8 h-px bg-ink/10' />
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#contact'
              className='text-ink text-lg font-playfair tracking-wider hover:text-imperial-red transition-colors'>
              Contact
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='tel:0782886705'
              className='mt-4 bg-imperial-red text-white uppercase tracking-widest text-sm px-8 py-4 w-full text-center transition-colors'>
              Réserver au 07 82 88 67 05
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
