import React from 'react';
import { CheckCircle, Users, Award, Clipboard, Target, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-700">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Neomech"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Neomech</h1>
            <p className="text-xl text-blue-100">
              A leading provider of pharmaceutical process solutions, specializing in 
              aseptic processing, sterile manufacturing, and advanced high-performance 
              equipment for the pharmaceutical, biotechnology, and healthcare industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
            <p className="text-lg text-gray-700 mb-6">
              Neomech (Neomech) is a leading provider of pharmaceutical process solutions, specializing in 
              aseptic processing, sterile manufacturing, and advanced high-performance equipment for the 
              pharmaceutical, biotechnology, and healthcare industries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Driven by a commitment to innovation, quality, and regulatory compliance, we deliver 
              state-of-the-art technology that enhances efficiency, sterility, and adherence to global 
              manufacturing standards, ensuring excellence in every step of the production process.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Target className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide cutting-edge pharmaceutical process solutions that empower our clients to 
                manufacture life-saving medications with the highest standards of quality, efficiency, and safety. 
                We are committed to pushing the boundaries of innovation while ensuring regulatory compliance 
                and sterility assurance in every project we undertake.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in pharmaceutical process technology, recognized for 
                excellence in sterile manufacturing solutions. We envision a future where our 
                innovations contribute significantly to the advancement of healthcare by enabling 
                the production of safer, more effective, and more accessible medications worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600">
              At Neomech, we understand the critical need for precision, sterility, and efficiency 
              in pharmaceutical manufacturing. Our expertise spans across:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Aseptic Processing & Sterile Manufacturing",
                description: "Advanced vial, ampoule, and syringe filling systems, ensuring contamination-free production."
              },
              {
                title: "Sterilization & Decontamination",
                description: "Industry-leading autoclaves, dry heat sterilizers, and hydrogen peroxide systems for uncompromised sterility assurance."
              },
              {
                title: "Process & Utility Systems",
                description: "Water for Injection (WFI), clean steam, and CIP/SIP solutions that maintain the highest purity standards."
              },
              {
                title: "Automation & Digital Integration",
                description: "Smart manufacturing solutions with Industry 4.0, IoT-enabled monitoring, and AI-driven quality control."
              },
              {
                title: "Customized Engineering & Turnkey Solutions",
                description: "Comprehensive facility design, installation, validation, and regulatory support tailored to client needs."
              },
              {
                title: "End-to-End Solutions",
                description: "From conceptualization to commissioning, we provide complete project execution and support."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Neomech?</h2>
            <p className="text-lg text-blue-100">
              Our commitment to excellence sets us apart in the pharmaceutical process solutions industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-200" />,
                title: "Regulatory Excellence",
                description: "Compliance with GMP, USFDA, EU-GMP, WHO, ISPE, and other global standards."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-200" />,
                title: "Cutting-Edge Innovation",
                description: "Continuous investment in R&D to develop next-generation sterile manufacturing technologies."
              },
              {
                icon: <Clipboard className="w-12 h-12 text-blue-200" />,
                title: "End-to-End Solutions",
                description: "From conceptualization to commissioning, we provide complete project execution and support."
              },
              {
                icon: <Users className="w-12 h-12 text-blue-200" />,
                title: "Expert Team",
                description: "Highly qualified engineers and specialists with decades of industry experience."
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-200" />,
                title: "Global Reach with Local Expertise",
                description: "Serving pharmaceutical companies, biotech firms, and healthcare manufacturers worldwide."
              },
              {
                icon: <Target className="w-12 h-12 text-blue-200" />,
                title: "Quality Focus",
                description: "Rigorous quality control processes ensuring superior products and services."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-blue-800 hover:bg-blue-900 transition-colors duration-300">
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experienced professionals who lead our company to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "John Smith",
                position: "Chief Executive Officer",
                description: "Over 25 years of experience in pharmaceutical engineering and leadership."
              },
              {
                image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "Sarah Johnson",
                position: "Chief Technical Officer",
                description: "Expert in aseptic processing technologies with a Ph.D. in Biomedical Engineering."
              },
              {
                image: "https://images.pexels.com/photos/5668897/pexels-photo-5668897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "Michael Chen",
                position: "Director of Operations",
                description: "Specialized in sterile manufacturing systems and regulatory compliance."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-700 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;