import type { DiagnosisResult } from '../types/diagnosis.types';

export let lastDiagnosisResult: DiagnosisResult | null = null;

export function setDiagnosisResult(result: DiagnosisResult) {
  lastDiagnosisResult = result;
}

export function clearDiagnosisResult() {
  lastDiagnosisResult = null;
}
