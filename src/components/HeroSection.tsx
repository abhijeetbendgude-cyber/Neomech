import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "assets/Home0.jpeg",
      title:"Aseptic Processing & Sterile Manufacturing",
      description:"Advanced vial, ampoule, and syringe filling systems, ensuring contamination-free production"

    },
    {
      image: "assets/Home1.jpeg",
      title: "Turnkey Process Solutions for Pharmaceutical Industries",
      description: "Advanced sterile manufacturing technologies and equipment solutions that ensure precision, compliance, and efficiency."
    },
    {
      image: "assets/Home2.jpeg",
      title: "Cutting-Edge Aseptic Processing Equipment",
      description: "State-of-the-art vial, ampoule, and syringe filling systems ensuring contamination-free production."
    },
    {
      image: "assets/Home3.jpeg",
      title: "End-to-End Turnkey Solutions",
      description: "From conceptualization to commissioning, we provide complete project execution and support for pharmaceutical facilities."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
            currentSlide === index ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

          <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
            <div className="max-w-4xl text-center backdrop-blur-md bg-white/10 p-6 md:p-10 rounded-xl shadow-lg text-white animate-fadeInUp">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slideInDown">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6 animate-slideInUp">{slide.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md flex items-center transition-transform hover:scale-105"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 border border-white hover:bg-white hover:text-blue-700 transition-colors rounded-md font-medium"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-40 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 mx-1 ${
              currentSlide === index
                ? 'w-8 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
