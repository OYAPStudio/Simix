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

export const metadata: Metadata = {
  title: 'Services - Simix',
  description: 'Comprehensive automation services including PLC programming, smart buildings, SCADA systems, and more.',
}

const services = [
  {
    id: 'plc',
    icon: Settings,
    title: 'PLC Programming & Control Systems',
    description: 'Advanced programmable logic controller systems for industrial automation and process control with cutting-edge technology.',
    features: [
      'Siemens, Allen-Bradley, Schneider PLC Programming',
      'HMI Development and Integration',
      'Process Control and Optimization',
      'System Diagnostics and Troubleshooting',
      'Legacy System Upgrades',
      'Real-time Data Monitoring'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced downtime and maintenance costs',
      'Enhanced process reliability',
      'Scalable automation solutions'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'smart-buildings',
    icon: Home,
    title: 'Smart Buildings & KNX Systems',
    description: 'Complete building management systems with integrated KNX automation for modern smart buildings and energy efficiency.',
    features: [
      'KNX/EIB System Design and Installation',
      'Lighting Control Systems',
      'HVAC Integration and Control',
      'Security and Access Control',
      'Energy Management Systems',
      'Building Visualization Software'
    ],
    benefits: [
      'Up to 30% energy savings',
      'Enhanced comfort and convenience',
      'Centralized building control',
      'Future-proof infrastructure'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'control-panels',
    icon: Cpu,
    title: 'Control Panel Design & Manufacturing',
    description: 'Custom control panel design and manufacturing for ATS, STAR DELTA, VFD applications with industry-standard compliance.',
    features: [
      'Automatic Transfer Switch (ATS) Panels',
      'STAR DELTA Motor Starters',
      'Variable Frequency Drive (VFD) Panels',
      'Power Distribution Panels',
      'Custom Control Enclosures',
      'CE/UL Compliance and Testing'
    ],
    benefits: [
      'Reliable motor control solutions',
      'Energy-efficient operations',
      'Reduced mechanical stress',
      'Compliance with international standards'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'scada',
    icon: MonitorSpeaker,
    title: 'SCADA & DCS Systems',
    description: 'Supervisory control and data acquisition systems for real-time monitoring, control, and data analytics across industrial processes.',
    features: [
      'SCADA System Development',
      'Distributed Control Systems (DCS)',
      'Real-time Data Visualization',
      'Historical Data Analysis',
      'Alarm Management Systems',
      'Remote Monitoring Capabilities'
    ],
    benefits: [
      'Real-time process visibility',
      'Improved decision making',
      'Enhanced operational safety',
      'Predictive maintenance capabilities'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'electrical-design',
    icon: Zap,
    title: 'Electrical Design & Documentation',
    description: 'Professional electrical design services using AutoCAD Electrical and EPLAN software for comprehensive project documentation.',
    features: [
      'AutoCAD Electrical Design',
      'EPLAN Electric P8 Engineering',
      'Schematic Design and Documentation',
      'Panel Layout and Wire Routing',
      'Bill of Materials Generation',
      'Technical Drawing Standards'
    ],
    benefits: [
      'Accurate technical documentation',
      'Faster project delivery',
      'Reduced design errors',
      'International standard compliance'
    ],
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Technical Support',
    description: 'Comprehensive maintenance and technical support services for all installed systems with 24/7 availability and expert assistance.',
    features: [
      '24/7 Technical Support Hotline',
      'Preventive Maintenance Programs',
      'Emergency Response Services',
      'System Performance Optimization',
      'Spare Parts Management',
      'Training and Documentation'
    ],
    benefits: [
      'Maximum system uptime',
      'Extended equipment lifespan',
      'Reduced operational costs',
      'Peace of mind operations'
    ],
    color: 'from-teal-500 to-teal-600'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-secondary-light">Services</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Comprehensive automation solutions designed to optimize your operations, 
            reduce costs, and drive innovation across your organization.
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
                      What We Offer
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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
                    Get Quote for This Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Benefits Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Key Benefits
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className="flex items-start"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 mr-4 flex-shrink-0`} />
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss your automation needs and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-DEFAULT hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}