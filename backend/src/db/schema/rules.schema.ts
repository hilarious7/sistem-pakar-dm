import { pgTable, serial, varchar, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { penyakit } from './penyakit.schema';
import { gejala } from './gejala.schema';

/** Rules Forward Chaining (IF-THEN). Data diisi setelah validasi pakar. */
export const rules = pgTable('rules', {
  id: serial('id').primaryKey(),
  kodeRule: varchar('kode_rule', { length: 20 }).notNull().unique(),
  namaRule: varchar('nama_rule', { length: 200 }).notNull(),
  kesimpulan: text('kesimpulan').notNull(),
  penyakitId: integer('penyakit_id').references(() => penyakit.id),
  prioritas: integer('prioritas').notNull().default(0),
  status: varchar('status', { length: 20 }).notNull().default('draft'),
  sumber: varchar('sumber', { length: 200 }),
  catatan: text('catatan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/** Gejala sebagai kondisi IF dalam rule. */
export const ruleGejala = pgTable('rule_gejala', {
  id: serial('id').primaryKey(),
  ruleId: integer('rule_id').notNull().references(() => rules.id),
  gejalaId: integer('gejala_id').notNull().references(() => gejala.id),
  operator: varchar('operator', { length: 10 }).notNull().default('AND'),
  urutan: integer('urutan').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
