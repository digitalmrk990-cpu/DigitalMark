import { whyChooseUs } from '../data/content'
import { SectionHeading } from '../components/ui/Section'
import { CTABanner } from '../components/sections/Highlights'

const process = [
  { step: 'Monthly Content Plan', detail: 'A clear roadmap for every post and campaign.' },
  { step: 'Posting Schedule', detail: 'Consistent cadence across every channel.' },
  { step: 'Content Themes', detail: 'Recurring pillars that build a recognizable brand.' },
  { step: 'Campaign Planning', detail: 'Launches and promos mapped to business goals.' },
  { step: 'Festival Marketing', detail: 'Timely, culturally relevant moments.' },
  { step: 'Trend Integration', detail: 'Riding what works, on purpose not by luck.' },
]

export default function About() {
  return (
    <>
      <section className="border-b-2 border-ink bg-orange py-16">
        <div className="container-x">
          <p className="eyebrow text-ink">Who we are</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            A creative social media agency.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
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
        <div className="mt-10 divide-y-2 divide-ink border-y-2 border-ink">
          {process.map((p, i) => (
            <div key={p.step} className="flex items-baseline gap-6 py-5">
              <span className="font-heading text-sm font-bold text-orange-600">
                /{String(i + 2).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{p.step}</h3>
                <p className="text-sm text-ink-muted">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us — slide 10 */}
      <section className="bg-orange-100 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us?" title="The way we work." />
          <div className="mt-10 flex flex-wrap gap-3">
            {whyChooseUs.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
