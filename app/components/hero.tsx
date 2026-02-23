import { Button } from '@/components/ui/button'
import { Star, MapPin, Clock, ChefHat } from 'lucide-react'
import { LazyImage } from './lazy-image'
import { BackgroundShapes } from './background-shapes'
import { DecorativePattern } from './decorative-pattern'
import { FoodIllustration } from './food-illustration'

export function Hero() {
  return (
    <section
      id='accueil'
      className='pt-20 bg-gradient-to-br from-red-50 to-yellow-50 min-h-screen flex items-center relative overflow-hidden'
      aria-label='Accueil – Restaurant chinois authentique Paris 16e'>
      {/* Background Elements */}
      <BackgroundShapes />
      <DecorativePattern className='top-20 left-10 opacity-20' color='text-red-300' />
      <DecorativePattern className='bottom-20 right-10 opacity-20' color='text-yellow-300' />
      <FoodIllustration type='noodles' className='absolute top-40 right-10 opacity-10 rotate-12' />
      <FoodIllustration
        type='dumpling'
        className='absolute bottom-20 left-10 opacity-10 -rotate-12'
      />

      <div className='container mx-auto px-4 py-16 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[600px]'>
          <div className='space-y-8 animate-fade-in-up order-2 lg:order-1'>
            <div className='space-y-4'>
              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 animate-fade-in-up animation-delay-200'>
                <span className='font-dancing-script text-red-600 block text-6xl lg:text-7xl'>
                  Restaurant Chinois
                </span>
                <span className='block text-red-600'>
                  Authentique à Paris 16<sup>e</sup>
                </span>
              </h1>
              <h2 className='text-3xl font-semibold text-gray-800 animate-fade-in-up animation-delay-400'>
                <span className='font-dancing-script text-4xl text-red-600'>Chez Liqi</span>
                <span className='text-xl text-gray-600 ml-2'>醴琦餐厅</span>
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-600'>
                Découvrez l&apos;authenticité de la cuisine chinoise traditionnelle dans le 16e
                arrondissement de Paris. Depuis 1995, nous préparons avec passion des nouilles et
                raviolis faits maison avec des ingrédients frais, dans un cadre chaleureux au 33 rue
                Chanez.
              </p>
              {/* SEO-enriched hidden paragraph for search crawlers */}
              <p className='sr-only'>
                Chez Liqi est un restaurant chinois authentique situé au 33 rue Chanez, 75016 Paris,
                dans le 16e arrondissement, à proximité du métro Michel Ange Molitor (lignes 9 et
                10). Spécialisé dans les nouilles et raviolis faits maison, nous proposons une
                cuisine chinoise traditionnelle de qualité depuis 1995. Ouvert du lundi au samedi de
                11h30 à 14h30 et de 18h30 à 22h30, et le dimanche de 18h30 à 22h30. Réservation
                recommandée au 07 82 88 67 05.
              </p>
            </div>

            <div className='flex items-center space-x-6 animate-fade-in-up animation-delay-800'>
              <div className='flex items-center space-x-2'>
                <div className='flex' role='img' aria-label='Note de 4.8 sur 5 étoiles'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>
                <span className='font-semibold text-gray-900'>4.8/5</span>
              </div>
              <span className='text-gray-600'>Basé sur plus de 111 avis clients</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up animation-delay-1000'>
              <div className='flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow shadow-slate-300'>
                <ChefHat className='w-6 h-6 text-red-600' aria-hidden='true' />
                <span className='font-medium text-gray-600 '>Cuisine Authentique</span>
              </div>
              <div className='flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow shadow-slate-300'>
                <Clock className='w-6 h-6 text-red-600' aria-hidden='true' />
                <span className='font-medium text-gray-600'>Service midi &amp; soir</span>
              </div>
              <div className='flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow shadow-slate-300'>
                <MapPin className='w-6 h-6 text-red-600' aria-hidden='true' />
                <span className='font-medium text-gray-600'>33 Rue Chanez, Paris 16e</span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1200'>
              <a
                href='tel:0782886705'
                className='w-full sm:w-auto'
                aria-label='Réserver une table par téléphone au 07 82 88 67 05'>
                <Button
                  size='lg'
                  className='bg-red-600 hover:bg-red-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto'>
                  Réserver une table
                </Button>
              </a>
              <a href='#carte' className='w-full sm:w-auto' aria-label='Voir notre carte et menu'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-red-600 text-red-600 hover:bg-red-50 hover:text-red-600 px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-200 w-full sm:w-auto'>
                  Voir la carte
                </Button>
              </a>
            </div>
          </div>

          <div className='relative animate-fade-in-right animation-delay-400 order-1 lg:order-2'>
            <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-stone-50 to-amber-50 group'>
              <LazyImage
                src='/images/hero-interior.webp'
                alt='Intérieur chaleureux du restaurant chinois Chez Liqi dans le 16e arrondissement de Paris avec décoration authentique'
                className='w-full h-full group-hover:scale-105 transition-transform duration-700'
              />

              {/* Subtle overlay for better text contrast on badges */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>

            {/* Ambiance badge */}
            <div className='absolute -top-4 -left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-xl shadow-lg animate-bounce-in animation-delay-800 transform rotate-3'>
              <div className='text-center'>
                <div className='text-sm font-medium'>Ambiance</div>
                <div className='text-lg font-bold font-dancing-script'>Chaleureuse</div>
              </div>
            </div>

            {/* Experience badge */}
            <div className='absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-bounce-in animation-delay-1000 transform -rotate-2 border-l-4 border-red-600'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-red-600 font-dancing-script'>Depuis</div>
                <div className='text-lg font-semibold text-gray-800'>1995</div>
              </div>
            </div>

            {/* Comfort indicator */}
            <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md animate-bounce-in animation-delay-600'>
              <div className='flex items-center space-x-2'>
                <span className='text-lg' aria-hidden='true'>
                  🏮
                </span>
                <span className='text-sm font-medium text-gray-700'>Cadre Authentique</span>
              </div>
            </div>

            {/* Decorative elements that complement the interior */}
            <FoodIllustration
              type='tea'
              className='absolute -top-10 -right-10 opacity-60 rotate-12 scale-75'
            />

            {/* Stone texture accent */}
            <div className='absolute bottom-4 left-4 text-stone-600 opacity-40' aria-hidden='true'>
              <svg width='40' height='40' viewBox='0 0 40 40' fill='currentColor'>
                <path
                  d='M8 8h6v6H8V8zm8 0h6v6h-6V8zm8 0h6v6h-6V8zM8 16h6v6H8v-6zm8 0h6v6h-6v-6zm8 0h6v6h-6v-6zM8 24h6v6H8v-6zm8 0h6v6h-6v-6zm8 0h6v6h-6v-6z'
                  opacity='0.3'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional trust indicators */}
        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-1400'>
          <div className='text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm shadow-slate-300'>
            <div className='text-2xl mb-2' aria-hidden='true'>
              🍜
            </div>
            <div className='font-semibold text-gray-900'>Spécialités</div>
            <div className='text-sm text-gray-600'>Nouilles &amp; Raviolis Maison</div>
          </div>
          <div className='text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm shadow-slate-300'>
            <div className='text-2xl mb-2' aria-hidden='true'>
              👨‍🍳
            </div>
            <div className='font-semibold text-gray-900'>Chef Expérimenté</div>
            <div className='text-sm text-gray-600'>Cuisine Traditionnelle Chinoise</div>
          </div>
          <div className='text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm shadow-slate-300'>
            <div className='text-2xl mb-2' aria-hidden='true'>
              🌿
            </div>
            <div className='font-semibold text-gray-900'>Ingrédients Frais</div>
            <div className='text-sm text-gray-600'>Qualité Premium</div>
          </div>
          <div className='text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm shadow-slate-300'>
            <div className='text-2xl mb-2' aria-hidden='true'>
              🏆
            </div>
            <div className='font-semibold text-gray-900'>Note 4.8/5</div>
            <div className='text-sm text-gray-600'>111+ Avis Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
