import { ArrowRight } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    {
      number: 1,
      title: "Conceptual & General Assembly (GA) Design",
      items: [
        "Dimensional specifications",
        "Equipment layout and process flow",
        "Surface finish quality (Ra values)",
        "Bill of Materials (BOM)"
      ]
    },
    {
      number: 2,
      title: "3D Modeling & Detailed Engineering",
      items: [
        "3D modeling for accurate visualization and system integration",
        "Seamless integration of mechanical, electrical, and automation components",
        "Interference checks and simulations for performance optimization"
      ]
    },
    {
      number: 3,
      title: "Manufacturing & Fabrication",
      items: [
        "High-precision fabrication of components and assemblies as per 3D models",
        "Compliance with material specifications, welding standards, and surface treatment requirements",
        "Stringent quality control at every stage of manufacturing"
      ]
    },
    {
      number: 4,
      title: "Assembly & Pre-FAT",
      items: [
        "Assembling the system and conducting internal quality checks",
        "Performing Pre-FAT (Factory Acceptance Testing) to verify functionality",
        "Ensuring alignment with P&ID, GA drawings, and 3D models"
      ]
    },
    {
      number: 5,
      title: "Factory Acceptance Test (FAT) & Validation",
      items: [
        "Performance validation",
        "Leakage and pressure testing",
        "Automation and control system verification",
        "Documentation and compliance review"
      ]
    },
    {
      number: 6,
      title: "Installation & Commissioning",
      items: [
        "On-site installation with expert supervision",
        "Integration with utilities and automation systems",
        "Conducting Site Acceptance Test (SAT) to confirm system performance",
        "DQ, IQ, OQ, PQ documentation and execution"
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-blue-700 text-white py-3 px-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-lg mr-3">
                  {step.number}
                </div>
                <h3 className="font-bold">{step.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-center items-center mt-8">
        <div className="w-full max-w-5xl relative py-12">
          {/* Line connecting all steps */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2"></div>
          
          {/* Process steps */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg z-10">
                  {step.number}
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-sm font-semibold text-gray-900">{step.title.split(' ')[0]}</h4>
                </div>
                
                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 left-[calc(100%+1rem)] transform -translate-y-1/2 -translate-x-1/2">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;