import { apiGet } from './client';
import type { ApiResponse } from '../../types/api.types';
import type { Penyakit, Gejala, FaktorRisiko, KondisiAkut, Komplikasi } from '../../types/knowledge-base.types';

export const fetchPenyakit = () => apiGet<ApiResponse<Penyakit[]>>('/penyakit');
export const fetchGejala = () => apiGet<ApiResponse<Gejala[]>>('/gejala');
export const fetchFaktorRisiko = () => apiGet<ApiResponse<FaktorRisiko[]>>('/faktor-risiko');
export const fetchKondisiAkut = () => apiGet<ApiResponse<KondisiAkut[]>>('/kondisi-akut');
export const fetchKomplikasi = () => apiGet<ApiResponse<Komplikasi[]>>('/komplikasi');
