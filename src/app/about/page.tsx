import { Metadata } from 'next'
import { CheckCircle, Users, Target, Award, Lightbulb, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Simix',
  description: 'Learn about Simix, our mission, values, and the team behind innovative automation solutions.',
}

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We deliver exact solutions tailored to your specific automation needs with meticulous attention to detail.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly evolving with cutting-edge technology to provide the most advanced automation solutions.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Our systems are built to last, ensuring maximum uptime and consistent performance for your operations.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, understanding their unique challenges and goals.'
  }
]

const milestones = [
  { year: '2008', title: 'Company Founded', description: 'Started with a vision to revolutionize industrial automation' },
  { year: '2012', title: 'First Major Project', description: 'Completed our first large-scale building management system' },
  { year: '2016', title: 'KNX Certification', description: 'Became certified KNX system integrators for smart buildings' },
  { year: '2020', title: '500+ Projects', description: 'Reached milestone of 500 completed automation projects' },
  { year: '2023', title: 'Industry Recognition', description: 'Awarded Best Automation Solutions Provider' }
]

const features = [
  'Advanced PLC & SCADA Programming',
  'Smart Building Automation (KNX)',
  'Building Management Systems (BMS)',
  'Control Panel Design & Manufacturing',
  'AutoCAD Electrical & EPLAN Design',
  'Industrial Process Control',
  'VFD & Motor Control Systems',
  '24/7 Technical Support & Maintenance'
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-primary-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-secondary-light">Simix</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Pioneering the future of industrial automation and smart building solutions 
            with over 15 years of expertise and innovation.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Simix was founded with a simple yet ambitious vision: to transform how industries 
                approach automation and smart building solutions. What started as a small team of 
                passionate engineers has grown into a leading provider of comprehensive automation services.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our expertise spans across ATS, STAR DELTA, VFD, PLC, HMI, SCADA, DCS, BMS, 
                Smart Home, KNX System, AutoCAD Electrical, and EPLAN technologies. We pride ourselves 
                on delivering solutions that not only meet current needs but also prepare our clients 
                for future technological advances.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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
                  <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">200+</div>
                  <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">99.9%</div>
                  <div className="text-gray-600 dark:text-gray-300">Uptime</div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-primary-light to-primary-DEFAULT rounded-3xl p-8 text-white text-center">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Industry Leader</h3>
                <p className="opacity-90">
                  Recognized for excellence in automation solutions and customer satisfaction
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones that have shaped our company and driven our growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-primary-DEFAULT">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-DEFAULT rounded-full mt-2 mr-8" />
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