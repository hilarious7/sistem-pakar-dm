export type PenyakitKode = 'T1' | 'T2' | 'DMG';
export type ValidationStatus = 'draft' | 'validated' | 'rejected';
export type EntityStatus = 'active' | 'inactive';
export type JenisKelamin = 'laki-laki' | 'perempuan';
export type AktivitasFisik = 'sedentari' | 'ringan' | 'sedang' | 'berat' | 'sangat_berat';
export type TingkatUrgensi = 'rendah' | 'sedang' | 'tinggi';

export const ACTIVITY_FACTORS: Record<AktivitasFisik, number> = {
  sedentari: 1.2,
  ringan: 1.375,
  sedang: 1.55,
  berat: 1.725,
  sangat_berat: 1.9,
};

export const BMI_CATEGORIES = [
  { max: 18.5, label: 'Berat badan kurang' },
  { max: 25.0, label: 'Normal' },
  { max: 30.0, label: 'Berat badan lebih' },
  { max: Infinity, label: 'Obesitas' },
] as const;
