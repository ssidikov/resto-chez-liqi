'use client'

import { useEffect, useRef } from 'react'

interface GoogleMapProps {
  className?: string
}

declare global {
  interface Window {
    google?: any
    initMap?: () => void
  }
}

export function GoogleMap({ className = '' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
      script.async = true
      script.defer = true

      window.initMap = initializeMap
      document.head.appendChild(script)
    }

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return

      // Restaurant coordinates (33 Rue Chanez, 75016 Paris)
      const restaurantLocation = {
        lat: 48.8414,
        lng: 2.2594,
      }

      // Create the map
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 16,
        center: restaurantLocation,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      })

      // Create a marker for the restaurant
      const marker = new window.google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: 'Restaurant Chez Liqi',
        icon: {
          url:
            'data:image/svg+xml;charset=UTF-8,' +
            encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#DC2626" stroke="white" stroke-width="4"/>
              <text x="20" y="25" text-anchor="middle" fill="white" font-size="16" font-weight="bold">🍜</text>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20),
        },
      })

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #DC2626; font-size: 16px;">Restaurant Chez Liqi</h3>
            <p style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">🏠 33 Rue Chanez, 75016 Paris</p>
            <p style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">📞 07 82 88 67 05</p>
            <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">🚇 Michel Ange Molitor (Lignes 9, 10)</p>
            <div style="text-align: center;">
              <a href="https://maps.app.goo.gl/GgQqVkqqkMw1ASzs6" 
                 target="_blank" 
                 style="background: #DC2626; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px;">
                Itinéraire
              </a>
            </div>
          </div>
        `,
      })

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })

      // Open info window by default
      infoWindow.open(map, marker)
    }

    loadGoogleMaps()

    return () => {
      // Cleanup
      if (window.initMap) {
        delete window.initMap
      }
    }
  }, [])

  return (
    <div className={`w-full h-full ${className}`}>
      <div ref={mapRef} className='w-full h-full rounded-lg' />
    </div>
  )
}
