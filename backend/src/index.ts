import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { env } from './config/env';
import { knowledgeBaseRoutes } from './modules/knowledge-base/knowledge-base.route';
import { diagnosisRoutes } from './modules/diagnosis/diagnosis.route';
import { recommendationRoutes } from './modules/recommendation/recommendation.route';

const app = new Elysia()
  .use(cors())
  .use(knowledgeBaseRoutes)
  .use(diagnosisRoutes)
  .use(recommendationRoutes)
  .get('/', () => ({
    name: 'Sistem Pakar Diagnosis Diabetes Melitus',
    version: '0.1.0',
    status: 'running',
  }))
  .listen(env.PORT);

console.log('Server running at http://' + app.server?.hostname + ':' + app.server?.port);
