import { db } from '../index';
import { penyakit } from '../schema';

async function seed() {
  console.log('Seeding database...');
  await db.insert(penyakit).values([
    {
      kode: 'T1',
      nama: 'Diabetes Melitus Tipe 1',
      deskripsi: 'Diabetes melitus yang disebabkan oleh kerusakan sel beta pankreas.',
      status: 'active',
    },
    {
      kode: 'T2',
      nama: 'Diabetes Melitus Tipe 2',
      deskripsi: 'Diabetes melitus yang disebabkan oleh resistensi insulin.',
      status: 'active',
    },
    {
      kode: 'DMG',
      nama: 'Diabetes Melitus Gestasional',
      deskripsi: 'Diabetes melitus yang terdiagnosis pada masa kehamilan.',
      status: 'active',
    },
  ]).onConflictDoNothing();
  console.log('Seed completed: 3 penyakit inserted.');
  process.exit(0);
}

seed().catch((err) => { console.error('Seed failed:', err); process.exit(1); });
