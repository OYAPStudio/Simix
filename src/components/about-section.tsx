'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Target, Users, Award } from 'lucide-react'
import Link from 'next/link'

export function AboutSection() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [mounted])

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
    { icon: Target, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Years Experience', value: '15+' }
  ]

  if (!mounted) return null

  return (
    <section id="about-section" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-gradient">Simix</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Simix is a team specialized in classic and programmed control systems, 
              building management systems, and smart buildings. We deliver cutting-edge 
              solutions for industrial automation and smart infrastructure.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our expertise spans across ATS, STAR DELTA, VFD, PLC, HMI, SCADA, DCS, 
              BMS, Smart Home, KNX System, AutoCAD Electrical, and EPLAN technologies, 
              ensuring comprehensive solutions for all your automation needs.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Stats & Visual */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} lg:pl-8`} style={{ animationDelay: '0.3s' }}>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-light to-primary-DEFAULT rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">SIMIX</div>
                    <div className="text-xl opacity-90">Smart Solutions</div>
                    <div className="text-lg opacity-75">Since 2008</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-float" />
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}