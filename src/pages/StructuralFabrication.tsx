import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Wrench, Truck, ShieldCheck, Clock, Layers3 } from 'lucide-react';

const StructuralFabrication = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-24 mt-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Structural Fabrication & Erection
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            End-to-end solutions from design to installation with quality and safety at core.
          </p>
        </div>
      </section>

      {/* Section: Design Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src="assets/Home3.jpeg" alt="Design Services" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Structural Design Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Design of steel structures – beams, columns, trusses, frames, and sheds</li>
              <li>Load analysis – dead, live, wind, seismic</li>
              <li>FEA & modeling using STAAD.Pro, ETABS, Tekla, AutoCAD</li>
              <li>Design verification, optimization, and value engineering</li>
              <li>Preparation of GADs and fabrication drawings</li>
              <li>Safety assessments and retrofitting recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Advantages of Structural Steel */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src="assets/Home3.jpeg" alt="Steel Fabrication" className="w-full h-full object-cover opacity-3" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Advantages Of Structural Steel Fabrication</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "High strength-to-weight ratio",
              "Corrosion & weather resistance",
              "Cost-effective vs. other metals",
              "Quick installation",
              "Fire & water resistance",
              "Mold & termite resistance",
              "Recyclable & eco-friendly",
              "High design flexibility",
              "Earthquake & storm resistant"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-blue-950/80 p-6 rounded-lg shadow hover:shadow-lg transition backdrop-blur-sm text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <CheckCircle className="text-white w-6 h-6 mb-3" />
                <p className="text-white font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section: Fabrication Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Structural Steel Fabrication</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Beams (I-beams, H-beams), angles, channels, columns, trusses</li>
              <li>Custom fabrication based on client drawings or design help</li>
              <li>Cutting, welding, drilling, surface finishing</li>
            </ul>
          </div>
          <img src="assets/Home3.jpeg" alt="Fabrication" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Section: Erection Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src="assets/Home3.jpeg" alt="Erection" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Erection & Installation</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>On-site assembly, alignment, bolting, welding</li>
              <li>Safety standard compliance</li>
              <li>Engineering protocol adherence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Materials & Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Industries & Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Industries We Serve</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Power & Energy</li>
                <li>Oil & Gas</li>
                <li>Infrastructure & Construction</li>
                <li>Manufacturing & Warehousing</li>
                <li>Transportation & Logistics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Materials & Shapes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Angles, Beams, Channels</li>
                <li>Hollow sections, Pipes, Tubes</li>
                <li>Custom profiles as needed</li>
                <li>Mild steel, stainless steel, alloys</li>
                <li>IS, ASTM, BS grades available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6">Let’s bring your structure to life with our fabrication expertise.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StructuralFabrication;
