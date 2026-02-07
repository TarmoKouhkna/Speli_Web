'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Avaleht', href: '/' },
  {
    label: 'Minust',
    children: [
      { label: 'Minust', href: '/minust' },
      { label: 'KKK', href: '/kkk' },
    ],
  },
  {
    label: 'Teenused',
    children: [
      { label: 'Individuaalne teraapia', href: '/individuaalne-teraapia' },
      { label: 'Ärevuse toetus', href: '/adhd-toetus' },
      { label: 'Ressursid ja tööriistad', href: '/ressursid' },
    ],
  },
  { label: 'Võta ühendust', href: '/vota-uhendust' },
  { label: 'Blogi', href: '/blogi' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-sage-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-serif text-xl md:text-3xl font-bold text-[#2d3a2f] hover:text-[#4a5c4e] transition-colors flex items-center gap-2"
        >
          <span className="text-current" aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 256 256"
              aria-hidden
              className="shrink-0"
            >
              <path d="M244.1,122.63a13.56,13.56,0,0,0-8.3-6.4,72.62,72.62,0,0,0-24.17-2c4.67-20.63,1.62-36.91-1.45-46.4A14.16,14.16,0,0,0,193.7,58.3a84.21,84.21,0,0,0-29.76,13.11,92.6,92.6,0,0,0-27.52-34.6,14,14,0,0,0-16.85,0,92.7,92.7,0,0,0-27.51,34.6A84.16,84.16,0,0,0,62.29,58.3a14.15,14.15,0,0,0-16.47,9.54c-3.07,9.49-6.12,25.77-1.45,46.4a72.62,72.62,0,0,0-24.17,2,13.56,13.56,0,0,0-8.3,6.4,14,14,0,0,0-1.4,10.74C13.81,145.66,24,169,54.92,187.51S113.29,206,128,206s42.12,0,73.06-18.49,41.11-41.85,44.42-54.14A14,14,0,0,0,244.1,122.63ZM168.48,82.9A73.1,73.1,0,0,1,196.22,70a2.2,2.2,0,0,1,2.54,1.5C202.7,83.72,206.57,109,188.17,141a129.75,129.75,0,0,1-28,33.37C167.85,161,174,142.93,174,119.17A116.13,116.13,0,0,0,168.48,82.9ZM57.24,71.53A2.2,2.2,0,0,1,59.78,70,73.1,73.1,0,0,1,87.52,82.9,116.13,116.13,0,0,0,82,119.17c0,23.76,6.15,41.85,13.81,55.17a129.58,129.58,0,0,1-28-33.37C49.43,109,53.3,83.72,57.24,71.53ZM61.08,177.2c-27.3-16.31-36.15-36.42-39-47a2.08,2.08,0,0,1,.21-1.61,1.71,1.71,0,0,1,1-.8A62.16,62.16,0,0,1,48,126.72,126.25,126.25,0,0,0,57.43,147a141,141,0,0,0,41,44.72A114.83,114.83,0,0,1,61.08,177.2ZM128,192.86c-8.68-6.2-34-28.2-34-73.69,0-43.36,22.94-65.34,32.8-72.78a2,2,0,0,1,2.4,0c9.86,7.44,32.8,29.42,32.8,72.78C162,164.94,136.81,186.67,128,192.86Zm105.9-62.62c-2.85,10.54-11.7,30.65-39,47a114.83,114.83,0,0,1-37.38,14.47,141,141,0,0,0,41-44.72A126.25,126.25,0,0,0,208,126.72a62.16,62.16,0,0,1,24.73,1.11,1.71,1.71,0,0,1,1,.8A2.08,2.08,0,0,1,233.92,130.24Z" />
            </svg>
          </span>
          Speli Kõuhkna
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sage-700 hover:text-sage-800 font-medium transition-colors flex items-center gap-0.5">
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1 min-w-[200px]">
                    <div className="bg-cream border border-sage-200 rounded-lg shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sage-700 hover:bg-sage-100 hover:text-sage-800 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sage-700 hover:text-sage-800 font-medium transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-sage-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ava menüü"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sage-200 bg-cream py-4 px-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="flex flex-col">
                  <span className="px-3 py-2 text-sage-600 font-medium">{item.label}</span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="px-5 py-2 text-sage-700 hover:bg-sage-100 rounded-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sage-700 hover:bg-sage-100 rounded-full font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
