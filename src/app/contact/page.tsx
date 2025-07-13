'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/contexts/TranslationContext'

export default function ContactPage() {
  const { t, language } = useTranslation()
  
  const contactInfo = [
    {
      icon: Mail,
      title: t('contactPage.info.email.title'),
      info: 'info@simix.com',
      description: t('contactPage.info.email.description'),
      link: 'mailto:info@simix.com'
    },
    {
      icon: Phone,
      title: t('contactPage.info.phone.title'),
      info: '+1 (234) 567-890',
      description: t('contactPage.info.phone.description'),
      link: 'tel:+1234567890'
    },
    {
      icon: MapPin,
      title: t('contactPage.info.visit.title'),
      info: t('contactPage.info.visit.address'),
      description: t('contactPage.info.visit.description'),
      link: '#'
    },
    {
      icon: Clock,
      title: t('contactPage.info.hours.title'),
      info: t('contactPage.info.hours.time'),
      description: t('contactPage.info.hours.description'),
      link: '#'
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      })
    }, 3000)
  }

  return (
    <div className="pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contactPage.hero.contact')} <span className="text-secondary-light">{t('contactPage.hero.us')}</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {t('contactPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <div className="text-lg font-semibold text-primary-DEFAULT mb-2">
                  {info.info}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('contactPage.form.title')}
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
                    {t('contactPage.form.success.title')}
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    {t('contactPage.form.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contactPage.form.fields.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={t('contactPage.form.placeholders.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contactPage.form.fields.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={t('contactPage.form.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contactPage.form.fields.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={t('contactPage.form.placeholders.company')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contactPage.form.fields.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={t('contactPage.form.placeholders.phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contactPage.form.fields.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">{t('contactPage.form.services.select')}</option>
                      <option value="plc-programming">{t('contactPage.form.services.plc')}</option>
                      <option value="smart-buildings">{t('contactPage.form.services.smart')}</option>
                      <option value="scada-systems">{t('contactPage.form.services.scada')}</option>
                      <option value="control-panels">{t('contactPage.form.services.control')}</option>
                      <option value="electrical-design">{t('contactPage.form.services.electrical')}</option>
                      <option value="maintenance">{t('contactPage.form.services.maintenance')}</option>
                      <option value="consultation">{t('contactPage.form.services.consultation')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contactPage.form.fields.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={t('contactPage.form.placeholders.subject')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contactPage.form.fields.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                      placeholder={t('contactPage.form.placeholders.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {t('contactPage.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className={`w-5 h-5 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
                        {t('contactPage.form.submit')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('contactPage.visit.title')}
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>{t('contactPage.visit.map')}</p>
                  <p className="text-sm">{t('contactPage.visit.address')}</p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contactPage.why.title')}
                </h3>
                <ul className="space-y-4">
                  {[
                    t('contactPage.why.reasons.consultation'),
                    t('contactPage.why.reasons.response'),
                    t('contactPage.why.reasons.experience'),
                    t('contactPage.why.reasons.certified'),
                    t('contactPage.why.reasons.warranty'),
                    t('contactPage.why.reasons.custom')
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 text-green-500 ${language === 'ar' ? 'ml-3' : 'mr-3'} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}