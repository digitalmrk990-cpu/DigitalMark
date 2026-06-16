import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const floatingShapes = [
  {
    className: 'top-[15%] right-[10%] h-20 w-20 rounded-full border-2 border-ink/20',
    animate: { y: [0, -40, 0], rotate: [0, 360] },
    transition: { duration: 10 },
  },
  {
    className: 'top-[30%] right-[4%] h-14 w-14 rotate-45 border-2 border-ink/15',
    animate: { y: [0, 30, 0], rotate: [0, 180, 360] },
    transition: { duration: 14 },
  },
  {
    className: 'bottom-[30%] left-[6%] h-10 w-10 rounded-full bg-ink/8',
    animate: { scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] },
    transition: { duration: 5 },
  },
  {
    className: 'top-[45%] left-[3%] text-4xl text-ink/10 font-display font-bold leading-none',
    animate: { y: [0, -20, 0], x: [0, 10, 0] },
    transition: { duration: 8 },
  },
  {
    className: 'top-[8%] left-[22%] h-5 w-5 rotate-45 border-2 border-cream-50/40',
    animate: { y: [0, 20, 0], rotate: [0, 360] },
    transition: { duration: 18 },
  },
  {
    className: 'bottom-[15%] right-[20%] h-3 w-3 rounded-full bg-ink/15',
    animate: { y: [0, -15, 0] },
    transition: { duration: 6, delay: 1 },
  },
  {
    className: 'bottom-[40%] right-[30%] h-4 w-4 border-2 border-ink/10',
    animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
    transition: { duration: 8, delay: 0.5 },
  },
]

const stats = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '30+', label: 'Happy Clients' },
  { num: '4+', label: 'Years Experience' },
]

export default function Hero() {
  const words = ['A', 'Social', 'Media', 'Agency']

  return (
    <section className="relative overflow-hidden bg-orange min-h-screen">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-cream-50/15 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[600px] w-[600px] rounded-full bg-cream-100/15 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.className}`}
            animate={s.animate}
            transition={{ repeat: Infinity, ease: 'easeInOut', ...s.transition }}
          />
        ))}
        <motion.div
          className="absolute top-[8%] right-[22%] text-2xl text-ink/10"
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[15%] text-xl text-cream-50/30"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.div>
      </div>

      <div className="container-x relative grid min-h-screen items-center py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Sparkles size={14} className="text-ink" />
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-ink">
              Digital Agency
            </p>
          </motion.div>

          <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] text-ink sm:text-7xl md:text-8xl">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
                className="inline-block mr-[0.2em]"
                style={{ transformOrigin: 'bottom center' }}
              >
                {word === 'A' ? (
                  <span className="italic text-cream-50">A</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 max-w-xl text-lg text-ink-soft"
          >
            We help brands build a strong digital presence through content,
            design, video, and performance marketing — turning engagement into
            measurable business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start a project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
            </Link>
            <Link to="/portfolio" className="btn-outline group">
              See our work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-16 flex gap-10 border-t-2 border-ink/20 pt-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.15, duration: 0.5 }}
              >
                <p className="font-display text-3xl font-bold text-ink">{stat.num}</p>
                <p className="mt-1 text-xs font-heading font-bold uppercase tracking-wider text-ink-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
