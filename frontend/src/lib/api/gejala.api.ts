import { apiGet } from './client';
import type { ApiResponse } from '../../types/api.types';
import type { Gejala } from '../../types/knowledge-base.types';

export async function fetchGejala(): Promise<ApiResponse<Gejala[]>> {
  return apiGet<ApiResponse<Gejala[]>>('/gejala');
}
