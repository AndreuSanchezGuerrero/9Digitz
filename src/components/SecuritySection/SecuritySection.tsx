import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { WhiteToBlueGradient } from '../BackgroundGradients';
import { SecuritySectionProps } from './types';
import { SECURITY_CONSTANTS, SECURITY_FEATURES } from './constants';

const SecuritySection: React.FC<SecuritySectionProps> = () => {
  return (
    <WhiteToBlueGradient>
      <section id="security" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
              {SECURITY_CONSTANTS.TITLE.MAIN}{' '}
              <span className="text-blue-400 font-medium">{SECURITY_CONSTANTS.TITLE.HIGHLIGHT}</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {SECURITY_CONSTANTS.SUBTITLE}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {SECURITY_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-blue-400/10 border border-blue-400/30 rounded-2xl mb-6"
                >
                  <feature.icon className="text-blue-400" size={32} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center mt-12 space-x-4"
          >
            <CheckCircle2 className="text-blue-400" size={24} />
            <span className="text-slate-700 text-lg">
              {SECURITY_CONSTANTS.GUARANTEE_TEXT}
            </span>
          </motion.div>
        </div>
      </section>
    </WhiteToBlueGradient>
  );
};

export default SecuritySection;