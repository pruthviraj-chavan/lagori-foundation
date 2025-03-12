
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-lagori-600 shadow-md backdrop-blur-md py-2' 
          : 'bg-gradient-to-r from-black/80 to-lagori-900/70 backdrop-blur-md py-4'
      }`}
    >
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="font-playfair text-2xl font-bold text-white">
            Lagori <span className="text-white">Foundation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''} text-white hover:text-white/80`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''} text-white hover:text-white/80`}
          >
            About Us
          </Link>
          <Link 
            to="/activities" 
            className={`nav-link ${isActive('/activities') ? 'nav-link-active' : ''} text-white hover:text-white/80`}
          >
            Activities
          </Link>
          <Link 
            to="/awards" 
            className={`nav-link ${isActive('/awards') ? 'nav-link-active' : ''} text-white hover:text-white/80`}
          >
            Awards
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''} text-white hover:text-white/80`}
          >
            Contact
          </Link>
          <a 
            href="https://donate.stripe.com/test" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 btn-primary"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-lagori-100/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20`}
      >
        <div className="flex flex-col px-4 py-6 space-y-6">
          <Link 
            to="/" 
            className={`text-xl ${isActive('/') ? 'text-lagori-600 font-medium' : 'text-gray-800'}`} 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-xl ${isActive('/about') ? 'text-lagori-600 font-medium' : 'text-gray-800'}`} 
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link 
            to="/activities" 
            className={`text-xl ${isActive('/activities') ? 'text-lagori-600 font-medium' : 'text-gray-800'}`} 
            onClick={closeMenu}
          >
            Activities
          </Link>
          <Link 
            to="/awards" 
            className={`text-xl ${isActive('/awards') ? 'text-lagori-600 font-medium' : 'text-gray-800'}`} 
            onClick={closeMenu}
          >
            Awards
          </Link>
          <Link 
            to="/contact" 
            className={`text-xl ${isActive('/contact') ? 'text-lagori-600 font-medium' : 'text-gray-800'}`} 
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a 
            href="https://donate.stripe.com/test" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-center" 
            onClick={closeMenu}
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
