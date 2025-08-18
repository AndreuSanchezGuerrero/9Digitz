import { Testimonial } from './types';

export const TESTIMONIALS_CONSTANTS = {
  TITLE: {
    MAIN: 'Clientes',
    HIGHLIGHT: 'satisfechos'
  },
  SUBTITLE: 'No solo tomes nuestra palabra. Descubre lo que dicen nuestros clientes sobre nuestros servicios.',
  RATING: {
    SCORE: '4.8/5',
    DESCRIPTION: 'Basado en 200+ proyectos completados'
  }
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO',
    company: 'TechStart Solutions',
    rating: 5,
    text: '9DIGITZ transformó completamente nuestra infraestructura. El equipo es profesional y los resultados superaron nuestras expectativas.',
    avatar: '👩‍💻'
  },
  {
    name: 'Ana García',
    role: 'Directora de Marketing',
    company: 'Retail Plus',
    rating: 5,
    text: 'La estrategia de marketing digital que desarrollaron aumentó nuestras ventas online en un 300%. Increíble trabajo.',
    avatar: '👩‍💼'
  },
  {
    name: 'Miguel Torres',
    role: 'CTO',
    company: 'InnovaCorp',
    rating: 5,
    text: 'La migración a la nube fue perfecta. Cero downtime y un soporte técnico excepcional durante todo el proceso.',
    avatar: '👩‍💻'
  },
  {
    name: 'Laura Ruiz',
    role: 'Gerente General',
    company: 'Servicios Médicos',
    rating: 5,
    text: 'La aplicación móvil que desarrollaron revolucionó la forma en que atendemos a nuestros pacientes. Excelente UX.',
    avatar: '👩‍⚕️'
  },
  {
    name: 'Roberto Silva',
    role: 'Director de IT',
    company: 'Logística Global',
    rating: 5,
    text: 'La auditoría de ciberseguridad identificó vulnerabilidades críticas. Su plan de acción nos salvó de posibles ataques.',
    avatar: '👨‍💼'
  }
];