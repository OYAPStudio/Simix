'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Settings, Home, Cpu, Zap, ChevronDown } from 'lucide-react'
import Link from 'next/link'
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
      y: 100,
    })

    gsap.set(logo, {
      scale: 0.5,
      rotation: 180,
    })

    gsap.set(title, {
      scale: 0.8,
      letterSpacing: '-0.1em'
    })

    gsap.set(background, {
      scale: 1.2,
      opacity: 0.8,
    })

    // Create the pinned scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=150%', // Pin for 150% of viewport height
        pin: hero,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update background based on scroll progress
          const progress = self.progress
          gsap.set(background, {
            scale: 1.2 + (progress * 0.5),
            rotation: progress * 15,
            opacity: 0.8 - (progress * 0.6),
          })
        },
      }
    })

    // Background animation
    tl.to(background, {
      scale: 2,
      rotation: 30,
      opacity: 0.2,
      duration: 1,
    }, 0)

    // Logo entrance animation
    tl.to(logo, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, 0)

    // Title entrance with letter spacing
    tl.to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      letterSpacing: '0em',
      duration: 1,
      ease: 'power3.out',
    }, 0.2)

    // Subtitle entrance
    tl.to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, 0.4)

    // Description entrance
    tl.to(description, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, 0.6)

    // Badges entrance (stagger)
    tl.to(badges?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    }, 0.8)

    // Buttons entrance
    tl.to(buttons?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    }, 1.2)

    // Final phase - fade everything out
    tl.to([title, subtitle, description, badges, buttons], {
      opacity: 0,
      y: -50,
      scale: 0.9,
      duration: 0.8,
      ease: 'power2.in',
    }, 1.8)

    tl.to(logo, {
      opacity: 0,
      scale: 0.3,
      y: -200,
      rotation: -360,
      duration: 1,
      ease: 'power2.in',
    }, 1.8)

    // Scroll hint animation (separate from main timeline)
    if (scrollHint) {
      gsap.to(scrollHint, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=20%',
          scrub: true,
        }
      })
    }

    // Floating elements animation
    const floatingElements = container.querySelectorAll('.floating-element')
    floatingElements.forEach((el, index) => {
      gsap.to(el, {
        y: -30,
        x: Math.sin(index) * 20,
        rotation: Math.cos(index) * 10,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5,
      })
    })

    // Background gradient animation
    const gradientAnimation = gsap.to(background, {
      background: 'linear-gradient(135deg, #696E82 0%, #5F7DB7 50%, #354059 100%)',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gradientAnimation.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        
        {/* Animated Background */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 will-change-transform"
          style={{
            background: 'linear-gradient(135deg, #5F7DB7 0%, #354059 50%, #696E82 100%)'
          }}
        />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-element absolute rounded-full bg-white/5 blur-xl will-change-transform"
              style={{
                width: `${80 + i * 30}px`,
                height: `${80 + i * 30}px`,
                left: `${10 + i * 11}%`,
                top: `${15 + Math.sin(i) * 25}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-6xl mx-auto">
            
            {/* Logo */}
            <div ref={logoRef} className="mb-12 will-change-transform">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Simix Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <Zap className="w-16 h-16 text-white hidden" />
              </div>
            </div>

            {/* Main Title */}
            <h1 
              ref={titleRef}
              className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight leading-none will-change-transform"
              style={{
                background: 'linear-gradient(45deg, #ffffff 30%, #f0f9ff 50%, #e0f2fe 70%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 60px rgba(255,255,255,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))',
              }}
            >
              SIMIX
            </h1>

            {/* Subtitle */}
            <h2 
              ref={subtitleRef}
              className="text-3xl md:text-5xl font-light text-white/90 mb-4 tracking-wide will-change-transform"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Engineering Excellence
            </h2>

            <h3 className="text-xl md:text-3xl font-extralight text-white/70 mb-8 tracking-widest">
              in Automation
            </h3>

            {/* Description */}
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed will-change-transform"
            >
              Leading provider of industrial control systems, smart building solutions, and automation technologies
            </p>

            {/* Service Badges */}
            <div 
              ref={badgesRef}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              {[
                { icon: Settings, label: 'PLC & SCADA', color: '#60A5FA' },
                { icon: Home, label: 'Smart Buildings', color: '#34D399' },
                { icon: Cpu, label: 'BMS Systems', color: '#A78BFA' },
                { icon: Zap, label: 'KNX Automation', color: '#FB7185' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 text-white font-medium shadow-2xl cursor-pointer hover:bg-white/10 transition-all duration-300 will-change-transform"
                  style={{
                    boxShadow: `0 0 30px ${item.color}20`,
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-8 justify-center"
            >
              <div className="will-change-transform">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-12 py-6 bg-white text-[#354059] font-bold rounded-2xl shadow-2xl text-xl transition-all duration-300 hover:shadow-white/20 hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="will-change-transform">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-12 py-6 bg-transparent border-2 border-white/50 text-white font-bold rounded-2xl backdrop-blur-xl text-xl hover:bg-white hover:text-[#354059] hover:border-white transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div 
          ref={scrollHintRef}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center will-change-transform"
        >
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto mb-3" />
          </div>
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase">
            Scroll to discover
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="absolute top-4 right-4 w-1 h-20 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-white to-white/60 rounded-full transition-all duration-300"
            style={{ height: '0%' }}
            id="progress-bar"
          />
        </div>
      </div>
    </div>
  )
}