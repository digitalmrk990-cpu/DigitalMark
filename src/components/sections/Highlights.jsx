import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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

export function WhyChooseUs() {
  return (
    <section className="bg-cream-100 py-20">
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose Us?" title="Built around your results, not our ego." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {whyChooseUs.map((item) => (
            <motion.span
              key={item}
              variants={pillVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#D4A343',
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              className="pill cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
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
        className="relative overflow-hidden rounded-3xl border-2 border-ink bg-orange p-10 text-center shadow-[6px_6px_0_0_#1C1917] sm:p-16"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cream-50/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cream-100/10 blur-2xl" />
        </div>
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
            <span className="absolute inset-0 -translate-x-full bg-cream-50/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
