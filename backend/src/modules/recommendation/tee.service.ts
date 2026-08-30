import type { TEEResult } from './recommendation.types';
import { ACTIVITY_FACTORS, type AktivitasFisik } from '../../types/common.types';

export class TEEService {
  calculate(bmr: number, aktivitas: AktivitasFisik): TEEResult {
    const factor = ACTIVITY_FACTORS[aktivitas];
    if (!factor) throw new Error('Aktivitas fisik tidak valid: ' + aktivitas);
    return { tee: Math.round(bmr * factor * 100) / 100, activityFactor: factor };
  }
}
