'use client'

import { motion } from 'framer-motion'

const locations = [
  {
    name: 'Atlanta, GA',
    address: '2751 Buford Hwy, Atlanta, GA 30324',
    phone: '678-433-6100',
    email: 'atl@afinalmile.com',
  },
  {
    name: 'Charlotte, NC',
    address: '9410 D Ducks Lane, Charlotte, NC 28273',
    phone: '678-433-6100',
    email: 'clt@afinalmile.com',
  },
  {
    name: 'Raleigh-Durham, NC',
    address: '2320 Presidential Park Drive, Suite 109, Durham, NC 27703',
    phone: '678-433-6100',
    email: 'rdu@afinalmile.com',
  },

]

export default function Locations() {
  return (
    <main className="pt-24 pb-16 animate-fade-in">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located to support final mile delivery across the Southeast United States.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{location.name}</h2>
              <div className="space-y-4">
                {/* <div>
                  <h3 className="font-semibold text-gray-700">Address:</h3>
                  <p className="text-gray-600">{location.address}</p>
                </div> */}
                <div>
                  <h3 className="font-semibold text-gray-700">Contact:</h3>
                  <p className="text-gray-600">{location.phone}</p>
                  <p className="text-gray-600">{location.email}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Need Transportation Services?</h2>
          <a href="/contact" className="btn-primary">
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </main>
  )
} 