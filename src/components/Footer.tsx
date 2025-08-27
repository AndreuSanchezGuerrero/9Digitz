import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';

const Logo = () => (
  <img 
    src="./images/logos/logo-blanc.png" 
    alt="9DIGITZ Logo"
    className="h-16 w-auto object-contain"
  />
);

const Footer = () => {
  const handleServiceClick = () => {
    scrollToSection('services');
  };

  const handleTeamClick = () => {
    scrollToSection('team');
  };

  const footerLinks = {
    'Servicios': [
      'Desarrollo de Apps y Webs',
      'Marketing Digital',
      'Servidores Cloud',
      'Ciberseguridad',
      'Centralitas VoIP/SIP',
      'Operador de Internet',
      'Cartelería Digital',
      'Pantallas Interactivas',
      'Producción Audiovisual',
      'Partner Microsoft 365'
    ],
    'Soluciones': [
      'Transformación Digital',
      'Migración a la Nube',
      'Auditorías de Seguridad',
      'Consultoría Tecnológica',
      'Soporte Técnico 24/7',
      'Integración de Sistemas',
      'Automatización de Procesos',
      'Backup y Recuperación',
      'Monitorización IT',
      'Optimización de Infraestructura'
    ],

    'Nuestro equipo': [
      'Josep M',
      'Riki',
      'Andreu',
      'Marta',
      'Robert',
      'Marc',
      'Meritxell',
      'Javi'
    ]
  };

  return (
    <footer style={{ backgroundColor: '#0076e3' }} className="border-t border-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="./images/logos/logo-blanc.png" 
                alt="9DIGITZ Logo"
                className="h-48 w-auto object-contain"
              />
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Transformamos empresas a través de la tecnología. 
              Somos tu socio estratégico en la era digital, 
              ofreciendo soluciones innovadoras y personalizadas.
            </p>
          </div>

          {/* Links - Each column takes equal space */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={
                        category === 'Servicios' 
                          ? handleServiceClick 
                          : category === 'Nuestro equipo' 
                          ? handleTeamClick 
                          : undefined
                      }
                      className="text-blue-100 hover:text-white transition-colors text-sm text-left cursor-pointer w-full"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-600 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="text-blue-100 text-sm">
                © 2025 9DIGITZ. Todos los derechos reservados.
              </div>
            </div>

            <div className="flex items-center space-x-6 text-blue-100 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos de uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;