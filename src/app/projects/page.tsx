import { Metadata } from 'next'
import { Calendar, MapPin, Tag, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Simix',
  description: 'Explore our portfolio of successful automation projects across various industries.',
}

const projects = [
  {
    id: 1,
    title: 'Smart Manufacturing Plant Automation',
    description: 'Complete automation solution for a 50,000 sq ft manufacturing facility including PLC programming, SCADA system, and energy management.',
    image: '/api/placeholder/600/400',
    category: 'Industrial Automation',
    location: 'Detroit, MI',
    year: '2024',
    technologies: ['Siemens S7-1500', 'WinCC SCADA', 'KNX', 'Energy Management'],
    highlights: [
      '40% reduction in energy consumption',
      '60% improvement in production efficiency',
      'Real-time monitoring of 200+ sensors',
      'Integrated quality control systems'
    ]
  },
  {
    id: 2,
    title: 'Corporate Headquarters BMS',
    description: 'Building management system for a 20-story corporate headquarters with integrated KNX automation, HVAC control, and security systems.',
    image: '/api/placeholder/600/400',
    category: 'Smart Buildings',
    location: 'New York, NY',
    year: '2023',
    technologies: ['KNX/EIB', 'BACnet', 'Modbus', 'Building Analytics'],
    highlights: [
      '35% reduction in HVAC energy costs',
      'Centralized control of 500+ devices',
      'Advanced occupancy detection',
      'Mobile app for facility management'
    ]
  },
  {
    id: 3,
    title: 'Water Treatment Plant SCADA',
    description: 'Comprehensive SCADA system for municipal water treatment facility with real-time monitoring, automated controls, and regulatory compliance.',
    image: '/api/placeholder/600/400',
    category: 'SCADA Systems',
    location: 'Phoenix, AZ',
    year: '2023',
    technologies: ['Wonderware SCADA', 'Allen-Bradley PLCs', 'Historian', 'HMI'],
    highlights: [
      '24/7 remote monitoring capabilities',
      'Automated chemical dosing control',
      'Compliance with EPA regulations',
      'Predictive maintenance alerts'
    ]
  },
  {
    id: 4,
    title: 'Smart Hospital Infrastructure',
    description: 'Integrated automation system for a 300-bed hospital including medical gas monitoring, nurse call integration, and emergency power management.',
    image: '/api/placeholder/600/400',
    category: 'Healthcare Automation',
    location: 'Boston, MA',
    year: '2022',
    technologies: ['Schneider PLCs', 'KNX', 'BACnet', 'Emergency Systems'],
    highlights: [
      'Critical system redundancy',
      'Integration with nurse call systems',
      'Medical gas monitoring',
      'Emergency power automation'
    ]
  },
  {
    id: 5,
    title: 'Data Center Infrastructure Management',
    description: 'Complete DCIM solution for Tier III data center with environmental monitoring, power management, and predictive analytics.',
    image: '/api/placeholder/600/400',
    category: 'Data Center',
    location: 'Austin, TX',
    year: '2022',
    technologies: ['Schneider EcoStruxure', 'Modbus TCP', 'SNMP', 'Analytics'],
    highlights: [
      '99.99% uptime achievement',
      'Real-time power and cooling optimization',
      'Predictive failure detection',
      'Comprehensive asset tracking'
    ]
  },
  {
    id: 6,
    title: 'Smart Retail Chain Automation',
    description: 'Multi-site automation solution for 50+ retail locations with centralized monitoring, energy management, and security integration.',
    image: '/api/placeholder/600/400',
    category: 'Retail Automation',
    location: 'Multiple Locations',
    year: '2021',
    technologies: ['Cloud SCADA', 'IoT Sensors', 'Mobile Apps', 'Analytics'],
    highlights: [
      'Centralized monitoring of 50+ stores',
      '25% reduction in energy costs',
      'Automated lighting and HVAC control',
      'Real-time inventory temperature monitoring'
    ]
  }
]

const categories = ['All', 'Industrial Automation', 'Smart Buildings', 'SCADA Systems', 'Healthcare Automation', 'Data Center', 'Retail Automation']

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-secondary-light">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Discover how we've helped organizations across various industries achieve 
            operational excellence through innovative automation solutions.
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
                      <div className="text-4xl font-bold mb-2">PROJECT</div>
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
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
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
                      Technologies Used
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
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-primary-DEFAULT rounded-full mt-2 mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <button className="inline-flex items-center text-primary-DEFAULT hover:text-primary-light transition-colors duration-200 font-medium group">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results with a custom automation solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}