import type { Profile } from '../models/profile.model';

/**
 * Datos del perfil. Reemplazá estos valores por los tuyos.
 * Los datos actuales son ficticios y sirven como demo.
 */
export const PROFILE: Profile = {
  name: 'Nicolás Spinetto',
  role: 'Backend Developer',
  tagline:
    'Diseño APIs, servicios distribuidos e infraestructura que escala sin dolores de cabeza.',
  location: 'Buenos Aires, Argentina',
  email: 'hola@nicospinetto.dev',
  availability: 'Disponible para trabajar',
  socials: [
    { label: 'GitHub', url: 'https://github.com/nicospinetto', icon: 'code' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nicospinetto', icon: 'work' },
  ],
};
