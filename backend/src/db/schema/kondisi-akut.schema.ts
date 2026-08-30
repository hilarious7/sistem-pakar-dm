import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

/** Kondisi akut - untuk WARNING, BUKAN evidence diagnosis. */
export const kondisiAkut = pgTable('kondisi_akut', {
  id: serial('id').primaryKey(),
  kode: varchar('kode', { length: 10 }).notNull().unique(),
  nama: varchar('nama', { length: 150 }).notNull(),
  deskripsi: text('deskripsi'),
  tingkatUrgensi: varchar('tingkat_urgensi', { length: 20 }).notNull().default('sedang'),
  pesanWarning: text('pesan_warning'),
  status: varchar('status', { length: 20 }).notNull().default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
