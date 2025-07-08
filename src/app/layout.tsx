import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollIndicator } from '@/components/scroll-indicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simix - Smart Building & Control Systems',
  description: 'Simix specializes in classic and programmed control systems, building management systems, and smart buildings - ATS, STAR DELTA, VFD, PLC, HMI, SCADA, DCS, BMS, Smart Home, KNX System, AutoCAD Electrical, and EPLAN.',
  keywords: 'PLC, SCADA, BMS, Smart Home, KNX, AutoCAD, EPLAN, Control Systems, Building Management',
  authors: [{ name: 'Simix Team' }],
  openGraph: {
    title: 'Simix - Smart Building & Control Systems',
    description: 'Professional control systems and smart building solutions',
    url: 'https://simix.com',
    siteName: 'Simix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Simix - Smart Building Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simix - Smart Building & Control Systems',
    description: 'Professional control systems and smart building solutions',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollIndicator />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}