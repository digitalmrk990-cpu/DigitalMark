import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { whyChooseUs } from '../data/content'
import { SectionHeading } from '../components/ui/Section'
import { CTABanner } from '../components/sections/Highlights'

const monthlyIdeas = [
  { label: 'Brand Storytelling Posts', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80' },
  { label: 'Behind-the-Scenes Content', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80' },
  { label: 'Client Testimonials', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { label: 'Product Showcases', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
  { label: 'Industry Tips & Tricks', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80' },
  { label: 'User-Generated Campaign', img: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=400&q=80' },
]

const postingIdeas = [
  { label: 'Best Time to Post', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
  { label: 'Peak Engagement Days', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80' },
  { label: 'Reel Viral Strategy', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
  { label: 'Scheduling Calendar', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { label: 'Audience Analytics', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
  { label: 'Content Frequency', img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&q=80' },
]

const contentIdeas = [
  { label: 'Style & Aesthetic', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
  { label: 'Colour Palette', img: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=400&q=80' },
  { label: 'Lighting Techniques', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { label: 'Typography', img: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&q=80' },
  { label: 'Composition', img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&q=80' },
  { label: 'Visual Branding', img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80' },
]

const campaignIdeas = [
  { label: 'Campaign Strategy', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  { label: 'Campaign Goals', img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80' },
  { label: 'Campaign Flow', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80' },
  { label: 'Campaign Launch', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80' },
  { label: 'Campaign Analysis', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80' },
  { label: 'Campaign Growth', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80' },
]

const trendIdeas = [
  { label: 'Trend Analysis', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
  { label: 'Viral Content Strategy', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80' },
  { label: 'Platform Algorithm Updates', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80' },
  { label: 'Cultural Trendspotting', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80' },
  { label: 'Emerging Formats', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80' },
  { label: 'Audience Insights', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
]

const festivalIdeas = [
  { label: 'Diwali Marketing', img: 'https://images.unsplash.com/photo-1605283455365-68b80d497975?w=400&q=80' },
  { label: 'Chinese New Year', img: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&q=80' },
  { label: 'Holi Celebration', img: 'https://images.unsplash.com/photo-1711550000970-55d985f7b3c2?w=400&q=80' },
  { label: 'Dussehra Campaign', img: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&q=80' },
  { label: 'Christmas Festive', img: 'https://images.unsplash.com/photo-1576083315979-810f72cec87a?w=400&q=80' },
  { label: 'Eid Campaign', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
]

const process = [
  { step: 'Monthly Content Plan', detail: '' },
  { step: 'Posting Schedule', detail: 'Consistent cadence across every channel.' },
  { step: 'Content Themes', detail: 'Recurring pillars that build a recognizable brand.' },
  { step: 'Campaign Planning', detail: 'Launches and promos mapped to business goals.' },
  { step: 'Festival Marketing', detail: 'Timely, culturally relevant moments.' },
  { step: 'Trend Integration', detail: '' },
]

const allSlides = { monthly: monthlyIdeas, posting: postingIdeas, content: contentIdeas, campaign: campaignIdeas, festival: festivalIdeas, trend: trendIdeas }

export default function About() {
  const [activeCard, setActiveCard] = useState(null)
  const [slide, setSlide] = useState(0)
  const [showBullets, setShowBullets] = useState(false)

  const slides = allSlides[activeCard] || []
  const total = slides.length

  const toggleCard = (name) => {
    if (activeCard === name) {
      setActiveCard(null)
    } else {
      setActiveCard(name)
      setSlide(0)
    }
  }

  const prevSlide = () => setSlide((s) => (s === 0 ? total - 1 : s - 1))
  const nextSlide = () => setSlide((s) => (s === total - 1 ? 0 : s + 1))

  return (
    <>
      <section
        className="relative border-b-2 border-black/10 bg-cover bg-center bg-no-repeat pb-16 pt-28 text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-x relative z-10">
          <p className="eyebrow text-white">Who we are</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">
            A creative social media agency.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white">
            We help brands build a strong digital presence through content,
            design, video, and performance marketing — turning engagement into
            measurable business growth.
          </p>
        </div>
      </section>

      {/* Content calendar / process — slide 8 */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Content Calendar"
          title="Consistent content. Strategic execution."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => {
            const cardName =
              p.step === 'Monthly Content Plan' ? 'monthly' :
              p.step === 'Posting Schedule' ? 'posting' :
              p.step === 'Content Themes' ? 'content' :
              p.step === 'Campaign Planning' ? 'campaign' :
              p.step === 'Festival Marketing' ? 'festival' :
              p.step === 'Trend Integration' ? 'trend' :
              null
            const isInteractive = cardName !== null
            const isOpen = activeCard === cardName
            return (
              <div
                key={p.step}
                onClick={isInteractive ? () => toggleCard(cardName) : undefined}
                className={`relative flex flex-col justify-center overflow-hidden border-2 border-ink p-6 ${isInteractive ? 'cursor-pointer' : ''}`}
              >
                {isInteractive && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          'radial-gradient(circle at 20% 50%, #E8723C, transparent 70%)',
                          'radial-gradient(circle at 80% 50%, #E8723C, transparent 70%)',
                          'radial-gradient(circle at 20% 50%, #E8723C, transparent 70%)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="pointer-events-none absolute inset-0 opacity-15"
                      animate={{
                        background: [
                          'radial-gradient(circle at 80% 20%, #1F1A17, transparent 60%)',
                          'radial-gradient(circle at 20% 80%, #1F1A17, transparent 60%)',
                          'radial-gradient(circle at 80% 20%, #1F1A17, transparent 60%)',
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </>
                )}
                <span className="relative z-10 font-heading text-sm font-bold text-orange-600">
                  /{String(i + 2).padStart(2, '0')}
                </span>
                <h3 className={`relative z-10 mt-2 font-display text-xl font-semibold ${isInteractive ? 'text-orange-600' : 'text-ink'}`}>
                  {cardName === 'monthly' ? '📅 ' : cardName === 'posting' ? '⏰ ' : cardName === 'content' ? '🎨 ' : cardName === 'campaign' ? '🚀 ' : cardName === 'festival' ? '🎊 ' : cardName === 'trend' ? '📈 ' : ''}{p.step}
                </h3>
                {isInteractive && isOpen && (
                  <div className="relative z-10 mt-4">
                    <div className="relative overflow-hidden rounded-lg border border-orange-300 bg-white shadow-sm">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={slide}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div
                            className="h-36 bg-cover bg-center sm:h-44"
                            style={{ backgroundImage: `url('${slides[slide].img}')` }}
                          />
                          <p className="px-3 py-2 text-center font-display text-sm font-semibold text-ink">
                            {slides[slide].label}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSlide() }}
                        className="rounded-full border border-orange-300 bg-white px-3 py-1 text-xs font-bold text-orange-700 transition hover:bg-orange-100"
                      >
                        ← Prev
                      </button>
                      <span className="text-xs font-medium text-white">
                        {slide + 1} / {total}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSlide() }}
                        className="rounded-full border border-orange-300 bg-white px-3 py-1 text-xs font-bold text-orange-700 transition hover:bg-orange-100"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}
                {isInteractive ? (
                  <p className="relative z-10 mt-1 text-sm font-medium text-orange-700">
                    Click to see ideas
                  </p>
                ) : (
                  p.detail && <p className="relative z-10 mt-1 text-sm text-white">{p.detail}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Why choose us — slide 10 */}
      <section
        onClick={() => setShowBullets((s) => !s)}
        className="relative cursor-pointer bg-cover bg-center bg-no-repeat py-20 text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container-x relative z-10">
          <SectionHeading eyebrow="Why Choose Us?" title="The way we work." titleClass="text-white" eyebrowClass="text-white" />
          {!showBullets && (
            <button
              onClick={(e) => { e.stopPropagation(); setShowBullets(true) }}
              className="mt-4 rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <span className="mr-2 text-lg">👁️</span>
              Click to see what sets us apart
            </button>
          )}
          <AnimatePresence>
            {showBullets && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {whyChooseUs.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.07, duration: 0.25 }}
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
