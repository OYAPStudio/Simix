'use client'

import { useEffect, useState } from 'react'
import { 
  Settings, 
  Home, 
  Cpu, 
  Zap, 
  MonitorSpeaker, 
  Wrench,
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Settings,
    title: 'PLC Programming',
    description: 'Advanced programmable logic controller systems for industrial automation and process control.',
    features: ['HMI Integration', 'SCADA Systems', 'Process Optimization'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Home,
    title: 'Smart Buildings',
    description: 'Complete building management systems with integrated KNX automation for modern smart buildings.',
    features: ['KNX Systems', 'Building Automation', 'Energy Management'],
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Cpu,
    title: 'Control Panels',
    description: 'Custom control panel design and manufacturing for ATS, STAR DELTA, and VFD applications.',
    features: ['ATS Systems', 'STAR DELTA', 'VFD Controls'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: MonitorSpeaker,
    title: 'SCADA & DCS',
    description: 'Supervisory control and data acquisition systems for real-time monitoring and control.',
    features: ['Real-time Monitoring', 'Data Analytics', 'Remote Control'],
    color: 'from-orange-400 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Electrical Design',
    description: 'Professional electrical design services using AutoCAD Electrical and EPLAN software.',
    features: ['AutoCAD Electrical', 'EPLAN Design', 'Technical Documentation'],
    color: 'from-red-400 to-red-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance and technical support for all installed systems and equipment.',
    features: ['24/7 Support', 'Preventive Maintenance', 'System Upgrades'],
    color: 'from-indigo-400 to-indigo-600'
  }
]

export default function LiquidGlassServices() {
  const [mounted, setMounted] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.service-card')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [mounted])

  if (!mounted) return null

  return (
    <section className="relative pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 min-h-screen">
      {/* Wave Separator (flipped, faces hero) */}
      <div className="w-full overflow-hidden" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}>
        <svg
          className="w-full h-8 md:h-10"
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="services-vertical-gradient" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5F7DB7" />
              <stop offset="100%" stopColor="#F2F4FF" />
            </linearGradient>
          </defs>
          <path
            d="M0,20 Q720,40 1440,20 L1440,40 L0,40 Z"
            fill="url(#services-vertical-gradient)"
          />
        </svg>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-gray-900 dark:text-white">Our</span> <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for industrial automation, smart buildings, and control systems
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group relative ${
                visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Liquid Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-white/10 hover:shadow-3xl transition-all duration-700 group-hover:bg-white/20 dark:group-hover:bg-white/10 group-hover:border-white/30 dark:group-hover:border-white/20 group-hover:scale-[1.02] overflow-hidden">
                
                {/* Liquid Glass Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Enhanced Icon with Subtle Liquid Glass Effect */}
                <div className={`relative w-20 h-20 mb-8 mx-auto group-hover:scale-105 transition-all duration-300`}>
                  {/* Subtle glow - reduced intensity */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 scale-110`}></div>
                  
                  {/* Main icon container with liquid glass effect */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500`}>
                    
                    {/* Liquid reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Subtle specular highlight */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                    
                    {/* Subtle ring effect - no scaling */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300"></div>
                    
                    {/* Icon */}
                    <service.icon className="w-10 h-10 text-white z-10 relative transition-all duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features as liquid glass badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="inline-flex items-center px-3 py-1 backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 group-hover:border-white/50 group-hover:shadow-lg">
                        <ChevronRight className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link with liquid glass effect */}
                  <Link 
                    href="/services"
                    className="inline-flex items-center px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/30 hover:border-white/50 rounded-full text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    tabIndex={0}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA with Minimalist Liquid Glass Effect */}
        <div className="text-center mt-20">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#services-bottom)" d="M0,0 C480,80 960,-80 1440,0 L1440,80 L0,80 Z" />
          <defs>
            <linearGradient id="services-bottom" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5F7DB7" />
              <stop offset="0.5" stopColor="#354059" />
              <stop offset="1" stopColor="#696E82" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Custom Styles */}
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