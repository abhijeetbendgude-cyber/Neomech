import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Globe,
  PenTool as Tool,
  Database,
  Cpu
} from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />

      {/* Workflow Section */}
      <section className="py-16 bg-gradient-to-r from-blue-200 to-blue-400">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      World Solutions Through Science, Engineering and Technology
    </h2>

    <div className="flex flex-wrap justify-center items-center gap-8">
      {[
        {
          label: 'R&D',
          img: 'https://www.chemdistgroup.com/images/home/R&D-01.svg'
        },
        {
          label: 'Design',
          img: 'https://www.chemdistgroup.com/images/home/R&D-02.svg'
        },
        {
          label: 'Engineering',
          img: 'https://www.chemdistgroup.com/images/home/R&D-03.svg'
        },
        {
          label: 'Supply',
          img: 'https://www.chemdistgroup.com/images/home/R&D-04.svg'
        },
        {
          label: 'Commissioning',
          img: 'https://www.chemdistgroup.com/images/home/R&D-05.svg'
        }
      ].map((step, index, arr) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center space-y-3 bg-white rounded-2xl shadow-md p-6 transition hover:scale-105 duration-300">
            <img
              src={step.img}
              alt={step.label}
              className="w-40 h-40 object-contain"
              loading="lazy"
            />
            
          </div>
          {index !== arr.length - 1 && (
            <div className="mx-4 text-blue-400 text-3xl font-bold">→</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>



      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Neomech - Neomech Process Solutions
            </h2>
            <p className="text-lg text-gray-600">
              A leading provider of pharmaceutical process solutions, specializing in aseptic processing, sterile manufacturing, and advanced high-performance equipment for the pharmaceutical, biotechnology, and healthcare industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2422913545/display_1500/stock-photo-advanced-bright-modern-pharmaceutical-factory-medical-ampoule-production-line-rows-of-glass-vials-2422913545.jpg"
                alt="Pharmaceutical Manufacturing"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Driven by Innovation, Quality, and Compliance
              </h3>
              <p className="text-gray-600 mb-6">
                We deliver state-of-the-art technology that enhances efficiency, sterility, and adherence to global manufacturing standards, ensuring excellence in every step of the production process.
              </p>

              <ul className="space-y-4">
                {[
                  'Aseptic Processing & Sterile Manufacturing',
                  'Sterilization & Decontamination',
                  'Process & Utility Systems',
                  'Automation & Digital Integration',
                  'Customized Engineering & Turnkey Solutions'
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
                title: 'Aseptic Processing',
                description:
                  'Advanced vial, ampoule, and syringe filling systems, ensuring contamination-free production.'
              },
              {
                icon: <Database className="w-8 h-8 text-blue-600" />,
                title: 'Sterilization & Decontamination',
                description:
                  'Industry-leading autoclaves, dry heat sterilizers, and hydrogen peroxide systems.'
              },
              {
                icon: <Cpu className="w-8 h-8 text-blue-600" />,
                title: 'Automation & Digital Integration',
                description:
                  'Smart manufacturing solutions with Industry 4.0, IoT-enabled monitoring, and AI-driven quality control.'
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: 'Global Reach with Local Expertise',
                description:
                  'Serving pharmaceutical companies, biotech firms, and healthcare manufacturers worldwide.'
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: 'Regulatory Excellence',
                description:
                  'Compliance with GMP, USFDA, EU-GMP, WHO, ISPE, and other global standards.'
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'End-to-End Solutions',
                description:
                  'From conceptualization to commissioning, we provide complete project execution and support.'
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

      {/* ...Industries Section & CTA remain unchanged... */}
    </div>
  );
};

export default Home;
