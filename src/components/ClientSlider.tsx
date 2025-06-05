import React from 'react';
import { motion } from 'framer-motion';
import GodrejLogo from '/assets/Godrej-logo.png';
import ShilpaLogo from '/assets/ShilpaBiological.jpeg';
import BioGenTechLogo from '/assets/BioGenTechLogo.jpeg';
import PharmaCorpLogo from '/assets/PharmaCorpLogo.png';

const ClientSlider = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={PharmaCorpLogo} 
                  alt="PharmaCorp" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={BioGenTechLogo} 
                  alt="BioGenTech" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={ShilpaLogo} 
                  alt="Shilpa Biological" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={GodrejLogo} 
                  alt="Godrej Industries" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={GodrejLogo} 
                  alt="VaccineTech" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={GodrejLogo} 
                  alt="HealthLabs" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={GodrejLogo} 
                  alt="PharmaPro" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            <div className="snap-start flex-shrink-0 w-full">
              <motion.div 
                className="flex items-center justify-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={GodrejLogo} 
                  alt="BioTech Systems" 
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
