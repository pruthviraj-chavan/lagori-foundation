
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lagori-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="font-playfair text-2xl font-bold mb-4">Lagori Foundation</h3>
            <p className="mb-4 text-gray-300">Empowering women through support, education, and community building for over four years.</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-lagori-400 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-lagori-400 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-lagori-400 transition-colors" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in animate-delay-100">
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-white transition-colors">Activities</Link>
              </li>
              <li>
                <Link to="/awards" className="text-gray-300 hover:text-white transition-colors">Awards</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in animate-delay-200">
            <h3 className="font-playfair text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Legal Assistance</li>
              <li className="text-gray-300">Self-Reliance Programs</li>
              <li className="text-gray-300">Skill Development</li>
              <li className="text-gray-300">Business Support</li>
              <li className="text-gray-300">Disaster Relief</li>
            </ul>
          </div>

          <div className="animate-fade-in animate-delay-300">
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-lagori-400" />
                <span className="text-gray-300">Near Amrut multipurpose hall, Kalamba, Kolhapur</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-lagori-400" />
                <a href="tel:+918668545201" className="text-gray-300 hover:text-white transition-colors">+91 8668545201</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-lagori-400" />
                <a href="mailto:lagorifoundation1@gmail.com" className="text-gray-300 hover:text-white transition-colors">lagorifoundation1@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lagori Foundation  | Designed by dieVektor.tech | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
