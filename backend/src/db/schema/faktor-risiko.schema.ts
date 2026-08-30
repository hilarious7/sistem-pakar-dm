import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

/** Faktor risiko - informasi pendukung, BUKAN penentu diagnosis otomatis. */
export const faktorRisiko = pgTable('faktor_risiko', {
  id: serial('id').primaryKey(),
  kode: varchar('kode', { length: 10 }).notNull().unique(),
  nama: varchar('nama', { length: 150 }).notNull(),
  deskripsi: text('deskripsi'),
  status: varchar('status', { length: 20 }).notNull().default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
