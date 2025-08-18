import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavbarProps } from './types';
import { NAVBAR_CONSTANTS } from './constants';

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-blue-100 to-blue-200 backdrop-blur-xl border-b border-blue-200/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-32 md:h-40">
          {/* Logo principal - Left side */}
          <div className="flex items-center">
            <img
              src="/images/logos/Logotip-transparent.png"
              alt="9DIGITZ"
              className="h-28 md:h-36 object-contain select-none"
              draggable={false}
              loading="eager"
              decoding="async"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))' }}
            />
          </div>

          {/* Navigation Menu - Center */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {NAVBAR_CONSTANTS.NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Icono 9Z y CTA - Right side */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:block text-white px-6 py-2 rounded-full font-medium transition-colors"
              style={{ backgroundColor: '#0076e3' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005bb5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0076e3')}
            >
              {NAVBAR_CONSTANTS.BUTTONS.CTA}
            </motion.button>

            {/* Icono 9Z */}
            <motion.img
              src="/images/logos/9z-trans.png"
              alt="9DIGITZ Logo"
              className="hidden md:block h-20 w-auto md:h-24 select-none"
              draggable={false}
              loading="eager"
              decoding="async"
              initial={{ scale: 1.3 }}
              animate={{ scale: 1.3 }}
              style={{
                willChange: 'transform',
                filter: 'drop-shadow(0 10px 18px rgba(0,118,227,0.25)) drop-shadow(0 4px 8px rgba(0,118,227,0.15))'
              }}
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-900 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-slate-200/50"
          >
            <div className="flex flex-col space-y-4">
              {NAVBAR_CONSTANTS.NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200/50">
                <button
                  className="text-white px-6 py-2 rounded-full font-medium transition-colors w-fit"
                  style={{ backgroundColor: '#0076e3' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005bb5')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0076e3')}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  {NAVBAR_CONSTANTS.BUTTONS.CTA}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
