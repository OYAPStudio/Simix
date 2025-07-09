import { HeroSection } from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { StatsSection } from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <CTASection />
    </>
  )
}