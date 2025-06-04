import React from 'react';
import { CheckCircle } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: "biopharma",
      title: "Bio-pharma",
      image: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "We provide advanced solutions for biopharmaceutical manufacturing, supporting the production of biologics, vaccines, and other biologically derived medicines.",
      items: [
        "Cell Culture / Microbial",
        "Bio-Enzymes",
        "mAbs / Biotherapeutics",
        "Blood Plasma, Biosimilars",
        "Nutraceuticals",
        "Pro-biotics"
      ]
    },
    {
      id: "sterile",
      title: "Sterile Formulations",
      image: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Our sterile formulation solutions ensure the highest levels of quality and safety for products that require aseptic processing and sterile manufacturing.",
      items: [
        "Solutions, Suspensions, Emulsions",
        "Gels for injection",
        "Implants",
        "External applications",
        "Parenteral preparations",
        "Ophthalmic, Nasal, Otic preparations"
      ]
    },
    {
      id: "vaccines",
      title: "Vaccines",
      image: "https://images.pexels.com/photos/8942528/pexels-photo-8942528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "We support vaccine manufacturers with specialized equipment and systems designed to meet the unique requirements of vaccine production, from research scale to commercial manufacturing.",
      items: [
        "Viral vaccines",
        "Bacterial vaccines",
        "Human vaccines",
        "Veterinary vaccines",
        "Vaccine fill-finish operations",
        "Cold chain management systems"
      ]
    },
    {
      id: "mdi",
      title: "MDI (Metered Dosage Inhaler)",
      image: "https://images.pexels.com/photos/8941701/pexels-photo-8941701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Our solutions for inhalation drug delivery systems focus on precision, consistency, and compliance with regulatory requirements for respiratory medications.",
      items: [
        "Dry powdered inhaler (DPI) manufacturing",
        "Pressurized metered dose inhalers (pMDI)",
        "Nebulizers",
        "Filling and assembly systems",
        "Testing and quality control equipment",
        "Packaging solutions for inhalation products"
      ]
    },
    {
      id: "parenteral",
      title: "Parenteral – Oncology / General Injectables",
      image: "https://images.pexels.com/photos/8943223/pexels-photo-8943223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "We provide specialized solutions for parenteral manufacturing, with particular expertise in oncology and other complex injectable products that require advanced containment and safety features.",
      items: [
        "Oncology injectables",
        "General injectables",
        "Complex injectables - Liposomes / Microspheres",
        "Hormonal products",
        "LVP (Large Volume Parenterals)",
        "High-potency API handling systems",
        "Containment solutions for cytotoxic products"
      ]
    },
    {
      id: "api",
      title: "API-Bulk Drug",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Our API and bulk drug manufacturing solutions focus on process efficiency, quality control, and regulatory compliance for active pharmaceutical ingredient production.",
      items: [
        "Single Fluid Heating & Cooling Systems",
        "Distillation Systems",
        "Extraction Systems",
        "Evaporation Systems",
        "Solvent Dehydration Systems",
        "Reaction vessels and reactors",
        "Filtration and purification systems",
        "Drying equipment (vacuum, freeze, spray)"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-700">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3735805/pexels-photo-3735805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Industries We Serve"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100">
              Our specialized solutions address the unique needs of diverse segments within the pharmaceutical,
              biotechnology, and healthcare sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-gray-600">
              We provide specialized solutions for a wide range of pharmaceutical and biotechnology applications,
              with expertise in both conventional and innovative manufacturing processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <a 
                    href={`#${industry.id}`} 
                    className="text-blue-700 hover:text-blue-800 font-medium text-sm"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section key={industry.id} id={industry.id} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{industry.title}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {industry.description}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solutions Include:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {industry.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Industry Challenges & Solutions */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Industry Challenges & Our Solutions</h2>
            <p className="text-lg text-blue-100">
              We understand the unique challenges faced by pharmaceutical and biotechnology manufacturers 
              and provide tailored solutions to address them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                challenge: "Maintaining sterility and preventing contamination",
                solution: "Advanced isolator technology, RABS systems, and aseptic processing solutions with validated decontamination processes."
              },
              {
                challenge: "Ensuring regulatory compliance (FDA, EMA, WHO)",
                solution: "GMP-compliant equipment design, comprehensive validation documentation, and regulatory expertise to support approvals."
              },
              {
                challenge: "Scaling up from development to commercial production",
                solution: "Flexible, scalable equipment designs and process engineering expertise to ensure smooth technology transfer."
              },
              {
                challenge: "Handling high-potency or cytotoxic compounds",
                solution: "Specialized containment solutions, closed systems, and safety features to protect operators and products."
              },
              {
                challenge: "Reducing manufacturing costs while maintaining quality",
                solution: "Efficient process designs, automation solutions, and preventive maintenance programs to optimize operational costs."
              },
              {
                challenge: "Implementing complex processes for novel therapies",
                solution: "Custom-engineered solutions for specialized manufacturing needs, including cell and gene therapies, biologics, and complex formulations."
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Challenge:</h3>
                <p className="mb-4 text-blue-100">{item.challenge}</p>
                <h3 className="text-xl font-bold mb-2">Our Solution:</h3>
                <p className="text-blue-100">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;