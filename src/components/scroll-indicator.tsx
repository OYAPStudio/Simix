'use client'

import { useEffect, useState } from 'react'

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx

      setScrollProgress(scrolled)
      setIsScrolling(true)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      {/* Hide default scrollbar */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Main scroll indicator */}
      <div 
        className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-500 ease-out ${
          isScrolling ? 'h-1' : 'h-0.5'
        }`}
      >
        <div 
          className="h-full transition-all duration-500 ease-out relative"
          style={{ 
            width: `${scrollProgress * 100}%`,
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: `
              0 0 20px rgba(127, 179, 211, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `
          }}
        >
          {/* Color gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(127, 179, 211, 0.6) 0%, rgba(93, 107, 147, 0.6) 50%, rgba(156, 163, 175, 0.6) 100%)'
            }}
          />
        </div>
      </div>
      
      {/* Simple percentage indicator */}
      <div 
        className={`fixed bottom-6 right-6 z-[9999] transition-all duration-300 ease-out ${
          isScrolling ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="rounded-full px-3 py-1 text-xs font-medium"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </>
  )
}