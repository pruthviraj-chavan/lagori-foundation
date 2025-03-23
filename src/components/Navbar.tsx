import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu
  const location = useLocation();
  const isMobile = useIsMobile();

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

  const isActive = (path: string) => location.pathname === path;

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-lagori-600 shadow-md backdrop-blur-md py-2' 
          : 'bg-gradient-to-r from-black/80 to-lagori-900/70 backdrop-blur-md py-4'
      }`}
    >
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
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

        {/* Mobile Menu Button - Using Sheet from shadcn/ui */}
        {isMobile && (
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-md text-white hover:bg-lagori-100/20 transition-colors"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] bg-white p-0 pt-12">
              <div className="flex flex-col px-6 py-6 space-y-6">
                <Link 
                  to="/" 
                  className={`text-xl font-medium ${isActive('/') ? 'text-lagori-600' : 'text-gray-800'} hover:text-lagori-500 transition-colors`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-xl font-medium ${isActive('/about') ? 'text-lagori-600' : 'text-gray-800'} hover:text-lagori-500 transition-colors`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link 
                  to="/activities" 
                  className={`text-xl font-medium ${isActive('/activities') ? 'text-lagori-600' : 'text-gray-800'} hover:text-lagori-500 transition-colors`} 
                  onClick={handleLinkClick}
                >
                  Activities
                </Link>
                <Link 
                  to="/awards" 
                  className={`text-xl font-medium ${isActive('/awards') ? 'text-lagori-600' : 'text-gray-800'} hover:text-lagori-500 transition-colors`} 
                  onClick={handleLinkClick}
                >
                  Awards
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-xl font-medium ${isActive('/contact') ? 'text-lagori-600' : 'text-gray-800'} hover:text-lagori-500 transition-colors`} 
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
                <a 
                  href="https://donate.stripe.com/test" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-center mt-4"
                  onClick={handleLinkClick}
                >
                  Donate Now
                </a>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
