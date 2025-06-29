'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Carte', href: '#menu' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='fixed inset-x-0 top-0 z-50 transition-all duration-300'>
      {/* Liquid Glass Background */}
      <div className='absolute inset-0 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg'></div>
      {/* Main navigation */}
      <nav
        className='relative mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
        aria-label='Global'>
        {' '}
        {/* Logo */}
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5 group'>
            <h1 className='text-4xl lg:text-5xl font-semibold text-white font-dancing drop-shadow-lg group-hover:text-accent transition-colors duration-300'>
              Chez Liqi
            </h1>
          </Link>
        </div>{' '}
        {/* Mobile menu button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Ouvrir le menu principal</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        {/* Desktop navigation */}
        <div className='hidden lg:flex lg:gap-x-8'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-base xl:text-lg font-lora font-medium leading-6 text-white/90 hover:text-white hover:text-accent px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm'>
              {item.name}
            </Link>
          ))}
        </div>{' '}
        {/* Reservation button */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='#reservation'
            className='text-base xl:text-lg bg-primary/80 hover:bg-primary text-white px-6 py-2.5 rounded-full font-lora font-semibold transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 hover:scale-105'>
            Réserver une table
          </Link>
        </div>
      </nav>{' '}
      {/* Mobile menu */}
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50 bg-black/80/50 backdrop-blur-sm' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/10 backdrop-blur-xl p-6 sm:max-w-sm border-l border-white/20 shadow-2xl'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <h1 className='text-3xl font-bold text-white font-dancing drop-shadow-lg'>
                Chez Liqi
              </h1>
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Fermer le menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>{' '}
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-white/20'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-3 text-lg font-lora font-medium leading-7 text-white hover:bg-white/10 hover:text-accent transition-all duration-200'
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='#reservation'
                  className='bg-primary/80 hover:bg-primary text-white px-6 py-3 rounded-full font-lora font-semibold block text-center transition-all duration-300 shadow-lg border border-white/20'
                  onClick={() => setMobileMenuOpen(false)}>
                  Réserver une table
                </Link>
              </div>
              {/* Contact info in mobile menu */}
              <div className='py-6 space-y-4 text-lg font-lora text-white/80'>
                <div className='flex items-center space-x-3 p-3 rounded-lg bg-white/5'>
                  <PhoneIcon className='h-5 w-5 text-accent' />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className='flex items-center space-x-3 p-3 rounded-lg bg-white/5'>
                  <ClockIcon className='h-5 w-5 text-accent' />
                  <span>Mar-Dim: 12h-14h30, 19h-23h</span>
                </div>
                <div className='flex items-center space-x-3 p-3 rounded-lg bg-white/5'>
                  <MapPinIcon className='h-5 w-5 text-accent' />
                  <span>15 Rue de Belleville, Paris 20ème</span>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
