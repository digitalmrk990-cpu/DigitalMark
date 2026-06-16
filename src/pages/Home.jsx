import Hero from '../components/sections/Hero'
import StackedServices from '../components/sections/StackedServices'
import StatsCounter from '../components/sections/StatsCounter'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import BrandShowcase from '../components/sections/BrandShowcase'
import { WhyChooseUs, CTABanner } from '../components/sections/Highlights'
import { Marquee } from '../components/ui/Section'
import { designServices } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={designServices} />
      <StatsCounter />
      <StackedServices />
      <BrandShowcase />
      <ProcessTimeline />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}
