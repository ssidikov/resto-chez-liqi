'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { LazyImage } from './lazy-image'
import { DecorativePattern } from './decorative-pattern'
import { FoodIllustration } from './food-illustration'
import { WaveDivider } from './wave-divider'

export function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section id='about' className='py-20 bg-white relative' aria-label='À propos de Chez Liqi'>
      <WaveDivider position='top' color='fill-gray-50' />

      {/* Decorative elements */}
      <DecorativePattern className='top-20 right-10 opacity-10' color='text-red-200' />
      <DecorativePattern className='bottom-40 left-10 opacity-10' color='text-yellow-200' />
      <FoodIllustration type='rice' className='absolute top-40 left-5 opacity-10 -rotate-12' />
      <FoodIllustration
        type='dumpling'
        className='absolute bottom-20 right-5 opacity-10 rotate-12'
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div ref={imageRef} className='relative'>
            <div
              className={`aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${
                imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
              <LazyImage
                src='/images/about-sculpture.webp'
                alt="Sculpture en bois traditionnelle représentant l'art et la culture chinoise au restaurant Chez Liqi, Paris 16e arrondissement"
                className='w-full h-full hover:scale-105 transition-transform duration-500'
              />
            </div>
            <FoodIllustration
              type='tea'
              className='absolute -bottom-10 -left-10 opacity-80 -rotate-12 scale-75'
            />
          </div>

          <div className='space-y-6'>
            <div ref={titleRef}>
              <h2
                className={`text-4xl font-bold text-gray-900 mb-2 transition-all duration-1000 ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <span className='font-dancing-script text-5xl text-red-600'>À Propos</span>
                <span className='text-red-600 ml-2'>关于我们</span>
              </h2>
            </div>

            <div
              ref={contentRef}
              className={`space-y-4 text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <p>
                Bienvenue <strong>Chez Liqi</strong>, votre{' '}
                <strong>restaurant chinois authentique</strong> situé au{' '}
                <strong>33 Rue Chanez, dans le 16e arrondissement de Paris</strong> (75016), à
                quelques pas du <strong>métro Michel Ange Molitor</strong> (lignes 9 et 10). Plongez
                dans une ambiance chaleureuse et dégustez des plats traditionnels chinois préparés
                avec des ingrédients frais et de qualité.
              </p>

              <p>
                <strong>Depuis 1995</strong>, notre carte propose une variété de saveurs
                exceptionnelles, des spécialités régionales aux classiques intemporels. Que vous
                soyez amateur de <strong>nouilles sautées maison</strong>, de{' '}
                <strong>raviolis vapeur</strong> ou de plats épicés, vous trouverez forcément votre
                bonheur chez nous. Nos <strong>nouilles et raviolis sont faits maison</strong>{' '}
                chaque jour avec des recettes traditionnelles transmises de génération en
                génération.
              </p>

              <p>
                Notre équipe accueillante vous garantit un service impeccable et une expérience
                culinaire mémorable au cœur du <strong>16e arrondissement</strong>. Nous proposons
                également des <strong>options végétariennes</strong> et des{' '}
                <strong>menus pour les groupes</strong>, permettant à chacun de savourer
                l&apos;authentique cuisine chinoise à Paris. Livraison et plats à emporter également
                disponibles.
              </p>
            </div>

            <div
              className={`grid grid-cols-3 gap-2 sm:gap-4 pt-6 transition-all duration-1000 delay-500 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <div className='text-center transform hover:scale-105 transition-transform duration-200 shadow-sm shadow-slate-300 p-2 sm:p-4 rounded-lg bg-white/80 backdrop-blur-sm w-full'>
                <div className='text-2xl sm:text-3xl mb-1 sm:mb-2' aria-hidden='true'>
                  🥟
                </div>
                <div className='font-semibold text-gray-900 text-xs sm:text-base'>Raviolis</div>
                <div className='text-xs sm:text-sm text-gray-600'>Fait maison</div>
              </div>
              <div className='text-center transform hover:scale-105 transition-transform duration-200 shadow-sm shadow-slate-300 p-2 sm:p-4 rounded-lg bg-white/80 backdrop-blur-sm w-full'>
                <div className='text-2xl sm:text-3xl mb-1 sm:mb-2' aria-hidden='true'>
                  🍜
                </div>
                <div className='font-semibold text-gray-900 text-xs sm:text-base'>Nouilles</div>
                <div className='text-xs sm:text-sm text-gray-600'>Traditionnelles</div>
              </div>
              <div className='text-center transform hover:scale-105 transition-transform duration-200 shadow-sm shadow-slate-300 p-2 sm:p-4 rounded-lg bg-white/80 backdrop-blur-sm w-full'>
                <div className='text-2xl sm:text-3xl mb-1 sm:mb-2' aria-hidden='true'>
                  🏮
                </div>
                <div className='font-semibold text-gray-900 text-xs sm:text-base'>Depuis 1995</div>
                <div className='text-xs sm:text-sm text-gray-600'>Paris 16e</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider position='bottom' color='fill-gray-50' />
    </section>
  )
}
