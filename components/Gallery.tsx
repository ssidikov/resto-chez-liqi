'use client'

import { useState } from 'react'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Raviolis frais faits maison',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Nouilles traditionnelles chinoises',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Ambiance chaleureuse du restaurant',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Tempura de crevettes croustillantes',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Chef en action dans la cuisine',
    category: 'kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Nems dorés et croustillants',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Salle de restaurant élégante',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Desserts asiatiques raffinés',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Cérémonie du thé traditionnel',
    category: 'drinks'
  }
]

const categories = [
  { id: 'all', name: 'Tout voir', icon: '🏮' },
  { id: 'food', name: 'Plats', icon: '🥟' },
  { id: 'interior', name: 'Restaurant', icon: '🏛️' },
  { id: 'kitchen', name: 'Cuisine', icon: '👨‍🍳' },
  { id: 'drinks', name: 'Boissons', icon: '🍵' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id='gallery' className='relative py-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.1)_0%,transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.1)_0%,transparent_50%)]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-dancing text-white mb-4 text-glow'>
            Galerie 画廊
          </h2>
          <p className='text-lg font-lora text-gray-300 max-w-3xl mx-auto'>
            Découvrez l&apos;atmosphère chaleureuse de notre restaurant et la beauté de nos créations culinaires 
            à travers cette sélection de photos qui racontent notre histoire.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group category-button flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 relative z-10 ${
                activeCategory === category.id
                  ? 'bg-primary/80 backdrop-blur-xl text-white shadow-lg scale-105 border border-primary/30 liquid-glow'
                  : 'bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:text-accent shadow-md hover:shadow-lg hover:scale-102 border border-white/20'
              }`}>
              <span className='text-xl'>{category.icon}</span>
              <span className='font-lora font-medium'>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className='group relative liquid-glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20'
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'cardReveal 0.8s ease-out both',
              }}
              onClick={() => setSelectedImage(index)}>
              
              <div className='relative aspect-square'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
                
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                
                {/* Caption */}
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translateY-full group-hover:translateY-0 transition-transform duration-300'>
                  <p className='font-lora text-sm leading-relaxed'>{image.alt}</p>
                </div>

                {/* Zoom indicator */}
                <div className='absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-gray-300 font-lora mb-6 text-lg'>
            Venez découvrir par vous-même l&apos;expérience unique que nous vous réservons
          </p>
          <button className='glass-button-large px-8 py-4 rounded-full font-lora font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
            Réserver votre table
          </button>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='relative max-w-4xl max-h-full'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10'>
              <XMarkIcon className='h-8 w-8' />
            </button>
            
            <div className='relative rounded-2xl overflow-hidden'>
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className='max-h-[80vh] w-auto object-contain'
              />
              
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                <p className='text-white font-lora text-center'>{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
