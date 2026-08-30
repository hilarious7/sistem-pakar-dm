import { Elysia, t } from 'elysia';
import { DiagnosisService } from './diagnosis.service';
import { successResponse, errorResponse } from '../../utils/response';
import type { DiagnosisInput } from './diagnosis.types';

const diagnosisService = new DiagnosisService();

export const diagnosisRoutes = new Elysia({ prefix: '/api' })
  .post('/diagnosis', async ({ body }) => {
    try {
      const result = await diagnosisService.diagnose(body as DiagnosisInput);
      return successResponse(result, 'Proses diagnosis selesai');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan';
      return errorResponse(message, 'DIAGNOSIS_ERROR');
    }
  }, {
    body: t.Object({
      gejalaIds: t.Array(t.Number()),
      faktorRisikoIds: t.Array(t.Number()),
      kondisiAkutIds: t.Array(t.Number()),
      komplikasiIds: t.Array(t.Number()),
      pasien: t.Object({
        nama: t.String(),
        usia: t.Number(),
        jenisKelamin: t.Union([t.Literal('laki-laki'), t.Literal('perempuan')]),
        beratBadan: t.Number(),
        tinggiBadan: t.Number(),
        aktivitasFisik: t.String(),
        statusKehamilan: t.Boolean(),
        usiaKehamilan: t.Optional(t.Number()),
      }),
    }),
  });
