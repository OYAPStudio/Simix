'use client'

import { Metadata } from 'next'
import { CheckCircle, Users, Target, Award, Lightbulb, Shield } from 'lucide-react'
import { useTranslation } from '@/contexts/TranslationContext'

// Note: metadata will need to be handled differently for client components
// You might want to move this to a parent server component or use next/head

export default function AboutPage() {
  const { t, language } = useTranslation()

  const values = [
    {
      icon: Target,
      title: t('aboutPage.values.precision.title'),
      description: t('aboutPage.values.precision.description')
    },
    {
      icon: Lightbulb,
      title: t('aboutPage.values.innovation.title'),
      description: t('aboutPage.values.innovation.description')
    },
    {
      icon: Shield,
      title: t('aboutPage.values.reliability.title'),
      description: t('aboutPage.values.reliability.description')
    },
    {
      icon: Users,
      title: t('aboutPage.values.collaboration.title'),
      description: t('aboutPage.values.collaboration.description')
    }
  ]

  const milestones = [
    { 
      year: '2008', 
      title: t('aboutPage.milestones.founded.title'), 
      description: t('aboutPage.milestones.founded.description')
    },
    { 
      year: '2012', 
      title: t('aboutPage.milestones.firstProject.title'), 
      description: t('aboutPage.milestones.firstProject.description')
    },
    { 
      year: '2016', 
      title: t('aboutPage.milestones.knxCert.title'), 
      description: t('aboutPage.milestones.knxCert.description')
    },
    { 
      year: '2020', 
      title: t('aboutPage.milestones.projects500.title'), 
      description: t('aboutPage.milestones.projects500.description')
    },
    { 
      year: '2023', 
      title: t('aboutPage.milestones.recognition.title'), 
      description: t('aboutPage.milestones.recognition.description')
    }
  ]

  const features = [
    t('aboutPage.features.plcScada'),
    t('aboutPage.features.smartBuilding'),
    t('aboutPage.features.bms'),
    t('aboutPage.features.controlPanel'),
    t('aboutPage.features.autocadEplan'),
    t('aboutPage.features.processControl'),
    t('aboutPage.features.vfdMotor'),
    t('aboutPage.features.support')
  ]

  return (
    <div className="pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('aboutPage.hero.about')} <span className="text-secondary-light">Simix</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {t('aboutPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('aboutPage.story.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('aboutPage.story.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('aboutPage.story.paragraph2')}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className={`w-5 h-5 text-green-500 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">{t('aboutPage.stats.projects')}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">{t('aboutPage.stats.experience')}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">200+</div>
                  <div className="text-gray-600 dark:text-gray-300">{t('aboutPage.stats.clients')}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">99.9%</div>
                  <div className="text-gray-600 dark:text-gray-300">{t('aboutPage.stats.uptime')}</div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-primary-light to-primary-DEFAULT rounded-3xl p-8 text-white text-center">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">{t('aboutPage.leader.title')}</h3>
                <p className="opacity-90">
                  {t('aboutPage.leader.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutPage.values.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('aboutPage.values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutPage.journey.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('aboutPage.journey.description')}
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-24 ${language === 'ar' ? 'text-left ml-8' : 'text-right mr-8'}`}>
                  <div className="text-2xl font-bold text-primary-DEFAULT">
                    {milestone.year}
                  </div>
                </div>
                <div className={`flex-shrink-0 w-4 h-4 bg-primary-DEFAULT rounded-full mt-2 ${language === 'ar' ? 'ml-8' : 'mr-8'}`} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}