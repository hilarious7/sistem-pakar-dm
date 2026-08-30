import { Elysia, t } from 'elysia';
import { RecommendationService } from './recommendation.service';
import { successResponse, errorResponse } from '../../utils/response';

const recommendationService = new RecommendationService();

export const recommendationRoutes = new Elysia({ prefix: '/api' })
  .post('/recommendations', async ({ body }) => {
    try {
      const result = recommendationService.calculate(body);
      return successResponse(result, 'Berhasil menghitung rekomendasi');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan';
      return errorResponse(message, 'RECOMMENDATION_ERROR');
    }
  }, {
    body: t.Object({
      beratBadan: t.Number(),
      tinggiBadan: t.Number(),
      usia: t.Number(),
      jenisKelamin: t.Union([t.Literal('laki-laki'), t.Literal('perempuan')]),
      aktivitasFisik: t.String(),
    }),
  });
