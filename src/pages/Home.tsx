import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Globe, PenTool as Tool, Database, Cpu } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Neomech - Neomech Process Solutions
            </h2>
            <p className="text-lg text-gray-600">
              A leading provider of pharmaceutical process solutions, specializing in
              aseptic processing, sterile manufacturing, and advanced high-performance equipment
              for the pharmaceutical, biotechnology, and healthcare industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8350078/pexels-photo-8350078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Pharmaceutical Manufacturing" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Driven by Innovation, Quality, and Compliance
              </h3>
              <p className="text-gray-600 mb-6">
                We deliver state-of-the-art technology that enhances efficiency, sterility, and adherence to
                global manufacturing standards, ensuring excellence in every step of the production process.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Aseptic Processing & Sterile Manufacturing",
                  "Sterilization & Decontamination",
                  "Process & Utility Systems",
                  "Automation & Digital Integration",
                  "Customized Engineering & Turnkey Solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                  Learn more about us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600">
              At Neomech, we understand the critical need for precision, sterility, and efficiency in
              pharmaceutical manufacturing. Our expertise spans across various critical areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Tool className="w-8 h-8 text-blue-600" />,
                title: "Aseptic Processing",
                description: "Advanced vial, ampoule, and syringe filling systems, ensuring contamination-free production."
              },
              {
                icon: <Database className="w-8 h-8 text-blue-600" />,
                title: "Sterilization & Decontamination",
                description: "Industry-leading autoclaves, dry heat sterilizers, and hydrogen peroxide systems."
              },
              {
                icon: <Cpu className="w-8 h-8 text-blue-600" />,
                title: "Automation & Digital Integration",
                description: "Smart manufacturing solutions with Industry 4.0, IoT-enabled monitoring, and AI-driven quality control."
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Global Reach with Local Expertise",
                description: "Serving pharmaceutical companies, biotech firms, and healthcare manufacturers worldwide."
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Regulatory Excellence",
                description: "Compliance with GMP, USFDA, EU-GMP, WHO, ISPE, and other global standards."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "End-to-End Solutions",
                description: "From conceptualization to commissioning, we provide complete project execution and support."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Our solutions are tailored to meet the specific needs of various segments within the pharmaceutical,
              biotechnology, and healthcare sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Bio-pharma",
                items: ["Cell Culture / Microbial", "Bio-Enzymes", "mAbs / Biotherapeutics", "Blood Plasma, Biosimilars"]
              },
              {
                image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Sterile Formulations",
                items: ["Solutions, Suspensions, Emulsions", "Gels for injection", "Implants", "External applications"]
              },
              {
                image: "https://images.pexels.com/photos/8942528/pexels-photo-8942528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Vaccines",
                items: ["Viral - Bacterial", "Human - Veterinary"]
              },
              {
                image: "https://images.pexels.com/photos/8941701/pexels-photo-8941701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "MDI (Metered Dosage Inhaler)",
                items: ["Dry powdered inhaler", "Pressurized metered dose inhalers", "Nebulizers"]
              },
              {
                image: "https://images.pexels.com/photos/8943223/pexels-photo-8943223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Parenteral",
                items: ["Oncology", "General Injectables", "Complex Injectables", "Liposomes / Microspheres", "Hormonal"]
              },
              {
                image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "API-Bulk Drug",
                items: ["Single Fluid Heating & Cooling", "Distillation System", "Extraction Systems", "Evaporation Systems"]
              }
            ].map((industry, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <ul className="space-y-2">
                    {industry.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/industries" className="inline-flex items-center justify-center px-6 py-3 border border-blue-700 text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors duration-300">
              Explore Industries
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Pharmaceutical Manufacturing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your specific requirements and discover how our solutions can help you achieve excellence.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-300">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;