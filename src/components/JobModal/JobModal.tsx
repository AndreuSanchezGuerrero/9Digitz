import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Users, Mail } from 'lucide-react';
import { JobModalProps } from './types';

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-center flex-shrink-0">
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X size={16} />
                </motion.button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <Users className="text-white" size={24} />
                </motion.div>

                <h2 className="text-xl font-bold text-white mb-2">
                  ¡Gracias por tu interés!
                </h2>
                <p className="text-blue-100">
                  Nos emociona saber que quieres formar parte de 9DIGITZ
                </p>
              </div>

              {/* Content */}
              <div className="p-6 text-center flex-1 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="text-blue-500" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Actualmente no tenemos ofertas disponibles
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Pero siempre estamos buscando talento excepcional. 
                    Te invitamos a enviarnos tu CV para futuras oportunidades.
                  </p>
                </motion.div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2"
                    style={{ backgroundColor: '#0076e3' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005bb5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0076e3'}
                    onClick={() => {
                      window.location.href = 'mailto:rrhh@9digitz.com?subject=Candidatura Espontánea&body=Hola, me gustaría formar parte del equipo de 9DIGITZ...';
                    }}
                  >
                    <Mail size={18} />
                    <span>Enviar CV</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full border border-slate-300 text-slate-700 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors"
                  >
                    Cerrar
                  </motion.button>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  Te notificaremos cuando tengamos nuevas oportunidades
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JobModal;