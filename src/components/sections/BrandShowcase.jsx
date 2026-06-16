import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { brandNames } from '../../data/content'

const row1 = brandNames.slice(0, 8)
const row2 = brandNames.slice(8)

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

function FloatingBrand({ name, index }) {
  const x = useRef(Math.random() * 40 - 20)
  const y = useRef(Math.random() * 20 - 10)
  const duration = useRef(4 + Math.random() * 3)
  const delay = useRef(Math.random() * 2)

  return (
    <motion.span
      className="font-display text-5xl font-bold text-ink/5 select-none sm:text-7xl"
      animate={{
        x: [0, x.current, 0, -x.current, 0],
        y: [0, y.current, 0, -y.current, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: duration.current,
        delay: delay.current,
        ease: 'easeInOut',
      }}
    >
      {name}
    </motion.span>
  )
}

export default function BrandShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="overflow-hidden bg-white py-20">
      <div className="container-x mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Trusted by
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl"
        >
          Brands that grow with us
        </motion.h2>
      </div>

      <div className="space-y-6">
        <ScrollingRow items={row1} />
        <ScrollingRow items={row2} reverse />
      </div>

      <div className="container-x mt-16">
        <div className="relative flex flex-wrap justify-center gap-x-12 gap-y-4">
          {brandNames.slice(0, 6).map((name, i) => (
            <FloatingBrand key={name} name={name} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
