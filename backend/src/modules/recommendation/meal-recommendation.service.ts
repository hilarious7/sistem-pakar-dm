import type { MacroDistribution } from './recommendation.types';

export class MealRecommendationService {
  calculateDistribution(totalKalori: number): MacroDistribution {
    return {
      karbohidrat: {
        persentaseMin: 45, persentaseMax: 65,
        kaloriMin: Math.round(totalKalori * 0.45),
        kaloriMax: Math.round(totalKalori * 0.65),
        gramMin: Math.round((totalKalori * 0.45) / 4),
        gramMax: Math.round((totalKalori * 0.65) / 4),
      },
      protein: {
        persentaseMin: 10, persentaseMax: 35,
        kaloriMin: Math.round(totalKalori * 0.10),
        kaloriMax: Math.round(totalKalori * 0.35),
        gramMin: Math.round((totalKalori * 0.10) / 4),
        gramMax: Math.round((totalKalori * 0.35) / 4),
      },
      lemak: {
        persentaseMin: 20, persentaseMax: 35,
        kaloriMin: Math.round(totalKalori * 0.20),
        kaloriMax: Math.round(totalKalori * 0.35),
        gramMin: Math.round((totalKalori * 0.20) / 9),
        gramMax: Math.round((totalKalori * 0.35) / 9),
      },
    };
  }
}
