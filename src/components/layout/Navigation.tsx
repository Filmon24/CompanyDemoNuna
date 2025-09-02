// src/components/layout/Navigation.tsx
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import Toggle from '../ui/Toggle'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Teams', href: '#teams' },
    { name: 'Projects', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg md:text-xl font-bold flex-shrink-0"
          >
            <span className="text-black">Nuna</span>
            <span className="text-white">Technologies</span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium hover:text-primary-lighter transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Toggle Switch */}
            <div className="scale-90"> {/* smaller toggle */}
              <Toggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          links={navLinks}
        />
      </div>
    </nav>
  )
}

export default Navigation
