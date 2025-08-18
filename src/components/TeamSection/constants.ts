import { TeamMember } from './types';

export const TEAM_CONSTANTS = {
  TITLE: {
    MAIN: 'Nuestro',
    HIGHLIGHT: 'equipo'
  },
  SUBTITLE: 'Conoce a los profesionales que hacen posible la transformación digital de tu empresa.',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Josep Maria',
    position: 'CEO & Fundador',
    department: 'Dirección',
    avatar: '/images/team/jm.jpeg',
    email: 'carlos@9digitz.com',
    phone: '+34 900 123 456',
    level: 1
  },
  {
    id: 2,
    name: 'Riki Porcel',
    position: 'Director de Marketing, Audio y Video3D',
    department: 'Marketing',
    avatar: '/images/team/riki.jpeg',
    email: 'ana@9digitz.com',
    level: 2,
    reportsTo: 1
  },
  {
    id: 3,
    name: 'Andreu Sánchez',
    position: 'Director de tecnología',
    department: 'Tecnología',
    avatar: '/images/team/andreu.jpeg',
    email: 'miguel@9digitz.com',
    level: 2,
    reportsTo: 1
  },
  {
    id: 4,
    name: 'Laura Ruiz',
    position: 'Jefa de Desarrollo',
    department: 'Desarrollo',
    avatar: '/images/team/laura.jpg',
    email: 'laura@9digitz.com',
    level: 3,
    reportsTo: 2
  },
  {
    id: 5,
    name: 'Roberto Silva',
    position: 'Especialista en Ciberseguridad',
    department: 'Seguridad',
    avatar: '/images/team/roberto.jpg',
    email: 'roberto@9digitz.com',
    level: 3,
    reportsTo: 2
  },
  {
    id: 6,
    name: 'Carmen López',
    position: 'Especialista en Marketing',
    department: 'Marketing',
    avatar: '/images/team/carmen.jpg',
    email: 'carmen@9digitz.com',
    level: 3,
    reportsTo: 3
  }
];