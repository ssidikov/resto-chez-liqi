"use client"

import { useEffect, useState } from "react"

interface BackgroundShapesProps {
  variant?: "hero" | "about" | "menu" | "contact"
}

export function BackgroundShapes({ variant = "hero" }: BackgroundShapesProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const getShapes = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            {/* Floating food icons */}
            <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🥟</div>
            <div className="absolute top-40 right-20 text-4xl opacity-15 animate-float-delayed">🍜</div>
            <div className="absolute bottom-32 left-20 text-5xl opacity-10 animate-float-slow">🥢</div>
            <div className="absolute top-60 left-1/3 text-3xl opacity-20 animate-float">🏮</div>

            {/* Geometric shapes */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-yellow-100 rounded-full opacity-25 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-5 w-16 h-16 bg-red-200 transform rotate-45 opacity-15 animate-spin-slow"></div>

            {/* Parallax circles */}
            <div
              className="absolute w-96 h-96 bg-gradient-to-br from-red-50 to-transparent rounded-full opacity-30 pointer-events-none"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                top: "10%",
                right: "10%",
              }}
            ></div>

            {/* Hero Background Shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-screen overflow-hidden z-0 opacity-10">
              <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-8 border-red-300"></div>
              <div className="absolute top-40 right-40 w-96 h-96 rounded-full border-8 border-yellow-300"></div>
              <div className="absolute top-60 right-10 w-48 h-48 rounded-full border-8 border-red-400"></div>
            </div>

            <div className="absolute top-0 left-0 w-1/3 h-screen overflow-hidden z-0 opacity-10">
              <div className="absolute top-40 left-10 w-72 h-72 rounded-full border-8 border-red-300"></div>
              <div className="absolute top-80 left-40 w-48 h-48 rounded-full border-8 border-yellow-300"></div>
            </div>

            {/* Food Icons Pattern */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
              <div className="absolute top-20 left-20 text-6xl">🥢</div>
              <div className="absolute top-40 right-40 text-6xl">🥟</div>
              <div className="absolute top-80 left-1/4 text-6xl">🍜</div>
              <div className="absolute top-60 right-1/3 text-6xl">🍚</div>
              <div className="absolute bottom-40 left-1/3 text-6xl">🥮</div>
              <div className="absolute bottom-80 right-1/4 text-6xl">🍵</div>
              <div className="absolute bottom-20 left-20 text-6xl">🥢</div>
            </div>
          </>
        )
      case "about":
        return (
          <>
            <div className="absolute top-10 right-10 text-5xl opacity-10 animate-float">🍚</div>
            <div className="absolute bottom-20 left-10 text-4xl opacity-15 animate-float-delayed">🥠</div>
            <div className="absolute top-1/2 right-5 text-3xl opacity-20 animate-float-slow">🍵</div>

            <div className="absolute top-20 left-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-red-100 rounded-full opacity-15 animate-bounce-slow"></div>
          </>
        )
      case "menu":
        return (
          <>
            <div className="absolute top-5 left-5 text-4xl opacity-10 animate-float">🍤</div>
            <div className="absolute top-20 right-10 text-3xl opacity-15 animate-float-delayed">🥗</div>
            <div className="absolute bottom-10 left-1/4 text-5xl opacity-10 animate-float-slow">🍲</div>
            <div className="absolute top-1/3 right-1/4 text-3xl opacity-20 animate-float">🥮</div>

            <div className="absolute top-40 left-10 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-100 rounded-full opacity-15 animate-bounce-slow"></div>
          </>
        )
      case "contact":
        return (
          <>
            <div className="absolute top-10 left-10 text-4xl opacity-15 animate-float">🏪</div>
            <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float-delayed">📍</div>
            <div className="absolute top-1/2 left-1/4 text-5xl opacity-10 animate-float-slow">🍜</div>

            <div className="absolute top-20 right-1/3 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse-slow"></div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getShapes()}

      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#dc2626" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
