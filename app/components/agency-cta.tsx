'use client'

import { useEffect, useState } from 'react'

export function AgencyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Only show after a slight delay to not distract from initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Track scroll to avoid overlapping sticky mobile bar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <a
      href='https://sidikoff.com'
      target='_blank'
      rel='noopener noreferrer'
      className={`fixed right-4 md:bottom-6 md:right-6 z-40 group flex items-center text-center pr-2 py-1.5 pl-3 bg-ink/80 hover:bg-ink backdrop-blur-md border border-white/10 hover:border-white/30 rounded-full shadow-lg transition-all duration-500 ease-out md:mb-0
        ${isScrolled ? 'bottom-4 mb-[76px]' : 'bottom-4 mb-0'}`}
      aria-label='Site web créé par Sidikoff Digital'>
      <span className='text-[10px] uppercase tracking-widest text-white/70 group-hover:text-white font-medium transition-colors mr-2'>
        Site par
      </span>
      <span className='text-xs font-playfair font-bold text-porcelain group-hover:text-muted-gold transition-colors'>
        SIDIKOFF
      </span>
    </a>
  )
}
