import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Neomech Industrial Ventures",
      location: "Maharashtra",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      scope: [
        "Intelligent Design Solutions",
        "Process Flow Diagram (PFD) & Piping & Instrumentation Diagram (P&ID) Development",
        "Quality by Design (QbD) Approach",
        "Advanced 3D Modeling & Visualization",
        "Optimized Plant Equipment Layouts",
        "Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR) Integration",
        "Ergonomic & User-Centric Design"
      ]
    },
    {
      id: 2,
      title: "Godrej Industries",
      location: "Maharashtra",
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      scope: [
        "Customized LEAN & LEED-Compliant Solutions",
        "Flexible & Modular Engineering",
        "Specialized Focus on Pharmaceutical Engineering",
        "Computer Validation (GAMP5)",
        "Systems Compliance (e.g. 21CFR11)",
        "Plant Integration (ISA S95.01 & 02)",
        "Batch Control (S88.01 & 02)"
      ]
    },
    {
      id: 3,
      title: "Pharmaceutical Process Facility",
      location: "Maharashtra",
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      scope: [
        "Interfaces (OPC, B2MML)",
        "Control System Security (ISA S99)",
        "Fieldbuses (IEC 61158)",
        "Advanced 3D Modeling & Visualization",
        "Optimized Plant Equipment Layouts",
        "Specialized Focus on Pharmaceutical Engineering",
        "Computer Validation (GAMP5)"
      ]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Sterile Manufacturing Facility Upgrade",
      challenge: "A leading pharmaceutical company needed to upgrade their existing facility to meet new regulatory requirements while minimizing production downtime.",
      solution: "We implemented a phased approach to facility modification, introducing new isolator technology and upgrading automation systems while maintaining partial production capabilities.",
      results: [
        "50% reduction in expected downtime",
        "100% compliance with new regulatory standards",
        "30% increase in production capacity",
        "Improved product quality metrics"
      ],
      image: "https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Biopharmaceutical Process Optimization",
      challenge: "A biotech firm was experiencing inconsistent yields and quality issues in their cell culture process for a key monoclonal antibody product.",
      solution: "We conducted a comprehensive process analysis and implemented improvements in bioreactor design, control systems, and downstream processing.",
      results: [
        "25% increase in batch-to-batch consistency",
        "35% improvement in overall yield",
        "Reduced production cycle time by 15%",
        "Significant reduction in quality deviations"
      ],
      image: "https://images.pexels.com/photos/8942485/pexels-photo-8942485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Vaccine Manufacturing Facility",
      challenge: "A vaccine manufacturer needed to rapidly establish new production capacity for COVID-19 vaccines while ensuring compliance with international standards.",
      solution: "We delivered a turnkey solution including design, construction, equipment installation, and validation of a new vaccine fill-finish facility within an accelerated timeframe.",
      results: [
        "Facility operational within 10 months (vs. industry average of 18-24 months)",
        "Production capacity of 70 million doses annually",
        "Full compliance with FDA, EMA, and WHO requirements",
        "Flexible design allowing for future product adaptations"
      ],
      image: "https://images.pexels.com/photos/8942528/pexels-photo-8942528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-700">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Our Projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100">
              Explore our portfolio of successful pharmaceutical and biotechnology projects
              that demonstrate our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              A selection of our key projects that showcase our capabilities across various
              pharmaceutical and biotechnology applications.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-700 font-medium mb-4">Location: {project.location}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Scope of Work:</h4>
                    <ul className="space-y-2">
                      {project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-700 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                    View project details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">
              Detailed examinations of specific challenges we've addressed and the innovative solutions we've implemented.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="inline-flex items-center text-blue-700 text-sm font-semibold hover:text-blue-800 transition-colors">
                      Read full case study
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Layout Capability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">In-House 3D Layout Facility</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our advanced 3D visualization and simulation capabilities allow us to optimize facility layouts,
                validate designs, and identify potential issues before construction begins.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of 3D Modeling:</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate visualization of complex manufacturing systems",
                    "Interference detection and clash prevention",
                    "Optimization of space utilization",
                    "Virtual reality walkthroughs for stakeholder reviews",
                    "Improved construction planning and coordination",
                    "Enhanced communication with clients and contractors",
                    "Reduced errors and rework during installation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-700 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="3D Layout Facility" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry CTA */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to discuss your project requirements and discover how our expertise can help you achieve your goals.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;