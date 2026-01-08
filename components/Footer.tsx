import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <img
                  src="/logo4.png"
                  alt="AnchorHood Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-white">AnchorHood</span>
            </div>
            <p className="text-sm mb-4">
              Powering up the built industry with innovative solutions for the built environment in Zimbabwe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-accent-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Facilities Management</li>
              <li>Event Management</li>
              <li>Marketing & Media</li>
              <li>Real Estate Advisory</li>
              <li>Content Creation</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-secondary-400" />
                <span>173 Harare Drive, Mt Pleasant, Harare</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-secondary-400" />
                <a href="tel:+263772372677" className="hover:text-accent-400 transition-colors">
                  +263 772 372 677
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary-400" />
                <a href="mailto:info@anchorhood.co.zw" className="hover:text-accent-400 transition-colors">
                  info@anchorhood.co.zw
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AnchorHood. All rights reserved.</p>
          <p className="mt-2 italic text-gray-500">"The Battle is not for the swift"</p>
        </div>
      </div>
    </footer>
  )
}

