import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VerticalsDropdown from './VerticalsDropdown';
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMainMenuOpen(false);
        setIsTopMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const topLinks = [
    { name: 'Blogs', to: '/blogs' },
    { name: 'Contact', to: '/contact' },
    { name: 'R&D', to: '/rd' },
    { name: 'CSR', to: '/csr' },
    { name: 'Events', to: '/events' },
    { name: 'Media', to: '/media' },
    { name: 'Careers', to: '/careers' },
  ];

  const mainLinks = [
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Services', to: '/services', component: ServicesDropdown },
    // { name: 'Innovations', to: '/innovations' },
    { name: 'Connect', to: '/contact' },
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className={`hidden md:block w-full bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden md:h-[40px]' : 'h-0 md:h-[40px]'}`}>
  <div className="container mx-auto px-4 lg:px-8">
    <div className="flex justify-end items-center h-full gap-4 overflow-x-auto hide-scrollbar">
      {topLinks.map((link, index) => (
        <div key={link.name} className="flex items-center shrink-0">
          <Link
            to={link.to}
            className="text-[13px] text-[#1a4789] hover:text-[#003087] whitespace-nowrap transition-all duration-200 hover:scale-105 transform"
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


      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 
  ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''} 
  bg-white text-black lg:bg-gradient-to-r lg:from-[#003087] lg:to-[#002674] lg:text-white`}>

        <div className="flex items-center justify-between h-[60px] lg:h-[70px]">
          {/* Desktop Logo */}
          <div className="relative h-full w-[200px] lg:w-[280px] hidden lg:flex">
            <div
              className="absolute inset-0 bg-white transform transition-transform duration-300 hover:scale-105"
              style={{
                clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)',
              }}
            ></div>
            <div className="relative h-full flex items-center justify-center px-4 lg:px-8">
              <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                <img
                  src="assets/logo.png"
                  alt="ChemDist"
                  className="h-[40px] lg:h-[52px] w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-end h-full">
                <div className="hidden lg:flex items-center h-full">
                  <div
                    className="h-full flex items-center relative group"
                    onMouseEnter={() => setIsVerticalsOpen(true)}
                    onMouseLeave={() => setIsVerticalsOpen(false)}
                  >
                    <button className="h-full flex items-center px-6 text-white text-[15px] font-medium hover:bg-[#001f5c] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      Verticals
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <VerticalsDropdown isOpen={isVerticalsOpen} onClose={() => setIsVerticalsOpen(false)} />
                  </div>

                  {mainLinks.map((link, index) =>
                    link.component ? (
                      <div key={index} className="relative">
                        <link.component />
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={link.to}
                        className="h-full flex items-center px-6 text-white text-[15px] font-medium hover:bg-[#001f5c] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="flex items-center justify-between w-full px-4 h-[60px]  lg:hidden">
                  <button
                    onClick={() => {
                      setIsMainMenuOpen(!isMainMenuOpen);
                      if (isTopMenuOpen) setIsTopMenuOpen(false);
                    }}
                    className="text-black p-2"
                    aria-label="Toggle main menu"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isMainMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>

                  <div className="flex-1 flex justify-center">
                    <Link to="/" className="flex items-center">
                      <img src="assets/logo.png" alt="ChemDist" className="h-[36px] w-auto" />
                    </Link>
                  </div>

                  <button
                    onClick={() => {
                      setIsTopMenuOpen(!isTopMenuOpen);
                      if (isMainMenuOpen) setIsMainMenuOpen(false);
                    }}
                    className="text-black p-2"
                    aria-label="Toggle top menu"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isTopMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMainMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-2 pb-20">
            <div className="border-b border-gray-200 pb-2 mb-4">
              <button
                onClick={() => setIsVerticalsOpen(!isVerticalsOpen)}
                className="w-full flex justify-between items-center py-3 text-black text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-all duration-300"
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
              {isVerticalsOpen && (
                <div className="mt-2 px-6 space-y-2">
                  <Link to="/equipments/distillation-columns" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">Distillation Columns</Link>
                  <Link to="/technology/distillation" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">Distillation Technology</Link>
                  <Link to="/mass-transfer/structured-packings" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">Structured Packings</Link>
                  <Link to="/membrane/zld-membrane-distillation" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">ZLD-Membrane Distillation</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown in Mobile */}
            <div className="border-b border-gray-200 pb-2 mb-4">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center py-3 text-black text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-all duration-300"
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-2 px-6 space-y-2">
                  <Link to="/StructuralFabrication" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">StructuralFabrication</Link>
                  <Link to="/EquipmentErection" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">EquipmentErection</Link>
                  <Link to="/Fabrication&Erection" onClick={() => setIsMainMenuOpen(false)} className="block text-black hover:text-gray-600 transition-all">Fabrication&Erection</Link>
                </div>
              )}
            </div>

            {mainLinks.filter(link => link.name !== 'Services').map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMainMenuOpen(false)}
                className="block py-3 text-black text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-all duration-300 hover:translate-x-2 transform active:scale-95"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isTopMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40">
          <div className="container mx-auto px-4 py-6 space-y-2 overflow-y-auto h-full pb-20">
            {topLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsTopMenuOpen(false)}
                className="block py-2 text-black text-sm hover:bg-gray-100 px-4 rounded-lg transition-all duration-300 hover:translate-x-2 transform active:scale-95"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;