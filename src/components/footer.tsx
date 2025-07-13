'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useTranslation } from '@/contexts/TranslationContext'

export function Footer() {
  const { t, language } = useTranslation()
  const currentYear = new Date().getFullYear()

  const navigation = {
    company: [
      { name: t('footer.company.about'), href: '/about' },
      { name: t('footer.company.services'), href: '/services' },
      { name: t('footer.company.projects'), href: '/projects' },
      { name: t('footer.company.contact'), href: '/contact' },
    ],
    services: [
      { name: t('footer.services.plc'), href: '/services#plc' },
      { name: t('footer.services.smart'), href: '/services#smart-buildings' },
      { name: t('footer.services.scada'), href: '/services#scada' },
      { name: t('footer.services.control'), href: '/services#control-panels' },
    ],
    support: [
      { name: t('footer.support.docs'), href: '/docs' },
      { name: t('footer.support.center'), href: '/support' },
      { name: t('footer.support.privacy'), href: '/privacy' },
      { name: t('footer.support.terms'), href: '/terms' },
    ],
  }

  const social = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.png"
                alt="Simix Logo"
                width={60}
                height={60}
                className="w-20 h-20 object-contain"
              />
              <span className="text-2xl font-bold">SIMIX</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'} text-primary-light`} />
                <a href="mailto:info@simixiq.com" className="hover:text-white transition-colors">
                  info@simixiq.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'} text-primary-light`} />
                <a href="tel:+9647764050601" className="hover:text-white transition-colors">
                  +964 776 405 0601
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'} text-primary-light`} />
                <a 
                  href="https://maps.google.com/?q=Mosul,Iraq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('footer.location')}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.sections.company')}</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.sections.services')}</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.sections.support')}</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright').replace('{year}', currentYear.toString())}
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}