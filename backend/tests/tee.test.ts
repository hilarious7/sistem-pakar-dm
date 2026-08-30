import { describe, test, expect } from 'bun:test';
import { TEEService } from '../src/modules/recommendation/tee.service';

const svc = new TEEService();
const bmr = 1500;

describe('TEE Service', () => {
  test('sedentary', () => {
    const r = svc.calculate(bmr, 'sedentari');
    expect(r.tee).toBeCloseTo(bmr * 1.2, 1);
    expect(r.activityFactor).toBe(1.2);
  });

  test('light activity', () => {
    const r = svc.calculate(bmr, 'ringan');
    expect(r.tee).toBeCloseTo(bmr * 1.375, 1);
  });

  test('moderate activity', () => {
    const r = svc.calculate(bmr, 'sedang');
    expect(r.tee).toBeCloseTo(bmr * 1.55, 1);
  });

  test('heavy activity', () => {
    const r = svc.calculate(bmr, 'berat');
    expect(r.tee).toBeCloseTo(bmr * 1.725, 1);
  });

  test('very heavy activity', () => {
    const r = svc.calculate(bmr, 'sangat_berat');
    expect(r.tee).toBeCloseTo(bmr * 1.9, 1);
  });

  test('invalid activity throws', () => {
    expect(() => svc.calculate(bmr, 'invalid' as any)).toThrow();
  });
});
