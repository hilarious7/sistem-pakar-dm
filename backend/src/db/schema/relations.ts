import { relations } from 'drizzle-orm';
import { penyakit } from './penyakit.schema';
import { gejala } from './gejala.schema';
import { rules, ruleGejala } from './rules.schema';
import { massFunctions } from './mass-functions.schema';
import {
  konsultasi, hasilDiagnosis, konsultasiGejala,
  konsultasiFaktorRisiko, konsultasiKondisiAkut,
  komplikasiRiwayat, rekomendasiHasil,
} from './konsultasi.schema';

export const penyakitRelations = relations(penyakit, ({ many }) => ({
  rules: many(rules),
  hasilDiagnosis: many(hasilDiagnosis),
}));

export const gejalaRelations = relations(gejala, ({ many }) => ({
  ruleGejala: many(ruleGejala),
  massFunctions: many(massFunctions),
  konsultasiGejala: many(konsultasiGejala),
}));

export const rulesRelations = relations(rules, ({ one, many }) => ({
  penyakit: one(penyakit, { fields: [rules.penyakitId], references: [penyakit.id] }),
  gejala: many(ruleGejala),
}));

export const ruleGejalaRelations = relations(ruleGejala, ({ one }) => ({
  rule: one(rules, { fields: [ruleGejala.ruleId], references: [rules.id] }),
  gejala: one(gejala, { fields: [ruleGejala.gejalaId], references: [gejala.id] }),
}));

export const massFunctionsRelations = relations(massFunctions, ({ one }) => ({
  gejala: one(gejala, { fields: [massFunctions.gejalaId], references: [gejala.id] }),
}));

export const konsultasiRelations = relations(konsultasi, ({ many }) => ({
  hasilDiagnosis: many(hasilDiagnosis),
  gejala: many(konsultasiGejala),
  faktorRisiko: many(konsultasiFaktorRisiko),
  kondisiAkut: many(konsultasiKondisiAkut),
  komplikasiRiwayat: many(komplikasiRiwayat),
  rekomendasiHasil: many(rekomendasiHasil),
}));

export const hasilDiagnosisRelations = relations(hasilDiagnosis, ({ one }) => ({
  konsultasi: one(konsultasi, { fields: [hasilDiagnosis.konsultasiId], references: [konsultasi.id] }),
  penyakit: one(penyakit, { fields: [hasilDiagnosis.penyakitId], references: [penyakit.id] }),
}));

export const konsultasiGejalaRelations = relations(konsultasiGejala, ({ one }) => ({
  konsultasi: one(konsultasi, { fields: [konsultasiGejala.konsultasiId], references: [konsultasi.id] }),
  gejala: one(gejala, { fields: [konsultasiGejala.gejalaId], references: [gejala.id] }),
}));

export const konsultasiFaktorRisikoRelations = relations(konsultasiFaktorRisiko, ({ one }) => ({
  konsultasi: one(konsultasi, { fields: [konsultasiFaktorRisiko.konsultasiId], references: [konsultasi.id] }),
}));

export const konsultasiKondisiAkutRelations = relations(konsultasiKondisiAkut, ({ one }) => ({
  konsultasi: one(konsultasi, { fields: [konsultasiKondisiAkut.konsultasiId], references: [konsultasi.id] }),
}));

export const komplikasiRiwayatRelations = relations(komplikasiRiwayat, ({ one }) => ({
  konsultasi: one(konsultasi, { fields: [komplikasiRiwayat.konsultasiId], references: [konsultasi.id] }),
}));

export const rekomendasiHasilRelations = relations(rekomendasiHasil, ({ one }) => ({
  konsultasi: one(konsultasi, { fields: [rekomendasiHasil.konsultasiId], references: [konsultasi.id] }),
}));
