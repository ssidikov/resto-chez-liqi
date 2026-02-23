'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className='fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-red-100 z-50'
      role='banner'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <a
            href='#accueil'
            className='text-2xl font-bold text-red-600'
            aria-label='Chez Liqi – Accueil'>
            {/* Logo or Restaurant Name */}
            <Image
              src='/logo.png'
              alt='Logo Chez Liqi – Restaurant chinois authentique Paris 16e'
              width={50}
              height={50}
              className='inline-block mr-4'
              priority
            />
            <span className='font-dancing-script text-3xl'>Chez Liqi</span>
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8' aria-label='Navigation principale'>
            <a href='#accueil' className='text-gray-700 hover:text-red-600 transition-colors'>
              Accueil
            </a>
            <a href='#about' className='text-gray-700 hover:text-red-600 transition-colors'>
              À Propos
            </a>
            <a href='#carte' className='text-gray-700 hover:text-red-600 transition-colors'>
              Carte
            </a>
            <a href='#contact' className='text-gray-700 hover:text-red-600 transition-colors'>
              Contact
            </a>
            <a
              href='tel:0782886705'
              className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors'
              aria-label='Réserver une table par téléphone'>
              Réserver une table
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-navigation'
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id='mobile-navigation'
            className='md:hidden mt-4 pb-4 border-t border-red-100'
            aria-label='Menu de navigation mobile'>
            <div className='flex flex-col space-y-4 pt-4'>
              <a href='#accueil' className='text-gray-700 hover:text-red-600 transition-colors'>
                Accueil
              </a>
              <a href='#about' className='text-gray-700 hover:text-red-600 transition-colors'>
                À Propos
              </a>
              <a href='#carte' className='text-gray-700 hover:text-red-600 transition-colors'>
                Carte
              </a>
              <a href='#contact' className='text-gray-700 hover:text-red-600 transition-colors'>
                Contact
              </a>
              <a
                href='tel:0782886705'
                className='bg-red-600 hover:bg-red-700 text-white w-full text-center px-4 py-2 rounded-md transition-colors'
                aria-label='Réserver une table par téléphone'>
                Réserver une table
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
