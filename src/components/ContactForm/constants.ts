import { Phone, Mail, MessageSquare } from 'lucide-react';
import { ContactInfo, DirectContact } from './types';

export const CONTACT_CONSTANTS = {
  TITLE: {
    MAIN: 'Hablemos de tu',
    HIGHLIGHT: 'proyecto'
  },
  SUBTITLE: 'Cuéntanos tu idea y te ayudaremos a convertirla en realidad. Nuestro equipo de expertos está listo para asesorarte.',
  WHY_CHOOSE_TITLE: '¿Por qué elegirnos?',
  DIRECT_CONTACT_TITLE: 'Contacto directo',
  FORM_LABELS: {
    NAME: 'Nombre completo *',
    EMAIL: 'Email *',
    PHONE: 'Teléfono',
    SERVICE: 'Servicio de interés',
    MESSAGE: 'Mensaje *'
  },
  PLACEHOLDERS: {
    NAME: 'Tu nombre completo',
    EMAIL: 'tu@email.com',
    PHONE: '+34 600 000 000',
    SERVICE: 'Selecciona un servicio',
    MESSAGE: 'Cuéntanos sobre tu proyecto...'
  },
  BUTTON_TEXT: 'Enviar mensaje',
  SUCCESS_MESSAGE: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
  ERROR_MESSAGE: 'Error al enviar el mensaje. Inténtalo de nuevo.'
};

export const WHY_CHOOSE_US: ContactInfo[] = [
  { icon: './images/our_process/cohet desenvolupament.png', text: 'Respuesta en menos de 24 horas' },
  { icon: './images/our_process/bombeta consulta inicial.png', text: 'Consulta inicial completamente gratuita' },
  { icon: './images/icons/apps i webs_Mesa de trabajo 1.png', text: 'Soluciones personalizadas para tu negocio' },
  { icon: './images/icons/ciberseguretat_Mesa de trabajo 1.png', text: 'Confidencialidad garantizada' }
];

export const DIRECT_CONTACT_INFO: DirectContact[] = [
  { icon: Phone, text: '+34 900 123 456' },
  { icon: Mail, text: 'info@9digitz.com' },
  { icon: MessageSquare, text: 'Chat en vivo disponible' }
];

export const SERVICES_OPTIONS = [
  'Desarrollo Web',
  'Aplicaciones Móviles',
  'Cloud Computing',
  'Ciberseguridad',
  'Marketing Digital',
  'Consultoría IT',
  'Otro'
];