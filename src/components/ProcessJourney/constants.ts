import { ProcessStep } from './types';

export const PROCESS_CONSTANTS = {
  TITLE: {
    MAIN: 'Nuestro',
    HIGHLIGHT: 'proceso'
  },
  SUBTITLE: 'Un enfoque estructurado y transparente que garantiza el éxito de tu proyecto desde el primer día.',
  CTA: {
    TITLE: '¿Tienes una idea?',
    DESCRIPTION: 'Convierte tu visión en realidad. Nuestro equipo de expertos está listo para hacer que tu proyecto sea un éxito.',
    BUTTON: 'Hablar con un experto'
  }
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: '💡',
    title: 'Consulta inicial',
    description: 'Analizamos tus necesidades y objetivos',
    duration: '1 día'
  },
  {
    icon: '📋',
    title: 'Propuesta técnica',
    description: 'Diseñamos la solución perfecta para ti',
    duration: '3-5 días'
  },
  {
    icon: '🚀',
    title: 'Desarrollo',
    description: 'Implementamos con metodologías ágiles',
    duration: '2-12 semanas'
  },
  {
    icon: '✅',
    title: 'Entrega y soporte',
    description: 'Lanzamiento y mantenimiento continuo',
    duration: 'Ongoing'
  }
];