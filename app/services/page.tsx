import Link from 'next/link'
import { FaBuilding, FaCalendarAlt, FaBullhorn, FaHome, FaHandshake, FaChartLine, FaFileAlt, FaTools, FaUsers, FaGift, FaMicrophone, FaVideo, FaNewspaper, FaPodcast } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaBuilding />,
      title: 'Facilities & Project Management',
      description: 'Comprehensive facilities management solutions for existing residential and commercial buildings, plus project management support for construction projects.',
      details: [
        'Facilities management for residential and commercial buildings',
        'Project management support for construction projects',
        'Maintenance and repairs coordination',
        'Operations optimization'
      ]
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Event Management',
      description: 'We specialize in organizing seamless corporate and social events that drive real returns and leave memorable, lasting impressions.',
      details: [
        'Corporate Events: Conferences, seminars, training events',
        'Product launches and exhibitions',
        'Team-building activities',
        'Award ceremonies',
        'Charity galas and fundraisers',
        'Social Events: Weddings, anniversaries, birthdays',
        'Entertainment coordination and production',
        'Emcee and host services'
      ]
    },
    {
      icon: <FaBullhorn />,
      title: 'Marketing & Media',
      description: 'We develop impactful marketing campaigns to generate buzz and attract your target audience through various channels.',
      details: [
        'Brand identity and messaging development',
        'Marketing collateral and promotional materials',
        'Social media and digital marketing campaigns',
        'Media relations and press coverage',
        'Webinars, Podcasts and virtual platforms',
        'Highlighting and celebrating success of professionals and organisations'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Real Estate Advisory',
      description: 'In partnership with Seeff Zimbabwe, we provide comprehensive real estate advisory services.',
      details: [
        'Market analysis and property valuation',
        'Investment consulting',
        'Property sales and rentals',
        'Property development advisory'
      ]
    },
    {
      icon: <FaFileAlt />,
      title: 'Content Creation & Publishing',
      description: 'We produce industry-specific publications and online content to distribute information and support our clients\' needs.',
      details: [
        'Industry-specific publications',
        'Online content creation',
        'Newsletter production',
        'Podcasts and digital media',
        'UrbanHood Insights digital publication'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Research & Consulting',
      description: 'We conduct market research, feasibility studies, and consultancy services related to construction projects and property development.',
      details: [
        'Market research and feasibility studies',
        'Consultancy services for construction projects',
        'Property development planning',
        'Infrastructure planning',
        'Sustainability research and advisory',
        'Green building certifications (e.g., LEED)',
        'Energy efficiency consulting'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Digital Solutions',
      description: 'We promote the exchange of information on technology tailored to the needs of the built industry.',
      details: [
        'Technology solutions for built industry',
        'Digital platform development',
        'Information exchange systems',
        'Industry-specific software solutions'
      ]
    }
  ]

  const mediaProjects = [
    {
      name: 'WIPZ (Women In Property Zw)',
      description: 'Periodic events, including annual conference'
    },
    {
      name: 'Property Development Indaba',
      description: 'An annual event'
    },
    {
      name: 'UrbanHood Insights',
      description: 'A digital publication, which includes a newsletter, and upcoming podcasts. It shares property related content, including presentations from various industry professionals.'
    },
    {
      name: 'Real Assist',
      description: 'Affiliate service provision through a registered estate agent company, for property sales, rentals, valuations and property development'
    },
    {
      name: 'Anchorhood Facilities Management',
      description: 'A social media based marketing campaign for repairs, maintenance and facilities management services.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 via-secondary-600 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive solutions for the built industry
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-primary-600 text-5xl mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Media Projects
            </h2>
            <div className="space-y-6">
              {mediaProjects.map((project, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-primary-900">{project.name}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe that every event is unique, and we tailor our services to meet the specific needs and preferences of each client. Our experienced team of event professionals works closely with you to understand your vision and bring it to life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to delivering exceptional service, innovative ideas, and flawless execution. We position our clients for success!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help power up your built industry projects
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

