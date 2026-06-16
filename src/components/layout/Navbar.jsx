import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/about', label: 'About' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-baseline gap-1 leading-none">
      <span className="font-display text-3xl font-medium italic text-orange-600">A</span>
      <span className="font-heading text-base font-extrabold uppercase tracking-tight text-ink">
        Social Media Agency
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream-50/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-orange-600' : 'text-ink hover:text-orange-600'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary py-2.5">
            Let's Grow Together
          </Link>
        </div>
        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <div className="border-t-2 border-ink bg-cream-50 md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 font-heading text-base font-bold uppercase text-ink"
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Let's Grow Together
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
