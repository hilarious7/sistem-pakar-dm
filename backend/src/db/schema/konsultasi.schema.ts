import { pgTable, serial, integer, varchar, decimal, text, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { penyakit } from './penyakit.schema';
import { gejala } from './gejala.schema';
import { faktorRisiko } from './faktor-risiko.schema';
import { kondisiAkut } from './kondisi-akut.schema';
import { komplikasi } from './komplikasi.schema';

/** Sesi konsultasi pasien. */
export const konsultasi = pgTable('konsultasi', {
  id: serial('id').primaryKey(),
  tanggal: timestamp('tanggal').defaultNow().notNull(),
  namaPasien: varchar('nama_pasien', { length: 100 }).notNull(),
  usia: integer('usia').notNull(),
  jenisKelamin: varchar('jenis_kelamin', { length: 20 }).notNull(),
  beratBadan: decimal('berat_badan', { precision: 5, scale: 2 }).notNull(),
  tinggiBadan: decimal('tinggi_badan', { precision: 5, scale: 2 }).notNull(),
  aktivitasFisik: varchar('aktivitas_fisik', { length: 30 }).notNull(),
  statusKehamilan: boolean('status_kehamilan').notNull().default(false),
  usiaKehamilan: integer('usia_kehamilan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/** Hasil diagnosis per hipotesis, terpisah dari konsultasi. */
export const hasilDiagnosis = pgTable('hasil_diagnosis', {
  id: serial('id').primaryKey(),
  konsultasiId: integer('konsultasi_id').notNull().references(() => konsultasi.id),
  penyakitId: integer('penyakit_id').notNull().references(() => penyakit.id),
  belief: decimal('belief', { precision: 5, scale: 4 }).notNull(),
  plausibility: decimal('plausibility', { precision: 5, scale: 4 }).notNull(),
  ranking: integer('ranking').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/** Gejala yang dipilih dalam konsultasi. */
export const konsultasiGejala = pgTable('konsultasi_gejala', {
  id: serial('id').primaryKey(),
  konsultasiId: integer('konsultasi_id').notNull().references(() => konsultasi.id),
  gejalaId: integer('gejala_id').notNull().references(() => gejala.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/** Faktor risiko yang dipilih dalam konsultasi. */
export const konsultasiFaktorRisiko = pgTable('konsultasi_faktor_risiko', {
  id: serial('id').primaryKey(),
  konsultasiId: integer('konsultasi_id').notNull().references(() => konsultasi.id),
  faktorRisikoId: integer('faktor_risiko_id').notNull().references(() => faktorRisiko.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/** Kondisi akut yang dipilih dalam konsultasi. */
export const konsultasiKondisiAkut = pgTable('konsultasi_kondisi_akut', {
  id: serial('id').primaryKey(),
  konsultasiId: integer('konsultasi_id').notNull().references(() => konsultasi.id),
  kondisiAkutId: integer('kondisi_akut_id').notNull().references(() => kondisiAkut.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/**
 * Riwayat komplikasi pasien.
 * TIDAK berpartisipasi dalam Forward Chaining maupun Dempster-Shafer.
 * Murni informasional dan untuk trigger evaluasi medis.
 */
export const komplikasiRiwayat = pgTable('komplikasi_riwayat', {
  id: serial('id').primaryKey(),
  konsultasiId: integer('konsultasi_id').notNull().references(() => konsultasi.id),
  komplikasiId: integer('komplikasi_id').notNull().references(() => komplikasi.id),
  status: varchar('status', { length: 20 }).notNull().default('terindikasi'),
  catatan: text('catatan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/** Hasil perhitungan rekomendasi pola makan. */
export const rekomendasiHasil = pgTable('rekomendasi_hasil', {
  id: serial('id').primaryKey(),
  konsultasiId: integer('konsultasi_id').notNull().references(() => konsultasi.id),
  bmi: decimal('bmi', { precision: 5, scale: 2 }).notNull(),
  kategoriBmi: varchar('kategori_bmi', { length: 30 }).notNull(),
  bmr: decimal('bmr', { precision: 8, scale: 2 }).notNull(),
  tee: decimal('tee', { precision: 8, scale: 2 }).notNull(),
  kebutuhanKalori: decimal('kebutuhan_kalori', { precision: 8, scale: 2 }).notNull(),
  rekomendasi: jsonb('rekomendasi'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
