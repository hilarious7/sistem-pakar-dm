
import type { Gejala, FaktorRisiko } from '../../types/knowledge-base.types';

// DATA DUMMY - TEST ONLY - NOT MEDICAL DATA
export const mockSymptoms: Gejala[] = [
  { id: 1, kode: 'TEST_G01', nama: 'Gejala Uji Coba 1 (Misal: Sering Haus)', kategori: 'Umum', deskripsi: 'Data Dummy', status: 'active' },
  { id: 2, kode: 'TEST_G02', nama: 'Gejala Uji Coba 2 (Misal: Cepat Lelah)', kategori: 'Umum', deskripsi: 'Data Dummy', status: 'active' },
  { id: 3, kode: 'TEST_G03', nama: 'Gejala Uji Coba 3 (Misal: Berat Badan Turun)', kategori: 'Spesifik', deskripsi: 'Data Dummy', status: 'active' },
  { id: 4, kode: 'TEST_G04', nama: 'Gejala Uji Coba 4 (Misal: Pandangan Kabur)', kategori: 'Komplikasi', deskripsi: 'Data Dummy', status: 'active' },
];

export const mockRiskFactors: FaktorRisiko[] = [
  { id: 1, kode: 'TEST_F01', nama: 'Faktor Risiko 1 (Misal: Riwayat Keluarga)', deskripsi: 'Data Dummy', status: 'active' },
  { id: 2, kode: 'TEST_F02', nama: 'Faktor Risiko 2 (Misal: Usia > 45)', deskripsi: 'Data Dummy', status: 'active' },
  { id: 3, kode: 'TEST_F03', nama: 'Faktor Risiko 3 (Misal: Obesitas)', deskripsi: 'Data Dummy', status: 'active' },
];

export const mockDiagnosisResult = [
  { penyakitKode: 'T2', nama: 'Diabetes Melitus Tipe 2 (DUMMY)', belief: 0.85, plausibility: 0.90, ranking: 1 },
  { penyakitKode: 'T1', nama: 'Diabetes Melitus Tipe 1 (DUMMY)', belief: 0.10, plausibility: 0.15, ranking: 2 },
];
