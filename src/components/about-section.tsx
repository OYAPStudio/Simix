'use client'

import { useEffect, useState, useRef } from 'react'
import { CheckCircle, Target, Users, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const startCountUp = () => {
    if (hasStarted) return
    setHasStarted(true)
    
    const startTime = Date.now()
    const endTime = startTime + duration
    
    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }
    
    requestAnimationFrame(updateCount)
  }

  return { count, startCountUp }
}

// Individual Stat Card Component
function StatCard({ stat, index }: { stat: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { count, startCountUp } = useCountUp(parseInt(stat.value.replace(/\D/g, '')))

  useEffect(() => {
    if (isInView) {
      setTimeout(() => startCountUp(), index * 200)
    }
  }, [isInView, startCountUp, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="group relative backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-gray-300/40 dark:border-white/20 hover:border-blue-400 dark:hover:border-blue-400 rounded-3xl p-6 md:p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Specular highlights */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      
      {/* Icon with gentle pulse on hover */}
      <motion.div
        whileHover={{ 
          scale: 1.1,
          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
        }}
        transition={{ duration: 0.3 }}
        className={`relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl group-hover:from-white/50 transition-all duration-300"></div>
        <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <stat.icon className="relative w-8 h-8 md:w-10 md:h-10 text-white z-10 drop-shadow-lg" />
      </motion.div>

      {/* Animated count display */}
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent drop-shadow-lg">
          {count}{stat.value.replace(/\d/g, '')}
        </div>
        <div className="text-gray-700 dark:text-white/80 font-medium text-sm md:text-base">
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}

// Feature Card Component
function FeatureCard({ feature, index }: { feature: string, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(255,255,255,0.15)'
      }}
      className="group relative backdrop-blur-lg bg-white/8 hover:bg-white/12 border border-gray-300/30 dark:border-white/20 hover:border-blue-400 dark:hover:border-blue-400 rounded-2xl p-3 md:p-4 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Glass shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
      
      <div className="relative flex items-center z-10">
        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 drop-shadow-lg" />
        <span className="text-gray-900 dark:text-white/90 transition-colors duration-300 font-medium">
          {feature}
        </span>
      </div>
    </motion.div>
  )
}

interface ImprovedAboutSectionProps {
  hasTopBlur?: boolean
  hasBottomBlur?: boolean
  blurHeight?: 'sm' | 'md' | 'lg' | 'xl'
  blurIntensity?: 'subtle' | 'medium' | 'strong'
}

export default function ImprovedAboutSection({ 
  hasTopBlur = false, 
  hasBottomBlur = false,
  blurHeight = 'lg',
  blurIntensity = 'medium'
}: ImprovedAboutSectionProps) {
  const features = [
    'Advanced PLC & SCADA Programming',
    'Smart Building Automation (KNX)',
    'Building Management Systems (BMS)',
    'Control Panel Design & Manufacturing',
    'AutoCAD Electrical & EPLAN Design',
    'Industrial Process Control',
    'VFD & Motor Control Systems',
    '24/7 Technical Support'
  ]

  const stats = [
    { icon: Target, label: 'Projects Completed', value: '500+', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, label: 'Happy Clients', value: '200+', color: 'from-green-400 to-emerald-500' },
    { icon: Award, label: 'Years Experience', value: '6+', color: 'from-purple-400 to-violet-500' }
  ]

  // Blur height configurations
  const blurHeights = {
    sm: 'h-16',
    md: 'h-24', 
    lg: 'h-32',
    xl: 'h-40'
  }

  // Blur intensity configurations
  const blurIntensities = {
    subtle: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md', 
    strong: 'backdrop-blur-lg'
  }

  return (
    <section className="relative bg-slate-50 dark:bg-[#0A0E1A] text-gray-900 dark:text-white overflow-hidden">
      
      {/* TOP GLASSMORPHISM BLUR TRANSITION (100% -> 0%) */}
      {hasTopBlur && (
        <div className={`absolute top-0 left-0 w-full ${blurHeights[blurHeight]} z-20 pointer-events-none`}>
          {/* Glassmorphism Blur Gradient - Top to Bottom (100% -> 0%) */}
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} dark:hidden`} 
               style={{
                 background: `linear-gradient(to bottom, 
                   rgba(248, 250, 252, 0.2) 0%, 
                   rgba(248, 250, 252, 0.15) 20%, 
                   rgba(248, 250, 252, 0.1) 40%, 
                   rgba(248, 250, 252, 0.05) 60%, 
                   rgba(248, 250, 252, 0.02) 80%, 
                   rgba(248, 250, 252, 0) 100%)`,
                 filter: 'var(--tw-backdrop-blur)'
               }} />
          
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} hidden dark:block`} 
               style={{
                 background: `linear-gradient(to bottom, 
                   rgba(10, 14, 26, 0.3) 0%, 
                   rgba(10, 14, 26, 0.2) 20%, 
                   rgba(10, 14, 26, 0.15) 40%, 
                   rgba(10, 14, 26, 0.08) 60%, 
                   rgba(10, 14, 26, 0.03) 80%, 
                   rgba(10, 14, 26, 0) 100%)`,
                 filter: 'var(--tw-backdrop-blur)'
               }} />
          
          {/* Glass reflection overlay - smoother transition */}
          <div className="absolute inset-0 dark:hidden" 
               style={{
                 background: `linear-gradient(to bottom, 
                   rgba(255, 255, 255, 0.08) 0%, 
                   rgba(255, 255, 255, 0.04) 30%, 
                   rgba(255, 255, 255, 0.02) 60%, 
                   rgba(255, 255, 255, 0) 100%)`
               }} />
          
          <div className="absolute inset-0 hidden dark:block" 
               style={{
                 background: `linear-gradient(to bottom, 
                   rgba(51, 65, 85, 0.12) 0%, 
                   rgba(51, 65, 85, 0.06) 30%, 
                   rgba(51, 65, 85, 0.03) 60%, 
                   rgba(51, 65, 85, 0) 100%)`
               }} />
        </div>
      )}
      
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/8 dark:bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-pink-500/8 dark:bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '8s'}}></div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${hasTopBlur ? 'pt-32' : 'pt-12'} ${hasBottomBlur ? 'pb-32' : 'pb-16'} md:py-16`}>
        
        {/* Header Section - Vertical Stack Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center -mb-4 md:-mb-6"
        >
          {/* About Title */}
          <h2 className="text-10xl md:text-10xl lg:text-7xl font-black tracking-wide bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent -mb-10 md:-mb-20">
            About
          </h2>
          
          {/* Large Simix Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.1,
              filter: "drop-shadow(0 0 30px rgba(95,125,183,0.6))"
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative"
          >
            <Image
              src="/Simix-Logo.png"
              alt="Simix Logo"
              width={320}
              height={320}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling?.classList.remove('hidden')
              }}
            />
            {/* Fallback */}
            <div className="hidden w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-black text-4xl md:text-6xl lg:text-8xl">
              S
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Grid - Reduced gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Description and Features */}
          <div className="space-y-6">
            
            {/* Company Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="group relative backdrop-blur-lg bg-white/20 dark:bg-white/8 hover:bg-white/30 dark:hover:bg-white/12 border border-gray-300/50 dark:border-white/20 hover:border-blue-400 dark:hover:border-blue-400 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                
                <p className="relative text-lg md:text-xl text-gray-900 dark:text-white/90 leading-relaxed z-10">
                  Simix is a team specialized in classic and programmed control systems,
                  building management systems, and smart buildings. We deliver cutting-edge
                  solutions for industrial automation and smart infrastructure.
                </p>
              </div>
              
              <div className="group relative backdrop-blur-lg bg-white/20 dark:bg-white/8 hover:bg-white/30 dark:hover:bg-white/12 border border-gray-300/50 dark:border-white/20 hover:border-blue-400 dark:hover:border-blue-400 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                
                <p className="relative text-base md:text-lg text-gray-800 dark:text-white/75 leading-relaxed z-10">
                  Our expertise spans across ATS, STAR DELTA, VFD, PLC, HMI, SCADA, DCS,
                  BMS, Smart Home, KNX System, AutoCAD Electrical, and EPLAN technologies,
                  ensuring comprehensive solutions for all your automation needs.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center px-8 py-4 backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-gray-300/40 dark:border-white/30 hover:border-blue-400 dark:hover:border-blue-400 rounded-2xl text-gray-900 dark:text-white font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute top-2 left-4 w-8 h-4 bg-white/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative z-10">Learn More About Us</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Stats and Logo */}
          <div className="flex flex-col gap-8">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>

            {/* Revolutionary Enhanced Simix Logo Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
              className="relative group cursor-pointer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
              }}
            >
              {/* Dynamic ambient lighting system */}
              <div className="absolute -inset-8 opacity-70 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 via-cyan-400/15 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-l from-purple-400/20 via-pink-400/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-0 w-24 h-24 bg-gradient-to-bl from-green-400/15 via-emerald-400/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 left-0 w-28 h-28 bg-gradient-to-tr from-yellow-400/15 via-orange-400/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
              </div>
              
              {/* Main ultra-premium glass container */}
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 2,
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))"
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative aspect-square backdrop-blur-3xl bg-gradient-to-br from-white/15 via-white/8 to-white/5 dark:from-slate-800/80 dark:via-slate-900/60 dark:to-slate-800/40 border-2 border-white/30 dark:border-slate-600/50 hover:border-blue-400/60 dark:hover:border-blue-400/60 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_rgba(59,130,246,0.2)] transition-all duration-700 overflow-hidden"
                style={{
                  background: `
                    radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)
                  `,
                }}
              >
                
                {/* Advanced layered glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/10 to-white/20 opacity-60 group-hover:opacity-90 transition-opacity duration-500 rounded-[2rem]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 rounded-[2rem]"></div>
                
                {/* Prismatic edge lighting */}
                <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-r from-blue-400/40 via-purple-400/40 via-pink-400/40 to-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
                
                {/* Dynamic specular highlights */}
                <div className="absolute top-6 left-6 w-20 h-20 bg-white/25 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="absolute top-1/4 right-6 w-10 h-10 bg-white/30 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-1/4 left-6 w-12 h-12 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
                
                {/* Floating particles system */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + (i * 10)}%`,
                        top: `${30 + (i * 5)}%`,
                        animation: `float-particle-${i % 3} ${3 + (i * 0.5)}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Content with enhanced presentation */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-6 md:p-8 lg:p-12">
                  
                  {/* Revolutionary logo presentation */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 10,
                      filter: "drop-shadow(0 0 30px rgba(59,130,246,0.4))"
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="relative -mb-4 md:-mb-6"
                  >
                    {/* Logo glow aura */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-purple-400/30 rounded-3xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                    
                    <Image
                      src="/Simix-Logo.png"
                      alt="Simix Logo"
                      width={250}
                      height={250}
                      className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] group-hover:brightness-0 group-hover:invert dark:group-hover:brightness-200 dark:group-hover:invert-0"
                      priority
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    
                    {/* Ultra-premium fallback */}
                    <div className="hidden w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-blue-500 via-cyan-500 via-purple-500 to-blue-600 group-hover:from-gray-900 group-hover:via-gray-800 group-hover:to-gray-900 dark:group-hover:from-white dark:group-hover:via-gray-100 dark:group-hover:to-white rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                      <span className="relative text-white group-hover:text-white dark:group-hover:text-gray-900 font-black text-2xl md:text-3xl lg:text-4xl tracking-wider drop-shadow-lg transition-colors duration-500">SIMIX</span>
                    </div>
                  </motion.div>

                  {/* Enhanced company information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="space-y-4 mt-4"
                  >
                    {/* Subtitle with elegant styling */}
                    <div className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white/90 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500 tracking-wide">
                      Smart Solutions
                    </div>
                    
                    {/* Experience badge with premium design */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm group-hover:border-blue-400/40 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500">
                      <span className="text-sm font-medium text-white dark:text-white">
                        Experience 5-6 Years in the field
                      </span>
                    </div>
                    
                    {/* Company info */}
                    <div className="space-y-2 mt-4">
                      <div className="text-xs md:text-sm text-white/90 dark:text-white/90 leading-relaxed max-w-xs mx-auto">
                        Specialized in industrial automation, building management systems, and smart infrastructure solutions
                      </div>
                      <div className="text-xs md:text-sm text-white/80 dark:text-white/80 leading-relaxed max-w-xs mx-auto">
                        Delivering cutting-edge PLC, SCADA, KNX, and BMS technologies
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Final premium glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent rounded-[2rem] pointer-events-none group-hover:from-white/20 transition-all duration-500"></div>
                
                {/* Edge enhancement ring */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/20 group-hover:ring-blue-400/30 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM GLASSMORPHISM BLUR TRANSITION (0% -> 100%) */}
      {hasBottomBlur && (
        <div className={`absolute bottom-0 left-0 w-full ${blurHeights[blurHeight]} z-20 pointer-events-none`}>
          {/* Glassmorphism Blur Gradient - Bottom to Top (0% -> 100%) */}
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} dark:hidden`} 
               style={{
                 background: `linear-gradient(to top, 
                   rgba(248, 250, 252, 0.2) 0%, 
                   rgba(248, 250, 252, 0.15) 20%, 
                   rgba(248, 250, 252, 0.1) 40%, 
                   rgba(248, 250, 252, 0.05) 60%, 
                   rgba(248, 250, 252, 0.02) 80%, 
                   rgba(248, 250, 252, 0) 100%)`,
                 filter: 'var(--tw-backdrop-blur)'
               }} />
          
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} hidden dark:block`} 
               style={{
                 background: `linear-gradient(to top, 
                   rgba(10, 14, 26, 0.3) 0%, 
                   rgba(10, 14, 26, 0.2) 20%, 
                   rgba(10, 14, 26, 0.15) 40%, 
                   rgba(10, 14, 26, 0.08) 60%, 
                   rgba(10, 14, 26, 0.03) 80%, 
                   rgba(10, 14, 26, 0) 100%)`,
                 filter: 'var(--tw-backdrop-blur)'
               }} />
          
          {/* Glass reflection overlay - smoother transition */}
          <div className="absolute inset-0 dark:hidden" 
               style={{
                 background: `linear-gradient(to top, 
                   rgba(255, 255, 255, 0.08) 0%, 
                   rgba(255, 255, 255, 0.04) 30%, 
                   rgba(255, 255, 255, 0.02) 60%, 
                   rgba(255, 255, 255, 0) 100%)`
               }} />
          
          <div className="absolute inset-0 hidden dark:block" 
               style={{
                 background: `linear-gradient(to top, 
                   rgba(51, 65, 85, 0.12) 0%, 
                   rgba(51, 65, 85, 0.06) 30%, 
                   rgba(51, 65, 85, 0.03) 60%, 
                   rgba(51, 65, 85, 0) 100%)`
               }} />
          
          {/* Floating glass particles for extra effect - with proper opacity fade */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full backdrop-blur-sm animate-float-gentle"
                style={{
                  left: `${15 + (i * 10)}%`,
                  bottom: `${10 + (i % 2) * 50}%`,
                  width: `${2 + (i % 3)}px`,
                  height: `${2 + (i % 3)}px`,
                  background: `rgba(255, 255, 255, ${0.1 - (i % 2) * 0.05})`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + (i % 2)}s`,
                  opacity: 0.6 - (i % 3) * 0.2
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Revolutionary Custom Styles */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(-3px, -8px) rotate(90deg) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(2px, -5px) rotate(180deg) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(-1px, -10px) rotate(270deg) scale(1.1);
            opacity: 0.7;
          }
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        @keyframes float-particle-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          50% { transform: translate(10px, -15px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          50% { transform: translate(-12px, -8px) rotate(120deg); opacity: 0.7; }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
          50% { transform: translate(8px, -12px) rotate(240deg); opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}