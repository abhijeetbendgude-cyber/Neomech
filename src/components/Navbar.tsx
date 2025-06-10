import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const topLinks = [
    { name: 'Blogs', path: '/blogs' },
    { name: 'R&D', path: '/rnd' },
    { name: 'CSR', path: '/csr' },
    { name: 'Events', path: '/events' },
    { name: 'Media', path: '/media' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      {/* Top White Bar */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-white text-black text-sm border-b z-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 flex justify-end flex-wrap gap-x-6 w-full">
          {topLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:underline hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Blue Navbar */}
      <header className="fixed top-10 left-0 right-0 z-40 bg-blue-900 shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-2xl">Neomech</Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium text-white transition duration-300 ${
                    location.pathname === link.path
                      ? 'border-b-2 border-white'
                      : 'hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t">
              <div className="flex flex-col px-4 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 text-sm font-medium text-black ${
                      location.pathname === link.path
                        ? 'border-b-2 border-blue-700'
                        : 'hover:text-blue-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Push page content down by height of both bars (10 + ~56 px) */}
      <div className="h-[30px]" />
    </>
  );
};

export default Navbar;







