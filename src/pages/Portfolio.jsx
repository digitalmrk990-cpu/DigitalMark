import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioItems, portfolioCategories } from '../data/content'
import { CTABanner } from '../components/sections/Highlights'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All'
      ? []
      : portfolioItems.filter((p) => p.category === active)

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink pb-40 pt-44">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top"
        >
          <source src="https://assets.mixkit.co/videos/42660/42660-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="container-x relative z-10">
          <p className="eyebrow text-white">Selected work</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-white sm:text-6xl">
            Graphic Design
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
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
                active === cat ? 'bg-ink text-orange-50' : 'bg-transparent text-ink hover:bg-orange-200'
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
              className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[4px_4px_0_0_#1F1A17] transition-shadow duration-300 hover:shadow-[6px_6px_0_0_#1F1A17]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={p.imageUrl}
                  alt={p.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.15 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 flex flex-col justify-end"
                >
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-orange-400">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
