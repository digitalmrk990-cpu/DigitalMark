import { servicePillars, websiteTypes } from '../data/content'
import { SectionHeading } from '../components/ui/Section'
import { CTABanner } from '../components/sections/Highlights'
import { Check } from 'lucide-react'

export default function Services() {
  return (
    <>
      <section className="border-b-2 border-ink bg-orange py-16">
        <div className="container-x">
          <p className="eyebrow text-ink">What we do</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-ink sm:text-6xl">
            Services
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            Transform engagement into measurable business growth.
          </p>
        </div>
      </section>

      <div className="container-x space-y-20 py-20">
        {servicePillars.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="font-heading text-sm font-bold uppercase tracking-widest text-orange-600">
                0{i + 1}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {s.title}
              </h2>
              <p className="mt-3 text-ink-muted">{s.summary}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border-2 border-ink bg-orange-100 px-4 py-3 text-sm font-medium"
                >
                  <Check size={16} className="shrink-0 text-orange-600" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Website types detail (slide 6) */}
        <section>
          <SectionHeading
            eyebrow="Website Design"
            title="Professional websites that build trust and generate inquiries."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border-2 border-ink bg-orange-100 p-6 shadow-[4px_4px_0_0_#1F1A17]"
              >
                <h3 className="font-display text-xl font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{w.blurb}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTABanner />
    </>
  )
}
