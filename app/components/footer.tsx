import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FoodIllustration } from './food-illustration'
import { DecorativePattern } from './decorative-pattern'

export function Footer() {
  return (
    <footer
      className='bg-gray-900 text-white py-16 relative overflow-hidden'
      role='contentinfo'
      aria-label='Pied de page – Restaurant Chez Liqi'>
      {/* Decorative elements */}
      <DecorativePattern className='top-20 left-10 opacity-5' color='text-red-400' />
      <DecorativePattern className='bottom-20 right-10 opacity-5' color='text-yellow-400' />
      <FoodIllustration type='noodles' className='absolute top-20 right-5 opacity-5 rotate-12' />
      <FoodIllustration
        type='dumpling'
        className='absolute bottom-20 left-5 opacity-5 -rotate-12'
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Restaurant Info */}
          <div className='lg:col-span-2 space-y-4'>
            <h3 className='text-2xl font-bold'>
              <span className='font-dancing-script text-3xl text-red-400'>
                Restaurant Chez Liqi
              </span>
              <span className='text-red-400 ml-2'>醴琦餐厅</span>
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              Depuis 1995, nous vous invitons à découvrir l&apos;art culinaire chinois traditionnel
              au cœur du <strong className='text-gray-200'>16e arrondissement de Paris</strong>.
              Notre passion pour l&apos;authenticité et la qualité fait de chaque repas une
              expérience mémorable. Spécialisé dans les{' '}
              <strong className='text-gray-200'>nouilles et raviolis faits maison</strong>, Chez
              Liqi est le restaurant chinois de référence à proximité du métro Michel Ange Molitor.
            </p>
            <div className='flex space-x-6 text-sm'>
              <div className='flex items-center space-x-2'>
                <span aria-hidden='true'>🥟</span>
                <span>Spécialiste Raviolis</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span aria-hidden='true'>🍜</span>
                <span>Nouilles Maison</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span aria-hidden='true'>🏮</span>
                <span>Tradition Authentique</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label='Navigation du pied de page'>
            <h4 className='text-lg font-semibold mb-4'>Navigation</h4>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <a href='#accueil' className='hover:text-red-400 transition-colors'>
                  Accueil
                </a>
              </li>
              <li>
                <a href='#about' className='hover:text-red-400 transition-colors'>
                  À Propos
                </a>
              </li>
              <li>
                <a href='#carte' className='hover:text-red-400 transition-colors'>
                  Notre Carte
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:text-red-400 transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <address className='not-italic space-y-3 text-gray-300'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-4 h-4 mt-1 text-red-400' aria-hidden='true' />
                <div>
                  <p>33 Rue Chanez</p>
                  <p>75016 Paris, France</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-4 h-4 text-red-400' aria-hidden='true' />
                <a href='tel:0782886705' className='hover:text-red-400 transition-colors'>
                  07 82 88 67 05
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='w-4 h-4 text-red-400' aria-hidden='true' />
                <a
                  href='mailto:contact@chezliqi.fr'
                  className='hover:text-red-400 transition-colors'>
                  contact@chezliqi.fr
                </a>
              </div>
              <div className='flex items-start space-x-3'>
                <Clock className='w-4 h-4 mt-1 text-red-400' aria-hidden='true' />
                <div>
                  <p>Lun-Sam: 11h30-14h30, 18h30-22h30</p>
                  <p>Dim: 18h30-22h30</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Restaurant Chez Liqi – Restaurant chinois authentique
              Paris 16e. Tous droits réservés.
            </p>
            <p className='text-gray-400 text-sm'>
              Ce site est réalisé par{' '}
              <a
                href='https://sidikoff.com'
                className='text-red-400 hover:text-red-300 transition-colors'
                target='_blank'
                rel='noopener noreferrer'>
                SIDIKOFF DIGITAL
              </a>{' '}
              - Création de site web
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
