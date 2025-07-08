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
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Home,
    title: 'Smart Buildings',
    description: 'Complete building management systems with integrated KNX automation for modern smart buildings.',
    features: ['KNX Systems', 'Building Automation', 'Energy Management'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Cpu,
    title: 'Control Panels',
    description: 'Custom control panel design and manufacturing for ATS, STAR DELTA, and VFD applications.',
    features: ['ATS Systems', 'STAR DELTA', 'VFD Controls'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MonitorSpeaker,
    title: 'SCADA & DCS',
    description: 'Supervisory control and data acquisition systems for real-time monitoring and control.',
    features: ['Real-time Monitoring', 'Data Analytics', 'Remote Control'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Zap,
    title: 'Electrical Design',
    description: 'Professional electrical design services using AutoCAD Electrical and EPLAN software.',
    features: ['AutoCAD Electrical', 'EPLAN Design', 'Technical Documentation'],
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance and technical support for all installed systems and equipment.',
    features: ['24/7 Support', 'Preventive Maintenance', 'System Upgrades'],
    color: 'from-teal-500 to-teal-600'
  }
]

export function ServicesSection() {
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for industrial automation, smart buildings, and control systems
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover ${
                visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <ChevronRight className="w-4 h-4 text-primary-DEFAULT mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                href="/services"
                className="inline-flex items-center text-primary-DEFAULT hover:text-primary-light transition-colors duration-200 font-medium group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}