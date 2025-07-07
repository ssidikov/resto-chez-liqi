import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Kim S',
    text: 'Definitely a mom and pop style restaurant with amazing Chinese food!  Very fresh and so flavorful.  It doesn’t have a ton of choices but what they do have on the menu is excellent!',
    rating: 5,
  },
  {
    name: 'Victoria Chen',
    text: 'I am a Chinese girl from Fujian China, and this place is absolutely incredible if you are after fresh, authentic, no-frills home-style Chinese food. The food here also won’t make you feel bloated or upset your tummy, and it reminds me of the food my mum would whip up when I got home hungry after school.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            <span className='font-dancing-script text-5xl text-red-600'>
              Ce que disent nos clients
            </span>
          </h2>
          <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                ))}
              </div>
              <span className='text-2xl font-bold text-gray-900'>4.8/5</span>
            </div>
            <span className='text-gray-600'>Plus de 111 avis clients</span>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='hover:shadow-lg bg-gray-100 border-gray-300 transition-shadow duration-300'>
              <CardContent className='p-8'>
                <div className='flex mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>
                <blockquote className='text-gray-600 italic mb-4 text-lg leading-relaxed'>
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <cite className='font-semibold text-gray-900'>- {testimonial.name}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
