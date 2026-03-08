'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DecorativePattern } from './decorative-pattern'
import Image from 'next/image'

const categories = [
  { id: 'entrees', name: 'Entrées', chinese: '前菜' },
  { id: 'plats', name: 'Plats Principaux', chinese: '主食' },
  { id: 'desserts', name: 'Desserts', chinese: '甜品' },
  { id: 'boissons', name: 'Boissons', chinese: '饮料' },
]

const menuItems = {
  entrees: [
    {
      name: 'Salade aux Légumes',
      chinese: '胡萝卜蔬菜沙拉',
      description: 'Salade fraîche de légumes de saison, vinaigrette maison',
      price: '4€90',
      badges: ['Végétarien'],
      image: '/images/menu/salade-legumes-authentic.webp',
    },
    {
      name: "Salade d'algues",
      chinese: '日式风格沙拉',
      description: 'Algues marines assaisonnées à la sauce sésame',
      price: '4€90',
      badges: ['Végétarien'],
      image: '/images/menu/salade-algues-authentic.webp',
    },
    {
      name: 'Salade de Céleri, cacahuètes et Champignons noirs',
      chinese: '花生木耳芹菜沙拉',
      description: 'Céleri croquant, champignons noirs et cacahuètes',
      price: '5€90',
      badges: ['Végétarien'],
      image: '/images/menu/salade-celeri-champignons-authentic.webp',
    },
    {
      name: 'Concombre mariné au sésame et piment',
      chinese: '凉拌黄瓜',
      description: 'Concombre frais mariné avec sésame et piment doux',
      price: '4€90',
      badges: ['Épicé', 'Végétarien'],
      image: '/images/menu/concombre-sesame-authentic.webp',
    },
    {
      name: 'Tempura de crevettes (4 pièces)',
      chinese: '日式炸虾',
      description: 'Crevettes panées à la japonaise, légères et croustillantes',
      price: '7€90',
      badges: [],
      image: '/images/menu/tempura-crevettes-authentic.webp',
    },
  ],
  plats: [
    {
      name: 'Raviolis et Gyoza (8 pièces)',
      chinese: '饺子类',
      description: 'Raviolis faits maison au choix : légumes, bœuf, ou crevettes',
      price: '7€90',
      badges: ['Signature'],
      image: '/images/menu/raviolis-gyoza-authentic.webp',
    },
    {
      name: 'Raviolis frits aux crevettes',
      chinese: '炸虾饺',
      description: 'Raviolis dorés et croustillants garnis aux crevettes',
      price: '6€90',
      badges: [],
      image: '/images/menu/raviolis-frits-aux-crevettes.webp',
    },
    {
      name: 'Nems Traditionnels (4 pièces)',
      chinese: '春卷',
      description: 'Rouleaux de printemps dorés au choix : poulet, crevettes ou légumes',
      price: '5€90',
      badges: [],
      image: '/images/menu/nems-authentic.webp',
    },
    {
      name: 'Poulet frit croustillant',
      chinese: '香酥脆鸡',
      description: 'Morceaux de poulet marinés et frits, extra croustillants',
      price: '8€00',
      badges: [],
      image: '/images/menu/poulet-frit-premium.webp',
    },
    {
      name: 'Nouilles au Poulet croustillant',
      chinese: '香酥鸡拌面',
      description: 'Nouilles sautées au poulet épicé et légumes croquants',
      price: '11€90',
      badges: ['Signature'],
      image: '/images/menu/nouilles-poulet-piments.webp',
    },
    {
      name: 'Soupe de nouilles et raviolis aux crevettes',
      chinese: '虾肉馄饨面',
      description: 'Bouillon parfumé avec nouilles et raviolis aux crevettes',
      price: '11€90',
      badges: [],
      image: '/images/menu/soupe-raviolis-crevettes-authentic.webp',
    },
    {
      name: 'Nouilles Zha Jiang au bœuf',
      chinese: '牛肉炸酱面',
      description: 'Nouilles traditionnelles avec sauce aux haricots noirs et bœuf',
      price: '11€90',
      badges: [],
      image: '/images/menu/nouilles-zha-jiang-authentic.webp',
    },
    {
      name: 'Nouilles au bouillon pur bœuf',
      chinese: '风味鲜汤牛肉面',
      description: 'Bouillon de bœuf traditionnel de plusieurs heures avec nouilles fraîches',
      price: '13€90',
      badges: ['Signature'],
      image: '/images/menu/bouillon-boeuf-authentic.webp',
    },
    {
      name: 'Nouilles au poulet et piments',
      chinese: '辣椒鸡肉面',
      description: 'Nouilles sautées au poulet épicé et légumes croquants',
      price: '11€90',
      badges: ['Épicé'],
      image: '/images/menu/nouilles-poulet-piments.webp',
    },
    {
      name: 'Raviolis aux crevettes et sauce piquante',
      chinese: '红油虾饺',
      description: 'Raviolis dans un bouillon parfumé aux crevettes et huile pimentée',
      price: '11€90',
      badges: ['Épicé', 'Signature'],
      image: '/images/menu/raviolis-aux-crevettes-et-sauce-piquante.webp',
    },
    {
      name: 'Lamen sautées aux crevettes',
      chinese: '虾仁炒面',
      description: 'Nouilles sautées au wok avec crevettes fraîches et légumes de saison',
      price: '12€90',
      badges: [],
      image: '/images/menu/lamen-sautees-crevettes.webp',
    },
    {
      name: 'Riz sauté aux crevettes et Ananas',
      chinese: '菠萝虾仁炒饭',
      description: 'Riz sauté exotique aux crevettes et ananas frais',
      price: '13€90',
      badges: [],
      image: '/images/menu/riz-sauté-aux-crevettes-et-ananas.webp',
    },
  ],
  desserts: [
    {
      name: 'Ananas frais tranché',
      chinese: '新鲜菠萝',
      description: "Tranches d'ananas frais de saison",
      price: '4€50',
      badges: [],
      image: '/images/ananas-frais-tropical.webp',
    },
    {
      name: 'Nougat Chinois',
      chinese: '芝麻糖',
      description: 'Nougat traditionnel chinois au sésame, croquant et parfumé',
      price: '3€50',
      badges: [],
      image: '/images/nougat-chinois.webp',
    },
    {
      name: 'Glaces Artisanales (1 ou 2 boules)',
      chinese: '冰激凌',
      description: 'Fraise, Vanille, Chocolat, Café, ou Framboise',
      price: '2€50 / 4€50',
      badges: [],
      image: '/images/glaces-artisanales.webp',
    },
  ],
  boissons: [
    {
      name: 'Thé au Jasmin',
      chinese: '茉莉花茶',
      description: 'Thé vert délicatement parfumé aux fleurs de jasmin',
      price: '3€00',
      badges: [],
      image: '/images/the-jasmin-premium.webp',
    },
    {
      name: 'Bière (Tsing Tao / Heineken)',
      chinese: '青岛 / 喜力',
      description: 'Bière chinoise traditionnelle ou classique européenne de 33cl',
      price: '3€90',
      badges: [],
      image: '/images/bieres-asiatiques.webp',
    },
    {
      name: 'Vin Rouge / Vin Rosé (Au verre)',
      chinese: '红酒 / 桃红酒',
      description: 'Sélection soignée de vins français pour accompagner votre repas',
      price: '3€00',
      badges: [],
      image: '/images/vin-rouge-rose-premium.webp',
    },
    {
      name: 'Eaux & Sodas',
      chinese: '矿泉水 / 汽水',
      description: "Evian, Perrier, Coca-Cola, Fanta, Sprite, Jus d'orange",
      price: '2€50',
      badges: [],
      image: '/images/sodas-frais.webp',
    },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('plats')
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

  return (
    <section
      id='carte'
      className='py-24 md:py-32 bg-porcelain relative'
      aria-label='Carte – Menu du restaurant'>
      {/* Subtle Background Elements */}
      <DecorativePattern className='top-0 right-0 opacity-5 pointer-events-none' color='text-ink' />

      <div className='container mx-auto px-6 max-w-7xl relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className='flex flex-col items-center mb-16 md:mb-24 text-center'>
          <span className='text-imperial-red font-semibold tracking-[0.2em] uppercase text-sm mb-4'>
            L&apos;Art de la Table
          </span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-playfair text-ink'>
            Notre Carte <span className='text-imperial-red ml-4 italic'>菜单</span>
          </h2>
        </motion.div>

        {/* Categories Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-8 md:gap-12 mb-16'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setExpandedMobileItem(null)
              }}
              className={`group flex flex-col items-center relative transition-colors duration-500 pb-2 ${
                activeCategory === category.id ? 'text-imperial-red' : 'text-ink/60 hover:text-ink'
              }`}>
              <span className='font-playfair text-xl md:text-2xl mb-1'>{category.name}</span>
              <span className='text-xs uppercase tracking-widest'>{category.chinese}</span>
              {/* Active Underline Indicator */}
              {activeCategory === category.id && (
                <motion.div
                  layoutId='activeCategory'
                  className='absolute bottom-0 left-0 right-0 h-[1px] bg-imperial-red'
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Menu Layout: 2 Columns (Image Left, List Right) */}
        <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-24 items-start'>
          {/* Dynamic Image Display on Left (Visible on lg screens) */}
          <div className='hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-24 lg:top-32 z-10'>
            <div className='aspect-[3/4] w-full relative overflow-hidden bg-ink/5'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={hoveredImage || menuItems[activeCategory as keyof typeof menuItems][0].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className='absolute inset-0'>
                  <Image
                    src={
                      hoveredImage || menuItems[activeCategory as keyof typeof menuItems][0].image
                    }
                    alt='Plat signature du restaurant Chez Liqi'
                    fill
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 40vw'
                  />
                  {/* Subtle elegant border overlay */}
                  <div className='absolute inset-4 border border-white/20 pointer-events-none' />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Menu Items List on Right */}
          <div className='lg:col-span-7 space-y-8 md:space-y-12'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className='flex flex-col'>
                {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                    onMouseEnter={() => setHoveredImage(item.image)}
                    className='group flex flex-col border-b border-ink/10 py-6 lg:cursor-default'>
                    <div
                      className='flex flex-col sm:flex-row justify-between items-start sm:items-end w-full cursor-pointer lg:cursor-default hover:border-imperial-red/50 transition-colors duration-500'
                      onClick={() =>
                        setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)
                      }>
                      <div className='max-w-md pr-4'>
                        <div className='flex items-baseline gap-3 mb-2'>
                          <h3 className='font-playfair text-xl md:text-2xl text-ink group-hover:text-imperial-red transition-colors duration-500'>
                            {item.name}
                          </h3>
                          <span className='text-sm text-ink/40 font-serif'>{item.chinese}</span>
                        </div>
                        <p className='text-ink/60 font-light text-sm md:text-base leading-relaxed'>
                          {item.description}
                        </p>

                        {/* Minimalist Tags */}
                        {item.badges.length > 0 && (
                          <div className='flex gap-3 mt-3'>
                            {item.badges.map((badge, bIdx) => (
                              <span
                                key={bIdx}
                                className={`text-xs uppercase tracking-widest ${
                                  badge === 'Signature'
                                    ? 'text-imperial-red font-semibold'
                                    : 'text-jade'
                                }`}>
                                • {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className='mt-4 sm:mt-0 font-playfair text-2xl text-ink whitespace-nowrap group-hover:text-imperial-red transition-colors duration-500'>
                        {item.price}
                      </div>
                    </div>

                    {/* Mobile Image Dropdown */}
                    <AnimatePresence>
                      {expandedMobileItem === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className='overflow-hidden w-full lg:hidden'>
                          <div className='relative aspect-[4/3] sm:aspect-video w-full border border-ink/10 bg-ink/5'>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className='object-cover'
                              sizes='(max-width: 1024px) 100vw, 50vw'
                            />
                            {/* Subtle elegant border overlay */}
                            <div className='absolute inset-2 sm:inset-4 border border-white/20 pointer-events-none' />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className='mt-24 md:mt-32 text-center flex flex-col items-center'>
          <div className='w-[1px] h-16 bg-imperial-red/30 mb-8' />
          <p className='text-ink/60 font-playfair italic text-xl mb-6'>
            Laissez-nous vous préparer une table
          </p>
          <a
            href='tel:0782886705'
            className='inline-block border border-ink hover:bg-ink hover:text-porcelain text-ink px-10 py-5 uppercase tracking-widest text-sm transition-all duration-500'>
            Réserver au 07 82 88 67 05
          </a>
        </motion.div>
      </div>
    </section>
  )
}
