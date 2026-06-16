import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import { SectionHeading } from '../ui/Section'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
}

function TiltPill({ children, active, onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

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
      onClick={onClick}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function WhyChooseUs() {
  const [active, setActive] = useState(null)

  return (
    <section className="bg-orange-100 py-20">
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose Us?" title="Built around your results, not our ego." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {whyChooseUs.map((item, i) => {
            const isActive = active === i
            return (
              <TiltPill key={item} active={isActive} onClick={() => setActive(isActive ? null : i)}>
                <motion.span
                  variants={pillVariants}
                  whileHover={{
                    scale: 1.06,
                    transition: { type: 'spring', stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.92 }}
                  animate={{
                    backgroundColor: isActive ? '#1F1A17' : '#E8723C',
                    color: isActive ? '#ffffff' : '#1F1A17',
                    boxShadow: isActive
                      ? '4px 4px 0 0 #1F1A17'
                      : '3px 3px 0 0 #1F1A17',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className={`pill cursor-pointer ${isActive ? '' : 'hover:bg-orange'}`}
                >
                  {isActive && <Check size={14} className="shrink-0" />}
                  {item}
                </motion.span>
              </TiltPill>
            )
          })}
        </motion.div>
        {active !== null && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center text-sm text-ink-muted"
          >
            <Sparkles size={14} className="inline -mt-0.5 mr-1" />
            Tap another or tap again to deselect.
          </motion.p>
        )}
      </div>
    </section>
  )
}

export function CTABanner() {
  return (
    <section className="container-x py-20">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border-2 border-ink bg-orange p-10 text-center shadow-[6px_6px_0_0_#1F1A17] sm:p-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="eyebrow text-ink relative"
        >
          Let's grow together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl relative"
        >
          Ready to build your digital presence?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-8"
        >
          <Link
            to="/contact"
            className="btn-primary group relative overflow-hidden inline-flex"
          >
            <span className="relative z-10">Get a free strategy call</span>
            <span className="absolute inset-0 -translate-x-full bg-orange-50/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
