import type { BMIResult } from './recommendation.types';
import { BMI_CATEGORIES } from '../../types/common.types';

export class BMIService {
  calculate(beratBadan: number, tinggiBadan: number): BMIResult {
    const tinggiM = tinggiBadan / 100;
    const bmi = beratBadan / (tinggiM * tinggiM);
    const kategori = BMI_CATEGORIES.find(c => bmi < c.max)?.label ?? 'Obesitas';
    return { bmi: Math.round(bmi * 100) / 100, kategori };
  }
}
