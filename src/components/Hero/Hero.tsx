import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroProps } from './types';
import { HERO_CONSTANTS } from './constants';

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={HERO_CONSTANTS.BACKGROUND_IMAGE}
          alt="Cloud Computing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 mt-4 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-8xl font-light text-white mb-6 md:mb-8 leading-tight"
        >
          {HERO_CONSTANTS.TITLE.MAIN}{' '}
          <span className="text-blue-400 font-medium">{HERO_CONSTANTS.TITLE.HIGHLIGHT}</span>{' '}
          {HERO_CONSTANTS.TITLE.SUFFIX}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {HERO_CONSTANTS.SUBTITLE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           onClick={() => {
             const contactSection = document.getElementById('contact');
             contactSection?.scrollIntoView({ behavior: 'smooth' });
           }}
            className="text-white px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center space-x-2"
            style={{ backgroundColor: '#0076e3' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005bb5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0076e3'}
          >
            <span>{HERO_CONSTANTS.BUTTONS.PRIMARY}</span>
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const servicesSection = document.getElementById('services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
          >
            {HERO_CONSTANTS.BUTTONS.SECONDARY}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-slate-400 text-sm"
        >
          {HERO_CONSTANTS.FOOTER_TEXT}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const nextSection = document.getElementById('services');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;