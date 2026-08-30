import type { DiagnosisInput, DiagnosisResult } from './diagnosis.types';
import { ForwardChainingService } from './forward-chaining.service';
import { DempsterShaferService } from './dempster-shafer.service';

const DISCLAIMER = 'Hasil ini merupakan indikasi awal berdasarkan gejala yang diinputkan. ' +
  'Sistem ini bukan pengganti diagnosis dokter. ' +
  'Disarankan melakukan pemeriksaan medis lebih lanjut.';

const DISCLAIMER_DMG = 'Untuk Diabetes Melitus Gestasional, diperlukan konfirmasi melalui ' +
  'tes toleransi glukosa oral (TTGO) dan pemeriksaan prenatal.';

export class DiagnosisService {
  private fc = new ForwardChainingService();
  private ds = new DempsterShaferService();

  async diagnose(input: DiagnosisInput): Promise<DiagnosisResult> {
    const fcResult = await this.fc.evaluate(input.gejalaIds);
    const evidenceIds = [...new Set(
      fcResult.activeHypotheses.flatMap(h => h.supportingEvidenceIds)
    )];
    const dsResult = await this.ds.evaluate(evidenceIds);
    const disclaimer = input.pasien.statusKehamilan
      ? DISCLAIMER + ' ' + DISCLAIMER_DMG : DISCLAIMER;

    return {
      konsultasiId: 0,
      diagnosis: dsResult.beliefs,
      forwardChaining: fcResult,
      dempsterShafer: dsResult,
      warnings: [],
      komplikasiRiwayat: [],
      disclaimer,
    };
  }
}
