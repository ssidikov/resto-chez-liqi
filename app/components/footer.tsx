import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FoodIllustration } from './food-illustration'
import { DecorativePattern } from './decorative-pattern'

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16 relative overflow-hidden'>
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
              <span className='text-red-400 ml-2'>丽琪餐厅</span>
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              Depuis 1995, nous vous invitons à découvrir l&apos;art culinaire chinois traditionnel au
              cœur de Paris. Notre passion pour l&apos;authenticité et la qualité fait de chaque repas
              une expérience mémorable.
            </p>
            <div className='flex space-x-6 text-sm'>
              <div className='flex items-center space-x-2'>
                <span>🥟</span>
                <span>Spécialiste Raviolis</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span>🍜</span>
                <span>Nouilles Maison</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span>🏮</span>
                <span>Tradition Authentique</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
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
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <div className='space-y-3 text-gray-300'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-4 h-4 mt-1 text-red-400' />
                <div>
                  <p>33 Rue Chanez</p>
                  <p>75016 Paris, France</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-4 h-4 text-red-400' />
                <span>07 82 88 67 05</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='w-4 h-4 text-red-400' />
                <span>contact@chezliqi.fr</span>
              </div>
              <div className='flex items-start space-x-3'>
                <Clock className='w-4 h-4 mt-1 text-red-400' />
                <div>
                  <p>Lun-Sam: 11h30-14h30, 18h30-22h30</p>
                  <p>Dim: 18h30-22h30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © 2025 Restaurant Chez Liqi. Tous droits réservés.
            </p>
            <p className='text-gray-400 text-sm'>
              Ce site est réalisé par{' '}
              <a href='https://sidikoff.com' className='text-red-400'>
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
