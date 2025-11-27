'use client'
import { useState } from 'react'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-accent">ANONBUY</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search 5000+ tech products..."
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
              />
              <Search className="absolute right-3 top-2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-accent transition-colors">
              <User size={24} />
            </button>
            <button className="p-2 hover:text-accent transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-accent text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-accent py-2">Deals</a>
              <a href="#" className="hover:text-accent py-2">New Arrivals</a>
              <a href="#" className="hover:text-accent py-2">Categories</a>
              <a href="#" className="hover:text-accent py-2">Support</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Add this footer component at the bottom of the file
export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-400">
          <p>Created by Brian for Computer Science Assignment</p>
          <p className="text-sm mt-2">ANONBUY - Next Generation Tech Marketplace</p>
        </div>
      </div>
    </footer>
  )
}
