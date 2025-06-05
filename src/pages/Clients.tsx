import React from 'react';
import { Users, Star, ArrowRight } from 'lucide-react';
import GodrejLogo from '/assets/Godrej-logo.png';
import ShilpaLogo from '/assets/ShilpaBiological.jpeg';
import BioGenTechLogo from '/assets/BioGenTechLogo.jpeg';
import PharmaCorpLogo from '/assets/PharmaCorpLogo.png';
 

const Clients = () => {
  // Sample client logos (using text placeholders for demo)
  const clients = [
    { id: 1, name: "PharmaCorp", logo: PharmaCorpLogo },
    { id: 2, name: "BioGenTech", logo: BioGenTechLogo },
    { id: 3, name: "ShilpaBiological", logo: ShilpaLogo },
    { id: 4, name: "VaccineTech" ,logo: GodrejLogo},
    { id: 5, name: "HealthLabs" ,logo: GodrejLogo},
    { id: 6, name: "Godrej Industries", logo: GodrejLogo },
    { id: 7, name: "PharmaPro" ,logo: GodrejLogo},
    { id: 8, name: "BioTech Systems" ,logo: GodrejLogo},
    { id: 9, name: "MedicalManufacturing" ,logo: GodrejLogo},
    { id: 10, name: "SterileScience" ,logo: GodrejLogo},
    { id: 11, name: "GlobalPharma" ,logo: GodrejLogo},
    { id: 12, name: "LifeSciences" ,logo: GodrejLogo},
  ];
  
  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Neomech delivered our sterile manufacturing facility on time and within budget. Their expertise in aseptic processing technology has significantly improved our production efficiency and product quality.",
      author: "Jane Smith",
      position: "Director of Manufacturing, PharmaCorp",
      rating: 5
    },
    {
      id: 2,
      quote: "The automation solutions provided by Neomech have transformed our manufacturing operations. We've seen a 30% increase in productivity and a substantial reduction in process deviations.",
      author: "Michael Johnson",
      position: "Head of Operations, BioGenTech",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with Neomech on our facility expansion was a seamless experience. Their detailed 3D modeling capabilities allowed us to visualize the final result and make important design decisions early in the process.",
      author: "Robert Chen",
      position: "Project Manager, MediSolutions",
      rating: 4
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-700">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Our Clients"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Clients</h1>
            <p className="text-xl text-blue-100">
              We are proud to serve leading pharmaceutical, biotechnology, and healthcare companies 
              with our innovative process solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">
              We've partnered with a diverse range of companies across the pharmaceutical and 
              biotechnology sectors to deliver exceptional process solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-center">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-24 h-24 object-contain mb-3"
                    />
                  ) : (
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full mb-3">
                      <Users className="w-12 h-12 text-blue-700" />
                    </div>
                  )}
                  <p className="font-semibold text-gray-900">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Feedback from our valued clients about their experience working with Neomech.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Key statistics that demonstrate our contribution to the pharmaceutical industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Client Satisfaction Rate" },
              { value: "100+", label: "Projects Completed" },
              { value: "30+", label: "Countries Served" },
              { value: "15+", label: "Years of Experience" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-blue-50 rounded-lg"
              >
                <p className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
              <p className="text-lg text-gray-700 mb-6">
                We serve pharmaceutical and biotechnology companies worldwide, with particular focus in the following regions:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Asia Pacific",
                  "North America",
                  "Europe",
                  "Middle East",
                  "South America",
                  "Africa"
                ].map((region, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-blue-700 rounded-full mr-2"></span>
                    <span className="text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700">
                Our international experience allows us to adapt to diverse regulatory environments and 
                cultural contexts while maintaining consistent quality and service standards.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Global Presence" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Client CTA */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Growing List of Satisfied Clients
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss how our solutions can address your specific pharmaceutical manufacturing challenges.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;