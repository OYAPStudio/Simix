'use client'

import { useEffect, useState } from 'react'

interface LiquidGlassSeparatorProps {
  position?: 'top' | 'bottom'
  height?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'gradient' | 'monochrome' | 'rainbow' | 'ocean' | 'sunset'
  intensity?: 'subtle' | 'medium' | 'strong'
  animated?: boolean
  className?: string
}

export default function LiquidGlassSeparator({
  position = 'bottom',
  height = 'md',
  variant = 'gradient',
  intensity = 'medium',
  animated = true,
  className = ''
}: LiquidGlassSeparatorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Height configurations
  const heights = {
    sm: 'h-16 md:h-20',
    md: 'h-24 md:h-32',
    lg: 'h-32 md:h-40',
    xl: 'h-40 md:h-48'
  }

  // Color variant configurations
  const variants = {
    gradient: {
      gradient1: 'rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.4), rgba(16, 185, 129, 0.3)',
      gradient2: 'rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2)',
      particles: 'bg-white/20 dark:bg-slate-300/10'
    },
    monochrome: {
      gradient1: 'rgba(100, 116, 139, 0.3), rgba(148, 163, 184, 0.4), rgba(203, 213, 225, 0.3)',
      gradient2: 'rgba(71, 85, 105, 0.2), rgba(100, 116, 139, 0.3), rgba(148, 163, 184, 0.2)',
      particles: 'bg-slate-300/20 dark:bg-slate-400/10'
    },
    rainbow: {
      gradient1: 'rgba(239, 68, 68, 0.3), rgba(245, 158, 11, 0.4), rgba(34, 197, 94, 0.3)',
      gradient2: 'rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.2)',
      particles: 'bg-pink-300/20 dark:bg-purple-300/10'
    },
    ocean: {
      gradient1: 'rgba(6, 182, 212, 0.3), rgba(14, 165, 233, 0.4), rgba(59, 130, 246, 0.3)',
      gradient2: 'rgba(8, 145, 178, 0.2), rgba(6, 182, 212, 0.3), rgba(14, 165, 233, 0.2)',
      particles: 'bg-cyan-300/20 dark:bg-blue-300/10'
    },
    sunset: {
      gradient1: 'rgba(251, 146, 60, 0.3), rgba(248, 113, 113, 0.4), rgba(236, 72, 153, 0.3)',
      gradient2: 'rgba(245, 158, 11, 0.2), rgba(251, 146, 60, 0.3), rgba(248, 113, 113, 0.2)',
      particles: 'bg-orange-300/20 dark:bg-red-300/10'
    }
  }

  // Intensity multipliers
  const intensityMultipliers = {
    subtle: 0.5,
    medium: 1,
    strong: 1.5
  }

  const currentVariant = variants[variant]
  const intensityValue = intensityMultipliers[intensity]

  // Unique IDs to avoid conflicts
  const uniqueId = `liquid-${position}-${Math.random().toString(36).substr(2, 9)}`

  // Animation classes
  const animationClasses = animated 
    ? position === 'top' 
      ? 'animate-liquid-wave-1' 
      : 'animate-liquid-wave-reverse-1'
    : ''

  const animationClasses2 = animated 
    ? position === 'top' 
      ? 'animate-liquid-wave-2' 
      : 'animate-liquid-wave-reverse-2'
    : ''

  return (
    <div className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 w-full overflow-hidden pointer-events-none z-20 ${className}`}>
      <div className={`relative w-full ${heights[height]}`}>
        {/* Animated Liquid Glass Waves - Layer 1 */}
        <svg 
          className={`absolute inset-0 w-full h-full ${animationClasses}`}
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`${uniqueId}-gradient-1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={currentVariant.gradient1.split(', ')[0]} stopOpacity={intensityValue} />
              <stop offset="50%" stopColor={currentVariant.gradient1.split(', ')[1]} stopOpacity={intensityValue} />
              <stop offset="100%" stopColor={currentVariant.gradient1.split(', ')[2]} stopOpacity={intensityValue} />
            </linearGradient>
            <filter id={`${uniqueId}-blur-1`}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
            </filter>
          </defs>
          <path 
            d={position === 'top' 
              ? "M0,60 C320,20 420,100 720,80 C1020,60 1120,20 1440,40 L1440,0 L0,0 Z"
              : "M0,80 C320,120 420,40 720,60 C1020,80 1120,120 1440,100 L1440,120 L0,120 Z"
            }
            fill={`url(#${uniqueId}-gradient-1)`}
            filter={`url(#${uniqueId}-blur-1)`}
            className="backdrop-blur-xl"
          />
        </svg>

        {/* Animated Liquid Glass Waves - Layer 2 */}
        <svg 
          className={`absolute inset-0 w-full h-full ${animationClasses2}`}
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`${uniqueId}-gradient-2`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={currentVariant.gradient2.split(', ')[0]} stopOpacity={intensityValue * 0.7} />
              <stop offset="50%" stopColor={currentVariant.gradient2.split(', ')[1]} stopOpacity={intensityValue * 0.7} />
              <stop offset="100%" stopColor={currentVariant.gradient2.split(', ')[2]} stopOpacity={intensityValue * 0.7} />
            </linearGradient>
            <filter id={`${uniqueId}-blur-2`}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
            </filter>
          </defs>
          <path 
            d={position === 'top'
              ? "M0,80 C360,40 480,120 800,100 C1120,80 1200,40 1440,60 L1440,0 L0,0 Z"
              : "M0,100 C360,140 480,60 800,80 C1120,100 1200,140 1440,120 L1440,120 L0,120 Z"
            }
            fill={`url(#${uniqueId}-gradient-2)`}
            filter={`url(#${uniqueId}-blur-2)`}
            className="backdrop-blur-lg"
          />
        </svg>

        {/* Floating Glass Particles */}
        {animated && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full ${currentVariant.particles} backdrop-blur-sm ${
                  position === 'top' ? 'animate-float-particle' : 'animate-float-particle-reverse'
                }`}
                style={{
                  left: `${10 + (i * 8)}%`,
                  [position === 'top' ? 'top' : 'bottom']: `${20 + (i % 3) * 20}%`,
                  width: `${4 + (i % 3) * 2}px`,
                  height: `${4 + (i % 3) * 2}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                  opacity: intensityValue * 0.6
                }}
              />
            ))}
          </div>
        )}

        {/* Glass Morphism Overlay */}
        <div className={`absolute inset-0 backdrop-blur-sm ${
          position === 'top' 
            ? 'bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-slate-800/10 dark:via-slate-900/5 dark:to-transparent'
            : 'bg-gradient-to-t from-white/10 via-white/5 to-transparent dark:from-slate-800/10 dark:via-slate-900/5 dark:to-transparent'
        }`} style={{ opacity: intensityValue * 0.8 }}></div>
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        /* Liquid Wave Animations */
        @keyframes liquid-wave-1 {
          0%, 100% {
            transform: translateX(0%) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateX(-5%) scale(1.02);
            opacity: 0.8;
          }
          50% {
            transform: translateX(3%) scale(0.98);
            opacity: 0.9;
          }
          75% {
            transform: translateX(-2%) scale(1.01);
            opacity: 0.8;
          }
        }
        
        @keyframes liquid-wave-2 {
          0%, 100% {
            transform: translateX(0%) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateX(4%) scale(1.03);
            opacity: 0.7;
          }
          66% {
            transform: translateX(-3%) scale(0.97);
            opacity: 0.6;
          }
        }
        
        @keyframes liquid-wave-reverse-1 {
          0%, 100% {
            transform: translateX(0%) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateX(5%) scale(1.02);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-3%) scale(0.98);
            opacity: 0.9;
          }
          75% {
            transform: translateX(2%) scale(1.01);
            opacity: 0.8;
          }
        }
        
        @keyframes liquid-wave-reverse-2 {
          0%, 100% {
            transform: translateX(0%) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateX(-4%) scale(1.03);
            opacity: 0.7;
          }
          66% {
            transform: translateX(3%) scale(0.97);
            opacity: 0.6;
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-5px) translateX(-3px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-15px) translateX(2px) rotate(270deg);
            opacity: 0.8;
          }
        }
        
        @keyframes float-particle-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(10px) translateX(-5px) rotate(-90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(5px) translateX(3px) rotate(-180deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(15px) translateX(-2px) rotate(-270deg);
            opacity: 0.7;
          }
        }
        
        .animate-liquid-wave-1 {
          animation: liquid-wave-1 8s ease-in-out infinite;
        }
        
        .animate-liquid-wave-2 {
          animation: liquid-wave-2 12s ease-in-out infinite;
        }
        
        .animate-liquid-wave-reverse-1 {
          animation: liquid-wave-reverse-1 10s ease-in-out infinite;
        }
        
        .animate-liquid-wave-reverse-2 {
          animation: liquid-wave-reverse-2 14s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
        
        .animate-float-particle-reverse {
          animation: float-particle-reverse 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// Usage Examples Component
export function SeparatorExamples() {
  return (
    <div className="space-y-8">
      {/* Example 1: Top separator with gradient variant */}
      <div className="relative h-40 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <LiquidGlassSeparator 
          position="top" 
          variant="gradient" 
          height="md" 
          intensity="medium"
          animated={true}
        />
        <div className="flex items-center justify-center h-full pt-16">
          <p className="text-gray-600 dark:text-gray-300">Content with top separator</p>
        </div>
      </div>

      {/* Example 2: Bottom separator with ocean variant */}
      <div className="relative h-40 bg-blue-50 dark:bg-blue-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-center h-full pb-16">
          <p className="text-blue-600 dark:text-blue-300">Content with bottom ocean separator</p>
        </div>
        <LiquidGlassSeparator 
          position="bottom" 
          variant="ocean" 
          height="lg" 
          intensity="strong"
          animated={true}
        />
      </div>

      {/* Example 3: Static separator */}
      <div className="relative h-32 bg-purple-50 dark:bg-purple-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <p className="text-purple-600 dark:text-purple-300">Static separator (no animation)</p>
        </div>
        <LiquidGlassSeparator 
          position="bottom" 
          variant="sunset" 
          height="sm" 
          intensity="subtle"
          animated={false}
        />
      </div>
    </div>
  )
}