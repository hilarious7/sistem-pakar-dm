export interface RecommendationInput {
  beratBadan: number;
  tinggiBadan: number;
  usia: number;
  jenisKelamin: 'laki-laki' | 'perempuan';
  aktivitasFisik: string;
}

export interface BMIResult { bmi: number; kategori: string; }
export interface BMRResult { bmr: number; }
export interface TEEResult { tee: number; activityFactor: number; }

export interface RecommendationResult {
  bmi: BMIResult;
  bmr: BMRResult;
  tee: TEEResult;
  kebutuhanKalori: number;
  distribusiMakronutrien: MacroDistribution;
}

export interface MacroDistribution {
  karbohidrat: MacroRange;
  protein: MacroRange;
  lemak: MacroRange;
}

export interface MacroRange {
  persentaseMin: number;
  persentaseMax: number;
  gramMin: number;
  gramMax: number;
  kaloriMin: number;
  kaloriMax: number;
}
