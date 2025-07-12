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
    title: 'Solar Panel Systems',
    description: 'Complete solar energy solutions including design, installation, and monitoring for sustainable power generation and energy efficiency.',
    features: ['Solar Design', 'Installation', 'Power Monitoring'],
    color: 'from-yellow-400 to-orange-500'
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
    <section className="relative pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 min-h-screen overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-white/40 dark:from-transparent dark:via-slate-900/30 dark:to-slate-800/50"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             }}
        />
      </div>

      {/* Wave Separator */}
      <div className="w-full overflow-hidden" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}>
        <svg
          className="w-full h-8 md:h-10"
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="services-light-gradient" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5F7DB7" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="services-dark-gradient" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5F7DB7" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
          <path
            className="dark:hidden"
            d="M0,20 Q720,40 1440,20 L1440,40 L0,40 Z"
            fill="url(#services-light-gradient)"
          />
          <path
            className="hidden dark:block"
            d="M0,20 Q720,40 1440,20 L1440,40 L0,40 Z"
            fill="url(#services-dark-gradient)"
          />
        </svg>
      </div>

      {/* Premium floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/5 to-transparent dark:from-blue-500/5 dark:via-purple-500/3 dark:to-transparent rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Medium ambient glow */}
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-400/8 via-blue-400/4 to-transparent dark:from-indigo-500/4 dark:via-blue-500/2 dark:to-transparent rounded-full blur-3xl animate-float-medium" style={{animationDelay: '3s'}}></div>
        
        {/* Small accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/6 to-pink-400/4 dark:from-purple-500/3 dark:to-pink-500/2 rounded-full blur-3xl animate-float-fast" style={{animationDelay: '6s'}}></div>
        
        {/* Geometric accents */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400/20 dark:bg-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-purple-400/30 dark:bg-purple-400/15 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-400/25 dark:bg-indigo-400/12 rounded-full animate-pulse" style={{animationDelay: '7s'}}></div>
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
              {/* Premium White Glass Card */}
              <div className="relative backdrop-blur-3xl bg-white/90 dark:bg-slate-800/80 rounded-3xl p-8 shadow-2xl border-2 border-gray-200/80 dark:border-slate-600/60 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_35px_60px_-12px_rgba(71,85,105,0.4)] transition-all duration-700 group-hover:bg-white/95 dark:group-hover:bg-slate-800/90 group-hover:border-gray-300/90 dark:group-hover:border-slate-500/70 group-hover:scale-[1.02] overflow-hidden">
                
                {/* Enhanced glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/40 dark:from-slate-700/20 dark:via-slate-800/5 dark:to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Elegant shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-slate-600/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Multiple glass reflection layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-slate-700/30 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/20 dark:via-slate-600/20 to-white/30 dark:to-slate-700/30 rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Enhanced Icon with Beautiful Glass Effect */}
                <div className={`relative w-20 h-20 mb-8 mx-auto group-hover:scale-105 transition-all duration-300`}>
                  {/* Elegant glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300 scale-125`}></div>
                  
                  {/* Main icon container */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/60 dark:border-slate-600/40 group-hover:border-white/80 dark:group-hover:border-slate-500/60 transition-all duration-500`}>
                    
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 dark:from-slate-600/40 via-white/20 dark:via-slate-700/20 to-transparent rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Specular highlights */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white/60 dark:bg-slate-400/60 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 bg-white/40 dark:bg-slate-500/40 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-all duration-300"></div>
                    
                    {/* Ring effect */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/40 dark:ring-slate-500/40 group-hover:ring-white/60 dark:group-hover:ring-slate-400/60 transition-all duration-300"></div>
                    
                    {/* Icon with perfect colors */}
                    <service.icon className={`w-10 h-10 z-10 relative transition-all duration-300 text-white`} />
                  </div>
                </div>

                {/* Content - no hover effects */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Static glass badges - no hover effects */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="inline-flex items-center px-3 py-1 backdrop-blur-sm bg-gray-100/80 dark:bg-slate-700/60 border border-gray-300/60 dark:border-slate-600/60 rounded-full text-xs font-medium text-gray-800 dark:text-slate-200 transition-all duration-300">
                        <ChevronRight className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link with blue border hover */}
                  <Link 
                    href="/services"
                    className="inline-flex items-center px-4 py-2 backdrop-blur-sm bg-gray-100/70 dark:bg-slate-700/50 border border-gray-300/70 dark:border-slate-600/60 hover:border-blue-400 dark:hover:border-blue-400 rounded-full text-gray-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    tabIndex={0}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA with blue border hover effect */}
        <div className="text-center mt-20">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 backdrop-blur-sm bg-gray-50/90 dark:bg-slate-800/60 border-2 border-gray-300/80 dark:border-slate-600/60 hover:border-blue-400 dark:hover:border-blue-400 rounded-full text-gray-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.3)] group hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Enhanced Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="services-bottom-light" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.5" stopColor="#F8FAFC" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="services-bottom-dark" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#334155" />
              <stop offset="0.5" stopColor="#1E293B" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <path 
            className="dark:hidden"
            fill="url(#services-bottom-light)" 
            d="M0,0 C480,80 960,-80 1440,0 L1440,80 L0,80 Z" 
          />
          <path 
            className="hidden dark:block"
            fill="url(#services-bottom-dark)" 
            d="M0,0 C480,80 960,-80 1440,0 L1440,80 L0,80 Z" 
          />
        </svg>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* CSS Custom Properties */
        :root {
          --bg-gradient-radial: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .bg-gradient-radial {
          background-image: var(--bg-gradient-radial);
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.4;
          }
          33% { 
            transform: translate(30px, -30px) rotate(1deg);
            opacity: 0.6;
          }
          66% { 
            transform: translate(-20px, 20px) rotate(-1deg);
            opacity: 0.5;
          }
        }
        
        @keyframes float-medium {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translate(-40px, -20px) rotate(2deg);
            opacity: 0.6;
          }
        }
        
        @keyframes float-fast {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.5;
          }
          25% { 
            transform: translate(20px, -40px) rotate(-1deg);
            opacity: 0.3;
          }
          75% { 
            transform: translate(-30px, 30px) rotate(1deg);
            opacity: 0.7;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}