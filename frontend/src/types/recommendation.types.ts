export interface RecommendationInput {
  beratBadan: number;
  tinggiBadan: number;
  usia: number;
  jenisKelamin: 'laki-laki' | 'perempuan';
  aktivitasFisik: string;
}

export interface MacroRange {
  persentaseMin: number;
  persentaseMax: number;
  gramMin: number;
  gramMax: number;
  kaloriMin: number;
  kaloriMax: number;
}

export interface RecommendationResult {
  bmi: { bmi: number; kategori: string };
  bmr: { bmr: number };
  tee: { tee: number; activityFactor: number };
  kebutuhanKalori: number;
  distribusiMakronutrien: {
    karbohidrat: MacroRange;
    protein: MacroRange;
    lemak: MacroRange;
  };
}
