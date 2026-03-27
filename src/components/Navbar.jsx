import { useState } from 'react'
import { navItems, profileData } from '../data/profileData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-wedding-gold/20 bg-wedding-cream/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#hero" className="font-display tracking-wide text-wedding-wood">
          <span className="text-xl md:hidden">Rishi</span>
          <span className="hidden text-xl md:inline">Rishi Pratap Singh</span>
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="rounded-full border border-wedding-gold/30 p-2 text-wedding-wood md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-wedding-muted transition hover:text-wedding-wood"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <nav className="flex flex-col gap-2 border-t border-wedding-gold/20 bg-wedding-cream px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-wedding-muted transition hover:bg-white hover:text-wedding-wood"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
