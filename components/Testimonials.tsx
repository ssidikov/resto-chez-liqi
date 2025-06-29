'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Marie Laurent',
    location: 'Paris 8ème',
    rating: 5,
    text: 'Les meilleurs raviolis de Paris ! L&apos;authenticité des saveurs nous transporte directement en Chine. Le service est impeccable et l&apos;ambiance chaleureuse.',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Pierre Martin',
    location: 'Neuilly-sur-Seine',
    rating: 5,
    text: 'Un voyage culinaire extraordinaire ! Chaque plat est une découverte. Les nouilles maison sont absolument délicieuses. Je recommande vivement !',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Sophie Chen',
    location: 'Paris 11ème',
    rating: 5,
    text: 'En tant que chinoise, je peux confirmer que c&apos;est le restaurant le plus authentique de Paris. Les saveurs me rappellent la cuisine de ma grand-mère.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Jean Dubois',
    location: 'Paris 7ème',
    rating: 5,
    text: 'Accueil chaleureux, cuisine exceptionnelle et prix très raisonnables. C&apos;est devenu notre restaurant chinois de référence à Paris.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
]

export default function Testimonials() {
  return (
    <section className='relative py-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-black/80/80'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-dancing text-white mb-4 text-glow'>
            Témoignages 客户评价
          </h2>
          <p className='text-lg font-lora text-gray-300 max-w-3xl mx-auto'>
            Découvrez ce que nos clients pensent de leur expérience culinaire chez nous. Leurs
            sourires et leur satisfaction sont notre plus belle récompense.
          </p>
        </div>

        {/* Overall Rating */}
        <div className='text-center mb-16'>
          <div className='liquid-glass inline-block px-8 py-6 rounded-3xl'>
            <div className='flex items-center justify-center mb-4'>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className='h-8 w-8 text-accent mx-1' />
              ))}
            </div>
            <div className='text-4xl font-dancing text-white font-bold mb-2'>4.8/5</div>
            <div className='text-gray-300 font-lora'>Basé sur plus de 111 avis clients</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className='liquid-glass-card p-8 rounded-3xl group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500'
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'cardReveal 0.8s ease-out both',
              }}>
              {/* Stars */}
              <div className='flex items-center mb-6'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className='h-5 w-5 text-accent mr-1' />
                ))}
              </div>

              {/* Quote */}
              <blockquote className='text-gray-300 font-lora leading-relaxed text-lg mb-6 italic'>
                &quot;{testimonial.text}&quot;
              </blockquote>

              {/* Author */}
              <div className='flex items-center space-x-4'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent/30'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <div className='text-white font-lora font-semibold group-hover:text-accent transition-colors'>
                    {testimonial.name}
                  </div>
                  <div className='text-gray-400 font-lora text-sm'>{testimonial.location}</div>
                </div>
              </div>

              {/* Decorative element */}
              <div className='absolute top-4 right-4 text-6xl text-accent/10 font-serif leading-none'>
                &ldquo;
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-gray-300 font-lora mb-8 text-lg'>
            Rejoignez nos clients satisfaits et vivez une expérience culinaire inoubliable
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='glass-button-large px-8 py-4 rounded-full font-lora font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
              Réserver maintenant
            </button>
            <button className='border border-white/30 text-white px-8 py-4 rounded-full font-lora font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300'>
              Voir plus d&apos;avis
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className='absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse'></div>
      <div
        className='absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse'
        style={{ animationDelay: '1.5s' }}></div>
    </section>
  )
}
