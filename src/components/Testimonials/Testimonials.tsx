import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { WhiteToBlueGradient } from '../BackgroundGradients';
import { TestimonialsProps } from './types';
import { TESTIMONIALS_CONSTANTS, TESTIMONIALS_DATA } from './constants';

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <WhiteToBlueGradient>
      <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
            {TESTIMONIALS_CONSTANTS.TITLE.MAIN}{' '}
            <span className="text-blue-400 font-medium">{TESTIMONIALS_CONSTANTS.TITLE.HIGHLIGHT}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {TESTIMONIALS_CONSTANTS.SUBTITLE}
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6"
          >
            {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-blue-400 fill-current" />
                  ))}
                </div>

                <Quote className="text-slate-400 mb-4" size={24} />

                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-slate-900 font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-400 fill-current" />
                ))}
              </div>
              <span className="text-slate-900 font-semibold">{TESTIMONIALS_CONSTANTS.RATING.SCORE}</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="text-slate-600">
              {TESTIMONIALS_CONSTANTS.RATING.DESCRIPTION}
            </div>
          </div>
        </motion.div>
      </div>
      </section>
    </WhiteToBlueGradient>
  );
};

export default Testimonials;