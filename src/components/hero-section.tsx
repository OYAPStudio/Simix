'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Settings, Home, Cpu, Zap, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const hero = heroRef.current
    const logo = logoRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const description = descriptionRef.current
    const badges = badgesRef.current
    const buttons = buttonsRef.current
    const scrollHint = scrollHintRef.current
    const background = backgroundRef.current

    if (!container || !hero) return

    // Set initial states
    gsap.set([logo, title, subtitle, description, badges, buttons], {
      opacity: 0,
      y: 40,
      scale: 0.98,
    })

    // Text content array for smooth transitions
    const textContent = [
      "Leading provider of industrial control systems, smart building solutions, and automation technologies",
      "Transforming industries with cutting-edge automation solutions and intelligent control systems",
      "Your trusted partner in industrial automation and smart technology integration"
    ]
    let currentTextIndex = 0

    // Create the pinned scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=150%',
        pin: hero,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress
          
          // Smooth text transitions
          if (progress < 0.3) {
            currentTextIndex = 0
          } else if (progress < 0.6) {
            currentTextIndex = 1
          } else {
            currentTextIndex = 2
          }
          
          if (description && description.textContent !== textContent[currentTextIndex]) {
            gsap.to(description, {
              opacity: 0,
              duration: 0.2,
              onComplete: () => {
                description.textContent = textContent[currentTextIndex]
                gsap.to(description, { opacity: 1, duration: 0.2 })
              }
            })
          }
        }
      }
    })

    // Keep background dark - just subtle opacity change
    tl.to(background, {
      opacity: 0.8,
      duration: 1,
    }, 0)

    // Logo entrance - smooth and modern
    tl.to(logo, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: 'power3.out',
    }, 0)

    // Title entrance
    tl.to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: 'power3.out',
    }, 0.1)

    // Subtitle entrance
    tl.to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, 0.2)

    // Description entrance
    tl.to(description, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, 0.3)

    // Badges entrance - appear during scroll
    tl.to(badges?.querySelectorAll('.badge-item') || [], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power3.out',
    }, 0.4)

    // Buttons entrance - appear during scroll
    tl.to(buttons?.querySelectorAll('.button-item') || [], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power3.out',
    }, 0.5)

    // Final fade out
    tl.to([logo, title, subtitle, description, badges, buttons], {
      opacity: 0,
      y: -20,
      duration: 0.7,
      ease: 'power3.in',
    }, 1.2)

    // Scroll hint animation
    if (scrollHint) {
      gsap.to(scrollHint, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=20%',
          scrub: true,
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        
        {/* Remove old background div, as the gradient is now on the container */}

        {/* Subtle Grid Pattern Only */}
        <div 
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Main Content - PROPERLY CENTERED */}
        <div className="relative z-10 h-full flex items-center justify-center pt-12 pb-16 sm:pt-0 sm:pb-0 ">
          <div className="text-center px-4 sm:px-6 w-full max-w-4xl mx-auto">
            
            {/* Enhanced Logo - Reduced size for mobile */}
            <div ref={logoRef} className="sm:mt-[40px] sm:-mb-[400px] md:mt-40 md:-mb-40 will-change-transform">
              <div className="inline-flex items-center justify-center mb-12 scale-150">
                <Image
                  src="/Double-Simix.png"
                  alt="Simix Logo"
                  width={200}
                  height={200}
                  className=" w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(95,125,183,0.5))',
                    clipPath: 'inset(30% 0% 30% 0%)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <Zap 
                  className="w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] text-white hidden"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(95,125,183,0.5))',
                  }}
                />
              </div>
            </div>

            {/* Main Title
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-1 -mt-18 md:-mt-18 tracking-tight leading-tight will-change-transform"
              style={{
                background: 'linear-gradient(45deg, #ffffff 20%, #f0f9ff 60%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.4))',
              }}
            >
              SIMIX
            </h1> */}

            {/* Subtitle */}
            <h2 
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 mb-0 tracking-wide will-change-transform"
            >
              Engineering Excellence
            </h2>

            <h3 className="text-sm sm:text-base md:text-lg font-extralight text-white/70 mb-2 tracking-widest">
              in Automation
            </h3>

            {/* Clean Description */}
            <p 
              ref={descriptionRef}
              className="text-sm sm:text-sm md:text-base text-white/80 mb-4 max-w-xs sm:max-w-2xl mx-auto leading-snug px-2 sm:px-0 will-change-transform"
            >
              Leading provider of industrial control systems, smart building solutions, and automation technologies
            </p>

            {/* Service Badges - Enhanced Mobile Layout */}
            <div 
              ref={badgesRef}
              className="mb-6 will-change-transform"
            >
              {/* Top Row - 3 badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                {[
                  { icon: Settings, label: 'PLC & SCADA', color: '#60A5FA' },
                  { icon: Home, label: 'Smart Buildings', color: '#34D399' },
                  { icon: Cpu, label: 'BMS Systems', color: '#A78BFA' },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="badge-item flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white font-medium shadow-lg will-change-transform opacity-0"
                  >
                    <div 
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Bottom Row - 1 badge centered */}
              <div className="flex justify-center">
                <div className="badge-item flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white font-medium shadow-lg will-change-transform opacity-0">
                  <div 
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: '#FB7185' }}
                  >
                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm">
                    KNX Automation
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Stacked on mobile */}
            <div 
              ref={buttonsRef}
              className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto px-4"
            >
              <div className="button-item will-change-transform opacity-0">
                <a
                  href="/services"
                  className="group inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#1A1D23] font-bold rounded-xl shadow-xl text-sm sm:text-base transition-all duration-300 hover:scale-105 w-full"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              
              <div className="button-item will-change-transform opacity-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-white/10 border border-white/30 text-white font-bold rounded-xl backdrop-blur-md text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div 
          ref={scrollHintRef}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center will-change-transform"
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 mx-auto mb-2 sm:mb-3" />
          </div>
          <p className="text-white/60 text-xs sm:text-sm font-medium tracking-widest uppercase">
            Scroll to discover
          </p>
        </div>

        {/* Progress Indicator */}
      </div> {/* End of heroRef main content */}
      {/* Glass Wave Separator - simple but powerful */}
      <div className="w-full overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-8 md:h-10"
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hero-vertical-gradient" x1="0" y1="40" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F2F4FF" />
              <stop offset="100%" stopColor="#5F7DB7" />
            </linearGradient>
          </defs>
          <path
            d="M0,20 Q720,40 1440,20 L1440,40 L0,40 Z"
            fill="url(#hero-vertical-gradient)"
          />
        </svg>
      </div>
    </div>
  )
}