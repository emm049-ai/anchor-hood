import Link from 'next/link'
import { FaArrowRight, FaBuilding, FaCalendarAlt, FaHome, FaHandshake, FaBullhorn } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powering Up the Built Industry
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Innovative solutions for the built environment in Zimbabwe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Our Services
                <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors inline-flex items-center justify-center gap-2 border-2 border-white/30"
              >
                Book Appointment
                <FaCalendarAlt />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About AnchorHood
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              AnchorHood is a Zimbabwean company supporting the built industry through the provision of innovative solutions. We serve this sector by harnessing the power of technology coupled with real expertise to curate solutions for our clients and communities.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-600">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading innovative solutions provider for the built environment in Zimbabwe.
                </p>
              </div>
              <div className="bg-accent-50 p-6 rounded-lg border-l-4 border-accent-600">
                <h3 className="text-xl font-semibold mb-3 text-accent-900">Our Mission</h3>
                <p className="text-gray-700">
                  To power up the built industry, while driving real returns for strategic real estate stakeholders, and communities both social and corporate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for the built industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
              <div className="text-primary-600 text-4xl mb-4">
                <FaBuilding />
              </div>
              <h3 className="text-xl font-semibold mb-3">Facilities & Project Management</h3>
              <p className="text-gray-600">
                Comprehensive facilities management solutions for residential and commercial buildings, plus project management support for construction projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-accent-600">
              <div className="text-accent-600 text-4xl mb-4">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Event Management</h3>
              <p className="text-gray-600">
                Corporate events, conferences, product launches, social events, and award ceremonies. We create memorable experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary-600">
              <div className="text-secondary-600 text-4xl mb-4">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing & Media</h3>
              <p className="text-gray-600">
                Brand identity development, digital marketing campaigns, social media management, and media relations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
              <div className="text-primary-600 text-4xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate Advisory</h3>
              <p className="text-gray-600">
                In partnership with Seeff Zimbabwe, we provide market analysis, property valuation, and investment consulting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-accent-600">
              <div className="text-accent-600 text-4xl mb-4">
                <FaHome />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-600">
                Industry-specific publications, online content, podcasts, and digital solutions tailored to the built industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary-600">
              <div className="text-secondary-600 text-4xl mb-4">
                <FaBuilding />
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Consulting</h3>
              <p className="text-gray-600">
                Market research, feasibility studies, sustainability advisory, and consultancy services for construction and property development.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
            >
              View All Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and trends to enhance experiences.</p>
              </div>
              <div className="border-l-4 border-accent-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Creativity</h3>
                <p className="text-gray-600">We push the boundaries of creativity to deliver memorable events.</p>
              </div>
              <div className="border-l-4 border-secondary-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
                <p className="text-gray-600">We pay attention to every detail, ensuring seamless and flawless execution.</p>
              </div>
              <div className="border-l-4 border-accent-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Passion</h3>
                <p className="text-gray-600">We prioritize client satisfaction and serve our clients with dedication.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Reliability</h3>
                <p className="text-gray-600">We are committed to success, exceeding expectations on deadlines, budgets, and quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help power up your built industry projects
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
          >
            Contact Us Today
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}

