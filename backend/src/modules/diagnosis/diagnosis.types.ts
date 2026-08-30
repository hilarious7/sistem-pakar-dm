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

export interface ForwardChainingResult {
  activeHypotheses: ActiveHypothesis[];
  firedRules: FiredRule[];
  unmatchedGejalaIds: number[];
}

export interface ActiveHypothesis {
  penyakitId: number;
  penyakitKode: string;
  supportingRules: FiredRule[];
  supportingEvidenceIds: number[];
}

export interface FiredRule {
  ruleId: number;
  kodeRule: string;
  namaRule: string;
  kesimpulan: string;
  matchedGejalaIds: number[];
}

export interface MassFunction {
  hypothesisSet: string;
  mass: number;
}

export interface DSResult {
  beliefs: HypothesisBelief[];
  conflictFactor: number;
}

export interface HypothesisBelief {
  penyakitKode: string;
  belief: number;
  plausibility: number;
  ranking: number;
}

export interface DiagnosisResult {
  konsultasiId: number;
  diagnosis: HypothesisBelief[];
  forwardChaining: ForwardChainingResult;
  dempsterShafer: DSResult;
  warnings: AcuteWarning[];
  komplikasiRiwayat: KomplikasiInfo[];
  disclaimer: string;
}

export interface AcuteWarning {
  kondisiAkutId: number;
  nama: string;
  tingkatUrgensi: string;
  pesanWarning: string;
}

export interface KomplikasiInfo {
  komplikasiId: number;
  nama: string;
  rekomendasiEvaluasi: string;
}
