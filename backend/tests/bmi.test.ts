import { describe, test, expect } from 'bun:test';
import { BMIService } from '../src/modules/recommendation/bmi.service';

const svc = new BMIService();

describe('BMI Service', () => {
  test('normal weight', () => {
    const r = svc.calculate(70, 175);
    expect(r.bmi).toBeCloseTo(22.86, 1);
    expect(r.kategori).toBe('Normal');
  });

  test('underweight', () => {
    const r = svc.calculate(45, 170);
    expect(r.kategori).toBe('Berat badan kurang');
  });

  test('overweight', () => {
    const r = svc.calculate(80, 170);
    expect(r.kategori).toBe('Berat badan lebih');
  });

  test('obese', () => {
    const r = svc.calculate(100, 170);
    expect(r.kategori).toBe('Obesitas');
  });

  test('returns positive number', () => {
    const r = svc.calculate(65, 160);
    expect(typeof r.bmi).toBe('number');
    expect(r.bmi).toBeGreaterThan(0);
  });
});
