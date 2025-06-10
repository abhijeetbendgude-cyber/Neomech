import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { label: 'Structural Fabrication', path: '/StructuralFabrication' },
  { label: 'Equipment Erection', path: '/EquipmentErection' },
  { label: 'Fabrication & Erection', path: '/PipelineFabrication' },
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="hidden md:flex items-center justify-between px-4 py-2 text-sm font-medium text-white hover:bg-[#001f5c] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white hover:shadow-lg"
      >
        Services
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg z-20">
          <div className="py-1">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#001f5c] hover:text-white border-b border-gray-200 last:border-b-0"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
