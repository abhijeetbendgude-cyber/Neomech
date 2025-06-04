import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/8941674/pexels-photo-8941674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Turnkey Process Solutions for Pharmaceutical Industries",
      description: "Advanced sterile manufacturing technologies and equipment solutions that ensure precision, compliance, and efficiency."
    },
    {
      image: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cutting-Edge Aseptic Processing Equipment",
      description: "State-of-the-art vial, ampoule, and syringe filling systems ensuring contamination-free production."
    },
    {
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "End-to-End Turnkey Solutions",
      description: "From conceptualization to commissioning, we provide complete project execution and support for pharmaceutical facilities."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-xl text-white mb-8 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                >
                  {slide.description}
                </p>
                <div 
                  className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
                >
                  <Link
                    to="/contact"
                    className="px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300 flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-700 transition-colors duration-300"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;