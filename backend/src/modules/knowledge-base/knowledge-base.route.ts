import { Elysia } from 'elysia';
import { db } from '../../db';
import {
  penyakit, gejala, faktorRisiko,
  kondisiAkut, komplikasi, rules, massFunctions,
} from '../../db/schema';
import { successResponse, errorResponse } from '../../utils/response';

export const knowledgeBaseRoutes = new Elysia({ prefix: '/api' })
  .get('/penyakit', async () => {
    const data = await db.select().from(penyakit);
    return successResponse(data, 'Berhasil mengambil data penyakit');
  })
  .get('/gejala', async () => {
    const data = await db.select().from(gejala);
    return successResponse(data, 'Berhasil mengambil data gejala');
  })
  .get('/faktor-risiko', async () => {
    const data = await db.select().from(faktorRisiko);
    return successResponse(data, 'Berhasil mengambil data faktor risiko');
  })
  .get('/kondisi-akut', async () => {
    const data = await db.select().from(kondisiAkut);
    return successResponse(data, 'Berhasil mengambil data kondisi akut');
  })
  .get('/komplikasi', async () => {
    const data = await db.select().from(komplikasi);
    return successResponse(data, 'Berhasil mengambil data komplikasi');
  })
  .get('/rules', async () => {
    const data = await db.select().from(rules);
    return successResponse(data, 'Berhasil mengambil data rules');
  })
  .get('/mass-functions', async () => {
    const data = await db.select().from(massFunctions);
    return successResponse(data, 'Berhasil mengambil data mass functions');
  });
