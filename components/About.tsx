'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='relative py-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60' />
        <div className='absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Content */}
          <div className='space-y-8'>
            <div className='text-center lg:text-left'>
              <h2 className='text-4xl md:text-5xl font-dancing text-primary mb-6 text-glow'>
                À Propos 关于我们
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8 mx-auto lg:mx-0'></div>
            </div>

            <div className='space-y-6 text-lg font-lora leading-relaxed text-gray-400'>
              <p className='animate-fade-in'>
                Bienvenue <span className='font-semibold text-primary'>Chez Liqi</span>, un
                restaurant chinois authentique situé au{' '}
                <span className='font-semibold text-accent'>33 Rue Chanez, 75016 Paris</span>.
                Plongez dans une ambiance chaleureuse et dégustez des plats traditionnels chinois
                préparés avec des ingrédients frais et de qualité.
              </p>

              <p className='animate-slide-up'>
                Notre carte propose une variété de saveurs exceptionnelles, des{' '}
                <span className='font-semibold text-accent'>spécialités régionales</span> aux
                classiques intemporels. Que vous soyez amateur de nouilles sautées, de raviolis
                vapeur ou de plats épicés, vous trouverez forcément votre bonheur chez nous.
              </p>

              <p className='animate-slide-up-delay'>
                Notre <span className='font-semibold text-primary'>équipe accueillante</span> vous
                garantit un service impeccable et une expérience culinaire mémorable. Nous proposons
                également des options végétariennes et des menus pour les groupes, permettant à
                chacun de savourer l&apos;authentique cuisine chinoise au cœur de Paris.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8 animate-slide-up-delay-2'>
              <div className='text-center liquid-glass p-4 rounded-2xl'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>15+</div>
                <div className='text-sm font-lora text-gray-600'>Spécialités</div>
              </div>
              <div className='text-center liquid-glass p-4 rounded-2xl'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>100%</div>
                <div className='text-sm font-lora text-gray-600'>Fait maison</div>
              </div>
              <div className='text-center liquid-glass p-4 rounded-2xl'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>7j/7</div>
                <div className='text-sm font-lora text-gray-600'>Ouvert</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className='relative'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Main large image */}
              <div className='col-span-2 relative h-80 rounded-3xl overflow-hidden liquid-glass-card group'>
                <Image
                  src='/hero.jpg'
                  alt='Chef Liqi preparing dumplings'
                  fill
                  className='object-cover opacity-90'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
              </div>

              {/* Two smaller images */}
              <div className='relative h-48 rounded-3xl overflow-hidden liquid-glass-card group'>
                <Image src='/pictures/1.png' alt='Fresh dumplings' fill className='object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>

              <div className='relative h-48 rounded-3xl overflow-hidden liquid-glass-card group'>
                <Image
                  src='/pictures/8_1.png'
                  alt='Traditional kitchen'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>
            </div>

            {/* Floating decorative element */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse'></div>
            <div
              className='absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse'
              style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
