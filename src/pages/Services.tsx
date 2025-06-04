import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ProcessFlow from '../components/ProcessFlow';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-700">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Our Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services & Solutions</h1>
            <p className="text-xl text-blue-100">
              Comprehensive pharmaceutical process solutions designed to meet the highest industry standards 
              for sterility, quality, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Comprehensive Pharmaceutical Solutions</h2>
            <p className="text-lg text-gray-700 text-center">
              We provide end-to-end services for pharmaceutical manufacturing, from concept to commissioning, 
              ensuring regulatory compliance and operational excellence.
            </p>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://www.news-medical.net/image-handler/ts/20240508064833/ri/750/src/images/Article_Images/ImageForArticle_24825_17151653074279867.jpg" 
                  alt="Aseptic Processing & Sterile Manufacturing" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aseptic Processing & Sterile Manufacturing</h3>
                <p className="text-gray-700 mb-6">
                  Our advanced aseptic processing solutions ensure contamination-free production for critical 
                  pharmaceutical products. We design and implement state-of-the-art systems for vials, ampoules, 
                  syringes, and other sterile pharmaceutical containers.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Automatic and semi-automatic filling lines for vials, ampoules, and syringes",
                    "Isolator technology and RABS (Restricted Access Barrier Systems)",
                    "Freeze-drying/lyophilization systems integration",
                    "Robotic handling systems for sterile environments",
                    "Validation and qualification services for aseptic processes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sterilization & Decontamination Systems</h3>
                <p className="text-gray-700 mb-6">
                  We provide comprehensive sterilization and decontamination solutions that ensure the highest 
                  standards of sterility assurance for pharmaceutical manufacturing environments.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Steam sterilizers and autoclaves (GMP compliant)",
                    "Dry heat sterilization and depyrogenation tunnels",
                    "VHP (Vaporized Hydrogen Peroxide) decontamination systems",
                    "Sterilizing grade filtration systems",
                    "Sanitization and bio-decontamination solutions",
                    "Validation and cycle development services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://www.syntegon.com/hs-fs/hubfs/05_website/Content/1-Solutions/1-Pharma/1-Technology-pages/05-Process-Sterillization/process-sterilization-pharmaceutical.jpeg?width=1600&height=1600&name=process-sterilization-pharmaceutical.jpeg" 
                  alt="Sterilization & Decontamination Systems" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/8941687/pexels-photo-8941687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Process & Utility Systems" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Process & Utility Systems</h3>
                <p className="text-gray-700 mb-6">
                  Our process and utility systems are designed to meet the stringent requirements of 
                  pharmaceutical manufacturing, ensuring product quality and regulatory compliance.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "WFI (Water for Injection) generation and distribution systems",
                    "Purified water systems",
                    "Clean steam generation and distribution",
                    "CIP (Clean-in-Place) and SIP (Sterilize-in-Place) systems",
                    "Process tanks and vessels (jacketed, agitated)",
                    "Pharmaceutical-grade piping systems (SS316L, high purity)",
                    "Compressed air and process gas systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation & Digital Integration</h3>
                <p className="text-gray-700 mb-6">
                  Our advanced automation solutions incorporate Industry 4.0 technologies to enhance 
                  productivity, quality, and data integrity in pharmaceutical manufacturing.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "PLC/DCS control systems with SCADA interfaces",
                    "Batch management and electronic batch record systems",
                    "21 CFR Part 11 compliant data management",
                    "PAT (Process Analytical Technology) implementation",
                    "IoT-enabled equipment monitoring and predictive maintenance",
                    "Manufacturing execution systems (MES) integration",
                    "Digital twin modeling and simulation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.pexels.com/photos/8941679/pexels-photo-8941679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Automation & Digital Integration" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/8941703/pexels-photo-8941703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Customized Engineering & Turnkey Solutions" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customized Engineering & Turnkey Solutions</h3>
                <p className="text-gray-700 mb-6">
                  We provide comprehensive engineering services and turnkey solutions tailored to the specific 
                  needs of pharmaceutical manufacturers, from concept to commissioning.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Concept development and feasibility studies",
                    "Detailed engineering and 3D modeling",
                    "Process flow design and optimization",
                    "Equipment selection and procurement",
                    "Installation and commissioning",
                    "Validation services (DQ, IQ, OQ, PQ)",
                    "Regulatory compliance support",
                    "Training and technology transfer"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process Flow</h2>
            <p className="text-lg text-gray-700">
              We follow a systematic approach to project execution, ensuring precision, quality, and timeliness at every stage.
            </p>
          </div>
          
          <ProcessFlow />
        </div>
      </section>

      {/* Smart Automation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Automation</h2>
            <p className="text-lg text-gray-700">
              Our advanced automation solutions incorporate the latest technologies to enhance productivity,
              quality, and data integrity in pharmaceutical manufacturing.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Control Systems</h3>
                <ul className="space-y-3">
                  {[
                    "PLC/PCS/DCS/SCADA driven systems with remote connectivity",
                    "OPC technology for seamless integration",
                    "Real-time data input for MES systems",
                    "Alarm & event notification",
                    "Fully user configurable and upgradeable",
                    "Customized recipes complying to S-88, GAMP-5 & cGMP"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features & Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Graphics based process automation",
                    "Qualification for software design and automation hardware",
                    "Support for demanding research and production environments",
                    "Compatible with major solutions (Siemens, Rockwell, Emerson, etc.)",
                    "Batching systems with eBMR recipe management",
                    "Central platform for historians and batch reporting"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <img 
                src="https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Smart Automation" 
                className="rounded-lg w-full h-auto"
              />
            </div>
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

export default Services;