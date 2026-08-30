export { penyakit } from './schema/penyakit.schema';
export { gejala } from './schema/gejala.schema';
export { faktorRisiko } from './schema/faktor-risiko.schema';
export { kondisiAkut } from './schema/kondisi-akut.schema';
export { komplikasi } from './schema/komplikasi.schema';
export { rules, ruleGejala } from './schema/rules.schema';
export { massFunctions } from './schema/mass-functions.schema';
export { gejalaPenyakit, faktorRisikoPenyakit } from './schema/relasi-penyakit.schema';
export {
  konsultasi, hasilDiagnosis, konsultasiGejala,
  konsultasiFaktorRisiko, konsultasiKondisiAkut,
  komplikasiRiwayat, rekomendasiHasil,
} from './schema/konsultasi.schema';
export * from './schema/relations';
