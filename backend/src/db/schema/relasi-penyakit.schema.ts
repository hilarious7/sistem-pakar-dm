import { pgTable, serial, integer, varchar, text, timestamp, unique } from 'drizzle-orm/pg-core';
import { penyakit } from './penyakit.schema';
import { gejala } from './gejala.schema';
import { faktorRisiko } from './faktor-risiko.schema';

/** Relasi many-to-many gejala dan penyakit. */
export const gejalaPenyakit = pgTable('gejala_penyakit', {
  id: serial('id').primaryKey(),
  gejalaId: integer('gejala_id').notNull().references(() => gejala.id),
  penyakitId: integer('penyakit_id').notNull().references(() => penyakit.id),
  evidenceStatus: varchar('evidence_status', { length: 20 }).notNull().default('primary'),
  sumber: varchar('sumber', { length: 200 }),
  catatan: text('catatan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => ({
  unq: unique('unq_gejala_penyakit').on(t.gejalaId, t.penyakitId),
}));

/** Relasi many-to-many faktor risiko dan penyakit. */
export const faktorRisikoPenyakit = pgTable('faktor_risiko_penyakit', {
  id: serial('id').primaryKey(),
  faktorRisikoId: integer('faktor_risiko_id').notNull().references(() => faktorRisiko.id),
  penyakitId: integer('penyakit_id').notNull().references(() => penyakit.id),
  status: varchar('status', { length: 20 }).notNull().default('relevant'),
  sumber: varchar('sumber', { length: 200 }),
  catatan: text('catatan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => ({
  unq: unique('unq_faktor_risiko_penyakit').on(t.faktorRisikoId, t.penyakitId),
}));
