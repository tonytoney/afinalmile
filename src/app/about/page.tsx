import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Freedom Expedited',
  description: 'Learn about Freedom Expedited\'s mission, values, and commitment to excellence in drayage, intermodal, and freight solutions.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Albany Final Mile</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At Albany Final Mile, we're committed to providing comprehensive final mile solutions, including first-mile, middle-mile, and last-mile services with reliable delivery and customer focus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Founded with a vision to excel in final mile logistics, Albany Final Mile has become a trusted name in home delivery, job site delivery, and supply chain management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We strive for excellence in every aspect of our operations, from customer service to delivery performance.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We continuously seek innovative solutions to improve efficiency and meet evolving industry needs.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We build trust through consistent, dependable service and transparent communication.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're committed to environmentally responsible practices and sustainable logistics solutions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Nationwide coverage with coast-to-coast service</li>
              <li>Real-time tracking and advanced logistics technology</li>
              <li>Experienced team of logistics professionals</li>
              <li>Customized solutions for your specific needs</li>
              <li>24/7 customer support and assistance</li>
              <li>Competitive pricing and transparent billing</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 