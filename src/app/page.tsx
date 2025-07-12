import { HeroSection } from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ImprovedAboutSection from '@/components/about-section'
import LiquidGlassStats from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ServicesSection />
      <ImprovedAboutSection 
        hasTopBlur={true}           // Enable top blur transition
        hasBottomBlur={true}        // Enable bottom blur transition  
        blurHeight="sm"             // 'sm' | 'md' | 'lg' | 'xl'
        blurIntensity="subtle"      // 'subtle' | 'medium' | 'strong'
      />
      
      <LiquidGlassStats 
        hasTopBlur={true}
        hasBottomBlur={true}
        blurHeight="lg"
        blurIntensity="medium"
      />
      <CTASection 
        hasTopBlur={true}           // Enable top blur transition
        hasBottomBlur={false}       // Enable bottom blur transition  
        blurHeight="lg"             // 'sm' | 'md' | 'lg' | 'xl'
        blurIntensity="medium"      // 'subtle' | 'medium' | 'strong'
      />
    </>
  )
}