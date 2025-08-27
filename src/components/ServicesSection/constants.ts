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
    icon: './images/icons/apps i webs_Mesa de trabajo 1.png',
    name: 'DESARROLLO DE APPs Y WEBS', 
    description: 'Desarrollo a medida',
    color: 'from-emerald-500 to-emerald-600',
    details: {
      fullDescription: 'Diseñamos y creamos aplicaciones a medida integradas con tu CRM, ERP u otros servicios mediante el uso de APIs e inteligencia artificial.',
      features: [
        'Aplicaciones a medida adaptadas a tu negocio',
        'Integración con CRM, ERP y otros servicios',
        'Uso de APIs para máxima conectividad',
        'Implementación de inteligencia artificial'
      ],
      benefits: [
        'Optimización de procesos internos',
        'Experiencia de usuario personalizada',
        'Escalabilidad para crecimiento futuro',
        'Mayor eficiencia y automatización'
      ],
      image: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg'
    }
  },
  { 
    icon: './images/icons/marqueting_Mesa de trabajo 1.png',
    name: 'MARKETING DIGITAL', 
    description: 'Estrategias online',
    color: 'from-yellow-500 to-yellow-600',
    details: {
      fullDescription: 'Gestión de contenidos, SEO y campañas digitales optimizadas con IA y segmentación avanzada.',
      features: [
        'Gestión de contenidos y redes sociales',
        'Estrategias de posicionamiento optimizadas',
        'Campañas digitales segmentadas',
        'Integración de IA para análisis avanzado'
      ],
      benefits: [
        'Mayor visibilidad online',
        'Incremento del tráfico cualificado',
        'Optimización del retorno de inversión',
        'Estrategias adaptadas al público objetivo'
      ],
      image: 'https://cdn.pixabay.com/photo/2016/03/17/17/25/modern-technologies-1263422_1280.jpg'
    }
  },
  { 
    icon: './images/icons/serveis cloud_Mesa de trabajo 1.png',
    name: 'SERVIDORES CLOUD', 
    description: 'Infraestructura escalable y segura',
    color: 'from-blue-500 to-blue-600',
    details: {
      fullDescription: 'Virtualizamos servidores en la nube con infraestructura segura y nacional, con copias redundantes y protección avanzada.',
      features: [
        'Virtualización segura en la nube',
        'Infraestructura nacional certificada',
        'Copias de seguridad redundantes',
        'Protección avanzada contra amenazas'
      ],
      benefits: [
        'Escalabilidad sin inversión en hardware',
        'Reducción de costes operativos',
        'Alta disponibilidad y continuidad del negocio',
        'Seguridad y cumplimiento normativo'
      ],
      image: 'https://cdn.pixabay.com/photo/2017/03/20/21/00/server-2160321_1280.jpg'
    }
  },
  { 
    icon: './images/icons/ciberseguretat_Mesa de trabajo 1.png',
    name: 'CIBERSEGURIDAD', 
    description: 'Protección integral',
    color: 'from-red-500 to-red-600',
    details: {
      fullDescription: 'Protegemos tus sistemas con Firewalls, EDR, copias seguras, SIEM, MFA y protocolos NIS2.',
      features: [
        'Firewalls de nueva generación',
        'Soluciones EDR y SIEM',
        'Autenticación multifactor',
        'Protocolos NIS2 para cumplimiento'
      ],
      benefits: [
        'Protección contra ciberataques',
        'Reducción del riesgo de brechas de datos',
        'Cumplimiento legal y normativo',
        'Continuidad del negocio sin interrupciones'
      ],
      image: 'https://cdn.pixabay.com/photo/2016/08/13/16/49/computer-1591018_1280.jpg'
    }
  },
  { 
    icon: './images/icons/centraletes VoIP_Mesa de trabajo 1.png',
    name: 'CENTRALITAS VOIP/SIP', 
    description: 'Comunicaciones empresariales',
    color: 'from-orange-500 to-orange-600',
    details: {
      fullDescription: 'Instalamos centralitas VoIP con conexiones SIP e internet para ofrecer comunicaciones empresariales fiables y escalables.',
      features: [
        'Instalación de centralitas VoIP',
        'Conexiones SIP fiables',
        'Integración con internet empresarial',
        'Solución escalable y flexible'
      ],
      benefits: [
        'Ahorro en costes de telefonía',
        'Comunicación fluida y profesional',
        'Escalabilidad según necesidades',
        'Mayor movilidad y accesibilidad'
      ],
      image: 'https://images.pexels.com/photos/17636234/pexels-photo-17636234.jpeg'
    }
  },
  { 
    icon: './images/icons/operador internet_Mesa de trabajo 1.png',
    name: 'OPERADOR DE INTERNET', 
    description: 'Soluciones de conectividad',
    color: 'from-purple-500 to-purple-600',
    details: {
      fullDescription: 'Como operadores acreditados en la CNMC, ofrecemos soluciones técnicas y tarifas personalizadas en internet y telefonía.',
      features: [
        'Servicio acreditado por CNMC',
        'Tarifas personalizadas para empresas',
        'Soluciones técnicas adaptadas',
        'Soporte especializado'
      ],
      benefits: [
        'Conexión estable y segura',
        'Adaptación a las necesidades del negocio',
        'Costes optimizados',
        'Atención y soporte especializado'
      ],
      image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg'
    }
  },
  { 
    icon: './images/icons/cartelleria digital_Mesa de trabajo 1.png',
    name: 'CARTELERÍA DIGITAL', 
    description: 'Señalización inteligente',
    color: 'from-cyan-500 to-cyan-600',
    details: {
      fullDescription: 'Pantallas digitales con gestión de contenidos centralizada y control remoto para espacios comerciales y corporativos.',
      features: [
        'Pantallas digitales con resolución adaptada',
        'Gestión de contenidos centralizada',
        'Control remoto sencillo',
        'Múltiples usos y finalidades'
      ],
      benefits: [
        'Comunicación visual impactante',
        'Actualización rápida de contenidos',
        'Ahorro frente a cartelería tradicional',
        'Mayor atracción de clientes y usuarios'
      ],
      image: 'https://cdn.leonardo.ai/users/affdcbb6-6e85-467b-b21d-9c9c5042c662/generations/38176339-b427-45f1-bad5-d7516b9adaef/segments/1:4:1/Lucid_Realism_A_stylish_shop_window_display_on_a_modern_city_s_0.jpg'
    }
  },
  { 
    icon: './images/icons/pantalles interactives_Mesa de trabajo 1.png',
    name: 'PANTALLAS INTERACTIVAS', 
    description: 'Interfaces interactivas',
    color: 'from-pink-500 to-pink-600',
    details: {
      fullDescription: 'Soluciones táctiles para puntos de información, centros educativos y espacios públicos, mejorando la interacción con el usuario.',
      features: [
        'Soluciones táctiles avanzadas',
        'Adaptadas a entornos educativos y públicos',
        'Interfaz intuitiva para el usuario',
        'Alta durabilidad y calidad de imagen'
      ],
      benefits: [
        'Mejora la experiencia de usuario',
        'Facilita la interacción y el aprendizaje',
        'Aumenta la accesibilidad a la información',
        'Imagen innovadora para la organización'
      ],
      image: 'https://cdn.leonardo.ai/users/affdcbb6-6e85-467b-b21d-9c9c5042c662/generations/c6465c17-ba56-485c-90e7-c44a5d76e286/segments/2:4:1/Lucid_Realism_A_modern_hightech_interactive_touch_screen_in_a__1.jpg'
    }
  },
  { 
    icon: './images/icons/contingut multimedia_Mesa de trabajo 1.png',
    name: 'PRODUCCIÓN AUDIOVISUAL', 
    description: 'Contenido audiovisual',
    color: 'from-indigo-500 to-indigo-600',
    details: {
      fullDescription: 'Creación de contenidos para redes sociales, grabación y edición de video, modelado y animación 3D y proyectos de diseño gráfico.',
      features: [
        'Creación de contenido para redes sociales',
        'Grabación y edición profesional de video',
        'Modelado y animación 3D',
        'Diseño gráfico a medida'
      ],
      benefits: [
        'Contenidos atractivos y de calidad',
        'Paquetes de servicios completos',
        'Diferenciación visual frente a la competencia',
        'Proyectos personalizados según marca'
      ],
      image: 'https://images.pexels.com/photos/13654278/pexels-photo-13654278.jpeg'
    }
  },
  { 
    icon: './images/icons/partner microsoft 365_Mesa de trabajo 1.png',
    name: 'PARTNER MICROSOFT 365', 
    description: 'Transformación completa',
    color: 'from-teal-500 to-teal-600',
    details: {
      fullDescription: 'Soluciones con licencias oficiales, configuración y formación por equipos, mejorando la colaboración y productividad con herramientas Microsoft.',
      features: [
        'Licencias oficiales Microsoft',
        'Configuración de entornos de trabajo',
        'Formación para equipos',
        'Integración de herramientas colaborativas'
      ],
      benefits: [
        'Productividad mejorada en equipo',
        'Mayor seguridad en la gestión documental',
        'Comunicación interna más eficiente',
        'Uso óptimo de herramientas profesionales'
      ],
      image: 'https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_960_720.jpg'
    }
  }
];