'use client'

import { ArrowRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(45deg, #5F7DB7 25%, transparent 25%),
                linear-gradient(-45deg, #5F7DB7 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #5F7DB7 75%),
                linear-gradient(-45deg, transparent 75%, #5F7DB7 75%)
              `,
              backgroundSize: '20px 20px'
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Automate Your Future?
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your automation needs and create a custom solution 
              that drives efficiency and innovation for your business.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-2xl font-bold text-primary-DEFAULT mb-1">Free</div>
                <div className="text-gray-600 dark:text-gray-300">Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-DEFAULT mb-1">24h</div>
                <div className="text-gray-600 dark:text-gray-300">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-DEFAULT mb-1">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}