'use client'

import { ArrowRight, Mail, Phone, Zap, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      
      {/* Enhanced Liquid Glass Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating glass orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-green-500/12 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
        
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Header with Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl -m-4 shadow-2xl shadow-blue-400/30"></div>
            <h2 className="relative text-4xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(80,180,255,0.7)]">
              Ready to Automate Your Future?
            </h2>
          </div>
          
          <div className="relative backdrop-blur-2xl bg-white/15 border border-white/30 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl shadow-blue-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"></div> */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow:'inset 0 8px 32px 0 rgba(80,180,255,0.10)'}}></div>
            <p className="relative text-xl md:text-2xl text-white/90 leading-relaxed z-10">
              Let's discuss your automation needs and create a custom solution 
              that drives efficiency and innovation for your business.
            </p>
          </div>
        </motion.div>

        {/* Enhanced CTA Cards with Liquid Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Get Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
              
              {/* Glass shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Specular highlights */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full blur-sm opacity-60"></div>
                <Mail className="relative w-10 h-10 text-white z-10 drop-shadow-lg" />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get Free Quote</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Tell us about your project and we'll provide a detailed quote tailored to your needs.
                </p>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-lg bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-2xl text-white font-semibold transition-all duration-300 overflow-hidden group-hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Start Project</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Call Now Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            <div className="relative backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
              
              {/* Glass shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Specular highlights */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full blur-sm opacity-60"></div>
                <Phone className="relative w-10 h-10 text-white z-10 drop-shadow-lg" />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Call Now</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Speak directly with our experts for immediate assistance and consultation.
                </p>
                
                <a
                  href="tel:+964 771 088 2275"
                  className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-lg bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-2xl text-white font-semibold transition-all duration-300 overflow-hidden group-hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Call +964 771 088 2275</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Quick Stats with Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { icon: Zap, value: 'Free', label: 'Consultation', color: 'from-yellow-400 to-orange-500' },
            { icon: Clock, value: '24h', label: 'Response Time', color: 'from-blue-400 to-cyan-500' },
            { icon: Shield, value: '100%', label: 'Satisfaction', color: 'from-green-400 to-emerald-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative backdrop-blur-lg bg-white/8 hover:bg-white/12 border border-white/20 hover:border-white/30 rounded-2xl p-6 text-center transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
                
                {/* Glass shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-xl"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white/50 rounded-full blur-sm opacity-60"></div>
                  <stat.icon className="relative w-8 h-8 text-white z-10 drop-shadow-lg" />
                </div>

                <div className="relative z-10">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}