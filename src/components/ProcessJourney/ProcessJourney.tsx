import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users, Lightbulb } from 'lucide-react';
import { BlueToWhiteGradient } from '../BackgroundGradients';
import { scrollToSection } from '../../utils/scrollUtils';
import { ProcessJourneyProps } from './types';
import { PROCESS_CONSTANTS, PROCESS_STEPS } from './constants';

const ProcessJourney: React.FC<ProcessJourneyProps> = () => {
  return (
    <BlueToWhiteGradient>
      <section id="process" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {PROCESS_CONSTANTS.TITLE.MAIN}{' '}
            <span className="text-blue-400 font-medium">{PROCESS_CONSTANTS.TITLE.HIGHLIGHT}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {PROCESS_CONSTANTS.SUBTITLE}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Process Path */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 z-10 hidden lg:block" />

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Clock className="text-slate-400" size={16} />
                    <span className="text-slate-400 text-sm">{step.duration}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <CheckCircle size={16} />
                    <span className="text-sm">Paso {index + 1}</span>
                  </div>
                </motion.div>

                {/* Mobile Arrow */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="flex justify-center my-6 lg:hidden">
                    <ArrowRight className="text-slate-400" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Lightbulb className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold text-white">
                {PROCESS_CONSTANTS.CTA.TITLE}
              </h3>
            </div>
            <p className="text-slate-400 mb-6">
              {PROCESS_CONSTANTS.CTA.DESCRIPTION}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="text-white px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center space-x-2 mx-auto"
              style={{ backgroundColor: '#0076e3' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005bb5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0076e3'}
            >
              <Users size={20} />
              <span>{PROCESS_CONSTANTS.CTA.BUTTON}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      </section>
    </BlueToWhiteGradient>
  );
};

export default ProcessJourney;