export function StructuredData() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': 'https://chez-liqi.vercel.app/#restaurant',
    name: 'Chez Liqi 醴琦餐厅',
    alternateName: ['Chez Lìqí', 'Chez Liqi Paris', '醴琦餐厅'],
    description:
      'Restaurant chinois authentique dans le 16e arrondissement de Paris. Spécialités de nouilles et raviolis faits maison. Cuisine traditionnelle chinoise préparée avec des ingrédients frais et de qualité.',
    url: 'https://chez-liqi.vercel.app',
    telephone: '+33782886705',

    image: [
      'https://chez-liqi.vercel.app/images/hero-interior.webp',
      'https://chez-liqi.vercel.app/logo.png',
    ],
    logo: 'https://chez-liqi.vercel.app/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33 Rue Chanez',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75016',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8436,
      longitude: 2.2598,
    },
    servesCuisine: ['Cuisine chinoise', 'Cuisine chinoise traditionnelle', 'Nouilles', 'Raviolis'],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    areaServed: {
      '@type': 'City',
      name: 'Paris',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Île-de-France',
      },
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '111',
      reviewCount: '111',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Kim S' },
        datePublished: '2024-01-15',
        reviewBody:
          'Definitely a mom and pop style restaurant with amazing Chinese food! Very fresh and so flavorful.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Victoria Chen' },
        datePublished: '2024-03-20',
        reviewBody:
          'This place is absolutely incredible if you are after fresh, authentic, no-frills home-style Chinese food.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Marie L.' },
        datePublished: '2024-06-10',
        reviewBody:
          "Les meilleurs raviolis que j'ai mangés à Paris ! Le service est impeccable et l'ambiance très chaleureuse. Un vrai voyage en Chine sans quitter le 16e.",
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '18:30',
        closes: '22:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '18:30',
        closes: '22:30',
      },
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'Carte du restaurant Chez Liqi',
      description:
        'Spécialités de nouilles et raviolis faits maison, entrées traditionnelles, desserts et boissons',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Entrées',
          description: 'Salades et entrées traditionnelles chinoises',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Salade aux Légumes',
              description: 'Salade fraîche de légumes de saison, vinaigrette maison',
              offers: { '@type': 'Offer', price: '4.90', priceCurrency: 'EUR' },
              suitableForDiet: 'https://schema.org/VegetarianDiet',
            },
            {
              '@type': 'MenuItem',
              name: "Salade d'algues",
              description: 'Algues marines assaisonnées à la sauce sésame',
              offers: { '@type': 'Offer', price: '4.90', priceCurrency: 'EUR' },
              suitableForDiet: 'https://schema.org/VegetarianDiet',
            },
            {
              '@type': 'MenuItem',
              name: 'Tempura crevettes 4 pièces',
              description: 'Crevettes panées à la japonaise, légères et croustillantes',
              offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' },
            },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Plats principaux – Raviolis & Nouilles',
          description: 'Raviolis et nouilles faits maison, spécialités traditionnelles chinoises',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Raviolis et Gyoza 8 pièces',
              description:
                'Raviolis traditionnels au choix : Gyoza aux légumes, Raviolis au bœuf, Raviolis aux crevettes',
              offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' },
            },
            {
              '@type': 'MenuItem',
              name: 'Nouilles au bouillon pur bœuf',
              description: 'Bouillon de bœuf traditionnel avec nouilles fraîches',
              offers: { '@type': 'Offer', price: '13.90', priceCurrency: 'EUR' },
            },
            {
              '@type': 'MenuItem',
              name: 'Nouilles Zha Jiang au bœuf',
              description: 'Nouilles traditionnelles avec sauce aux haricots noirs et bœuf',
              offers: { '@type': 'Offer', price: '11.90', priceCurrency: 'EUR' },
            },
            {
              '@type': 'MenuItem',
              name: 'Soupe de nouilles et de raviolis aux crevettes',
              description: 'Bouillon parfumé avec nouilles et raviolis aux crevettes',
              offers: { '@type': 'Offer', price: '11.90', priceCurrency: 'EUR' },
            },
          ],
        },
      ],
    },
    sameAs: ['https://maps.app.goo.gl/GgQqVkqqkMw1ASzs6'],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'tel:+33782886705',
        actionPlatform: ['http://schema.org/IOSPlatform', 'http://schema.org/AndroidPlatform'],
      },
      result: {
        '@type': 'FoodEstablishmentReservation',
        name: 'Réservation chez Liqi',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://chez-liqi.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Notre Carte',
        item: 'https://chez-liqi.vercel.app/#carte',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://chez-liqi.vercel.app/#contact',
      },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://chez-liqi.vercel.app/#localbusiness',
    name: 'Chez Liqi – Restaurant Chinois Paris 16',
    description:
      'Restaurant chinois authentique situé au 33 rue Chanez dans le 16e arrondissement de Paris, à proximité du métro Michel Ange Molitor. Spécialités de nouilles et raviolis faits maison.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33 Rue Chanez',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75016',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8436,
      longitude: 2.2598,
    },
    telephone: '+33782886705',
    url: 'https://chez-liqi.vercel.app',
    priceRange: '€€',
    image: 'https://chez-liqi.vercel.app/images/hero-interior.webp',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://chez-liqi.vercel.app/#website',
    name: 'Chez Liqi',
    alternateName: ['Chez Liqi 醴琦餐厅', 'Chez Lìqí'],
    url: 'https://chez-liqi.vercel.app',
    publisher: {
      '@id': 'https://chez-liqi.vercel.app/#restaurant',
    },
    inLanguage: 'fr-FR',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les horaires du restaurant Chez Liqi ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chez Liqi est ouvert du lundi au samedi de 11h30 à 14h30 et de 18h30 à 22h30. Le dimanche, nous sommes ouverts uniquement le soir de 18h30 à 22h30.',
        },
      },
      {
        '@type': 'Question',
        name: 'Où se trouve le restaurant Chez Liqi à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chez Liqi est situé au 33 Rue Chanez, 75016 Paris, dans le 16e arrondissement, à proximité du métro Michel Ange Molitor (lignes 9 et 10).',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment réserver une table chez Liqi ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous pouvez réserver une table en appelant directement au 07 82 88 67 05. La réservation est recommandée, surtout le week-end.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles sont les spécialités du restaurant Chez Liqi ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chez Liqi est spécialisé dans les nouilles et raviolis faits maison, préparés chaque jour selon les recettes traditionnelles chinoises. Nous proposons également des entrées, desserts et boissons.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
