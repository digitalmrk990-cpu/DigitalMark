import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioItems, portfolioCategories } from '../data/content'
import { CTABanner } from '../components/sections/Highlights'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active)

  return (
    <>
      <section className="border-b-2 border-ink bg-cream-100 py-16">
        <div className="container-x">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-ink sm:text-6xl">
            Graphic Design
          </h1>
          <p className="mt-4 max-w-xl text-ink-muted">
            Carousels, posts, posters, and brand assets we've designed.
          </p>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="flex flex-wrap gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border-2 border-ink px-4 py-2 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
                active === cat ? 'bg-ink text-cream-50' : 'bg-transparent text-ink hover:bg-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_#1C1917]"
            >
              {/* Placeholder visual — swap for <img src={p.imageUrl} /> */}
              <div className="flex aspect-[4/5] items-end bg-gradient-to-br from-orange-400 to-orange-700 p-5">
                <div>
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-cream-50/80">
                    {p.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream-50">
                    {p.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
