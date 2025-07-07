'use client'

interface EmbeddedMapProps {
  className?: string
}

export function EmbeddedMap({ className = '' }: EmbeddedMapProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.876!2d2.2594!3d48.8414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb4ec7b7643%3A0x8ff8c7b8a7c9d5e6!2s33%20Rue%20Chanez%2C%2075016%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title="Plan du Restaurant Chez Liqi - 33 Rue Chanez, 75016 Paris"
      />
    </div>
  )
}
