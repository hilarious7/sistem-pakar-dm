export interface DiagnosisInput {
  gejalaIds: number[];
  faktorRisikoIds: number[];
  kondisiAkutIds: number[];
  komplikasiIds: number[];
  pasien: PatientData;
}

export interface PatientData {
  nama: string;
  usia: number;
  jenisKelamin: 'laki-laki' | 'perempuan';
  beratBadan: number;
  tinggiBadan: number;
  aktivitasFisik: string;
  statusKehamilan: boolean;
  usiaKehamilan?: number;
}

export interface HypothesisBelief {
  penyakitKode: string;
  belief: number;
  plausibility: number;
  ranking: number;
  nama?: string;
}

export interface AcuteWarning {
  kondisiAkutId: number;
  nama: string;
  tingkatUrgensi: string;
  pesanWarning: string;
}

export interface DiagnosisResult {
  konsultasiId: number;
  diagnosis: HypothesisBelief[];
  warnings: AcuteWarning[];
  komplikasiRiwayat: { komplikasiId: number; nama: string; rekomendasiEvaluasi: string }[];
  disclaimer: string;
}
