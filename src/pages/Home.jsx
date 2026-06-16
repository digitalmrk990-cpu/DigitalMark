import Hero from '../components/sections/Hero'
import StackedServices from '../components/sections/StackedServices'
import { WhyChooseUs, CTABanner } from '../components/sections/Highlights'
import { Marquee } from '../components/ui/Section'
import { designServices } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={designServices} />
      <StackedServices />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}
