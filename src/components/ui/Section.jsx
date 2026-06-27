import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionHeading({ eyebrow, title, sub, center, titleClass, eyebrowClass }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={`eyebrow ${eyebrowClass || ''}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`mt-3 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl ${titleClass || 'text-ink'}`}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-base text-ink-muted"
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}

export function Marquee({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-orange py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-orange to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-orange to-transparent" />
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-heading text-lg font-extrabold uppercase tracking-wide text-ink"
          >
            {item} <span className="text-orange-50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
