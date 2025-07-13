'use client'

import { Metadata } from 'next'
import { Calendar, MapPin, Tag, ExternalLink } from 'lucide-react'
import { useTranslation } from '@/contexts/TranslationContext'

// Note: metadata will need to be handled differently for client components
// You might want to move this to a parent server component or use next/head

export default function ProjectsPage() {
  const { t, language } = useTranslation()

  const projects = [
    {
      id: 1,
      title: t('projectsPage.projects.manufacturing.title'),
      description: t('projectsPage.projects.manufacturing.description'),
      image: '/api/placeholder/600/400',
      category: t('projectsPage.categories.industrial'),
      location: 'Detroit, MI',
      year: '2024',
      technologies: ['Siemens S7-1500', 'WinCC SCADA', 'KNX', t('projectsPage.projects.manufacturing.tech.energy')],
      highlights: [
        t('projectsPage.projects.manufacturing.highlights.energy'),
        t('projectsPage.projects.manufacturing.highlights.efficiency'),
        t('projectsPage.projects.manufacturing.highlights.sensors'),
        t('projectsPage.projects.manufacturing.highlights.quality')
      ]
    },
    {
      id: 2,
      title: t('projectsPage.projects.headquarters.title'),
      description: t('projectsPage.projects.headquarters.description'),
      image: '/api/placeholder/600/400',
      category: t('projectsPage.categories.smart'),
      location: 'New York, NY',
      year: '2023',
      technologies: ['KNX/EIB', 'BACnet', 'Modbus', t('projectsPage.projects.headquarters.tech.analytics')],
      highlights: [
        t('projectsPage.projects.headquarters.highlights.hvac'),
        t('projectsPage.projects.headquarters.highlights.devices'),
        t('projectsPage.projects.headquarters.highlights.occupancy'),
        t('projectsPage.projects.headquarters.highlights.mobile')
      ]
    },
    {
      id: 3,
      title: t('projectsPage.projects.water.title'),
      description: t('projectsPage.projects.water.description'),
      image: '/api/placeholder/600/400',
      category: t('projectsPage.categories.scada'),
      location: 'Phoenix, AZ',
      year: '2023',
      technologies: ['Wonderware SCADA', 'Allen-Bradley PLCs', 'Historian', 'HMI'],
      highlights: [
        t('projectsPage.projects.water.highlights.monitoring'),
        t('projectsPage.projects.water.highlights.chemical'),
        t('projectsPage.projects.water.highlights.compliance'),
        t('projectsPage.projects.water.highlights.maintenance')
      ]
    },
    {
      id: 4,
      title: t('projectsPage.projects.hospital.title'),
      description: t('projectsPage.projects.hospital.description'),
      image: '/api/placeholder/600/400',
      category: t('projectsPage.categories.healthcare'),
      location: 'Boston, MA',
      year: '2022',
      technologies: ['Schneider PLCs', 'KNX', 'BACnet', t('projectsPage.projects.hospital.tech.emergency')],
      highlights: [
        t('projectsPage.projects.hospital.highlights.redundancy'),
        t('projectsPage.projects.hospital.highlights.nurse'),
        t('projectsPage.projects.hospital.highlights.gas'),
        t('projectsPage.projects.hospital.highlights.power')
      ]
    },
    {
      id: 5,
      title: t('projectsPage.projects.datacenter.title'),
      description: t('projectsPage.projects.datacenter.description'),
      image: '/api/placeholder/600/400',
      category: t('projectsPage.categories.datacenter'),
      location: 'Austin, TX',
      year: '2022',
      technologies: ['Schneider EcoStruxure', 'Modbus TCP', 'SNMP', t('projectsPage.projects.datacenter.tech.analytics')],
      highlights: [
        t('projectsPage.projects.datacenter.highlights.uptime'),
        t('projectsPage.projects.datacenter.highlights.optimization'),
        t('projectsPage.projects.datacenter.highlights.detection'),
        t('projectsPage.projects.datacenter.highlights.tracking')
      ]
    },
    {
      id: 6,
      title: t('projectsPage.projects.retail.title'),
      description: t('projectsPage.projects.retail.description'),
      image: '/api/placeholder/600/400',
      category: t('projectsPage.categories.retail'),
      location: t('projectsPage.projects.retail.location'),
      year: '2021',
      technologies: [t('projectsPage.projects.retail.tech.cloud'), t('projectsPage.projects.retail.tech.iot'), t('projectsPage.projects.retail.tech.mobile'), t('projectsPage.projects.retail.tech.analytics')],
      highlights: [
        t('projectsPage.projects.retail.highlights.monitoring'),
        t('projectsPage.projects.retail.highlights.energy'),
        t('projectsPage.projects.retail.highlights.control'),
        t('projectsPage.projects.retail.highlights.temperature')
      ]
    }
  ]

  const categories = [
    t('projectsPage.filter.all'),
    t('projectsPage.categories.industrial'),
    t('projectsPage.categories.smart'),
    t('projectsPage.categories.scada'),
    t('projectsPage.categories.healthcare'),
    t('projectsPage.categories.datacenter'),
    t('projectsPage.categories.retail')
  ]

  return (
    <div className="pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('projectsPage.hero.our')} <span className="text-secondary-light">{t('projectsPage.hero.projects')}</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {t('projectsPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-DEFAULT hover:text-white transition-colors duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-light to-primary-DEFAULT relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{t('projectsPage.common.project')}</div>
                      <div className="text-xl opacity-80">{project.id.toString().padStart(2, '0')}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                      <Tag className="w-4 h-4 mr-1" />
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Project Meta */}
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {project.location}
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('projectsPage.common.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('projectsPage.common.achievements')}
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <div className={`w-2 h-2 bg-primary-DEFAULT rounded-full mt-2 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <button className="inline-flex items-center text-primary-DEFAULT hover:text-primary-light transition-colors duration-200 font-medium group">
                    {t('projectsPage.common.viewCase')}
                    <ExternalLink className={`w-4 h-4 ${language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-1 transition-transform duration-200`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('projectsPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('projectsPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('projectsPage.cta.start')}
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('projectsPage.cta.services')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}