import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VerticalsDropdown from './VerticalsDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const topLinks = [
    { name: 'U Stamp Certified Company', to: '#' },
    { name: 'ISO 9001:2015 Certified Company', to: '#' },
    { name: 'Blogs', to: '/blogs' },
    { name: 'R&D', to: '/rd' },
    { name: 'CSR', to: '/csr' },
    { name: 'Events', to: '/events' },
    { name: 'Media', to: '/media' },
    { name: 'Careers', to: '/careers' },
  ];

  const mainLinks = [
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Services', to: '/services' },
    { name: 'Patents', to: '/patents' },
    { name: 'Innovations', to: '/innovations' },
    { name: 'Connect', to: '/connect' },
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className={`w-full bg-white border-b border-gray-200 transition-all duration-300 
        ${isScrolled ? 'h-0 overflow-hidden md:h-[40px]' : 'h-0 md:h-[40px]'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-end items-center h-full gap-4 overflow-x-auto hide-scrollbar">
            {topLinks.map((link, index) => (
              <div key={link.name} className="flex items-center shrink-0">
                <Link
                  to={link.to}
                  className="text-[13px] text-[#1a4789] hover:text-[#003087] whitespace-nowrap transition-all duration-200
                    hover:scale-105 transform"
                >
                  {link.name}
                </Link>
                {index < topLinks.length - 1 && (
                  <span className="mx-4 text-[#e5e5e5]">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`w-full bg-gradient-to-r from-[#003087] to-[#002674] relative 
        transition-all duration-300 ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[60px] lg:h-[70px]">
            {/* Logo Area with Chevron */}
            <div className="relative h-full w-[200px] lg:w-[280px]">
              <div className="absolute inset-0 bg-white transform transition-transform duration-300 hover:scale-105" 
                style={{
                  clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)'
                }}>
              </div>
              <div className="relative h-full flex items-center justify-center px-4 lg:px-8">
                <Link to="/" className="flex items-center transform transition-transform duration-300 hover:scale-105">
                  <img
                    src="/logo.png"
                    alt="ChemDist"
                    className="h-[40px] lg:h-[52px] w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full ml-auto">
              {/* Verticals Link with Dropdown */}
              <div
                className="h-full flex items-center relative group"
                onMouseEnter={() => setIsVerticalsOpen(true)}
                onMouseLeave={() => setIsVerticalsOpen(false)}
              >
                <button
                  className="h-full flex items-center px-6 text-white text-[15px] font-medium 
                    hover:bg-[#001f5c] transition-all duration-300 relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                    after:h-1 after:bg-white after:transform after:scale-x-0 
                    after:transition-transform after:duration-300
                    group-hover:after:scale-x-100"
                >
                  Verticals
                  <svg 
                    className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <VerticalsDropdown 
                  isOpen={isVerticalsOpen}
                  onClose={() => setIsVerticalsOpen(false)}
                />
              </div>

              {/* Other Navigation Links */}
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="h-full flex items-center px-6 text-white text-[15px] font-medium 
                    hover:bg-[#001f5c] transition-all duration-300 relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                    after:h-1 after:bg-white after:transform after:scale-x-0 
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isVerticalsOpen) setIsVerticalsOpen(false);
                }}
                className="text-white p-2 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6 transform transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 top-[60px] bg-[#002674] transform transition-all duration-300
            ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div className="container mx-auto px-4 h-full overflow-y-auto pb-20">
            <div className="py-4 space-y-2">
              <div className="border-b border-gray-700 pb-2 mb-4">
                <button
                  onClick={() => setIsVerticalsOpen(!isVerticalsOpen)}
                  className="w-full flex justify-between items-center py-3 text-white text-base font-medium
                    hover:bg-[#001f5c] px-4 rounded-lg transition-all duration-300 active:scale-95"
                >
                  <span>Verticals</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${isVerticalsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Verticals Dropdown */}
                <div className={`transition-all duration-300 overflow-hidden ${isVerticalsOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="py-2 px-6 space-y-2">
                    <VerticalsDropdown
                      isOpen={true}
                      onClose={() => setIsVerticalsOpen(false)}
                    />
                  </div>
                </div>
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-white text-base font-medium hover:bg-[#001f5c] px-4 rounded-lg
                    transition-all duration-300 hover:translate-x-2 transform active:scale-95"
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-gray-700 mt-4 pt-4 space-y-2">
                {topLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-white/80 text-sm hover:bg-[#001f5c] px-4 rounded-lg
                      transition-all duration-300 hover:translate-x-2 transform active:scale-95"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 