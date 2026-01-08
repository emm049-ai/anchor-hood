import Link from 'next/link'
import { FaShoppingCart, FaArrowRight, FaBuilding, FaCalendarAlt, FaFileAlt, FaHandshake } from 'react-icons/fa'

export default function Shop() {
  // Placeholder products - structure ready for e-commerce integration
  const productCategories = [
    {
      name: 'Event Management Packages',
      icon: <FaCalendarAlt />,
      products: [
        {
          id: 1,
          name: 'Corporate Event Package',
          description: 'Complete corporate event management including planning, execution, and follow-up.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        },
        {
          id: 2,
          name: 'Wedding Planning Service',
          description: 'Full-service wedding planning and coordination.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        },
        {
          id: 3,
          name: 'Conference & Seminar Package',
          description: 'Professional conference and seminar management services.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      name: 'Consulting Services',
      icon: <FaHandshake />,
      products: [
        {
          id: 4,
          name: 'Real Estate Advisory Consultation',
          description: 'Expert advice on property investment, valuation, and market analysis.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        },
        {
          id: 5,
          name: 'Project Management Consultation',
          description: 'Professional guidance for construction and development projects.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        },
        {
          id: 6,
          name: 'Facilities Management Consultation',
          description: 'Expert advice on facilities management and operations optimization.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      name: 'Digital Products',
      icon: <FaFileAlt />,
      products: [
        {
          id: 7,
          name: 'UrbanHood Insights Newsletter',
          description: 'Monthly newsletter with property-related content and industry insights.',
          price: 'Free',
          image: '/api/placeholder/400/300'
        },
        {
          id: 8,
          name: 'Property Development Guide',
          description: 'Comprehensive guide to property development in Zimbabwe.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        },
        {
          id: 9,
          name: 'Marketing Strategy Template',
          description: 'Professional marketing strategy templates for built industry businesses.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      name: 'Physical Products',
      icon: <FaBuilding />,
      products: [
        {
          id: 10,
          name: 'AnchorHood Branded Materials',
          description: 'Professional branded materials and promotional items.',
          price: 'Contact for pricing',
          image: '/api/placeholder/400/300'
        }
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 via-secondary-600 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Shop</h1>
            <p className="text-xl text-primary-100">
              Explore our services and products
            </p>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {productCategories.map((category, categoryIdx) => (
              <div key={categoryIdx} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-primary-600 text-3xl">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="bg-gradient-to-br from-secondary-100 to-accent-100 h-48 flex items-center justify-center">
                        <div className="text-primary-600 text-6xl">
                          {category.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-accent-600">{product.price}</span>
                          <Link
                            href={`/contact?product=${product.id}`}
                            className="bg-accent-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-700 transition-colors inline-flex items-center gap-2"
                          >
                            Inquire
                            <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Notice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaShoppingCart className="text-accent-600 text-5xl mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">E-Commerce Coming Soon</h2>
              <p className="text-gray-700 mb-6">
                We're working on adding online payment capabilities. For now, please contact us directly to inquire about our products and services. We'll be happy to assist you!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
              >
                Contact Us
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Something Custom?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            We can create custom solutions tailored to your specific needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
          >
            Get a Quote
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}

