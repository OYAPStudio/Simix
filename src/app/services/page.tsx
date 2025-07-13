'use client'

import { Metadata } from 'next'
import { 
  Settings, 
  Home, 
  Cpu, 
  Zap, 
  MonitorSpeaker, 
  Wrench,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

// Note: metadata will need to be handled differently for client components
// You might want to move this to a parent server component or use next/head

export default function ServicesPage() {
  const { t, language } = useTranslation()

  const services = [
    {
      id: 'plc',
      icon: Settings,
      title: t('servicesPage.plc.title'),
      description: t('servicesPage.plc.description'),
      features: [
        t('servicesPage.plc.features.siemens'),
        t('servicesPage.plc.features.hmi'),
        t('servicesPage.plc.features.process'),
        t('servicesPage.plc.features.diagnostics'),
        t('servicesPage.plc.features.legacy'),
        t('servicesPage.plc.features.monitoring')
      ],
      benefits: [
        t('servicesPage.plc.benefits.efficiency'),
        t('servicesPage.plc.benefits.downtime'),
        t('servicesPage.plc.benefits.reliability'),
        t('servicesPage.plc.benefits.scalable')
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'smart-buildings',
      icon: Home,
      title: t('servicesPage.smart.title'),
      description: t('servicesPage.smart.description'),
      features: [
        t('servicesPage.smart.features.knx'),
        t('servicesPage.smart.features.lighting'),
        t('servicesPage.smart.features.hvac'),
        t('servicesPage.smart.features.security'),
        t('servicesPage.smart.features.energy'),
        t('servicesPage.smart.features.visualization')
      ],
      benefits: [
        t('servicesPage.smart.benefits.savings'),
        t('servicesPage.smart.benefits.comfort'),
        t('servicesPage.smart.benefits.control'),
        t('servicesPage.smart.benefits.future')
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'control-panels',
      icon: Cpu,
      title: t('servicesPage.control.title'),
      description: t('servicesPage.control.description'),
      features: [
        t('servicesPage.control.features.ats'),
        t('servicesPage.control.features.star'),
        t('servicesPage.control.features.vfd'),
        t('servicesPage.control.features.power'),
        t('servicesPage.control.features.custom'),
        t('servicesPage.control.features.compliance')
      ],
      benefits: [
        t('servicesPage.control.benefits.reliable'),
        t('servicesPage.control.benefits.efficient'),
        t('servicesPage.control.benefits.stress'),
        t('servicesPage.control.benefits.standards')
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'scada',
      icon: MonitorSpeaker,
      title: t('servicesPage.scada.title'),
      description: t('servicesPage.scada.description'),
      features: [
        t('servicesPage.scada.features.development'),
        t('servicesPage.scada.features.dcs'),
        t('servicesPage.scada.features.visualization'),
        t('servicesPage.scada.features.analysis'),
        t('servicesPage.scada.features.alarm'),
        t('servicesPage.scada.features.remote')
      ],
      benefits: [
        t('servicesPage.scada.benefits.visibility'),
        t('servicesPage.scada.benefits.decision'),
        t('servicesPage.scada.benefits.safety'),
        t('servicesPage.scada.benefits.maintenance')
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'electrical-design',
      icon: Zap,
      title: t('servicesPage.electrical.title'),
      description: t('servicesPage.electrical.description'),
      features: [
        t('servicesPage.electrical.features.autocad'),
        t('servicesPage.electrical.features.eplan'),
        t('servicesPage.electrical.features.schematic'),
        t('servicesPage.electrical.features.panel'),
        t('servicesPage.electrical.features.bom'),
        t('servicesPage.electrical.features.standards')
      ],
      benefits: [
        t('servicesPage.electrical.benefits.documentation'),
        t('servicesPage.electrical.benefits.delivery'),
        t('servicesPage.electrical.benefits.errors'),
        t('servicesPage.electrical.benefits.compliance')
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: t('servicesPage.maintenance.title'),
      description: t('servicesPage.maintenance.description'),
      features: [
        t('servicesPage.maintenance.features.support'),
        t('servicesPage.maintenance.features.preventive'),
        t('servicesPage.maintenance.features.emergency'),
        t('servicesPage.maintenance.features.optimization'),
        t('servicesPage.maintenance.features.parts'),
        t('servicesPage.maintenance.features.training')
      ],
      benefits: [
        t('servicesPage.maintenance.benefits.uptime'),
        t('servicesPage.maintenance.benefits.lifespan'),
        t('servicesPage.maintenance.benefits.costs'),
        t('servicesPage.maintenance.benefits.peace')
      ],
      color: 'from-teal-500 to-teal-600'
    }
  ]

  return (
    <div className="pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('servicesPage.hero.our')} <span className="text-secondary-light">{t('servicesPage.hero.services')}</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {t('servicesPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('servicesPage.common.whatWeOffer')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className={`w-5 h-5 text-green-500 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('servicesPage.common.getQuote')}
                    <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} w-5 h-5`} />
                  </Link>
                </div>

                {/* Benefits Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      {t('servicesPage.common.keyBenefits')}
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className="flex items-start"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 ${language === 'ar' ? 'ml-4' : 'mr-4'} flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('servicesPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('servicesPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('servicesPage.cta.consultation')}
              <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} w-5 h-5`} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('servicesPage.cta.projects')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}