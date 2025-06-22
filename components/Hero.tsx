'use client'

import { useState, useEffect } from 'react'
import { StarIcon, ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { PlayIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const highlights = [
  { icon: StarIcon, text: 'Chef étoilé Michelin' },
  { icon: ClockIcon, text: 'Ouvert 7j/7' },
  { icon: MapPinIcon, text: 'Cœur de Paris' },
]

const testimonials = [
  'Une expérience culinaire exceptionnelle !',
  'Le meilleur restaurant français de Paris',
  'Service impeccable et cuisine raffinée',
  'Un voyage gastronomique inoubliable',
]

export default function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-0'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10' />
        <Image
          src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          alt='Restaurant ambiance'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Main Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center'>
        <div className='space-y-16'>
          {/* Subtitle */}
          <p className='text-accent text-lg font-lora font-medium tracking-wide uppercase animate-fade-in'>
            Restaurant Gastronomique
          </p>

          {/* Main Title */}
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-dancing text-white leading-tight animate-slide-up'>
            Chez Liqi
          </h1>

          {/* Description */}
          <p className='text-xl md:text-2xl font-lora text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay'>
            Découvrez une cuisine française authentique et raffinée dans un cadre élégant au cœur de
            Paris. Une expérience gastronomique unique vous attend.
          </p>

          {/* Highlights */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 animate-slide-up-delay-2'>
            {highlights.map((item, index) => (
              <div key={index} className='flex items-center space-x-2 text-white'>
                <item.icon className='h-5 w-5 text-accent' />
                <span className='text-sm md:text-base font-lora font-medium'>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Slider */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-2xl animate-fade-in-delay'>
            <div className='flex justify-center mb-4'>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className='h-5 w-5 text-accent' />
              ))}
            </div>{' '}
            <p className='text-white text-lg font-lora italic transition-all duration-500'>
              &ldquo;{testimonials[currentTestimonial]}&rdquo;
            </p>
            <div className='flex justify-center mt-4 space-x-2'>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3'>
            <Link
              href='#reservation'
              className='bg-primary hover:bg-hover text-white px-8 py-4 rounded-full font-lora font-semibold text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105'>
              Réserver une table
            </Link>
            <Link
              href='#menu'
              className='bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-lora font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
              Voir le menu
            </Link>
          </div>

          {/* Video Play Button */}
          <div className='animate-bounce-slow'>
            <button className='group bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 transition-all duration-300 transform hover:scale-110'>
              <PlayIcon className='h-8 w-8 text-white group-hover:text-accent transition-colors duration-300' />
            </button>
            <p className='text-white/80 text-sm font-lora mt-2'>Découvrir notre restaurant</p>
          </div>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className='absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hidden lg:block animate-slide-in-right'>        <h3 className='font-dancing text-xl font-semibold text-gray-900 mb-4'>Réservations</h3>
        <div className='space-y-3 text-sm font-lora'>
          <div className='flex items-center space-x-3'>
            <PhoneIcon className='h-4 w-4 text-primary' />
            <span>+33 1 23 45 67 89</span>
          </div>
          <div className='flex items-center space-x-3'>
            <ClockIcon className='h-4 w-4 text-primary' />
            <span>Mar-Dim: 12h-14h, 19h-22h</span>
          </div>
          <div className='flex items-center space-x-3'>
            <MapPinIcon className='h-4 w-4 text-primary' />
            <span>123 Rue de la Gastronomie</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse' />
        </div>
      </div>
    </section>
  )
}
