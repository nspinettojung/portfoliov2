import type { Project } from '../models/project.model';

/**
 * Proyectos del portfolio. El orden se respeta en la UI.
 * Los datos actuales son ficticios y sirven como demo.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'api-gateway',
    title: 'API Gateway',
    description:
      'Gateway centralizado con autenticación, rate limiting y observabilidad para microservicios.',
    imageUrl: '/projects/api-gateway.svg',
    badge: 'Backend',
    tags: ['Node.js', 'Fastify', 'Redis', 'PostgreSQL'],
    repoUrl: 'https://github.com/nicospinetto/api-gateway',
    featured: true,
  },
  {
    slug: 'event-driven-orders',
    title: 'Event-Driven Orders',
    description:
      'Plataforma de pedidos orientada a eventos, con sagas, reintentos e idempotencia de punta a punta.',
    imageUrl: '/projects/event-driven-orders.svg',
    badge: 'Distributed Systems',
    tags: ['TypeScript', 'NestJS', 'Kafka', 'PostgreSQL'],
    repoUrl: 'https://github.com/nicospinetto/event-driven-orders',
    featured: true,
  },
  {
    slug: 'observability-platform',
    title: 'Observability Platform',
    description:
      'Plataforma interna de logs, métricas y trazas con alertas y dashboards por servicio.',
    imageUrl: '/projects/observability-platform.svg',
    badge: 'DevOps',
    tags: ['Go', 'Prometheus', 'Grafana', 'Kubernetes'],
    repoUrl: 'https://github.com/nicospinetto/observability-platform',
    featured: true,
  },
  {
    slug: 'auth-service',
    title: 'Auth Service',
    description: 'Servicio de identidad con OAuth2, JWT rotativos, MFA y auditoría de accesos.',
    imageUrl: '/projects/auth-service.svg',
    badge: 'Security',
    tags: ['Java', 'Spring Boot', 'Keycloak', 'PostgreSQL'],
    repoUrl: 'https://github.com/nicospinetto/auth-service',
    featured: false,
  },
  {
    slug: 'url-shortener',
    title: 'URL Shortener',
    description:
      'Acortador de URLs con cache en Redis, analytics de clicks y despliegue en contenedores.',
    imageUrl: '/projects/url-shortener.svg',
    badge: 'Side Project',
    tags: ['Go', 'Redis', 'Docker', 'AWS'],
    repoUrl: 'https://github.com/nicospinetto/url-shortener',
    demoUrl: 'https://short.nicospinetto.dev',
    featured: false,
  },
  {
    slug: 'price-tracker',
    title: 'Price Tracker',
    description:
      'Scraping programado y API para seguir precios, detectar bajas y enviar notificaciones.',
    imageUrl: '/projects/price-tracker.svg',
    badge: 'Automation',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/nicospinetto/price-tracker',
    featured: false,
  },
];
