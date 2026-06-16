import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { stats } from '../../data/content'

function AnimatedNum({ num, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, num, {
      duration: 2,
      ease: [0.17, 0.67, 0.29, 1.2],
    })
    return controls.stop
  }, [isInView])

  return (
    <span ref={ref} className="font-display text-5xl font-bold text-ink sm:text-6xl">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.17, 0.67, 0.29, 1.2],
    },
  }),
}

export default function StatsCounter() {
  return (
    <section className="border-y-2 border-ink bg-white py-20">
      <div className="container-x">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="rounded-2xl border-2 border-ink bg-orange-50 p-6 text-center shadow-[4px_4px_0_0_#1F1A17]"
            >
              <AnimatedNum num={s.num} suffix={s.suffix} />
              <p className="mt-2 font-heading text-xs font-bold uppercase tracking-widest text-ink-muted">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
