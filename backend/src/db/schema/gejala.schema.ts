import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

/** Gejala klinis - evidence utama diagnosis. Data diisi setelah validasi pakar. */
export const gejala = pgTable('gejala', {
  id: serial('id').primaryKey(),
  kode: varchar('kode', { length: 10 }).notNull().unique(),
  nama: varchar('nama', { length: 150 }).notNull(),
  kategori: varchar('kategori', { length: 50 }),
  deskripsi: text('deskripsi'),
  status: varchar('status', { length: 20 }).notNull().default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
