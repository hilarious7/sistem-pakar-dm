import type { ForwardChainingResult } from './diagnosis.types';

/**
 * Forward Chaining Service.
 * Rules dimuat dari database, BUKAN hard-coded.
 * TODO: Implementasi setelah knowledge base tersedia.
 */
export class ForwardChainingService {
  async evaluate(gejalaIds: number[]): Promise<ForwardChainingResult> {
    // TODO: Load rules dari DB, evaluasi IF-THEN, return hipotesis aktif
    return {
      activeHypotheses: [],
      firedRules: [],
      unmatchedGejalaIds: [...gejalaIds],
    };
  }
}
