import { NavItem } from './types';

export const NAVBAR_CONSTANTS = {
  BRAND: {
    LOGO: '9D',
    NAME: '9DIGITZ'
  },
  NAV_ITEMS: [
    { label: 'Servicios', href: '#services' },
    { label: 'Seguridad', href: '#security' },
    { label: 'Proceso', href: '#process' },
    { label: 'Equipo', href: '#team' },
    { label: 'Contacto', href: '#contact' }
  ] as NavItem[],
  BUTTONS: {
    CTA: 'Empezar proyecto'
  }
};