import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'ca';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.security': 'Seguridad',
    'nav.process': 'Proceso',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    
    // Language selector
    'lang.spanish': 'Español',
    'lang.catalan': 'Català',
    
    // Hero
    'hero.title.main': 'Servicios',
    'hero.title.highlight': 'digitales',
    'hero.title.suffix': 'avanzados',
    'hero.subtitle': 'Transformamos tu negocio con tecnología de vanguardia. Desde cloud computing hasta marketing digital, somos tu socio tecnológico integral.',
    'hero.button.primary': 'Comenzar proyecto',
    'hero.button.secondary': 'Ver servicios',
    'hero.footer': 'Profesionales altamente cualificados a tu servicio',
    
    // WhatsApp Button
    'whatsapp.message': 'Hola! Me interesa conocer más sobre los servicios de 9DIGITZ. ¿Podrían ayudarme?',
    'whatsapp.button': '¿Cómo podemos ayudarte?',
    'whatsapp.tooltip': 'Chatea con nosotros',
    'whatsapp.greeting': '¡Hola! 👋 ¿En qué podemos ayudarte hoy?',
    
    // Services Section
    'services.title.main': 'Nuestros',
    'services.title.highlight': 'servicios',
    'services.subtitle': 'Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital.',
    'services.cta': 'Solicitar consulta gratuita',
    
    // Individual Services
    'services.apps.name': 'DESARROLLO DE APPs Y WEBS',
    'services.apps.description': 'Desarrollo a medida',
    'services.marketing.name': 'MARKETING DIGITAL',
    'services.marketing.description': 'Estrategias online',
    'services.cloud.name': 'SERVIDORES CLOUD',
    'services.cloud.description': 'Infraestructura escalable y segura',
    'services.security.name': 'CIBERSEGURIDAD',
    'services.security.description': 'Protección integral',
    'services.voip.name': 'CENTRALITAS VOIP/SIP',
    'services.voip.description': 'Comunicaciones empresariales',
    'services.internet.name': 'OPERADOR DE INTERNET',
    'services.internet.description': 'Soluciones de conectividad',
    'services.digital.name': 'CARTELERÍA DIGITAL',
    'services.digital.description': 'Señalización inteligente',
    'services.interactive.name': 'PANTALLAS INTERACTIVAS',
    'services.interactive.description': 'Interfaces interactivas',
    'services.audiovisual.name': 'PRODUCCIÓN AUDIOVISUAL',
    'services.audiovisual.description': 'Contenido audiovisual',
    'services.microsoft.name': 'PARTNER MICROSOFT 365',
    'services.microsoft.description': 'Transformación completa',

    // Service Modal Details
    'modal.fullDescription': 'Descripción completa',
    'modal.features': 'Características principales',
    'modal.benefits': 'Beneficios',
    'modal.requestInfo': 'Solicitar información',

    // Apps & Webs
    'services.apps.fullDescription': 'Diseñamos y creamos aplicaciones a medida integradas con tu CRM, ERP u otros servicios mediante el uso de APIs e inteligencia artificial.',
    'services.apps.features.0': 'Aplicaciones a medida adaptadas a tu negocio',
    'services.apps.features.1': 'Integración con CRM, ERP y otros servicios',
    'services.apps.features.2': 'Uso de APIs para máxima conectividad',
    'services.apps.features.3': 'Implementación de inteligencia artificial',
    'services.apps.benefits.0': 'Optimización de procesos internos',
    'services.apps.benefits.1': 'Experiencia de usuario personalizada',
    'services.apps.benefits.2': 'Escalabilidad para crecimiento futuro',
    'services.apps.benefits.3': 'Mayor eficiencia y automatización',

    // Marketing Digital
    'services.marketing.fullDescription': 'Gestión de contenidos, SEO y campañas digitales optimizadas con IA y segmentación avanzada.',
    'services.marketing.features.0': 'Gestión de contenidos y redes sociales',
    'services.marketing.features.1': 'Estrategias de posicionamiento optimizadas',
    'services.marketing.features.2': 'Campañas digitales segmentadas',
    'services.marketing.features.3': 'Integración de IA para análisis avanzado',
    'services.marketing.benefits.0': 'Mayor visibilidad online',
    'services.marketing.benefits.1': 'Incremento del tráfico cualificado',
    'services.marketing.benefits.2': 'Optimización del retorno de inversión',
    'services.marketing.benefits.3': 'Estrategias adaptadas al público objetivo',

    // Cloud Servers
    'services.cloud.fullDescription': 'Virtualizamos servidores en la nube con infraestructura segura y nacional, con copias redundantes y protección avanzada.',
    'services.cloud.features.0': 'Virtualización segura en la nube',
    'services.cloud.features.1': 'Infraestructura nacional certificada',
    'services.cloud.features.2': 'Copias de seguridad redundantes',
    'services.cloud.features.3': 'Protección avanzada contra amenazas',
    'services.cloud.benefits.0': 'Escalabilidad sin inversión en hardware',
    'services.cloud.benefits.1': 'Reducción de costes operativos',
    'services.cloud.benefits.2': 'Alta disponibilidad y continuidad del negocio',
    'services.cloud.benefits.3': 'Seguridad y cumplimiento normativo',

    // Cybersecurity
    'services.security.fullDescription': 'Protegemos tus sistemas con Firewalls, EDR, copias seguras, SIEM, MFA y protocolos NIS2.',
    'services.security.features.0': 'Firewalls de nueva generación',
    'services.security.features.1': 'Soluciones EDR y SIEM',
    'services.security.features.2': 'Autenticación multifactor',
    'services.security.features.3': 'Protocolos NIS2 para cumplimiento',
    'services.security.benefits.0': 'Protección contra ciberataques',
    'services.security.benefits.1': 'Reducción del riesgo de brechas de datos',
    'services.security.benefits.2': 'Cumplimiento legal y normativo',
    'services.security.benefits.3': 'Continuidad del negocio sin interrupciones',

    // VoIP
    'services.voip.fullDescription': 'Instalamos centralitas VoIP con conexiones SIP e internet para ofrecer comunicaciones empresariales fiables y escalables.',
    'services.voip.features.0': 'Instalación de centralitas VoIP',
    'services.voip.features.1': 'Conexiones SIP fiables',
    'services.voip.features.2': 'Integración con internet empresarial',
    'services.voip.features.3': 'Solución escalable y flexible',
    'services.voip.benefits.0': 'Ahorro en costes de telefonía',
    'services.voip.benefits.1': 'Comunicación fluida y profesional',
    'services.voip.benefits.2': 'Escalabilidad según necesidades',
    'services.voip.benefits.3': 'Mayor movilidad y accesibilidad',

    // Internet Operator
    'services.internet.fullDescription': 'Como operadores acreditados en la CNMC, ofrecemos soluciones técnicas y tarifas personalizadas en internet y telefonía.',
    'services.internet.features.0': 'Servicio acreditado por CNMC',
    'services.internet.features.1': 'Tarifas personalizadas para empresas',
    'services.internet.features.2': 'Soluciones técnicas adaptadas',
    'services.internet.features.3': 'Soporte especializado',
    'services.internet.benefits.0': 'Conexión estable y segura',
    'services.internet.benefits.1': 'Adaptación a las necesidades del negocio',
    'services.internet.benefits.2': 'Costes optimizados',
    'services.internet.benefits.3': 'Atención y soporte especializado',

    // Digital Signage
    'services.digital.fullDescription': 'Pantallas digitales con gestión de contenidos centralizada y control remoto para espacios comerciales y corporativos.',
    'services.digital.features.0': 'Pantallas digitales con resolución adaptada',
    'services.digital.features.1': 'Gestión de contenidos centralizada',
    'services.digital.features.2': 'Control remoto sencillo',
    'services.digital.features.3': 'Múltiples usos y finalidades',
    'services.digital.benefits.0': 'Comunicación visual impactante',
    'services.digital.benefits.1': 'Actualización rápida de contenidos',
    'services.digital.benefits.2': 'Ahorro frente a cartelería tradicional',
    'services.digital.benefits.3': 'Mayor atracción de clientes y usuarios',

    // Interactive Screens
    'services.interactive.fullDescription': 'Soluciones táctiles para puntos de información, centros educativos y espacios públicos, mejorando la interacción con el usuario.',
    'services.interactive.features.0': 'Soluciones táctiles avanzadas',
    'services.interactive.features.1': 'Adaptadas a entornos educativos y públicos',
    'services.interactive.features.2': 'Interfaz intuitiva para el usuario',
    'services.interactive.features.3': 'Alta durabilidad y calidad de imagen',
    'services.interactive.benefits.0': 'Mejora la experiencia de usuario',
    'services.interactive.benefits.1': 'Facilita la interacción y el aprendizaje',
    'services.interactive.benefits.2': 'Aumenta la accesibilidad a la información',
    'services.interactive.benefits.3': 'Imagen innovadora para la organización',

    // Audiovisual Production
    'services.audiovisual.fullDescription': 'Creación de contenidos para redes sociales, grabación y edición de video, modelado y animación 3D y proyectos de diseño gráfico.',
    'services.audiovisual.features.0': 'Creación de contenido para redes sociales',
    'services.audiovisual.features.1': 'Grabación y edición profesional de video',
    'services.audiovisual.features.2': 'Modelado y animación 3D',
    'services.audiovisual.features.3': 'Diseño gráfico a medida',
    'services.audiovisual.benefits.0': 'Contenidos atractivos y de calidad',
    'services.audiovisual.benefits.1': 'Paquetes de servicios completos',
    'services.audiovisual.benefits.2': 'Diferenciación visual frente a la competencia',
    'services.audiovisual.benefits.3': 'Proyectos personalizados según marca',

    // Microsoft 365
    'services.microsoft.fullDescription': 'Soluciones con licencias oficiales, configuración y formación por equipos, mejorando la colaboración y productividad con herramientas Microsoft.',
    'services.microsoft.features.0': 'Licencias oficiales Microsoft',
    'services.microsoft.features.1': 'Configuración de entornos de trabajo',
    'services.microsoft.features.2': 'Formación para equipos',
    'services.microsoft.features.3': 'Integración de herramientas colaborativas',
    'services.microsoft.benefits.0': 'Productividad mejorada en equipo',
    'services.microsoft.benefits.1': 'Mayor seguridad en la gestión documental',
    'services.microsoft.benefits.2': 'Comunicación interna más eficiente',
    'services.microsoft.benefits.3': 'Uso óptimo de herramientas profesionales',

    // Security Section
    'security.title.main': 'Tecnología',
    'security.title.highlight': 'segura',
    'security.subtitle': 'Utilizamos las mejores prácticas de seguridad y tecnologías de vanguardia para proteger tu información y garantizar el éxito de tu proyecto.',
    'security.guarantee': 'Garantía de satisfacción del 100% en todos nuestros proyectos',
    'security.features.advanced.title': 'Seguridad Avanzada',
    'security.features.advanced.description': 'Implementamos las mejores prácticas de seguridad para proteger tu información y datos.',
    'security.features.certifications.title': 'Certificaciones',
    'security.features.certifications.description': 'Cumplimos con estándares internacionales de calidad y seguridad en desarrollo.',
    'security.features.monitoring.title': 'Monitoreo 24/7',
    'security.features.monitoring.description': 'Supervisión continua de sistemas para garantizar disponibilidad y rendimiento.',
    
    // Process Section
    'process.title.main': 'Nuestro',
    'process.title.highlight': 'proceso',
    'process.subtitle': 'Un enfoque estructurado y transparente que garantiza el éxito de tu proyecto desde el primer día.',
    'process.cta.title': '¿Tienes una idea?',
    'process.cta.description': 'Convierte tu visión en realidad. Nuestro equipo de expertos está listo para hacer que tu proyecto sea un éxito.',
    'process.cta.button': 'Hablar con un experto',
    
    // Process Steps
    'process.step1.title': 'Consulta inicial',
    'process.step1.description': 'Analizamos tus necesidades y objetivos',
    'process.step1.duration': '1 día',
    'process.step2.title': 'Propuesta técnica',
    'process.step2.description': 'Diseñamos la solución perfecta para ti',
    'process.step2.duration': '3-5 días',
    'process.step3.title': 'Desarrollo',
    'process.step3.description': 'Implementamos con metodologías ágiles',
    'process.step3.duration': '2-12 semanas',
    'process.step4.title': 'Entrega y soporte',
    'process.step4.description': 'Lanzamiento y mantenimiento continuo',
    'process.step4.duration': 'Ongoing',
    
    // Team Section
    'team.title.main': 'Nuestro',
    'team.title.highlight': 'equipo',
    'team.subtitle': 'Un equipo de profesionales altamente cualificados comprometidos con la excelencia y la innovación tecnológica.',
    'team.cta.title': '¿Quieres formar parte del equipo?',
    'team.cta.description': 'Estamos siempre buscando talento excepcional para unirse a nuestro equipo de profesionales.',
    'team.cta.button': 'Ver oportunidades',
    
    // Team member positions
    'team.positions.ceo': 'CEO - Founder',
    'team.positions.adjunt': 'Adjunt a Direcció',
    'team.positions.cap_informatica': 'Cap Informàtica i Programació',
    'team.positions.administracio': 'Administració i Atenció al Client',
    'team.positions.marketing': 'Marketing i Xarxes Socials',
    'team.positions.integracions': 'Integracions API i Desenvolupament',
    'team.positions.comptabilitat': 'Comptabilitat',
    'team.positions.enginyer': 'Enginyer Telecomunicacions',
    
    // Team departments
    'team.departments.direccio': 'Dirección General',
    'team.departments.marketing_audiovisuals': 'Cap Marketing/Audiovisuals',
    'team.departments.desarrollo': 'Desarrollo Tecnológico',
    'team.departments.administracion': 'Administración',
    'team.departments.marketing_digital': 'Marketing Digital',
    'team.departments.desarrollo_simple': 'Desarrollo',
    'team.departments.seguridad': 'Seguretat Informàtica',
    
    // Contact Form
    'contact.title.main': 'Hablemos de tu',
    'contact.title.highlight': 'proyecto',
    'contact.subtitle': 'Cuéntanos tu idea y te ayudaremos a convertirla en realidad. Nuestro equipo de expertos está listo para asesorarte.',
    'contact.whyChoose.title': '¿Por qué elegirnos?',
    'contact.directContact.title': 'Contacto directo',
    'contact.form.name': 'Nombre completo *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Teléfono',
    'contact.form.service': 'Servicio de interés',
    'contact.form.message': 'Mensaje *',
    'contact.placeholders.name': 'Tu nombre completo',
    'contact.placeholders.email': 'tu@email.com',
    'contact.placeholders.phone': '+34 937 374 400',
    'contact.placeholders.service': 'Selecciona un servicio',
    'contact.placeholders.message': 'Cuéntanos sobre tu proyecto...',
    'contact.button': 'Enviar mensaje',
    'contact.success': '¡Mensaje enviado correctamente! Te contactaremos pronto.',
    'contact.error': 'Error al enviar el mensaje. Inténtalo de nuevo.',
    'contact.whyChoose.response': 'Respuesta en menos de 24 horas',
    'contact.whyChoose.consultation': 'Consulta inicial completamente gratuita',
    'contact.whyChoose.solutions': 'Soluciones personalizadas para tu negocio',
    'contact.whyChoose.confidentiality': 'Confidencialidad garantizada',
    'contact.directContact.phone': '+34 937 374 400',
    'contact.directContact.email': 'info@9digitz.com',
    'contact.directContact.chat': 'Chat en vivo disponible',
    
    // Call to Action Section
    'cta.title.main': 'Comienza tu',
    'cta.title.highlight': 'transformación',
    'cta.title.suffix': 'digital hoy',
    'cta.subtitle': 'Únete a más de 200 empresas que han confiado en 9DIGITZ para impulsar su crecimiento tecnológico.',
    'cta.whyChoose.title': '¿Por qué elegir 9DIGITZ?',
    'cta.features.security': 'Seguridad y privacidad de datos',
    'cta.features.solutions': 'Soluciones personalizadas para tu negocio',
    'cta.features.experts': 'Equipo de expertos certificados',
    'cta.features.support': 'Soporte técnico 24/7',
    'cta.features.guarantee': 'Garantía de satisfacción 100%',
    'cta.buttons.consultation': 'Consulta Gratuita',
    'cta.buttons.call': 'Llámanos',
    'cta.buttons.mainCta': 'Solicitar consulta gratuita',
    'cta.contact.phone': '+34 937 374 400',
    'cta.contact.readyTitle': '¿Listo para empezar?',
    'cta.contact.readySubtitle': 'Contacta con nosotros hoy mismo',
    'cta.footerText': 'Sin compromiso • Consulta gratuita • Respuesta en 24h',
  },
  ca: {
    // Navbar
    'nav.services': 'Serveis',
    'nav.security': 'Seguretat',
    'nav.process': 'Procés',
    'nav.team': 'Equip',
    'nav.contact': 'Contacte',
    
    // Language selector
    'lang.spanish': 'Español',
    'lang.catalan': 'Català',
    
    // Hero
    'hero.title.main': 'Serveis',
    'hero.title.highlight': 'digitals',
    'hero.title.suffix': 'avançats',
    'hero.subtitle': 'Transformem el teu negoci amb tecnologia d\'avantguarda. Des de cloud computing fins a màrqueting digital, som el teu soci tecnològic integral.',
    'hero.button.primary': 'Començar projecte',
    'hero.button.secondary': 'Veure serveis',
    'hero.footer': 'Professionals altament qualificats al teu servei',
    
    // WhatsApp Button
    'whatsapp.message': 'Hola! M\'interessa conèixer més sobre els serveis de 9DIGITZ. Podríeu ajudar-me?',
    'whatsapp.button': 'Com podem ajudar-te?',
    'whatsapp.tooltip': 'Xateja amb nosaltres',
    'whatsapp.greeting': 'Hola! 👋 En què podem ajudar-te avui?',
    
    // Services Section
    'services.title.main': 'Els nostres',
    'services.title.highlight': 'serveis',
    'services.subtitle': 'Solucions tecnològiques integrals per impulsar el teu negoci cap al futur digital.',
    'services.cta': 'Sol·licitar consulta gratuïta',
    
    // Individual Services
    'services.apps.name': 'DESENVOLUPAMENT D\'APPs I WEBS',
    'services.apps.description': 'Desenvolupament a mida',
    'services.marketing.name': 'MÀRQUETING DIGITAL',
    'services.marketing.description': 'Estratègies online',
    'services.cloud.name': 'SERVIDORS CLOUD',
    'services.cloud.description': 'Infraestructura escalable i segura',
    'services.security.name': 'CIBERSEGURETAT',
    'services.security.description': 'Protecció integral',
    'services.voip.name': 'CENTRALETES VOIP/SIP',
    'services.voip.description': 'Comunicacions empresarials',
    'services.internet.name': 'OPERADOR D\'INTERNET',
    'services.internet.description': 'Solucions de connectivitat',
    'services.digital.name': 'CARTELLERIA DIGITAL',
    'services.digital.description': 'Senyalització intel·ligent',
    'services.interactive.name': 'PANTALLES INTERACTIVES',
    'services.interactive.description': 'Interfícies interactives',
    'services.audiovisual.name': 'PRODUCCIÓ AUDIOVISUAL',
    'services.audiovisual.description': 'Contingut audiovisual',
    'services.microsoft.name': 'PARTNER MICROSOFT 365',
    'services.microsoft.description': 'Transformació completa',

    // Service Modal Details
    'modal.fullDescription': 'Descripció completa',
    'modal.features': 'Característiques principals',
    'modal.benefits': 'Beneficis',
    'modal.requestInfo': 'Sol·licitar informació',

    // Apps & Webs
    'services.apps.fullDescription': 'Dissenyem i creem aplicacions a mida integrades amb el teu CRM, ERP o altres serveis mitjançant l\'ús d\'APIs i intel·ligència artificial.',
    'services.apps.features.0': 'Aplicacions a mida adaptades al teu negoci',
    'services.apps.features.1': 'Integració amb CRM, ERP i altres serveis',
    'services.apps.features.2': 'Ús d\'APIs per a màxima connectivitat',
    'services.apps.features.3': 'Implementació d\'intel·ligència artificial',
    'services.apps.benefits.0': 'Optimització de processos interns',
    'services.apps.benefits.1': 'Experiència d\'usuari personalitzada',
    'services.apps.benefits.2': 'Escalabilitat per al creixement futur',
    'services.apps.benefits.3': 'Major eficiència i automatització',

    // Marketing Digital
    'services.marketing.fullDescription': 'Gestió de continguts, SEO i campanyes digitals optimitzades amb IA i segmentació avançada.',
    'services.marketing.features.0': 'Gestió de continguts i xarxes socials',
    'services.marketing.features.1': 'Estratègies de posicionament optimitzades',
    'services.marketing.features.2': 'Campanyes digitals segmentades',
    'services.marketing.features.3': 'Integració d\'IA per a anàlisi avançat',
    'services.marketing.benefits.0': 'Major visibilitat online',
    'services.marketing.benefits.1': 'Increment del tràfic qualificat',
    'services.marketing.benefits.2': 'Optimització del retorn d\'inversió',
    'services.marketing.benefits.3': 'Estratègies adaptades al públic objectiu',

    // Cloud Servers
    'services.cloud.fullDescription': 'Virtualitzem servidors al núvol amb infraestructura segura i nacional, amb còpies redundants i protecció avançada.',
    'services.cloud.features.0': 'Virtualització segura al núvol',
    'services.cloud.features.1': 'Infraestructura nacional certificada',
    'services.cloud.features.2': 'Còpies de seguretat redundants',
    'services.cloud.features.3': 'Protecció avançada contra amenaces',
    'services.cloud.benefits.0': 'Escalabilitat sense inversió en maquinari',
    'services.cloud.benefits.1': 'Reducció de costos operatius',
    'services.cloud.benefits.2': 'Alta disponibilitat i continuïtat del negoci',
    'services.cloud.benefits.3': 'Seguretat i compliment normatiu',

    // Cybersecurity
    'services.security.fullDescription': 'Protegim els teus sistemes amb Firewalls, EDR, còpies segures, SIEM, MFA i protocols NIS2.',
    'services.security.features.0': 'Firewalls de nova generació',
    'services.security.features.1': 'Solucions EDR i SIEM',
    'services.security.features.2': 'Autenticació multifactor',
    'services.security.features.3': 'Protocols NIS2 per al compliment',
    'services.security.benefits.0': 'Protecció contra ciberatacs',
    'services.security.benefits.1': 'Reducció del risc de bretxes de dades',
    'services.security.benefits.2': 'Compliment legal i normatiu',
    'services.security.benefits.3': 'Continuïtat del negoci sense interrupcions',

    // VoIP
    'services.voip.fullDescription': 'Instal·lem centraletes VoIP amb connexions SIP i internet per oferir comunicacions empresarials fiables i escalables.',
    'services.voip.features.0': 'Instal·lació de centraletes VoIP',
    'services.voip.features.1': 'Connexions SIP fiables',
    'services.voip.features.2': 'Integració amb internet empresarial',
    'services.voip.features.3': 'Solució escalable i flexible',
    'services.voip.benefits.0': 'Estalvi en costos de telefonia',
    'services.voip.benefits.1': 'Comunicació fluida i professional',
    'services.voip.benefits.2': 'Escalabilitat segons necessitats',
    'services.voip.benefits.3': 'Major mobilitat i accessibilitat',

    // Internet Operator
    'services.internet.fullDescription': 'Com a operadors acreditats a la CNMC, oferim solucions tècniques i tarifes personalitzades en internet i telefonia.',
    'services.internet.features.0': 'Servei acreditat per la CNMC',
    'services.internet.features.1': 'Tarifes personalitzades per a empreses',
    'services.internet.features.2': 'Solucions tècniques adaptades',
    'services.internet.features.3': 'Suport especialitzat',
    'services.internet.benefits.0': 'Connexió estable i segura',
    'services.internet.benefits.1': 'Adaptació a les necessitats del negoci',
    'services.internet.benefits.2': 'Costos optimitzats',
    'services.internet.benefits.3': 'Atenció i suport especialitzat',

    // Digital Signage
    'services.digital.fullDescription': 'Pantalles digitals amb gestió de continguts centralitzada i control remot per a espais comercials i corporatius.',
    'services.digital.features.0': 'Pantalles digitals amb resolució adaptada',
    'services.digital.features.1': 'Gestió de continguts centralitzada',
    'services.digital.features.2': 'Control remot senzill',
    'services.digital.features.3': 'Múltiples usos i finalitats',
    'services.digital.benefits.0': 'Comunicació visual impactant',
    'services.digital.benefits.1': 'Actualització ràpida de continguts',
    'services.digital.benefits.2': 'Estalvi enfront de cartelleria tradicional',
    'services.digital.benefits.3': 'Major atracció de clients i usuaris',

    // Interactive Screens
    'services.interactive.fullDescription': 'Solucions tàctils per a punts d\'informació, centres educatius i espais públics, millorant la interacció amb l\'usuari.',
    'services.interactive.features.0': 'Solucions tàctils avançades',
    'services.interactive.features.1': 'Adaptades a entorns educatius i públics',
    'services.interactive.features.2': 'Interfície intuïtiva per a l\'usuari',
    'services.interactive.features.3': 'Alta durabilitat i qualitat d\'imatge',
    'services.interactive.benefits.0': 'Millora l\'experiència d\'usuari',
    'services.interactive.benefits.1': 'Facilita la interacció i l\'aprenentatge',
    'services.interactive.benefits.2': 'Augmenta l\'accessibilitat a la informació',
    'services.interactive.benefits.3': 'Imatge innovadora per a l\'organització',

    // Audiovisual Production
    'services.audiovisual.fullDescription': 'Creació de continguts per a xarxes socials, gravació i edició de vídeo, modelatge i animació 3D i projectes de disseny gràfic.',
    'services.audiovisual.features.0': 'Creació de contingut per a xarxes socials',
    'services.audiovisual.features.1': 'Gravació i edició professional de vídeo',
    'services.audiovisual.features.2': 'Modelatge i animació 3D',
    'services.audiovisual.features.3': 'Disseny gràfic a mida',
    'services.audiovisual.benefits.0': 'Continguts atractius i de qualitat',
    'services.audiovisual.benefits.1': 'Paquets de serveis complets',
    'services.audiovisual.benefits.2': 'Diferenciació visual enfront de la competència',
    'services.audiovisual.benefits.3': 'Projectes personalitzats segons marca',

    // Microsoft 365
    'services.microsoft.fullDescription': 'Solucions amb llicències oficials, configuració i formació per equips, millorant la col·laboració i productivitat amb eines Microsoft.',
    'services.microsoft.features.0': 'Llicències oficials Microsoft',
    'services.microsoft.features.1': 'Configuració d\'entorns de treball',
    'services.microsoft.features.2': 'Formació per a equips',
    'services.microsoft.features.3': 'Integració d\'eines col·laboratives',
    'services.microsoft.benefits.0': 'Productivitat millorada en equip',
    'services.microsoft.benefits.1': 'Major seguretat en la gestió documental',
    'services.microsoft.benefits.2': 'Comunicació interna més eficient',
    'services.microsoft.benefits.3': 'Ús òptim d\'eines professionals',

    // Security Section
    'security.title.main': 'Tecnologia',
    'security.title.highlight': 'segura',
    'security.subtitle': 'Utilitzem les millors pràctiques de seguretat i tecnologies d\'avantguarda per protegir la teva informació i garantir l\'èxit del teu projecte.',
    'security.guarantee': 'Garantia de satisfacció del 100% en tots els nostres projectes',
    'security.features.advanced.title': 'Seguretat Avançada',
    'security.features.advanced.description': 'Implementem les millors pràctiques de seguretat per protegir la teva informació i dades.',
    'security.features.certifications.title': 'Certificacions',
    'security.features.certifications.description': 'Complim amb estàndards internacionals de qualitat i seguretat en desenvolupament.',
    'security.features.monitoring.title': 'Monitoratge 24/7',
    'security.features.monitoring.description': 'Supervisió contínua de sistemes per garantir disponibilitat i rendiment.',
    
    // Process Section
    'process.title.main': 'El nostre',
    'process.title.highlight': 'procés',
    'process.subtitle': 'Un enfocament estructurat i transparent que garanteix l\'èxit del teu projecte des del primer dia.',
    'process.cta.title': 'Tens una idea?',
    'process.cta.description': 'Converteix la teva visió en realitat. El nostre equip d\'experts està preparat per fer que el teu projecte sigui un èxit.',
    'process.cta.button': 'Parlar amb un expert',
    
    // Process Steps
    'process.step1.title': 'Consulta inicial',
    'process.step1.description': 'Analitzem les teves necessitats i objectius',
    'process.step1.duration': '1 dia',
    'process.step2.title': 'Proposta tècnica',
    'process.step2.description': 'Dissenyem la solució perfecta per a tu',
    'process.step2.duration': '3-5 dies',
    'process.step3.title': 'Desenvolupament',
    'process.step3.description': 'Implementem amb metodologies àgils',
    'process.step3.duration': '2-12 setmanes',
    'process.step4.title': 'Lliurament i suport',
    'process.step4.description': 'Llançament i manteniment continu',
    'process.step4.duration': 'Continu',
    
    // Team Section
    'team.title.main': 'El nostre',
    'team.title.highlight': 'equip',
    'team.subtitle': 'Un equip de professionals altament qualificats compromesos amb l\'excel·lència i la innovació tecnològica.',
    'team.cta.title': 'Vols formar part de l\'equip?',
    'team.cta.description': 'Estem sempre buscant talent excepcional per unir-se al nostre equip de professionals.',
    'team.cta.button': 'Veure oportunitats',
    
    // Team member positions
    'team.positions.ceo': 'CEO - Fundador',
    'team.positions.adjunt': 'Adjunt a Direcció',
    'team.positions.cap_informatica': 'Cap Informàtica i Programació',
    'team.positions.administracio': 'Administració i Atenció al Client',
    'team.positions.marketing': 'Màrqueting i Xarxes Socials',
    'team.positions.integracions': 'Integracions API i Desenvolupament',
    'team.positions.comptabilitat': 'Comptabilitat',
    'team.positions.enginyer': 'Enginyer Telecomunicacions',
    
    // Team departments
    'team.departments.direccio': 'Direcció General',
    'team.departments.marketing_audiovisuals': 'Cap Màrqueting/Audiovisuals',
    'team.departments.desarrollo': 'Desenvolupament Tecnològic',
    'team.departments.administracion': 'Administració',
    'team.departments.marketing_digital': 'Màrqueting Digital',
    'team.departments.desarrollo_simple': 'Desenvolupament',
    'team.departments.seguridad': 'Seguretat Informàtica',
    
    // Contact Form
    'contact.title.main': 'Parlem del teu',
    'contact.title.highlight': 'projecte',
    'contact.subtitle': 'Explica\'ns la teva idea i t\'ajudarem a convertir-la en realitat. El nostre equip d\'experts està preparat per assessorar-te.',
    'contact.whyChoose.title': 'Per què triar-nos?',
    'contact.directContact.title': 'Contacte directe',
    'contact.form.name': 'Nom complet *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Telèfon',
    'contact.form.service': 'Servei d\'interès',
    'contact.form.message': 'Missatge *',
    'contact.placeholders.name': 'El teu nom complet',
    'contact.placeholders.email': 'el.teu@email.com',
    'contact.placeholders.phone': '+34 937 374 400',
    'contact.placeholders.service': 'Selecciona un servei',
    'contact.placeholders.message': 'Explica\'ns sobre el teu projecte...',
    'contact.button': 'Enviar missatge',
    'contact.success': 'Missatge enviat correctament! Et contactarem aviat.',
    'contact.error': 'Error en enviar el missatge. Torna-ho a intentar.',
    'contact.whyChoose.response': 'Resposta en menys de 24 hores',
    'contact.whyChoose.consultation': 'Consulta inicial completament gratuïta',
    'contact.whyChoose.solutions': 'Solucions personalitzades per al teu negoci',
    'contact.whyChoose.confidentiality': 'Confidencialitat garantida',
    'contact.directContact.phone': '+34 937 374 400',
    'contact.directContact.email': 'info@9digitz.com',
    'contact.directContact.chat': 'Xat en viu disponible',
    
    // Call to Action Section
    'cta.title.main': 'Comença la teva',
    'cta.title.highlight': 'transformació',
    'cta.title.suffix': 'digital avui',
    'cta.subtitle': 'Uneix-te a més de 200 empreses que han confiat en 9DIGITZ per impulsar el seu creixement tecnològic.',
    'cta.whyChoose.title': 'Per què triar 9DIGITZ?',
    'cta.features.security': 'Seguretat i privacitat de dades',
    'cta.features.solutions': 'Solucions personalitzades per al teu negoci',
    'cta.features.experts': 'Equip d\'experts certificats',
    'cta.features.support': 'Suport tècnic 24/7',
    'cta.features.guarantee': 'Garantia de satisfacció 100%',
    'cta.buttons.consultation': 'Consulta Gratuïta',
    'cta.buttons.call': 'Truca\'ns',
    'cta.buttons.mainCta': 'Sol·licitar consulta gratuïta',
    'cta.contact.phone': '+34 937 374 400',
    'cta.contact.readyTitle': 'Preparat per començar?',
    'cta.contact.readySubtitle': 'Contacta amb nosaltres avui mateix',
    'cta.footerText': 'Sense compromís • Consulta gratuïta • Resposta en 24h',
    
    // Footer
    'footer.description': 'Transformem empreses a través de la tecnologia. Som el teu soci estratègic en l\'era digital, oferint solucions innovadores i personalitzades.',
    'footer.services.title': 'Serveis',
    'footer.solutions.title': 'Solucions',
    'footer.team.title': 'El nostre equip',
    'footer.solutions.transformation': 'Transformació Digital',
    'footer.solutions.migration': 'Migració al Núvol',
    'footer.solutions.audits': 'Auditories de Seguretat',
    'footer.solutions.consulting': 'Consultoria Tecnològica',
    'footer.solutions.support': 'Suport Tècnic 24/7',
    'footer.solutions.integration': 'Integració de Sistemes',
    'footer.solutions.automation': 'Automatització de Processos',
    'footer.solutions.backup': 'Backup i Recuperació',
    'footer.solutions.monitoring': 'Monitorització IT',
    'footer.solutions.optimization': 'Optimització d\'Infraestructura',
    'footer.legal.privacy': 'Política de privacitat',
    'footer.legal.terms': 'Termes d\'ús',
    'footer.legal.notice': 'Avís legal',
    'footer.copyright': '© 2025 9DIGITZ. Tots els drets reservats.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};