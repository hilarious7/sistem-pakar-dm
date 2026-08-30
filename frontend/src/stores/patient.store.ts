import type { PatientData } from '../types/diagnosis.types';

export let currentPatient: PatientData | null = null;

export function setPatient(patient: PatientData) {
  currentPatient = patient;
}

export function clearPatient() {
  currentPatient = null;
}
