import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { DecorativePattern } from './decorative-pattern'
import { FoodIllustration } from './food-illustration'
import { WaveDivider } from './wave-divider'
import { EmbeddedMap } from './embedded-map'
// import { GoogleMap } from './google-map' // Uncomment to use full Google Maps integration

export function Contact() {
  return (
    <section id='contact' className='py-20 bg-white relative'>
      <WaveDivider position='top' color='fill-gray-50' />

      {/* Decorative elements */}
      <DecorativePattern className='top-20 right-10 opacity-10' color='text-red-200' />
      <DecorativePattern className='bottom-40 left-10 opacity-10' color='text-yellow-200' />
      <FoodIllustration type='tea' className='absolute top-40 left-5 opacity-10 -rotate-12' />
      <FoodIllustration type='rice' className='absolute bottom-20 right-5 opacity-10 rotate-12' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            <span className='font-dancing-script text-5xl text-red-600'>Nous Trouver</span>
            <span className='text-red-600 ml-2'>联系我们</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Situé au cœur de Paris, notre restaurant vous accueille dans une ambiance chaleureuse
            pour partager les saveurs authentiques de la Chine.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <Card className='bg-gray-100 border-gray-200 '>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='w-6 h-6 text-red-600 mt-1' />
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Adresse</h3>
                    <p className='text-gray-600'>33 Rue Chanez</p>
                    <p className='text-gray-600'>75016 Paris, France</p>
                    <p className='text-sm text-red-600 mt-1'>
                      Métro: Michel Ange Molitor (Lignes 9, 10)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-gray-100 border-gray-200 '>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <Clock className='w-6 h-6 text-red-600 mt-1' />
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Horaires d'ouverture</h3>
                    <div className='space-y-1 text-gray-600'>
                      <p>
                        <span className='font-medium'>Lundi - Samedi</span>
                      </p>
                      <p>11h30 - 14h30, 18h30 - 22h30</p>
                      <p>
                        <span className='font-medium'>Dimanche</span>
                      </p>
                      <p>18h30 - 22h30</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Card className='bg-gray-100 border-gray-200 '>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-3'>
                    <Phone className='w-5 h-5 text-red-600' />
                    <div>
                      <h4 className='font-medium text-gray-900'>Téléphone</h4>
                      <p className='text-gray-600'>07 82 88 67 05</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-gray-100 border-gray-200 '>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-red-600' />
                    <div>
                      <h4 className='font-medium text-gray-900'>Email</h4>
                      <p className='text-gray-600'>contact@chezliqi.fr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className='bg-red-50 border-red-200 '>
              <CardContent className='p-6'>
                <h3 className='font-semibold text-gray-900 mb-2'>Réservation Recommandée</h3>
                <p className='text-gray-600 mb-4'>
                  Pour garantir votre table et éviter l'attente, nous vous conseillons de réserver à
                  l'avance par téléphone, surtout le week-end.
                </p>
                <div className='flex justify-center'>
                  <Button className='bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 transition-all duration-200'>
                    Appeler pour réserver : 07 82 88 67 05
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className='space-y-6'>
            <Card className='rounded-lg border text-card-foreground shadow-sm bg-gray-100 border-gray-200'>
              <CardContent className='p-6 bg-gray-100 shadow-gray-200'>
                <h3 className='font-semibold text-gray-900 mb-4'>Plan Interactif</h3>
                <div className='aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden'>
                  <EmbeddedMap />
                  {/* <GoogleMap /> - Uncomment to use full Google Maps integration with API key */}
                </div>
                <p className='text-sm text-gray-600 mt-2'>33 Rue Chanez, 75016 Paris</p>
                <a
                  href='https://maps.app.goo.gl/GgQqVkqqkMw1ASzs6'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button
                    variant='outline'
                    className='mt-3 w-full bg-transparent transform hover:scale-105 transition-all duration-200 text-black'>
                    Ouvrir dans Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <WaveDivider position='bottom' color='fill-gray-900' />
    </section>
  )
}
