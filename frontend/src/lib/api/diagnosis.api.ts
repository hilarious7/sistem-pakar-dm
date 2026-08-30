import { apiPost } from './client';
import type { ApiResponse } from '../../types/api.types';
import type { DiagnosisInput, DiagnosisResult } from '../../types/diagnosis.types';

export async function submitDiagnosis(input: DiagnosisInput): Promise<ApiResponse<DiagnosisResult>> {
  return apiPost<ApiResponse<DiagnosisResult>>('/diagnosis', input);
}
