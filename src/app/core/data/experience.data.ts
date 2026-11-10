import type { Experience } from '../models/experience.model';

/**
 * Experiencia laboral y educativa, de más reciente a más antigua.
 * Los datos actuales son ficticios y sirven como demo.
 */
export const EXPERIENCES: Experience[] = [
  {
    type: 'work',
    role: 'Senior Backend Developer',
    company: 'Nubbe',
    location: 'Remoto',
    startDate: '2024-03',
    description:
      'Liderazgo técnico de los servicios de pagos y checkout, con foco en confiabilidad y latencia.',
    achievements: [
      'Reduje la latencia p95 del checkout de 820 ms a 310 ms.',
      'Diseñé la migración a una arquitectura orientada a eventos con Kafka.',
      'Definí el estándar de observabilidad y alertas para todos los servicios.',
      'Mentoricé a tres desarrolladores en testing, diseño de APIs y code review.',
    ],
    technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Kafka', 'AWS'],
  },
  {
    type: 'work',
    role: 'Backend Developer',
    company: 'Startup Labs',
    location: 'Buenos Aires, Argentina',
    startDate: '2021-02',
    endDate: '2024-02',
    description:
      'Desarrollo de APIs REST y servicios de integración para una plataforma B2B con clientes en LATAM.',
    achievements: [
      'Implementé autenticación OAuth2 con rotación de tokens para toda la plataforma.',
      'Automaticé el pipeline de CI/CD y reduje los deploys manuales a cero.',
      'Optimicé consultas críticas y bajé el uso de CPU de la base de datos un 35%.',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    type: 'work',
    role: 'Junior Developer',
    company: 'Digital Studio',
    location: 'Buenos Aires, Argentina',
    startDate: '2019-01',
    endDate: '2021-01',
    description:
      'Mantenimiento de aplicaciones internas e integraciones con servicios de terceros.',
    achievements: [
      'Desarrollé el módulo de facturación electrónica usado por todos los clientes.',
      'Reduje el tiempo de respuesta de los reportes internos de minutos a segundos.',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Linux'],
  },
  {
    type: 'education',
    role: 'Licenciatura en Sistemas',
    company: 'Universidad Nacional',
    startDate: '2015-03',
    endDate: '2021-12',
    description:
      'Formación en algoritmos, bases de datos, sistemas distribuidos e ingeniería de software.',
    technologies: [],
  },
];
