import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Menu } from './components/menu'
import { Contact } from './components/contact'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { StructuredData } from './components/structured-data'

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className='min-h-screen'>
        <Header />
        <Hero />
        <About />
        <Menu />
        <Contact />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
