'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='relative py-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50/30 to-amber-50/20' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.1)_0%,transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.1)_0%,transparent_50%)]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Content */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl md:text-5xl font-dancing text-primary mb-6 text-glow'>
                Notre Histoire 我们的故事
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8'></div>
            </div>

            <div className='space-y-6 text-lg font-lora leading-relaxed text-gray-700'>
              <p className='animate-fade-in'>
                Depuis <span className='font-semibold text-primary'>1995</span>, le Restaurant Chez Liqi 
                vous accueille dans le cœur de Paris pour un voyage culinaire authentique vers la Chine. 
                Notre famille partage avec vous les secrets de la cuisine traditionnelle chinoise, 
                transmis de génération en génération.
              </p>
              
              <p className='animate-slide-up'>
                Spécialisés dans les <span className='font-semibold text-accent'>raviolis faits maison</span> et 
                les nouilles fraîches, nous utilisons uniquement des ingrédients de première qualité 
                pour créer des plats qui honorent nos traditions ancestrales tout en séduisant 
                les palais parisiens.
              </p>

              <p className='animate-slide-up-delay'>
                Chef Liqi, originaire de Pékin, apporte plus de <span className='font-semibold text-primary'>30 ans d&apos;expérience</span> 
                dans l&apos;art culinaire chinois. Chaque plat est préparé avec passion et respect 
                des techniques traditionnelles pour vous offrir une expérience gastronomique inoubliable.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8 animate-slide-up-delay-2'>
              <div className='text-center liquid-glass p-4 rounded-2xl'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>30+</div>
                <div className='text-sm font-lora text-gray-600'>Années d&apos;expérience</div>
              </div>
              <div className='text-center liquid-glass p-4 rounded-2xl'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>1000+</div>
                <div className='text-sm font-lora text-gray-600'>Clients satisfaits</div>
              </div>
              <div className='text-center liquid-glass p-4 rounded-2xl'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>50+</div>
                <div className='text-sm font-lora text-gray-600'>Spécialités maison</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className='relative'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Main large image */}
              <div className='col-span-2 relative h-80 rounded-3xl overflow-hidden liquid-glass-card group'>
                <Image
                  src='https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Chef Liqi preparing dumplings'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
                <div className='absolute bottom-6 left-6 text-white'>
                  <h3 className='font-dancing text-2xl mb-2'>Chef Liqi</h3>
                  <p className='font-lora text-sm opacity-90'>Maître de la cuisine traditionnelle</p>
                </div>
              </div>

              {/* Two smaller images */}
              <div className='relative h-48 rounded-3xl overflow-hidden liquid-glass-card group'>
                <Image
                  src='https://images.unsplash.com/photo-1563379091553-5003d4b0a9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                  alt='Fresh dumplings'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>
              
              <div className='relative h-48 rounded-3xl overflow-hidden liquid-glass-card group'>
                <Image
                  src='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                  alt='Traditional kitchen'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>
            </div>

            {/* Floating decorative element */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse'></div>
            <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse' style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
