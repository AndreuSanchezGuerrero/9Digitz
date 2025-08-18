import { motion } from 'framer-motion';

const Logo = () => (
  <img 
    src="/images/logos/logo-blanc.png" 
    alt="9DIGITZ Logo"
    className="h-16 w-auto object-contain"
  />
);

const Footer = () => {
  const footerLinks = {
    'Servicios': [
      'Servidores Cloud',
      'Apps & Webs',
      'IP Avanzada',
      'Ciberseguridad',
      'Internet & Telefonía',
      'Cartelería Digital',
      'Touch Screens',
      'Video & 3D',
      'Marketing Digital',
      'Kit Digital'
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
    'Sectores': [
      'Retail & E-commerce',
      'Salud & Medicina',
      'Educación',
      'Finanzas',
      'Manufactura'
    ],
    'Nuestro equipo': [
      'JM',
      'Ricard',
      'Andreu',
      'Marc',
      'Albert'
    ]
  };

  return (
    <footer style={{ backgroundColor: '#0076e3' }} className="border-t border-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logos/logo-blanc.png" 
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

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
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