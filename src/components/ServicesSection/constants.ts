import { Service } from './types';

export const SERVICES_CONSTANTS = {
  TITLE: {
    MAIN: 'Nuestros',
    HIGHLIGHT: 'servicios'
  },
  SUBTITLE: 'Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital.',
  CTA_BUTTON: 'Solicitar consulta gratuita'
};

export const SERVICES: Service[] = [
  { 
    icon: '/images/icons/serveis cloud_Mesa de trabajo 1.png',
    name: 'Servidores Cloud', 
    description: 'Infraestructura escalable y segura',
    color: 'from-blue-500 to-blue-600',
    details: {
      fullDescription: 'Nuestros servidores cloud ofrecen una infraestructura robusta y escalable que se adapta a las necesidades de tu negocio. Con tecnología de vanguardia, garantizamos alta disponibilidad, seguridad avanzada y rendimiento óptimo para todas tus aplicaciones y datos.',
      features: [
        'Escalabilidad automática según demanda',
        'Backup automático diario',
        'Monitoreo 24/7',
        'SSL certificados incluidos',
        'Panel de control intuitivo',
        'Soporte técnico especializado'
      ],
      benefits: [
        'Reducción de costos de infraestructura',
        'Mayor flexibilidad operativa',
        'Acceso desde cualquier ubicación',
        'Actualizaciones automáticas',
        'Seguridad empresarial'
      ],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/apps i webs_Mesa de trabajo 1.png',
    name: 'Apps & Webs', 
    description: 'Desarrollo a medida',
    color: 'from-emerald-500 to-emerald-600',
    details: {
      fullDescription: 'Desarrollo de aplicaciones web y móviles personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.',
      features: ['Desarrollo personalizado', 'Tecnologías modernas', 'Diseño responsive'],
      benefits: ['Solución única', 'Escalable'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/operador internet_Mesa de trabajo 1.png',
    name: 'IP Avanzada', 
    description: 'Soluciones de conectividad',
    color: 'from-purple-500 to-purple-600',
    details: {
      fullDescription: 'Soluciones avanzadas de conectividad IP para optimizar la comunicación y el rendimiento de tu red empresarial.',
      features: ['Conectividad avanzada', 'Redes optimizadas', 'Configuración profesional'],
      benefits: ['Mayor velocidad', 'Conexión estable', 'Soporte especializado'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/ciberseguretat_Mesa de trabajo 1.png',
    name: 'Ciberseguridad', 
    description: 'Protección integral',
    color: 'from-red-500 to-red-600',
    details: {
      fullDescription: 'Protección integral contra amenazas cibernéticas con las mejores prácticas de seguridad del mercado.',
      features: ['Protección avanzada', 'Monitoreo continuo', 'Auditorías de seguridad'],
      benefits: ['Datos seguros', 'Tranquilidad', 'Cumplimiento normativo'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/centraletes VoIP_Mesa de trabajo 1.png',
    name: 'Internet & Telefonía', 
    description: 'Comunicaciones empresariales',
    color: 'from-orange-500 to-orange-600',
    details: {
      fullDescription: 'Soluciones completas de comunicaciones empresariales para optimizar la conectividad de tu organización.',
      features: ['Internet de alta velocidad', 'Telefonía IP', 'Configuración profesional'],
      benefits: ['Comunicación eficiente', 'Costos reducidos', 'Soporte técnico'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/cartelleria digital_Mesa de trabajo 1.png',
    name: 'Cartellería Digital', 
    description: 'Señalización inteligente',
    color: 'from-cyan-500 to-cyan-600',
    details: {
      fullDescription: 'Sistemas de señalización digital inteligente para mejorar la comunicación visual de tu negocio.',
      features: ['Pantallas interactivas', 'Gestión remota', 'Contenido dinámico'],
      benefits: ['Mayor impacto visual', 'Fácil actualización', 'Atracción de clientes'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/pantalles interactives_Mesa de trabajo 1.png',
    name: 'Touch Screens', 
    description: 'Interfaces interactivas',
    color: 'from-pink-500 to-pink-600',
    details: {
      fullDescription: 'Interfaces táctiles interactivas para mejorar la experiencia del usuario y optimizar procesos.',
      features: ['Pantallas táctiles', 'Software personalizado', 'Integración completa'],
      benefits: ['Experiencia mejorada', 'Interacción intuitiva', 'Procesos optimizados'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/contingut multimedia_Mesa de trabajo 1.png',
    name: 'Video & 3D', 
    description: 'Contenido audiovisual',
    color: 'from-indigo-500 to-indigo-600',
    details: {
      fullDescription: 'Producción de contenido audiovisual y experiencias 3D para potenciar tu marca y comunicación.',
      features: ['Producción profesional', 'Tecnología 3D', 'Edición avanzada'],
      benefits: ['Contenido impactante', 'Experiencias inmersivas', 'Diferenciación de marca'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/marqueting_Mesa de trabajo 1.png',
    name: 'Marketing Digital', 
    description: 'Estrategias online',
    color: 'from-yellow-500 to-yellow-600',
    details: {
      fullDescription: 'Estrategias de marketing digital para impulsar tu presencia online y aumentar tus ventas.',
      features: ['SEO/SEM', 'Redes sociales', 'Email marketing', 'Analytics'],
      benefits: ['Mayor visibilidad', 'Más clientes potenciales', 'ROI medible'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  },
  { 
    icon: '/images/icons/partner microsoft 365_Mesa de trabajo 1.png',
    name: 'Kit Digital', 
    description: 'Transformación completa',
    color: 'from-teal-500 to-teal-600',
    details: {
      fullDescription: 'Transformación digital completa para modernizar todos los aspectos tecnológicos de tu empresa.',
      features: ['Digitalización completa', 'Herramientas integradas', 'Formación incluida'],
      benefits: ['Eficiencia mejorada', 'Competitividad', 'Procesos optimizados'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
    }
  }
];