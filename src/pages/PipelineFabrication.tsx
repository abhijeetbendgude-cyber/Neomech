import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const features = [
  "Made-To-order Service",
  "Reliable services",
  "Client Centric Approach",
  "Flexible cost",
  "On-Schedule Delivery",
  "Provide professional services & Consultancy"
];

const PipelineFabricationPage = () => {
  return (
    <section className="relative py-24 bg-gray-900/80 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg"
          alt="Pipelines"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center pt-16">
          Fabrication & Erection of Pipelines Services
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 text-blue-100 text-center">
          Shri Sainath Enterprises is globally recognized for top-notch Piping Fabrication services. 
          Backed by industry expertise, we cater to diverse sectors including automotive, engineering, 
          power, and atomic energy.
        </p>

        <div className="max-w-5xl mx-auto space-y-4 text-base text-blue-100">
          <p>
            We specialize in industrial mechanical fabrication, IBR pipelines, steam piping, and process pipelines.
            Our work spans across India, delivering tailor-made, cost-effective, and standards-compliant pipeline solutions.
          </p>
          <p>
            With a rich legacy and global exposure, our team handles pipeline projects of any size and complexity. 
            We not only fabricate and erect but also provide maintenance services with precision and efficiency.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 p-5 rounded-lg shadow hover:bg-blue-800 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start gap-2">
                <CheckCircle className="text-blue-400 mt-1" />
                <p className="text-blue-100 font-medium">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PipelineFabricationPage;
