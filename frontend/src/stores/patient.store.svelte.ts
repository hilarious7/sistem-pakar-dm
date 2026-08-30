
import type { PatientData } from '../types/diagnosis.types';

class PatientState {
  data = $state<PatientData | null>(null);

  set(patient: PatientData) {
    this.data = patient;
  }

  clear() {
    this.data = null;
  }
}

export const patientStore = new PatientState();
