import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { servicePillars } from '../../data/content'
import { SectionHeading } from '../ui/Section'

function TiltCard({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function StackCard({ index, count, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const mid = (count - 1) / 2
  const rotation = (index - mid) * 8
  const overlapDesktop = index === 0 ? 0 : -(52 + Math.abs(index - mid) * 10)

  return (
    <div
      className="relative w-full md:w-auto"
      style={{ zIndex: index }}
    >
      <motion.div
        ref={ref}
        className="md:block"
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.17, 0.67, 0.29, 1.2],
          },
        } : {}}
      >
        <motion.div
          className="px-1 md:px-0"
          style={{ marginLeft: overlapDesktop }}
          initial={{ rotate: 0 }}
          animate={isInView ? {
            rotate: rotation,
            transition: {
              duration: 0.7,
              delay: index * 0.1 + 0.15,
              ease: [0.17, 0.67, 0.29, 1.2],
            },
          } : {}}
          whileHover={{
            rotate: 2,
            transition: { type: 'spring', stiffness: 180, damping: 10 },
          }}
        >
          <motion.div
            animate={isInView ? {
              y: [0, -8 - (index % 2) * 4, 0],
              transition: {
                repeat: Infinity,
                duration: 4 + index * 0.3,
                ease: 'easeInOut',
                delay: index * 0.3,
              },
            } : {}}
          >
            <motion.div
              whileHover={{
                y: -18,
                scale: 1.05,
                zIndex: 50,
                transition: { type: 'spring', stiffness: 180, damping: 10 },
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function ServicesGrid({ limit }) {
  const items = limit ? servicePillars.slice(0, limit) : servicePillars
  const count = items.length

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Our Services"
        title="Create content that attracts, engages, and converts."
        sub="Five pillars that take a brand from invisible to in-demand."
      />
      <div
        className="relative mt-14 flex flex-col items-center gap-6 md:flex-row md:flex-nowrap md:items-stretch md:justify-center md:gap-0"
        style={{ perspective: 1600 }}
      >
        {items.map((s, i) => (
          <StackCard key={s.slug} index={i} count={count}>
            <TiltCard>
              <Link
                to="/services"
                className="group relative block h-full min-w-[280px] max-w-[340px] rounded-2xl border-2 border-ink bg-orange-100 p-7 shadow-[6px_6px_0_0_#1F1A17] transition-all duration-300 hover:shadow-[10px_10px_0_0_#1F1A17]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="flex items-start justify-between"
                  style={{ transform: 'translateZ(36px)' }}
                >
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-orange-600">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="text-ink-muted transition-all duration-300 group-hover:text-orange-600 group-hover:rotate-45 group-hover:scale-110" />
                </div>
                <h3
                  className="mt-4 font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-orange-600"
                  style={{ transform: 'translateZ(28px)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm text-ink-muted"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  {s.summary}
                </p>
                <div
                  className="mt-5 flex flex-wrap gap-2"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {s.items.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/20 bg-orange-200 px-3 py-1 text-xs font-medium text-ink-soft transition-all duration-300 group-hover:bg-orange-200 group-hover:border-orange-400 group-hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Stack under-layers */}
                <div
                  className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-2xl border-2 border-ink bg-orange-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-4 -right-4 -z-20 h-full w-full rounded-2xl border-2 border-ink bg-orange-100 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                  aria-hidden
                />
              </Link>
            </TiltCard>
          </StackCard>
        ))}
      </div>
    </section>
  )
}
