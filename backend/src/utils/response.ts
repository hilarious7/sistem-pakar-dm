import type { ApiResponse, ApiErrorResponse } from '../types/api.types';

export function successResponse<T>(data: T, message: string = 'Success'): ApiResponse<T> {
  return { success: true, data, message };
}

export function errorResponse(message: string, code: string = 'INTERNAL_ERROR', details?: string): ApiErrorResponse {
  return { success: false, data: null, message, error: { code, details } };
}
