'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Clock, Shield, Zap } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Projects Completed',
    description: 'Successfully delivered automation projects',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Clock,
    value: '6+',
    label: 'Years Experience',
    description: 'Industry expertise and knowledge',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'System Uptime',
    description: 'Reliable and robust solutions',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock technical assistance',
    color: 'from-orange-400 to-red-500'
  }
]

export default function LiquidStatsSection() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [countedValues, setCountedValues] = useState<{[key: number]: number}>({})

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Start counting animation
          stats.forEach((stat, index) => {
            // Skip animation for special values
            if (stat.value === '24/7' || stat.value === '99.9%') {
              return
            }
            const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''))
            if (numericValue) {
              animateCount(index, numericValue)
            }
          })
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [mounted])

  const animateCount = (index: number, target: number) => {
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCountedValues(prev => ({
        ...prev,
        [index]: Math.floor(current)
      }))
    }, 30)
  }

  const formatValue = (originalValue: string, countedValue?: number) => {
    // Handle special cases that shouldn't be animated
    if (originalValue === '24/7' || originalValue === '99.9%') {
      return originalValue
    }
    
    if (countedValue !== undefined) {
      return originalValue.replace(/[0-9]+/, countedValue.toString())
    }
    return originalValue
  }

  if (!mounted) return null

  return (
    <section id="stats-section" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      
      {/* Enhanced Liquid Glass Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating glass orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern with glass effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Header with Liquid Glass */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5 rounded-3xl -m-4"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
          </div>
          
          <div className="relative backdrop-blur-lg bg-white/8 border border-white/20 rounded-3xl p-6 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
            <p className="relative text-xl text-white/90 leading-relaxed z-10">
              Our track record speaks for itself. We've been delivering exceptional 
              automation solutions with proven results.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Grid with Liquid Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Liquid Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
                
                {/* Glass shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Specular highlights */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

                {/* Enhanced Icon with gradient background */}
                <div className={`relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                  <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full blur-sm opacity-60"></div>
                  <stat.icon className="relative w-10 h-10 text-white z-10 drop-shadow-lg" />
                </div>

                {/* Value with enhanced styling */}
                <div className="relative z-10 mb-2">
                  <div className="text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                    {formatValue(stat.value, countedValues[index])}
                  </div>
                </div>

                {/* Label */}
                <div className="relative z-10 text-xl font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="relative z-10 text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA with Liquid Glass */}
        <div className="text-center mt-20">
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 max-w-3xl mx-auto overflow-hidden group hover:bg-white/15 hover:border-white/30 transition-all duration-500">
            
            {/* Glass shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating background elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Enhanced CTA Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
                <div className="absolute top-2 left-2 w-6 h-6 bg-white/50 rounded-full blur-sm opacity-60"></div>
                <Zap className="relative w-12 h-12 text-white z-10 drop-shadow-lg" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              
              <p className="text-white/80 group-hover:text-white/90 mb-8 text-lg leading-relaxed transition-colors duration-300">
                Join hundreds of satisfied clients who trust Simix for their automation needs.
              </p>
              
              {/* Enhanced CTA Button */}
              <div className="inline-block">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <button className="relative backdrop-blur-lg bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Get Started Today</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}