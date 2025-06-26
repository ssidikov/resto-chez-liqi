'use client'

import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary/90 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 transform hover:scale-110 liquid-glass border border-white/20'
          aria-label='Retour en haut'>
          <ChevronUpIcon className='h-6 w-6 mx-auto' />
        </button>
      )}
    </>
  )
}
