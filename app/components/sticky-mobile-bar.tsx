'use client'

import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling down a bit (e.g., past the initial hero text)
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className='fixed bottom-0 left-0 right-0 z-50 md:hidden bg-ink/95 backdrop-blur-md border-t border-porcelain/10 text-porcelain shadow-2xl safe-area-bottom'>
          <div className='flex items-center justify-between px-6 py-4'>
            <div className='flex flex-col'>
              <span className='font-playfair text-lg'>Réserver une table</span>
              <span className='text-xs uppercase tracking-widest text-muted-gold'>Chez Liqi</span>
            </div>

            <a
              href='tel:0782886705'
              className='flex items-center justify-center gap-2 bg-imperial-red text-porcelain px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-transform active:scale-95 touch-manipulation'
              aria-label='Appeler le restaurant pour réserver'>
              <Phone className='w-4 h-4' />
              Appeler
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
