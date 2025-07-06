"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-red-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-red-600">
            <span className="font-dancing-script text-3xl">Chez Liqi</span>
            <span className="text-sm text-gray-600 ml-2">丽琪餐厅</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-red-600 transition-colors">
              Accueil
            </a>
            <a href="#carte" className="text-gray-700 hover:text-red-600 transition-colors">
              Carte
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </a>
            <a
              href="tel:0782886705"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Réserver une table
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-red-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#accueil" className="text-gray-700 hover:text-red-600 transition-colors">
                Accueil
              </a>
              <a href="#carte" className="text-gray-700 hover:text-red-600 transition-colors">
                Carte
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </a>
              <a
                href="tel:0782886705"
                className="bg-red-600 hover:bg-red-700 text-white w-full text-center px-4 py-2 rounded-md transition-colors"
              >
                Réserver une table
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
