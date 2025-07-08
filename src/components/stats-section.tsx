'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Clock, Shield, Zap } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered automation projects'
  },
  {
    icon: Clock,
    value: '15+',
    label: 'Years Experience',
    description: 'Industry expertise and knowledge'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'System Uptime',
    description: 'Reliable and robust solutions'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock technical assistance'
  }
]

export function StatsSection() {
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
    if (countedValue !== undefined) {
      return originalValue.replace(/[0-9]+/, countedValue.toString())
    }
    return originalValue
  }

  if (!mounted) return null

  return (
    <section id="stats-section" className="py-20 bg-primary-DEFAULT dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our track record speaks for itself. We've been delivering exceptional 
            automation solutions with proven results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {formatValue(stat.value, countedValues[index])}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold text-white/90 mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-white/70 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Simix for their automation needs.
          </p>
        </div>
      </div>
    </section>
  )
}