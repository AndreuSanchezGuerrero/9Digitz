import React from 'react';
import { motion } from 'framer-motion';
import { BlueToWhiteGradient } from '../BackgroundGradients';
import ServiceModal from '../ServiceModal';
import { ServicesSectionProps, Service } from './types';
import { SERVICES_CONSTANTS, SERVICES } from './constants';

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <BlueToWhiteGradient>
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              {SERVICES_CONSTANTS.TITLE.MAIN}{' '}
              <span className="text-blue-400 font-medium">{SERVICES_CONSTANTS.TITLE.HIGHLIGHT}</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {SERVICES_CONSTANTS.SUBTITLE}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => handleServiceClick(service)}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/70 transition-all duration-300 text-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4`}
                >
                  <img 
                    src={service.icon} 
                    alt={service.name}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.name}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
                  className={`mt-4 h-0.5 bg-gradient-to-r ${service.color} rounded-full`}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
             onClick={() => {
               const contactSection = document.getElementById('contact');
               contactSection?.scrollIntoView({ behavior: 'smooth' });
             }}
          >
            <button 
              className="text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              style={{ backgroundColor: '#0076e3' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005bb5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0076e3'}
            >
              {SERVICES_CONSTANTS.CTA_BUTTON}
            </button>
          </motion.div>
        </div>

        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      </section>
    </BlueToWhiteGradient>
  );
};

export default ServicesSection;