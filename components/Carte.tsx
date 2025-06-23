'use client'

import { useState } from 'react'
import { StarIcon, FireIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const categories = [
  { id: 'entrees', name: 'Entrées 前菜', icon: '🥟' },
  { id: 'plats', name: 'Plats 主食', icon: '�' },
  { id: 'nouilles', name: 'Nouilles 面条', icon: '🍛' },
  { id: 'desserts', name: 'Desserts 甜品', icon: '🥮' },
  { id: 'boissons', name: 'Boissons 饮料', icon: '🍵' },
]

const menuItems = {
  entrees: [
    {
      name: 'Salade aux légumes 素食沙拉菜',
      description: 'Salade fraîche de légumes de saison, vinaigrette maison',
      price: '3€90',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: "Salade d'algues 凉拌海带丝",
      description: 'Algues marines assaisonnées à la sauce sésame',
      price: '3€90',
      popular: true,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Salade de céleri aux cacahuètes et champignons noirs 芹菜木耳花生菜',
      description: 'Céleri croquant, champignons noirs et cacahuètes',
      price: '4€90',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Concombre mariné au sésame, piment 凉拌黄瓜',
      description: 'Concombre frais mariné avec sésame et piment doux',
      price: '3€90',
      popular: false,
      spicy: true,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Tempura crevettes 4 pièces 日式炸虾',
      description: 'Crevettes panées à la japonaise, légères et croustillantes',
      price: '7€',
      popular: true,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ],
  plats: [
    {
      name: 'Raviolis et Gyoza 8 pièces 饺子类',
      description: 'Raviolis traditionnels au porc ou aux légumes',
      price: '7€90',
      popular: true,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Raviolis frits aux crevettes 炸虾饺',
      description: 'Raviolis dorés et croustillants garnis aux crevettes',
      price: '8€90',
      popular: false,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1563379091553-5003d4b0a9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Nems 4 pièces 春卷',
      description: 'Rouleaux de printemps dorés au poulet ou aux légumes',
      price: '5€90',
      popular: true,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Poulet frit croustillant 香酥鸡块',
      description: 'Morceaux de poulet marinés et frits, extra croustillants',
      price: '6€',
      popular: false,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ],
  nouilles: [
    {
      name: 'Nouilles au poulet et piment croustillant 香辣鸡肉面',
      description: 'Nouilles sautées au poulet épicé et légumes croquants',
      price: '12€90',
      popular: true,
      spicy: true,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Raviolis aux crevettes et sauce piquante 红油抄手',
      description: 'Raviolis dans un bouillon parfumé aux crevettes',
      price: '11€90',
      popular: false,
      spicy: true,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Nouilles style Zha Jiang aux légumes 杂酱面',
      description: 'Nouilles traditionnelles avec sauce aux haricots noirs',
      price: '10€90',
      popular: true,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1554978991-33ef7f31d658?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Lamen sautées aux légumes et aux œufs 炒面',
      description: 'Nouilles sautées avec œufs et légumes de saison',
      price: '10€90',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Riz sauté aux légumes 蛋炒饭',
      description: 'Riz sauté traditionnel aux œufs et légumes frais',
      price: '13€90',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Soupe de nouilles et de raviolis aux crevettes 虾仁汤面',
      description: 'Bouillon parfumé avec nouilles et raviolis aux crevettes',
      price: '11€90',
      popular: true,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Nouilles Zha Jiang au bœuf 牛肉杂酱面',
      description: 'Nouilles avec sauce aux haricots noirs et lamelles de bœuf',
      price: '11€90',
      popular: false,
      spicy: false,
      vegetarian: false,
      image:
        'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ],
  desserts: [
    {
      name: 'Glaces 冰激凌',
      description: 'Sélection de glaces artisanales - 1 boule',
      price: '2€50',
      popular: true,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Parfums: Fraise/Vanille/Chocolat/Café/Framboise',
      description: 'Choix de parfums traditionnels et fruités',
      price: '3€50',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Ananas frais 新鲜菠萝',
      description: "Tranches d'ananas frais de saison",
      price: '4€',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1516396542759-3be7b2bc8497?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Nougat Chinois 牛轧糖',
      description: 'Nougat traditionnel chinois aux arachides',
      price: '3€',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1549000705-d22421d72a92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ],
  boissons: [
    {
      name: 'Thé au Jasmin 茉莉花茶',
      description: 'Thé vert parfumé aux fleurs de jasmin',
      price: '3€90',
      popular: true,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Perrier 50cl 气泡水',
      description: 'Eau gazeuse française rafraîchissante',
      price: '2€50',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Coca Cola/Fanta/Sprite 可乐类',
      description: 'Sodas internationaux bien frais',
      price: '2€50',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Bière (Tsing Tao 青岛 / Heineken 喜力)',
      description: 'Bière chinoise traditionnelle ou européenne',
      price: '3€90',
      popular: true,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: "Jus d'orange 橙汁",
      description: "Jus d'orange frais pressé",
      price: '2€50',
      popular: false,
      spicy: false,
      vegetarian: true,
      image:
        'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ],
}

export default function Carte() {
  const [activeCategory, setActiveCategory] = useState('entrees')

  return (
    <section id='menu' className='relative py-20 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <Image
          src='https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
          alt='Restaurant background'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60' />
        <div className='absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-dancing text-primary mb-4'>Notre Carte 菜单</h2>
          <p className='text-lg font-lora text-gray-300 max-w-3xl mx-auto'>
            Spécialités de raviolis et nouilles fait maison. Découvrez nos recettes traditionnelles
            chinoises préparées avec des ingrédients frais et authentiques.
          </p>
        </div>

        {/* Category Navigation */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary/80 backdrop-blur-xl text-white shadow-lg scale-105 border border-primary/30'
                  : 'bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:text-accent shadow-md hover:shadow-lg hover:scale-102 border border-white/20'
              }`}>
              <span className='text-xl'>{category.icon}</span>
              <span className='font-lora font-medium'>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8'>
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={item.name}
              className='group liquid-glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20'
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out both',
              }}>
              {/* Image */}
              <div className='relative w-full h-48 overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

                {/* Floating Badges */}
                <div className='absolute top-4 left-4 flex flex-wrap gap-2'>
                  {item.popular && (
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white rounded-full text-xs font-medium shadow-lg'>
                      <StarIcon className='h-3 w-3' />
                      Populaire
                    </span>
                  )}
                  {item.spicy && (
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white rounded-full text-xs font-medium shadow-lg'>
                      <FireIcon className='h-3 w-3' />
                      Épicé
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-xs font-medium shadow-lg'>
                      🌱 Végé
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                {/* Item Name */}
                <h3 className='text-lg font-lora font-semibold text-white group-hover:text-accent transition-colors  min-h-16 leading-tight'>
                  {item.name}
                </h3>

                {/* Description */}
                <p className='text-gray-300 font-lora leading-relaxed text-sm min-h-20'>
                  {item.description}
                </p>

                {/* Price and Action */}
                <div className='flex justify-between items-center'>
                  <span className='text-2xl font-lora font-bold text-accent'>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <button className='glass-button-large px-8 py-4 rounded-full font-lora font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
            Réserver une table
          </button>
        </div>
      </div>
    </section>
  )
}
