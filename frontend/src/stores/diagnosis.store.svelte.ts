
import type { DiagnosisResult } from '../types/diagnosis.types';

class DiagnosisState {
  result = $state<DiagnosisResult | null>(null);

  set(res: DiagnosisResult) {
    this.result = res;
  }

  clear() {
    this.result = null;
  }
}

export const diagnosisStore = new DiagnosisState();
