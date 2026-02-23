import { MapPin, Phone, Clock } from 'lucide-react'
import { DecorativePattern } from './decorative-pattern'

export function Footer() {
  return (
    <footer
      className='bg-ink text-porcelain py-24 relative overflow-hidden'
      role='contentinfo'
      aria-label='Pied de page – Restaurant Chez Liqi'>
      {/* Subtle overlay texture */}
      <DecorativePattern
        className='top-0 left-0 opacity-5 pointer-events-none'
        color='text-porcelain'
      />

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8'>
          {/* Logo & Brand Info */}
          <div className='lg:col-span-1 flex flex-col'>
            <h3 className='text-2xl mb-6'>
              <span className='font-playfair font-semibold tracking-wide'>Chez Liqi</span>
              <span className='block text-imperial-red text-sm mt-1 italic font-serif'>
                醴琦餐厅
              </span>
            </h3>
            <p className='text-porcelain/60 font-light leading-relaxed text-sm mb-8'>
              L&apos;art culinaire chinois authentique à Paris. L&apos;élégance de la tradition, la
              passion du fait maison.
            </p>
          </div>

          {/* Navigation */}
          <div className='lg:col-span-1 lg:pl-8'>
            <h4 className='text-sm uppercase tracking-widest font-semibold text-muted-gold mb-8'>
              Découvrir
            </h4>
            <nav aria-label='Navigation du pied de page'>
              <ul className='space-y-4 text-porcelain/70 font-light text-sm'>
                <li>
                  <a
                    href='#accueil'
                    className='hover:text-porcelain transition-colors hover:pl-2 inline-block transform duration-300'>
                    L&apos;Expérience
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className='hover:text-porcelain transition-colors hover:pl-2 inline-block transform duration-300'>
                    Notre Héritage
                  </a>
                </li>
                <li>
                  <a
                    href='#carte'
                    className='hover:text-porcelain transition-colors hover:pl-2 inline-block transform duration-300'>
                    La Carte
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='hover:text-porcelain transition-colors hover:pl-2 inline-block transform duration-300'>
                    Nous Trouver
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Details */}
          <div className='lg:col-span-1'>
            <h4 className='text-sm uppercase tracking-widest font-semibold text-muted-gold mb-8'>
              Contact
            </h4>
            <address className='not-italic space-y-4 text-porcelain/70 font-light text-sm'>
              <div className='flex items-start space-x-4 group'>
                <MapPin
                  className='w-4 h-4 mt-0.5 text-imperial-red flex-shrink-0'
                  aria-hidden='true'
                />
                <a
                  href='https://maps.app.goo.gl/GgQqVkqqkMw1ASzs6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group-hover:text-porcelain transition-colors'>
                  33 Rue Chanez
                  <br />
                  75016 Paris, France
                </a>
              </div>
              <div className='flex items-center space-x-4 group'>
                <Phone className='w-4 h-4 text-imperial-red flex-shrink-0' aria-hidden='true' />
                <a href='tel:0782886705' className='group-hover:text-porcelain transition-colors'>
                  07 82 88 67 05
                </a>
              </div>
            </address>
          </div>

          {/* Opening Hours */}
          <div className='lg:col-span-1'>
            <h4 className='text-sm uppercase tracking-widest font-semibold text-muted-gold mb-8'>
              Horaires
            </h4>
            <div className='space-y-4 text-porcelain/70 font-light text-sm'>
              <div className='flex items-start space-x-4'>
                <Clock
                  className='w-4 h-4 mt-0.5 text-imperial-red flex-shrink-0'
                  aria-hidden='true'
                />
                <div>
                  <div className='mb-2'>
                    <span className='block text-porcelain mb-1'>Lundi – Samedi</span>
                    <span>
                      11h30 – 14h30
                      <br />
                      18h30 – 22h30
                    </span>
                  </div>
                  <div>
                    <span className='block text-porcelain mb-1'>Dimanche</span>
                    <span>18h30 – 22h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className='border-t border-porcelain/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-porcelain/40 text-xs tracking-wider uppercase'>
            © {new Date().getFullYear()} Chez Liqi. Tous droits réservés.
          </p>
          <p className='text-porcelain/40 text-xs tracking-wider uppercase'>
            Design & Développement par{' '}
            <a
              href='https://sidikoff.com'
              className='text-muted-gold hover:text-porcelain transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              SIDIKOFF DIGITAL
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
