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
    ]
  },
  {
    title: "Process Technology",
    items: [
      { name: "Distillation Technology", path: "/technology/distillation" },
    ]
  },
  {
    title: "Mass Transfer",
    items: [
      { name: "Structured Packings", path: "/mass-transfer/structured-packings" },
    ]
  },
  {
    title: "Membrane Technology",
    items: [
      { name: "ZLD-Membrane Distillation", path: "/membrane/zld-membrane-distillation" },
    ]
  }
];

const VerticalsDropdown: FC<VerticalsDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[90px] left-[2%] right-0  z-50">
      {/* Semi-transparent overlay to close */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dropdown Container */}
      <div className="relative w-[95vw] h-[60vh]">
        <div 
          className="w-full h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('public/assets/Home1.jpeg')`,
          }}
        >
          {/* Light overlay on background image */}
          <div className="absolute inset-0 bg-blue-950/90 z-0" />

          {/* Main content over image */}
          <div className="relative z-10 container mx-auto p-4 md:p-6 lg:p-8 py-10">
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

            {/* Contact Icon (Optional Placeholder) */}
            <div className="fixed bottom-8 left-8">
              <button 
                className="bg-blue-500/20 hover:bg-blue-500/30 transition-colors duration-300 
                  rounded-full p-3 group"
              >
                {/* Icon goes here */}
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/90 hover:text-white 
              transition-all duration-300 hover:rotate-90 transform p-2 z-20"
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

export default VerticalsDropdown;
