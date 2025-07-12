'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Clock, Shield, Zap } from 'lucide-react'

interface LiquidGlassStatsProps {
  hasTopBlur?: boolean
  hasBottomBlur?: boolean
  blurHeight?: 'sm' | 'md' | 'lg' | 'xl'
  blurIntensity?: 'subtle' | 'medium' | 'strong'
}

const stats = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Projects Completed',
    description: 'Successfully delivered automation projects',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Clock,
    value: '6+',
    label: 'Years Experience',
    description: 'Industry expertise and knowledge',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'System Uptime',
    description: 'Reliable and robust solutions',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock technical assistance',
    color: 'from-orange-400 to-orange-500'
  }
]

export default function LiquidGlassStats({ 
  hasTopBlur = false, 
  hasBottomBlur = false,
  blurHeight = 'lg',
  blurIntensity = 'medium'
}: LiquidGlassStatsProps) {
  const [mounted, setMounted] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [countedValues, setCountedValues] = useState<{[key: number]: number}>({})

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...prev, index])
            
            // Start counting animation for numeric values
            const stat = stats[index]
            if (stat.value !== '24/7' && stat.value !== '99.9%') {
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''))
              if (numericValue) {
                animateCount(index, numericValue)
              }
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.stat-card')
    elements.forEach(el => observer.observe(el))

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
    <section className="relative pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 min-h-screen overflow-hidden">
      
      {/* TOP GLASSMORPHISM BLUR TRANSITION (100% -> 0%) */}
      {hasTopBlur && (
        <div className={`absolute top-0 left-0 w-full ${blurHeights[blurHeight]} z-20 pointer-events-none`}>
          {/* Glassmorphism Blur Gradient - Top to Bottom (100% -> 0%) */}
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} dark:hidden`} 
               style={{
                 background: `linear-gradient(180deg, 
                   rgba(248, 250, 252, 0.25) 0%, 
                   rgba(248, 250, 252, 0.18) 15%, 
                   rgba(248, 250, 252, 0.12) 30%, 
                   rgba(248, 250, 252, 0.08) 45%, 
                   rgba(248, 250, 252, 0.04) 60%, 
                   rgba(248, 250, 252, 0.02) 75%, 
                   rgba(248, 250, 252, 0.008) 85%, 
                   rgba(248, 250, 252, 0.002) 95%, 
                   rgba(248, 250, 252, 0) 100%)`
               }} />
          
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} hidden dark:block`} 
               style={{
                 background: `linear-gradient(180deg, 
                   rgba(2, 6, 23, 0.3) 0%, 
                   rgba(2, 6, 23, 0.22) 15%, 
                   rgba(2, 6, 23, 0.15) 30%, 
                   rgba(2, 6, 23, 0.1) 45%, 
                   rgba(2, 6, 23, 0.06) 60%, 
                   rgba(2, 6, 23, 0.03) 75%, 
                   rgba(2, 6, 23, 0.012) 85%, 
                   rgba(2, 6, 23, 0.003) 95%, 
                   rgba(2, 6, 23, 0) 100%)`
               }} />
          
          {/* Glass reflection overlay - even smoother transition */}
          <div className="absolute inset-0 dark:hidden" 
               style={{
                 background: `linear-gradient(180deg, 
                   rgba(255, 255, 255, 0.06) 0%, 
                   rgba(255, 255, 255, 0.03) 25%, 
                   rgba(255, 255, 255, 0.015) 50%, 
                   rgba(255, 255, 255, 0.006) 75%, 
                   rgba(255, 255, 255, 0.001) 90%, 
                   rgba(255, 255, 255, 0) 100%)`
               }} />
          
          <div className="absolute inset-0 hidden dark:block" 
               style={{
                 background: `linear-gradient(180deg, 
                   rgba(51, 65, 85, 0.08) 0%, 
                   rgba(51, 65, 85, 0.04) 25%, 
                   rgba(51, 65, 85, 0.02) 50%, 
                   rgba(51, 65, 85, 0.008) 75%, 
                   rgba(51, 65, 85, 0.002) 90%, 
                   rgba(51, 65, 85, 0) 100%)`
               }} />
        </div>
      )}

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

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${hasTopBlur ? 'pt-32' : 'pt-24'} ${hasBottomBlur ? 'pb-32' : 'pb-24'}`}>
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-gray-900 dark:text-white">Trusted by</span> <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. We've been delivering exceptional automation solutions with proven results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-index={index}
              className={`stat-card group relative ${
                visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Premium White Glass Card */}
              <div className="relative backdrop-blur-3xl bg-white/90 dark:bg-slate-800/80 rounded-3xl p-8 shadow-2xl border-2 border-gray-200/80 dark:border-slate-600/60 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_35px_60px_-12px_rgba(71,85,105,0.4)] transition-all duration-700 group-hover:bg-white/95 dark:group-hover:bg-slate-800/90 group-hover:border-gray-300/90 dark:group-hover:border-slate-500/70 group-hover:scale-[1.02] overflow-hidden text-center">
                
                {/* Enhanced glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/40 dark:from-slate-700/20 dark:via-slate-800/5 dark:to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Elegant shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-slate-600/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Multiple glass reflection layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-slate-700/30 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/20 dark:via-slate-600/20 to-white/30 dark:to-slate-700/30 rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Enhanced Icon with Beautiful Glass Effect */}
                <div className={`relative w-20 h-20 mb-6 mx-auto group-hover:scale-105 transition-all duration-300`}>
                  {/* Elegant glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300 scale-125`}></div>
                  
                  {/* Main icon container */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/60 dark:border-slate-600/40 group-hover:border-white/80 dark:group-hover:border-slate-500/60 transition-all duration-500`}>
                    
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 dark:from-slate-600/40 via-white/20 dark:via-slate-700/20 to-transparent rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Specular highlights */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white/60 dark:bg-slate-400/60 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 bg-white/40 dark:bg-slate-500/40 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-all duration-300"></div>
                    
                    {/* Ring effect */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/40 dark:ring-slate-500/40 group-hover:ring-white/60 dark:group-hover:ring-slate-400/60 transition-all duration-300"></div>
                    
                    {/* Icon with perfect colors */}
                    <stat.icon className={`w-10 h-10 z-10 relative transition-all duration-300 text-white`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Animated Value */}
                  <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent drop-shadow-lg">
                    {formatValue(stat.value, countedValues[index])}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="relative backdrop-blur-3xl bg-white/90 dark:bg-slate-800/80 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl border-2 border-gray-200/80 dark:border-slate-600/60 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_35px_60px_-12px_rgba(71,85,105,0.4)] transition-all duration-700 hover:bg-white/95 dark:hover:bg-slate-800/90 hover:border-gray-300/90 dark:hover:border-slate-500/70 overflow-hidden group">
            
            {/* Enhanced glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/40 dark:from-slate-700/20 dark:via-slate-800/5 dark:to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Elegant shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-slate-600/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            {/* Multiple glass reflection layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-slate-700/30 via-transparent to-transparent rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/20 dark:via-slate-600/20 to-white/30 dark:to-slate-700/30 rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Enhanced CTA Icon */}
              <div className="relative w-24 h-24 mb-8 mx-auto group-hover:scale-105 transition-all duration-300">
                {/* Elegant glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300 scale-125"></div>
                
                {/* Main icon container */}
                <div className="relative w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/60 dark:border-slate-600/40 group-hover:border-white/80 dark:group-hover:border-slate-500/60 transition-all duration-500">
                  
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 dark:from-slate-600/40 via-white/20 dark:via-slate-700/20 to-transparent rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Specular highlights */}
                  <div className="absolute top-2 left-2 w-6 h-6 bg-white/60 dark:bg-slate-400/60 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 bg-white/40 dark:bg-slate-500/40 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-all duration-300"></div>
                  
                  {/* Ring effect */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-white/40 dark:ring-slate-500/40 group-hover:ring-white/60 dark:group-hover:ring-slate-400/60 transition-all duration-300"></div>
                  
                  {/* Icon */}
                  <Zap className="w-12 h-12 z-10 relative transition-all duration-300 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              
              <p className="text-gray-700 dark:text-slate-300 mb-8 text-lg leading-relaxed transition-colors duration-300">
                Join hundreds of satisfied clients who trust Simix for their automation needs.
              </p>
              
              {/* Enhanced CTA Button */}
              <button className="inline-flex items-center px-8 py-4 backdrop-blur-sm bg-gray-100/70 dark:bg-slate-700/50 border border-gray-300/70 dark:border-slate-600/60 hover:border-blue-400 dark:hover:border-blue-400 rounded-full text-gray-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.3)] hover:scale-105">
                <span>Get Started Today</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GLASSMORPHISM BLUR TRANSITION (0% -> 100%) */}
      {hasBottomBlur && (
        <div className={`absolute bottom-0 left-0 w-full ${blurHeights[blurHeight]} z-20 pointer-events-none`}>
          {/* Glassmorphism Blur Gradient - Bottom to Top (0% -> 100%) */}
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} dark:hidden`} 
               style={{
                 background: `linear-gradient(0deg, 
                   rgba(248, 250, 252, 0.25) 0%, 
                   rgba(248, 250, 252, 0.18) 15%, 
                   rgba(248, 250, 252, 0.12) 30%, 
                   rgba(248, 250, 252, 0.08) 45%, 
                   rgba(248, 250, 252, 0.04) 60%, 
                   rgba(248, 250, 252, 0.02) 75%, 
                   rgba(248, 250, 252, 0.008) 85%, 
                   rgba(248, 250, 252, 0.002) 95%, 
                   rgba(248, 250, 252, 0) 100%)`
               }} />
          
          <div className={`absolute inset-0 ${blurIntensities[blurIntensity]} hidden dark:block`} 
               style={{
                 background: `linear-gradient(0deg, 
                   rgba(2, 6, 23, 0.3) 0%, 
                   rgba(2, 6, 23, 0.22) 15%, 
                   rgba(2, 6, 23, 0.15) 30%, 
                   rgba(2, 6, 23, 0.1) 45%, 
                   rgba(2, 6, 23, 0.06) 60%, 
                   rgba(2, 6, 23, 0.03) 75%, 
                   rgba(2, 6, 23, 0.012) 85%, 
                   rgba(2, 6, 23, 0.003) 95%, 
                   rgba(2, 6, 23, 0) 100%)`
               }} />
          
          {/* Glass reflection overlay - even smoother transition */}
          <div className="absolute inset-0 dark:hidden" 
               style={{
                 background: `linear-gradient(0deg, 
                   rgba(255, 255, 255, 0.06) 0%, 
                   rgba(255, 255, 255, 0.03) 25%, 
                   rgba(255, 255, 255, 0.015) 50%, 
                   rgba(255, 255, 255, 0.006) 75%, 
                   rgba(255, 255, 255, 0.001) 90%, 
                   rgba(255, 255, 255, 0) 100%)`
               }} />
          
          <div className="absolute inset-0 hidden dark:block" 
               style={{
                 background: `linear-gradient(0deg, 
                   rgba(51, 65, 85, 0.08) 0%, 
                   rgba(51, 65, 85, 0.04) 25%, 
                   rgba(51, 65, 85, 0.02) 50%, 
                   rgba(51, 65, 85, 0.008) 75%, 
                   rgba(51, 65, 85, 0.002) 90%, 
                   rgba(51, 65, 85, 0) 100%)`
               }} />
          
          {/* Floating glass particles for extra effect - with true zero opacity fade */}
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
                  background: `rgba(255, 255, 255, ${0.08 - (i % 3) * 0.02})`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + (i % 2)}s`,
                  opacity: `${0.4 - (i % 4) * 0.1}`,
                  transform: `translateY(${(i % 2) * 100}%)`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        /* CSS Custom Properties */
        :root {
          --bg-gradient-radial: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .bg-gradient-radial {
          background-image: var(--bg-gradient-radial);
        }
        
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