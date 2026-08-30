import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

/** Komplikasi DM - TIDAK BOLEH jadi evidence diagnosis atau mengubah belief. */
export const komplikasi = pgTable('komplikasi', {
  id: serial('id').primaryKey(),
  kode: varchar('kode', { length: 10 }).notNull().unique(),
  nama: varchar('nama', { length: 150 }).notNull(),
  deskripsi: text('deskripsi'),
  rekomendasiEvaluasi: text('rekomendasi_evaluasi'),
  status: varchar('status', { length: 20 }).notNull().default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
