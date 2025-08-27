import { TeamMember } from './types';

export const TEAM_CONSTANTS = {
  TITLE: {
    MAIN: 'Nuestro',
    HIGHLIGHT: 'equipo'
  },
  SUBTITLE: 'Un equipo de profesionales altamente cualificados comprometidos con la excelencia y la innovación tecnológica.'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Josep M',
    position: 'CEO - Founder',
    department: 'Dirección General',
    avatar: './images/team/jm.jpeg',
    level: 1
  },
  {
    id: 2,
    name: 'Riki',
    position: 'Adjunt a Direcció',
    department: 'Cap Marketing/Audiovisuals',
    avatar: './images/team/riki.jpeg',
    level: 2,
    reportsTo: 1
  },
  {
    id: 3,
    name: 'Andreu',
    position: 'Cap Informàtica i Programació',
    department: 'Desarrollo Tecnológico',
    avatar: './images/team/andreu.jpeg',
    level: 2,
    reportsTo: 1
  },
  {
    id: 4,
    name: 'Marta',
    position: 'Administració i Atenció al Client',
    department: 'Administración',
    avatar: './images/team/jm.jpeg',
    level: 3,
    reportsTo: 2
  },
  {
    id: 5,
    name: 'Robert',
    position: 'Marketing i Xarxes Socials',
    department: 'Marketing Digital',
    avatar: './images/team/jm.jpeg',
    level: 3,
    reportsTo: 2
  },
  {
    id: 6,
    name: 'Marc',
    position: 'Integracions API i Desenvolupament',
    department: 'Desarrollo',
    avatar: './images/team/jm.jpeg',
    level: 3,
    reportsTo: 3
  },
  {
    id: 7,
    name: 'Meritxell',
    position: 'Comptabilitat',
    department: 'Administración',
    avatar: './images/team/jm.jpeg',
    level: 4,
    reportsTo: 4
  },
  {
    id: 8,
    name: 'Javi',
    position: 'Enginyer Telecomunicacions',
    department: 'Seguretat Informàtica',
    avatar: './images/team/jm.jpeg',
    level: 4,
    reportsTo: 6
  }
];