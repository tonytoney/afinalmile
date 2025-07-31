'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'First-Mile Services',
    description: 'Get shipments moved from one dock to another or from a manufacturer to a warehouse location using LTL services and 53’ trailers.',
    features: [
      'Dock-to-dock transport',
      'Manufacturer to warehouse',
      'LTL integration',
      'Real-time tracking'
    ]
  },
  {
    title: 'Middle-Mile Services',
    description: 'Transport goods to distribution centers or showrooms using 53’ trailers.',
    features: [
      'Distribution center delivery',
      'Intermodal options',
      'Efficient routing',
      'Secure handling'
    ]
  },
  {
    title: 'Last-Mile Services',
    description: 'Deliver products to job sites or end consumers’ homes using box trucks and specialized equipment.',
    features: [
      'Home delivery',
      'Job site delivery',
      'Product installation',
      'White glove service'
    ]
  }
]

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Final Mile Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for every mile of your supply chain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="h-5 w-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-4 text-lg"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 