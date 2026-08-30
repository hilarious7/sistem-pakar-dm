import { pgTable, serial, integer, varchar, decimal, text, timestamp } from 'drizzle-orm/pg-core';
import { gejala } from './gejala.schema';

/**
 * Mass functions Dempster-Shafer.
 * hipotesis supports hypothesis sets: "T1","T2","DMG","T1,T2","T1,DMG","T2,DMG","T1,T2,DMG","THETA"
 * Constraint: total nilai_belief per gejala_id harus = 1.0
 * PENTING: Nilai TIDAK boleh diisi sembarangan. Harus dari validasi pakar.
 */
export const massFunctions = pgTable('mass_functions', {
  id: serial('id').primaryKey(),
  gejalaId: integer('gejala_id').notNull().references(() => gejala.id),
  hipotesis: varchar('hipotesis', { length: 50 }).notNull(),
  nilaiBelief: decimal('nilai_belief', { precision: 5, scale: 4 }).notNull(),
  sumber: varchar('sumber', { length: 200 }),
  pakar: varchar('pakar', { length: 100 }),
  statusValidasi: varchar('status_validasi', { length: 20 }).notNull().default('draft'),
  tanggalValidasi: timestamp('tanggal_validasi'),
  catatan: text('catatan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
