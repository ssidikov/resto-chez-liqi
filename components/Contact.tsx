'use client'

import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <section id='contact' className='relative py-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50/30 to-amber-50/20' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.1)_0%,transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.1)_0%,transparent_50%)]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-dancing text-primary mb-4 text-glow'>
            Nous Trouver 联系我们
          </h2>
          <p className='text-lg font-lora text-gray-700 max-w-3xl mx-auto'>
            Situé au cœur de Paris, notre restaurant vous accueille dans une ambiance chaleureuse 
            pour partager les saveurs authentiques de la Chine.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Address */}
            <div className='liquid-glass p-8 rounded-3xl group hover:shadow-lg transition-all duration-300'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  <MapPinIcon className='h-6 w-6 text-primary' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-lora font-semibold text-gray-800 mb-2'>Adresse</h3>
                  <p className='text-gray-600 font-lora leading-relaxed'>
                    123 Rue de la Paix<br />
                    75001 Paris, France<br />
                    Métro: Opéra (Lignes 3, 7, 8)
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className='liquid-glass p-8 rounded-3xl group hover:shadow-lg transition-all duration-300'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors'>
                  <ClockIcon className='h-6 w-6 text-accent' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-lora font-semibold text-gray-800 mb-4'>Horaires d&apos;ouverture</h3>
                  <div className='space-y-2 text-gray-600 font-lora'>
                    <div className='flex justify-between'>
                      <span>Lundi - Vendredi</span>
                      <span className='font-medium'>12h00 - 14h30, 19h00 - 22h30</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Samedi - Dimanche</span>
                      <span className='font-medium'>12h00 - 15h00, 19h00 - 23h00</span>
                    </div>
                    <div className='flex justify-between text-primary font-medium'>
                      <span>Service continu</span>
                      <span>Samedi & Dimanche</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='liquid-glass p-6 rounded-3xl group hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center space-x-3 mb-3'>
                  <div className='w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                    <PhoneIcon className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-lg font-lora font-semibold text-gray-800'>Téléphone</h3>
                </div>
                <p className='text-gray-600 font-lora'>+33 1 42 96 XX XX</p>
              </div>

              <div className='liquid-glass p-6 rounded-3xl group hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center space-x-3 mb-3'>
                  <div className='w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors'>
                    <EnvelopeIcon className='h-5 w-5 text-accent' />
                  </div>
                  <h3 className='text-lg font-lora font-semibold text-gray-800'>Email</h3>
                </div>
                <p className='text-gray-600 font-lora'>contact@chezliqi.fr</p>
              </div>
            </div>

            {/* Reservation CTA */}
            <div className='liquid-glass p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10'>
              <div className='text-center'>
                <h3 className='text-2xl font-dancing text-primary mb-4'>Réservation Recommandée</h3>
                <p className='text-gray-600 font-lora mb-6'>
                  Pour garantir votre table et éviter l&apos;attente, nous vous conseillons 
                  de réserver à l&apos;avance, surtout le week-end.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <button className='glass-button-large px-6 py-3 rounded-full font-lora font-semibold transition-all duration-300 transform hover:scale-105'>
                    Réserver par téléphone
                  </button>
                  <button className='border border-primary/30 text-primary px-6 py-3 rounded-full font-lora font-semibold hover:bg-primary/10 transition-all duration-300'>
                    Réserver en ligne
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className='space-y-8'>
            {/* Map placeholder */}
            <div className='liquid-glass rounded-3xl overflow-hidden h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group hover:shadow-lg transition-all duration-300'>
              <div className='text-center text-gray-500'>
                <MapPinIcon className='h-16 w-16 mx-auto mb-4 text-primary/60' />
                <h3 className='text-xl font-lora font-semibold mb-2'>Plan Interactif</h3>
                <p className='font-lora'>123 Rue de la Paix, 75001 Paris</p>
                <p className='text-sm mt-2 font-lora'>Cliquez pour ouvrir dans Google Maps</p>
              </div>
            </div>

            {/* Reviews Preview */}
            <div className='liquid-glass p-8 rounded-3xl'>
              <h3 className='text-xl font-lora font-semibold text-gray-800 mb-6 text-center'>
                Ce que disent nos clients
              </h3>
              
              <div className='space-y-6'>
                <div className='text-center'>
                  <div className='flex justify-center mb-3'>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className='h-5 w-5 text-accent' />
                    ))}
                  </div>
                  <p className='text-gray-600 font-lora italic leading-relaxed'>
                    &quot;Les meilleurs raviolis de Paris ! L&apos;accueil est chaleureux 
                    et l&apos;authenticité des plats nous transporte directement en Chine.&quot;
                  </p>
                  <p className='text-sm text-gray-500 font-lora mt-3'>- Marie L.</p>
                </div>

                <div className='border-t border-gray-200 pt-6'>
                  <div className='flex justify-center mb-3'>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className='h-5 w-5 text-accent' />
                    ))}
                  </div>
                  <p className='text-gray-600 font-lora italic leading-relaxed text-center'>
                    &quot;Un voyage culinaire exceptionnel ! Le service est impeccable 
                    et chaque plat est une découverte.&quot;
                  </p>
                  <p className='text-sm text-gray-500 font-lora mt-3 text-center'>- Pierre M.</p>
                </div>
              </div>

              <div className='text-center mt-8'>
                <div className='text-3xl font-dancing text-primary font-bold mb-2'>4.8/5</div>
                <div className='text-sm font-lora text-gray-600'>Plus de 500 avis clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
