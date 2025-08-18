import { Shield, Lock, Eye } from 'lucide-react';
import { SecurityFeature } from './types';

export const SECURITY_CONSTANTS = {
  TITLE: {
    MAIN: 'Tecnología',
    HIGHLIGHT: 'segura'
  },
  SUBTITLE: 'Utilizamos las mejores prácticas de seguridad y tecnologías de vanguardia para proteger tu información y garantizar el éxito de tu proyecto.',
  GUARANTEE_TEXT: 'Garantía de satisfacción del 100% en todos nuestros proyectos'
};

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    description: 'Implementamos las mejores prácticas de seguridad para proteger tu información y datos.'
  },
  {
    icon: Lock,
    title: 'Certificaciones',
    description: 'Cumplimos con estándares internacionales de calidad y seguridad en desarrollo.'
  },
  {
    icon: Eye,
    title: 'Monitoreo 24/7',
    description: 'Supervisión continua de sistemas para garantizar disponibilidad y rendimiento.'
  }
];