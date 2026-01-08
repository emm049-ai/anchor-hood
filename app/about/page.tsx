import Image from 'next/image'
import { FaLightbulb, FaRocket, FaHeart, FaAward, FaHandshake } from 'react-icons/fa'

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 via-secondary-600 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AnchorHood</h1>
            <p className="text-xl text-primary-100">
              Supporting the built industry through innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AnchorHood is a Zimbabwean company supporting the built industry through the provision of innovative solutions. We serve this sector by harnessing the power of technology coupled with real expertise to curate solutions for our clients and communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dedicated to serving strategic communities and committed to excellence, we empower businesses and individuals to leverage stakeholder engagement, create exceptional experiences, and optimize social capital for tangible returns. As a service provider, we are on an exciting mission to help businesses and individuals in the built industry.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary-50 p-8 rounded-lg border-l-4 border-secondary-600">
                <div className="text-secondary-600 text-4xl mb-4">
                  <FaRocket />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary-900">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading innovative solutions provider for the built environment in Zimbabwe.
                </p>
              </div>
              <div className="bg-accent-50 p-8 rounded-lg border-l-4 border-accent-600">
                <div className="text-accent-600 text-4xl mb-4">
                  <FaHandshake />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent-900">Our Mission</h3>
                <p className="text-gray-700">
                  To power up the built industry, while driving real returns for strategic real estate stakeholders, and communities both social and corporate.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <div className="text-primary-600 text-3xl mb-3">
                    <FaLightbulb />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
                  <p className="text-gray-700">We embrace new technologies and trends to enhance event experiences.</p>
                </div>
                <div className="bg-accent-50 p-6 rounded-lg border-l-4 border-accent-600">
                  <div className="text-accent-600 text-3xl mb-3">
                    <FaHeart />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Creativity</h3>
                  <p className="text-gray-700">We push the boundaries of creativity to deliver memorable events.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <div className="text-primary-600 text-3xl mb-3">
                    <FaAward />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
                  <p className="text-gray-700">We pay attention to every detail, ensuring a seamless and flawless event.</p>
                </div>
                <div className="bg-accent-50 p-6 rounded-lg border-l-4 border-accent-600">
                  <div className="text-accent-600 text-3xl mb-3">
                    <FaHeart />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Passion</h3>
                  <p className="text-gray-700">We prioritize client satisfaction and serve our clients.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600 md:col-span-2">
                  <div className="text-primary-600 text-3xl mb-3">
                    <FaHandshake />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Reliability</h3>
                  <p className="text-gray-700">We are committed to the success of our clients, and we strive to exceed expectations, delivering on deadlines, budgets, and quality experiences.</p>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Whom We Serve</h2>
              <p className="text-lg text-gray-700 mb-6">
                Organisations and individuals with an interest in the built industry, from both the public sector and the private sector. Our communities include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Resource Providers (Land, Finance, Technology)',
                  'Framework Support (Local govt, municipalities, private land owners)',
                  'Investor communities, developers, property owners',
                  'Construction material suppliers, professionals, service providers',
                  'Estate agents, home and garden suppliers',
                  'Contractors and service providers (bulk services, building contractors)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <div className="text-primary-600 mt-1">•</div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our People */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our People</h2>
              <p className="text-lg text-gray-700 mb-6">
                Meet our vibrant team of enthusiasts.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Juliet Mawodza</h3>
                  <p className="text-primary-600 font-medium">Managing Director</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Ronald Mudungwe</h3>
                  <p className="text-primary-600 font-medium">Operations Director</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Daphne Chipenzi</h3>
                  <p className="text-primary-600 font-medium">Marketing</p>
                </div>
              </div>
              <p className="text-center mt-8 text-lg font-semibold text-primary-600 italic">
                "Keeping It Real"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

