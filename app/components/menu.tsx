'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LazyImage } from './lazy-image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { DecorativePattern } from './decorative-pattern'
import { FoodIllustration } from './food-illustration'

const categories = [
  { id: 'entrees', name: 'Entrées', icon: '🥟', chinese: '前菜' },
  { id: 'plats', name: 'Plats', icon: '🍛', chinese: '主食' },
  { id: 'desserts', name: 'Desserts', icon: '🥮', chinese: '甜品' },
  { id: 'boissons', name: 'Boissons', icon: '🍵', chinese: '饮料' },
]

const menuItems = {
  entrees: [
    {
      name: 'Salade aux Légumes',
      chinese: '胡萝卜蔬菜沙拉',
      english: 'Vegetable salad',
      description: 'Salade fraîche de légumes de saison, vinaigrette maison',
      price: '4€90',
      badges: ['🌱 Végé'],
      image: '/images/menu/salade-legumes-authentic.webp',
    },
    {
      name: "Salade d'algues",
      chinese: '日式风格沙拉',
      english: 'Seaweed salad (Japanese style)',
      description: 'Algues marines assaisonnées à la sauce sésame',
      price: '4€90',
      badges: ['Populaire', '🌱 Végé'],
      image: '/images/menu/salade-algues-authentic.webp',
    },
    {
      name: 'Salade de Céleri aux cacahuètes et Champignons noirs',
      chinese: '花生木耳芹菜沙拉',
      english: 'Celery salad with peanuts and black fungus',
      description: 'Céleri croquant, champignons noirs et cacahuètes',
      price: '5€90',
      badges: ['🌱 Végé'],
      image: '/images/menu/salade-celeri-champignons-authentic.webp',
    },
    {
      name: 'Concombre mariné au sésame, piment',
      chinese: '凉拌黄瓜',
      english: 'Marinated cucumber with sesame and chili',
      description: 'Concombre frais mariné avec sésame et piment doux',
      price: '4€90',
      badges: ['Épicé', '🌱 Végé'],
      image: '/images/menu/concombre-sesame-authentic.webp',
    },
    {
      name: 'Tempura crevettes 4 pièces',
      chinese: '日式炸虾',
      english: 'Shrimp tempura (4 pcs)',
      description: 'Crevettes panées à la japonaise, légères et croustillantes',
      price: '7€90',
      badges: ['Populaire'],
      image: '/images/menu/tempura-crevettes-authentic.webp',
    },
  ],
  plats: [
    {
      name: 'Raviolis et Gyoza 8 pièces',
      chinese: '饺子类',
      english: 'Assorted dumplings and gyoza (8 pcs)',
      description:
        'Raviolis traditionnels au choix : Gyoza aux légumes, Raviolis au bœuf, Raviolis aux crevettes',
      price: '7€90',
      badges: ['Fait maison'],
      image: '/images/menu/raviolis-gyoza-authentic.webp',
    },
    {
      name: 'Raviolis frits aux crevettes',
      chinese: '炸虾饺',
      english: 'Fried shrimp dumplings',
      description: 'Raviolis dorés et croustillants garnis aux crevettes',
      price: '6€90',
      badges: ['Populaire'],
      image: '/images/menu/raviolis-frits-aux-crevettes.webp',
    },
    {
      name: 'Nems 4 pièces',
      chinese: '春卷',
      english: 'Spring rolls (4 pcs)',
      description: 'Rouleaux de printemps dorés au choix : poulet, crevettes ou légumes',
      price: '5€90',
      badges: ['Populaire'],
      image: '/images/menu/nems-authentic.webp',
    },
    {
      name: 'Poulet frit croustillant',
      chinese: '香酥脆鸡',
      english: 'Crispy fried chicken',
      description: 'Morceaux de poulet marinés et frits, extra croustillants',
      price: '8€00',
      badges: [],
      image: '/images/menu/poulet-frit-premium.webp',
    },
    {
      name: 'Nouilles au Poulet croustillant',
      chinese: '香酥鸡拌面',
      english: 'Noodles with crispy chicken',
      description: 'Nouilles sautées au poulet épicé et légumes croquants',
      price: '11€90',
      badges: [],
      image: '/images/menu/nouilles-poulet-piments.webp',
    },
    {
      name: 'Soupe de nouilles et de raviolis aux crevettes',
      chinese: '虾肉馄饨面',
      english: 'Shrimp dumpling noodle soup',
      description: 'Bouillon parfumé avec nouilles et raviolis aux crevettes',
      price: '11€90',
      badges: ['Populaire'],
      image: '/images/menu/soupe-raviolis-crevettes-authentic.webp',
    },
    {
      name: 'Nouilles Zha Jiang au bœuf',
      chinese: '牛肉炸酱面',
      english: 'Beef Zha Jiang noodles',
      description: 'Nouilles traditionnelles avec sauce aux haricots noirs et bœuf',
      price: '11€90',
      badges: [],
      image: '/images/menu/nouilles-zha-jiang-authentic.webp',
    },
    {
      name: 'Nouilles au bouillon pur bœuf',
      chinese: '风味鲜汤牛肉面',
      english: 'Noodles in pure beef broth',
      description: 'Bouillon de bœuf traditionnel avec nouilles fraîches',
      price: '12€90',
      badges: [],
      image: '/images/menu/bouillon-boeuf-authentic.webp',
    },
    {
      name: 'Nouilles au poulet et piments',
      chinese: '辣椒鸡肉面',
      english: 'Spicy chicken noodles',
      description: 'Nouilles sautées au poulet épicé et légumes croquants',
      price: '11€90',
      badges: ['Épicé'],
      image: '/images/menu/nouilles-poulet-piments.webp',
    },
    {
      name: 'Raviolis aux crevettes et sauce piquante',
      chinese: '红油虾饺',
      english: 'Spicy shrimp dumplings',
      description: 'Raviolis dans un bouillon parfumé aux crevettes et sauce épicée',
      price: '11€90',
      badges: ['Épicé', 'Populaire'],
      image: '/images/menu/raviolis-aux-crevettes-et-sauce-piquante.webp',
    },
    {
      name: 'Nouilles style Zha Jiang aux légumes',
      chinese: '杂酱面',
      english: 'Zha Jiang noodles with vegetables',
      description: 'Nouilles traditionnelles avec sauce aux haricots noirs',
      price: '10€90',
      badges: ['Populaire', '🌱 Végé'],
      image: '/images/menu/nouilles-zha-jiang-detail.webp',
    },
    {
      name: 'Lamen sautées aux crevettes',
      chinese: '虾仁炒面',
      english: 'Stir-fried noodles with shrimp',
      description: 'Nouilles sautées avec crevettes fraîches et légumes de saison',
      price: '12€90',
      badges: [],
      image: '/images/menu/lamen-sautees-crevettes.webp',
    },
    {
      name: 'Lamen sautées aux légumes et aux œufs',
      chinese: '鸡蛋素炒面',
      english: 'Stir-fried noodles with vegetables and egg',
      description: 'Nouilles sautées avec œufs et légumes de saison',
      price: '10€90',
      badges: ['🌱 Végé'],
      image: '/images/menu/Lamen-sautées-aux-légumes-et-aux-œufs.webp',
    },
    {
      name: 'Riz sauté aux crevettes et Ananas',
      chinese: '菠萝虾仁炒饭',
      english: 'Pineapple fried rice with shrimp',
      description: 'Riz sauté exotique aux crevettes et ananas frais',
      price: '13€90',
      badges: [],
      image: '/images/menu/riz-sauté-aux-crevettes-et-ananas.webp',
    },
    {
      name: 'Riz sauté au poulet croustillant',
      chinese: '香酥鸡炒饭',
      english: 'Fried rice with crispy chicken',
      description: 'Riz sauté avec morceaux de poulet croustillant',
      price: '10€90',
      badges: [],
      image: '/images/menu/riz-saute-poulet-premium.webp',
    },
  ],
  desserts: [
    {
      name: 'Ananas frais',
      chinese: '新鲜菠萝',
      english: 'Fresh pineapple slices',
      description: "Tranches d'ananas frais de saison",
      price: '4€50',
      badges: ['🌱 Végé'],
      image: '/images/ananas-frais-tropical.webp',
    },
    {
      name: 'Nougat Chinois',
      chinese: '芝麻糖',
      english: 'Chinese sesame nougat',
      description: 'Nougat traditionnel chinois au sésame',
      price: '3€50',
      badges: ['🌱 Végé'],
      image: '/images/nougat-chinois.webp',
    },
    {
      name: 'Glaces',
      chinese: '冰激凌',
      english: 'Ice cream (1 or 2 scoops)',
      description:
        'Sélection de glaces artisanales - 1 boule ou 2 boules. Parfums: Fraise/Vanille/Chocolat/Café/Framboise',
      price: '2€50 / 4€50',
      badges: ['🌱 Végé'],
      image: '/images/glaces-artisanales.webp',
    },
  ],
  boissons: [
    {
      name: 'Thé au Jasmin',
      chinese: '茉莉花茶',
      english: 'Jasmine tea',
      description: 'Thé vert parfumé aux fleurs de jasmin',
      price: '3€90',
      badges: [],
      image: '/images/the-jasmin-premium.webp',
    },
    {
      name: 'Café',
      chinese: '咖啡',
      english: 'Coffee',
      description: 'Café fraîchement préparé',
      price: '2€50',
      badges: [],
      image: '/images/cafe-premium.webp',
    },
    {
      name: 'Perrier 33cl',
      chinese: '气泡水',
      english: 'Sparkling water',
      description: 'Eau gazeuse française rafraîchissante',
      price: '2€50',
      badges: ['🌱 Végé'],
      image: '/images/perrier-eau-gazeuse.webp',
    },
    {
      name: 'Coca / Coca Zéro / Fanta / Sprite',
      chinese: '可乐类',
      english: 'Soft drinks',
      description: 'Sodas internationaux bien frais',
      price: '2€50',
      badges: ['🌱 Végé'],
      image: '/images/sodas-frais.webp',
    },
    {
      name: 'Bière (Tsing Tao / Heineken)',
      chinese: '青岛 / 喜力',
      english: 'Beer (Chinese or European)',
      description: 'Bière chinoise traditionnelle ou européenne',
      price: '3€90',
      badges: ['Populaire'],
      image: '/images/bieres-asiatiques.webp',
    },
    {
      name: 'Evian 50cl',
      chinese: '矿泉水',
      english: 'Still water',
      description: 'Eau minérale naturelle',
      price: '2€50',
      badges: ['🌱 Végé'],
      image: '/images/evian-eau-minerale.webp',
    },
    {
      name: "Jus d'orange",
      chinese: '橙汁',
      english: 'Orange juice',
      description: "Jus d'orange frais pressé",
      price: '2€50',
      badges: ['🌱 Végé'],
      image: '/images/jus-orange-frais.webp',
    },
    {
      name: 'Vin Rouge / Vin Rosé',
      chinese: '红酒 / 桃红酒',
      english: 'Red wine / Rosé wine',
      description: 'Sélection de vins français',
      price: '3€00',
      badges: [],
      image: '/images/vin-rouge-rose-premium.webp',
    },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('entrees')
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: menuRef, isVisible: menuVisible } = useScrollAnimation()

  return (
    <section id='carte' className='py-20 bg-gray-50 relative'>
      {/* Decorative elements */}
      <DecorativePattern className='top-20 left-10 opacity-10' color='text-red-300' />
      <DecorativePattern className='bottom-20 right-10 opacity-10' color='text-yellow-300' />
      <FoodIllustration type='noodles' className='absolute top-40 right-5 opacity-10 rotate-12' />
      <FoodIllustration
        type='dumpling'
        className='absolute bottom-40 left-5 opacity-10 -rotate-12'
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div ref={titleRef} className='text-center mb-12'>
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <span className='font-dancing-script text-5xl text-red-600'>Notre Carte</span>
            <span className='text-red-600 ml-2'>菜单</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Spécialités de raviolis et nouilles fait maison. Découvrez nos recettes traditionnelles
            chinoises préparées avec des ingrédients frais et authentiques.
          </p>
        </div>

        {/* Category Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`px-6 py-3 bg-white transform min-w-52 hover:scale-105 transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'border-red-200 text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
              onClick={() => setActiveCategory(category.id)}>
              <span className='mr-2'>{category.icon}</span>
              {category.name} <span className='ml-1 text-sm'>{category.chinese}</span>
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div ref={menuRef} className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <Card
              key={index}
              className={`border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden transform bg-white group h-full flex flex-col ${
                menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}>
              {/* Image Section - Fixed Height */}
              <div className='aspect-[4/3] overflow-hidden relative flex-shrink-0'>
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Floating price badge */}
                <div className='absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                  {item.price}
                </div>
              </div>

              {/* Content Section - Flexible Height */}
              <CardContent className='p-6 flex flex-col flex-grow'>
                {/* Badges Section - Fixed Height */}
                <div className='flex flex-wrap gap-2 mb-4 min-h-[28px]'>
                  {item.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      variant={badge === 'Populaire' ? 'default' : 'secondary'}
                      className={`text-xs ${
                        badge === 'Populaire'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : badge === 'Épicé'
                          ? 'bg-orange-100 text-orange-800 border-orange-200'
                          : badge === '🌱 Végé'
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : badge === 'Fait maison'
                          ? 'bg-blue-100 text-blue-800 border-blue-200'
                          : ''
                      }`}>
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Title Section - Fixed Height */}
                <div className='mb-4 min-h-[80px] flex flex-col justify-start'>
                  <h3 className='font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-2'>
                    {item.name}
                  </h3>
                  <p className='text-sm text-red-600 font-medium font-dancing-script mb-1'>
                    {item.chinese}
                  </p>
                  <p className='text-sm text-gray-500 italic'>{item.english}</p>
                </div>

                {/* Description Section - Flexible Height */}
                <div className='flex-grow mb-4'>
                  <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                    {item.description}
                  </p>
                </div>

                {/* Price Section - Fixed Height */}
                <div className='flex justify-center items-center pt-4 border-t border-slate-200 mt-auto'>
                  <span className='text-2xl font-bold text-red-600 font-dancing-script'>
                    {item.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-16'>
          <div className='bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4 font-dancing-script'>
              Prêt à déguster nos spécialités ?
            </h3>
            <p className='text-gray-600 mb-6'>
              Réservez votre table dès maintenant et découvrez l&apos;authenticité de la cuisine
              chinoise traditionnelle.
            </p>
            <a href='tel:0782886705'>
              <Button
                size='lg'
                className='bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto'>
                <span className='block sm:hidden text-center'>
                  Réserver une table
                  <br />
                  <span className='font-bold'>07 82 88 67 05</span>
                </span>
                <span className='hidden sm:block'>Réserver une table : 07 82 88 67 05</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
