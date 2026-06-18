import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { brandNames } from '../../data/content'

const row1 = brandNames.slice(0, 8)
const row2 = brandNames.slice(8)

const brandLogos = [
  { name: 'Nike', domain: 'nike.com' },
  { name: 'Spotify', domain: 'spotify.com' },
  { name: 'Figma', domain: 'figma.com' },
  { name: 'Stripe', domain: 'stripe.com' },
  { name: 'Notion', domain: 'notion.so' },
  { name: 'Adobe', domain: 'adobe.com' },
  { name: 'Linear', domain: 'linear.app' },
  { name: 'Vercel', domain: 'vercel.com' },
  { name: 'Supabase', domain: 'supabase.com' },
  { name: 'Railway', domain: 'railway.app' },
  { name: 'Cal.com', domain: 'cal.com' },
  { name: 'Arc', domain: 'arc.net' },
  { name: 'Miro', domain: 'miro.com' },
  { name: 'Loom', domain: 'loom.com' },
  { name: 'Raycast', domain: 'raycast.com' },
]

function LogoBox({ logo }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flex items-center justify-center rounded-xl p-4 transition-all duration-300 shrink-0"
      style={{
        width: 160,
        height: 110,
        border: hovered ? '2px solid transparent' : '2px solid #d1d5db',
        background: 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`https://logo.clearbit.com/${logo.domain}`}
        alt={logo.name}
        className="h-12 object-contain transition-all duration-300"
        style={{
          filter: hovered ? 'none' : 'grayscale(1) brightness(0)',
        }}
      />
    </div>
  )
}

function ScrollingRow({ items, reverse }) {
  const doubled = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: reverse ? ['-33%', '0%'] : ['0%', '-33%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 40,
        }}
      >
        {doubled.map((name, i) => (
          <motion.span
            key={`${name}-${i}`}
            className="font-display text-3xl font-bold uppercase tracking-tight text-ink/15 sm:text-4xl"
            whileHover={{ scale: 1.1, color: '#E8723C', textShadow: '0 0 30px rgba(232,114,60,0.3)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
          >
            {name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default function BrandShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [scrollPos, setScrollPos] = useState(0)
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = useCallback((dir) => {
    const container = scrollRef.current
    if (!container) return
    const amount = 184
    const maxScroll = container.scrollWidth - container.clientWidth
    let newPos = scrollPos + dir * amount
    if (newPos > maxScroll) newPos = 0
    if (newPos < 0) newPos = maxScroll
    setScrollPos(newPos)
    container.scrollTo({ left: newPos, behavior: 'smooth' })
  }, [scrollPos])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      scroll(1)
    }, 2500)
    return () => clearInterval(interval)
  }, [isPaused, scroll])

  return (
    <section ref={ref} className="overflow-hidden bg-white py-20">
      <div className="container-x mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold text-ink sm:text-4xl"
        >
          Clients who trust us
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-base text-ink/60 sm:text-lg"
        >
          Some brands that trusted us to manage their digital footprint and build their business.
          </motion.p>
      </div>

      <div className="space-y-6">
        <ScrollingRow items={row1} />
        <ScrollingRow items={row2} reverse />
      </div>

      <div className="container-x mt-16">
        <style>{`.scrollbar-none::-webkit-scrollbar{display:none}`}</style>
        <div className="relative flex items-center">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none mx-14"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {brandLogos.map((logo) => (
              <LogoBox key={logo.name} logo={logo} />
            ))}
          </div>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
