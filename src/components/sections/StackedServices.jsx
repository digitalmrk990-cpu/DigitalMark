import { motion } from 'framer-motion'
import { Brush, Clapperboard, Globe, Lightbulb, Megaphone } from 'lucide-react'
import { SectionHeading } from '../ui/Section'

// Scattered, overlapping service cards (matches the deck-derived layout).
// Each card defines its own theme + desktop position/rotation.
const cards = [
  {
    num: '01',
    title: 'Graphic Design',
    blurb: 'Elevating your visual identity across all platforms with data-backed design principles.',
    tags: ['Carousels', 'Posters', 'Branding'],
    Icon: Brush,
    theme: 'cream',
    // desktop placement
    pos: 'lg:left-[2%] lg:top-[0%] lg:w-[30%] lg:-rotate-2 lg:z-20',
  },
  {
    num: '02',
    title: 'Video Editing',
    blurb: 'Dynamic visual storytelling that captures attention in the first three seconds.',
    tags: ['Reels', 'Brand Films'],
    Icon: Clapperboard,
    theme: 'dark',
    pos: 'lg:left-[35%] lg:top-[14%] lg:w-[32%] lg:rotate-1 lg:z-30',
  },
  {
    num: '03',
    title: 'Website Design',
    blurb: "Websites that don't just look pretty — they convert browsers into advocates.",
    tags: [],
    Icon: Globe,
    theme: 'rust',
    pos: 'lg:left-[68%] lg:top-[-6%] lg:w-[26%] lg:rotate-3 lg:z-10',
  },
  {
    num: '04',
    title: 'Content Ideation',
    blurb: 'Strategic planning and narrative frameworks that build value.',
    tags: ['Scripting'],
    Icon: Lightbulb,
    theme: 'sand',
    pos: 'lg:left-[14%] lg:top-[52%] lg:w-[28%] lg:-rotate-1 lg:z-20',
  },
  {
    num: '05',
    title: 'Creative Campaigns',
    blurb: 'End-to-end campaign management designed to achieve specific business KPIs.',
    tags: ['Lead Gen', 'Brand Awareness', 'Product Launches'],
    Icon: Megaphone,
    theme: 'white',
    pos: 'lg:left-[40%] lg:top-[58%] lg:w-[40%] lg:rotate-0 lg:z-30',
  },
]

const themes = {
  cream: {
    card: 'bg-cream-50 border-ink',
    num: 'text-cream-200',
    title: 'text-ink',
    blurb: 'text-ink-muted',
    icon: 'text-orange-600',
    tag: 'border border-ink/30 text-ink-soft',
  },
  sand: {
    card: 'bg-cream-100 border-ink',
    num: 'text-cream-200',
    title: 'text-ink',
    blurb: 'text-ink-muted',
    icon: 'text-orange-600',
    tag: 'bg-cream-200 text-ink-soft',
  },
  white: {
    card: 'bg-white border-ink',
    num: 'text-cream-100',
    title: 'text-ink',
    blurb: 'text-ink-muted',
    icon: 'text-orange-600',
    tag: 'bg-cream-100 text-ink-soft',
  },
  dark: {
    card: 'bg-ink border-ink',
    num: 'text-white/15',
    title: 'text-white',
    blurb: 'text-white/70',
    icon: 'text-white',
    tag: 'bg-white/10 text-white/80',
  },
  rust: {
    card: 'bg-orange-700 border-orange-700',
    num: 'text-white/20',
    title: 'text-white',
    blurb: 'text-white/85',
    icon: 'text-white',
    tag: 'bg-white/15 text-white',
  },
}

function Card({ data, i }) {
  const t = themes[data.theme]
  const { Icon } = data
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6, rotate: 0, zIndex: 40, transition: { duration: 0.25 } }}
      className={`relative w-full rounded-md border p-7 shadow-[6px_8px_24px_-6px_rgba(31,26,23,0.35)] lg:absolute ${data.pos} ${t.card}`}
    >
      <div className="flex items-start justify-between">
        <span className={`font-display text-5xl font-medium leading-none ${t.num}`}>
          {data.num}
        </span>
        <Icon size={22} className={t.icon} strokeWidth={1.6} />
      </div>
      <h3 className={`mt-6 font-display text-2xl font-semibold ${t.title}`}>
        {data.title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed ${t.blurb}`}>{data.blurb}</p>
      {data.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${t.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  )
}

export default function StackedServices() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Our Services"
        title="Create content that attracts, engages, and converts."
        sub="Five pillars that take a brand from invisible to in-demand."
      />

      {/* Desktop: scattered absolute layout. Mobile: simple stack. */}
      <div className="mt-12 flex flex-col gap-6 lg:relative lg:mt-16 lg:block lg:h-[560px]">
        {cards.map((c, i) => (
          <Card key={c.num} data={c} i={i} />
        ))}
      </div>
    </section>
  )
}
