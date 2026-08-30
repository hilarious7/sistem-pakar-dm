import type { BMRResult } from './recommendation.types';

export class BMRService {
  calculate(bb: number, tb: number, usia: number, jk: 'laki-laki' | 'perempuan'): BMRResult {
    const bmr = jk === 'laki-laki'
      ? 66.5 + (13.75 * bb) + (5.003 * tb) - (6.755 * usia)
      : 655.1 + (9.563 * bb) + (1.850 * tb) - (4.676 * usia);
    return { bmr: Math.round(bmr * 100) / 100 };
  }
}
