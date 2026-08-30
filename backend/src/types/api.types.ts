export interface ApiResponse<T> {
  success: true;
  data: T;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  data: null;
  message: string;
  error: { code: string; details?: string };
}

export type ApiResult<T> = ApiResponse<T> | ApiErrorResponse;
