import { motion } from 'framer-motion';
import { Wrench, Cog, ShieldCheck, CheckCircle, MapPin } from 'lucide-react';

const images = [
  'assets/Home3.jpeg',
  'assets/Home0.jpeg',
  'assets/Home1.jpeg',
  'assets/Home2.jpeg'
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const EquipmentErection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
  className="relative py-24 mt-16 text-white text-center overflow-hidden"
  style={{ perspective: '1px', transformStyle: 'preserve-3d' }}
>
  {/* Background image with parallax effect */}
  <div
    className="absolute inset-0"
    style={{
      transform: 'translateZ(-1px) scale(2)',
      zIndex: 0,
    }}
  >
    <img
      src="assets/Home3.jpeg"
      alt="Equipment Erection"
      className="w-full h-full object-cover opacity-.5"
    />
    <div className="absolute inset-0 bg-gray-900/80" />
  </div>

  {/* Foreground content */}
  <motion.div
    className="container mx-auto px-4 relative z-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Erection Services</h1>
    <p className="text-xl max-w-3xl mx-auto">
      Our company brings vast industry experience in delivering end-to-end Equipment Erection solutions with precision and safety.
    </p>
  </motion.div>
</section>



      {/* Animated Image Gallery */}
      <section className="py-10 bg-white">
  <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {images.map((src, idx) => (
      <motion.div
        key={idx}
        className="overflow-hidden rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={src}
          alt={`Erection work ${idx + 1}`}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    ))}
  </div>
</section>


      {/* Reliable Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Wrench className="w-16 h-16 text-blue-700 mb-4 mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold mb-4">Reliable & Professional Erection Services</h2>
            <p className="text-gray-700">
              We deliver highly reliable erection services, handled by qualified professionals using advanced tools and equipment. From planning to installation, each phase is executed with precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scope of Erection */}
      <section className="py-16 bg-gray-300">
  <motion.div
    className="container mx-auto px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <h2 className="text-3xl font-bold mb-8 text-center">Scope of Equipment Erection</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Heavy Machinery",
        "Boilers and Pressure Vessels",
        "Pumps and Compressors",
        "Tanks, Silos, and Storage Units",
        "Conveyors, Cranes, and Material Handling Systems",
        "Generators, Transformers, and Electrical Panels",
        "Custom Fabricated Equipment"
      ].map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 shadow rounded-lg border-l-4 border-blue-700 transition-all duration-300 hover:bg-blue-900/50 hover:text-white"
        >
          <CheckCircle className="text-blue-700 w-6 h-6 mb-2 transition-colors duration-300 group-hover:text-white" />
          <p className="font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Process Section */}
      <section className="py-16 bg-white">
        <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process Includes</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <ul className="space-y-3">
              <li><strong>Pre-Erection Planning:</strong> Site inspection, drawing reviews, safety coordination</li>
              <li><strong>Material Handling:</strong> Cranes, forklifts, safe equipment movement</li>
              <li><strong>Precise Installation:</strong> Positioning, alignment, bolting/welding</li>
              <li><strong>Testing & Commissioning:</strong> Final checks, support for commissioning</li>
            </ul>
            <ul className="space-y-3">
              <li><strong>Post-Erection Checks:</strong> Final inspections and documentation</li>
              <li><strong>Client Handover:</strong> Clean documentation and safe transfer</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold text-center mb-8">Key Features of Our Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Qualified Technicians & Engineers",
              "Modern Tools and Equipment",
              "Strict Safety Standards",
              "Adherence to Project Timelines",
              "Custom Solutions Based on Site Needs"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 shadow rounded-lg border-l-4 border-blue-700"
                whileHover={{ scale: 1.03 }}
              >
                <ShieldCheck className="text-blue-700 w-6 h-6 mb-2" />
                <p className="font-medium text-gray-800">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

 {/* Industries Served */}
 <section className="py-16 bg-white">
        <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Manufacturing & Industrial Plants",
              "Power Plants & Utility Services",
              "Chemical & Process Industries",
              "Construction & Infrastructure",
              "Warehousing & Logistics"
            ].map((industry, idx) => (
              <div key={idx} className="bg-blue-700/10 p-6 rounded-lg">
                <Cog className="text-blue-700 w-6 h-6 mb-2" />
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Presence Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Our Presence</h2>
          <p className="text-lg mb-2">We offer Equipment Erection Services across:</p>
          <div className="mt-4 space-y-2 text-lg">
            <p><MapPin className="inline w-5 h-5 mr-2" /> Gujarat</p>
            <p><MapPin className="inline w-5 h-5 mr-2" /> Mumbai and Maharashtra</p>
            <p><MapPin className="inline w-5 h-5 mr-2" /> Expanding across India</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EquipmentErection;
