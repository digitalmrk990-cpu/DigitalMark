import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-orange-50">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl italic text-orange-400">
            Let's grow together
          </p>
          <p className="mt-3 max-w-xs text-sm text-orange-100">
            Ready to build your digital presence? We turn engagement into
            measurable business growth.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <a href="mailto:hello@agency.com" className="flex items-center gap-3 hover:text-orange-400">
            <Mail size={18} /> hello@agency.com
          </a>
          <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-orange-400">
            <Phone size={18} /> +91 00000 00000
          </a>
          <a href="https://agency.com" className="flex items-center gap-3 hover:text-orange-400">
            <Globe size={18} /> agency.com
          </a>
          <a href="https://instagram.com" className="flex items-center gap-3 hover:text-orange-400">
            <Instagram size={18} /> @agency
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm font-heading font-bold uppercase tracking-wide">
          <Link to="/services" className="hover:text-orange-400">Services</Link>
          <Link to="/portfolio" className="hover:text-orange-400">Work</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        </div>
      </div>
      <div className="border-t border-ink-soft py-5 text-center text-xs text-orange-100">
        © {new Date().getFullYear()} Social Media Agency. All rights reserved.
      </div>
    </footer>
  )
}
