'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE_CONFIG.phoneSms}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-600"
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <nav className="py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <a
                  href={SITE_CONFIG.phoneSms}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
