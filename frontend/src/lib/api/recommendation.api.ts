import { apiPost } from './client';
import type { ApiResponse } from '../../types/api.types';
import type { RecommendationInput, RecommendationResult } from '../../types/recommendation.types';

export async function submitRecommendation(
  input: RecommendationInput,
): Promise<ApiResponse<RecommendationResult>> {
  return apiPost<ApiResponse<RecommendationResult>>('/recommendations', input);
}
