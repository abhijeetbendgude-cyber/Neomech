import { FC } from 'react';
import { Link } from 'react-router-dom';

interface VerticalsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VerticalSection {
  title: string;
  items: Array<{
    name: string;
    path: string;
  }>;
}

const verticalSections: VerticalSection[] = [
  {
    title: "Process Equipments",
    items: [
      { name: "Distillation Columns", path: "/equipments/distillation-columns" },
      { name: "HiTurb Heat Exchanger", path: "/equipments/hiturb-heat-exchanger" },
      { name: "Condenser", path: "/equipments/condenser" },
      { name: "CD-Smart Mixer", path: "/equipments/cd-smart-mixer" },
      { name: "Reboiler", path: "/equipments/reboiler" },
      { name: "Reactors & Agitators", path: "/equipments/reactors-agitators" },
      { name: "Pressure Vessel", path: "/equipments/pressure-vessel" },
      { name: "Static Mixers", path: "/equipments/static-mixers" },
      { name: "Thin Film Evaporator", path: "/equipments/thin-film-evaporator" },
      { name: "Wiped Film Evaporator", path: "/equipments/wiped-film-evaporator" },
      { name: "Falling Film Evaporator", path: "/equipments/falling-film-evaporator" },
      { name: "Forced Circulation Evaporator", path: "/equipments/forced-circulation-evaporator" },
      { name: "Strippers", path: "/equipments/strippers" },
      { name: "Scrubbers", path: "/equipments/scrubbers" },
      { name: "Skids", path: "/equipments/skids" }
    ]
  },
  {
    title: "Process Technology",
    items: [
      { name: "Distillation Technology", path: "/technology/distillation" },
      { name: "Heat Transfer Technology", path: "/technology/heat-transfer" },
      { name: "Evaporation Technology", path: "/technology/evaporation" },
      { name: "Reaction & Mixing Technology", path: "/technology/reaction-mixing" },
      { name: "Liq-Liq Extraction Technology", path: "/technology/liq-liq-extraction" },
      { name: "Chemical Process Technology", path: "/technology/chemical-process" },
      { name: "Oil & Gas Technology", path: "/technology/oil-gas" },
      { name: "Environmental Technology", path: "/technology/environmental" },
      { name: "Micro Reactor - Continuous Flow", path: "/technology/micro-reactor" },
      { name: "Synthesis Technology", path: "/technology/synthesis" }
    ]
  },
  {
    title: "Mass Transfer",
    items: [
      { name: "Structured Packings", path: "/mass-transfer/structured-packings" },
      { name: "Random Packings", path: "/mass-transfer/random-packings" },
      { name: "Trays", path: "/mass-transfer/trays" },
      { name: "Liquid Distributor", path: "/mass-transfer/liquid-distributor" },
      { name: "Liquid Collector", path: "/mass-transfer/liquid-collector" },
      { name: "Packing Support", path: "/mass-transfer/packing-support" }
    ]
  },
  {
    title: "Membrane Technology",
    items: [
      { name: "ZLD-Membrane Distillation", path: "/membrane/zld-membrane-distillation" },
      { name: "Membrane Pervaporation", path: "/membrane/pervaporation" },
      { name: "Ultrafiltration Membrane", path: "/membrane/ultrafiltration" },
      { name: "Membrane Decanter", path: "/membrane/decanter" }
    ]
  },
  {
    title: "Green Technology",
    items: [
      { name: "Green Hydrogen Processes", path: "/green/hydrogen-processes" },
      { name: "Green Energy", path: "/green/energy" },
      { name: "Green Plastic", path: "/green/plastic" },
      { name: "Sustainable Aviation Fuel", path: "/green/aviation-fuel" },
      { name: "Green Chemistry", path: "/green/chemistry" },
      { name: "Carbon Capture", path: "/green/carbon-capture" }
    ]
  }
];

const VerticalsDropdown: FC<VerticalsDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#001845]/95 to-[#002674]/95"
        onClick={onClose}
      />
      
      {/* Dropdown Container */}
      <div className="relative w-full h-full">
        <div 
          className="w-full min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('/background-pattern.jpg')`
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
              {verticalSections.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h3 className="text-white font-bold text-xl lg:text-2xl border-b-2 border-blue-400/30 pb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className="block text-white/80 hover:text-white hover:translate-x-2 
                            transition-all duration-300 text-base lg:text-lg font-medium"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Center Logo */}
            <div className="relative mt-16 flex justify-center items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <img
                  src="/process-solutions-circle.png"
                  alt="Process Solutions"
                  className="w-full h-full object-contain animate-pulse-slow"
                />
              </div>
            </div>

            {/* Contact Icon */}
            <div className="fixed bottom-8 left-8">
              <button 
                className="bg-blue-500/20 hover:bg-blue-500/30 transition-colors duration-300 
                  rounded-full p-3 group"
              >
                <img
                  src="/mail-icon.png"
                  alt="Contact"
                  className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
                />
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/90 hover:text-white 
              transition-all duration-300 hover:rotate-90 transform p-2"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Add this at the end of your CSS or in your Tailwind config
const customStyles = `
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export default VerticalsDropdown; 