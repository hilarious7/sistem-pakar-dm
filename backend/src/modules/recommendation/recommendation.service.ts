import type { RecommendationInput, RecommendationResult } from './recommendation.types';
import type { AktivitasFisik } from '../../types/common.types';
import { BMIService } from './bmi.service';
import { BMRService } from './bmr.service';
import { TEEService } from './tee.service';
import { MealRecommendationService } from './meal-recommendation.service';

export class RecommendationService {
  private bmi = new BMIService();
  private bmr = new BMRService();
  private tee = new TEEService();
  private meal = new MealRecommendationService();

  calculate(input: RecommendationInput): RecommendationResult {
    const bmiR = this.bmi.calculate(input.beratBadan, input.tinggiBadan);
    const bmrR = this.bmr.calculate(
      input.beratBadan, input.tinggiBadan, input.usia, input.jenisKelamin
    );
    const teeR = this.tee.calculate(bmrR.bmr, input.aktivitasFisik as AktivitasFisik);
    const distribusi = this.meal.calculateDistribution(teeR.tee);
    return {
      bmi: bmiR, bmr: bmrR, tee: teeR,
      kebutuhanKalori: teeR.tee,
      distribusiMakronutrien: distribusi,
    };
  }
}
