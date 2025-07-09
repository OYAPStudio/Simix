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
      className="group relative backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-gray-300/40 dark:border-white/20 hover:border-gray-400/60 dark:hover:border-white/40 rounded-3xl p-6 md:p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden"
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
        <div className="text-gray-700 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white/90 font-medium text-sm md:text-base transition-colors duration-300">
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
      className="group relative backdrop-blur-lg bg-white/8 hover:bg-white/12 border border-gray-300/30 dark:border-white/20 hover:border-gray-400/50 dark:hover:border-white/35 rounded-2xl p-3 md:p-4 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Glass shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
      
      <div className="relative flex items-center z-10">
        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 drop-shadow-lg" />
        <span className="text-gray-900 dark:text-white/90 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-medium">
          {feature}
        </span>
      </div>
    </motion.div>
  )
}

export default function ImprovedAboutSection() {
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
    { icon: Award, label: 'Years Experience', value: '15+', color: 'from-purple-400 to-violet-500' }
  ]

  return (
    <section className="relative py-12 md:py-16 bg-slate-50 dark:bg-[#0A0E1A] text-gray-900 dark:text-white overflow-hidden">
      
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/8 dark:bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-pink-500/8 dark:bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '8s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              <div className="group relative backdrop-blur-lg bg-white/20 dark:bg-white/8 hover:bg-white/30 dark:hover:bg-white/12 border border-gray-300/50 dark:border-white/20 hover:border-gray-400/70 dark:hover:border-white/30 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                
                <p className="relative text-lg md:text-xl text-gray-900 dark:text-white/90 leading-relaxed z-10">
                  Simix is a team specialized in classic and programmed control systems,
                  building management systems, and smart buildings. We deliver cutting-edge
                  solutions for industrial automation and smart infrastructure.
                </p>
              </div>
              
              <div className="group relative backdrop-blur-lg bg-white/20 dark:bg-white/8 hover:bg-white/30 dark:hover:bg-white/12 border border-gray-300/50 dark:border-white/20 hover:border-gray-400/70 dark:hover:border-white/30 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden">
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
                className="group relative inline-flex items-center px-8 py-4 backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-gray-300/40 dark:border-white/30 hover:border-gray-400/60 dark:hover:border-white/50 rounded-2xl text-gray-900 dark:text-white font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden hover:scale-105"
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

            {/* Enhanced Simix Logo Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
              className="relative group cursor-pointer"
            >
              {/* Floating background blobs for lighting effect */}
              <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-400/8 dark:bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-purple-400/8 dark:bg-purple-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-cyan-400/5 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Main glass container */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  filter: "drop-shadow(0 0 40px rgba(255,255,255,0.1))"
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative aspect-square backdrop-blur-2xl bg-gradient-to-br from-white/12 to-white/4 border-2 border-gray-300/40 dark:border-white/25 hover:border-gray-400/60 dark:hover:border-white/40 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              >
                
                {/* Enhanced glass shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                
                {/* Radial lighting effect */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Multiple specular highlights */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full blur-xl opacity-70"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/15 rounded-full blur-lg opacity-50"></div>
                <div className="absolute top-1/3 right-8 w-8 h-8 bg-white/25 rounded-full blur-md opacity-60"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  
                  {/* Large Company Logo */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      filter: "drop-shadow(0 0 25px rgba(95,125,183,0.4))"
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="-mb-4 md:-mb-6"
                  >
                    <Image
                      src="/Simix-Logo.png"
                      alt="Simix Logo Large"
                      width={250}
                      height={250}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
                      priority
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    {/* Enhanced Fallback */}
                    <div className="hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <span className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-wider drop-shadow-lg">SIMIX</span>
                    </div>
                  </motion.div>

                  {/* Company Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white/95 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                      Smart Solutions
                    </div>
                    <div className="text-lg text-gray-700 dark:text-white/70 font-medium tracking-wide">
                      Since 2008
                    </div>
                  </motion.div>
                </div>

                {/* Final glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}