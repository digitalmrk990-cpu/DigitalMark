import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { processSteps } from '../../data/content'
import { SectionHeading } from '../ui/Section'

function Step({ step, index, progress }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const lineScale = useTransform(
    progress,
    [index / processSteps.length, (index + 1) / processSteps.length],
    [0, 1]
  )

  return (
    <div ref={ref} className="relative flex gap-6 sm:gap-10">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: index * 0.12 }}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-orange font-heading text-sm font-bold text-ink shadow-[2px_2px_0_0_#1F1A17]"
        >
          {step.step}
        </motion.div>
        {index < processSteps.length - 1 && (
          <motion.div
            className="w-0.5 flex-1 bg-ink/20"
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
          />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -30, rotateY: 10 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.17, 0.67, 0.29, 1.2],
        }}
        className="mb-12 flex-1 rounded-xl border-2 border-ink bg-white p-6 shadow-[4px_4px_0_0_#1F1A17]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h3 className="font-display text-2xl font-semibold text-ink">{step.title}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{step.detail}</p>
      </motion.div>
    </div>
  )
}

export default function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={containerRef} className="bg-orange-100 py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="From discovery to results."
          sub="A proven process that takes your brand from invisible to indispensable."
        />
        <div className="relative mt-14 max-w-2xl mx-auto">
          {processSteps.map((step, i) => (
            <Step key={step.step} step={step} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}
