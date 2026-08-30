import { describe, test, expect } from 'bun:test';
import { BMRService } from '../src/modules/recommendation/bmr.service';

const svc = new BMRService();

describe('BMR Service', () => {
  test('male Harris-Benedict', () => {
    const r = svc.calculate(70, 175, 30, 'laki-laki');
    const expected = 66.5 + (13.75 * 70) + (5.003 * 175) - (6.755 * 30);
    expect(r.bmr).toBeCloseTo(expected, 1);
  });

  test('female Harris-Benedict', () => {
    const r = svc.calculate(60, 160, 25, 'perempuan');
    const expected = 655.1 + (9.563 * 60) + (1.850 * 160) - (4.676 * 25);
    expect(r.bmr).toBeCloseTo(expected, 1);
  });

  test('returns positive value', () => {
    const r = svc.calculate(70, 175, 30, 'laki-laki');
    expect(r.bmr).toBeGreaterThan(0);
  });
});
