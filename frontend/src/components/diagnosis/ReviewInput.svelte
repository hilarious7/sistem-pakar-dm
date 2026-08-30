<script lang="ts">
  let { patient, selectedSymptoms = [], selectedRiskFactors = [] } = $props<{
    patient: any;
    selectedSymptoms: any[];
    selectedRiskFactors: any[];
  }>();
</script>

<div>
  <h3>Review Input Konsultasi</h3>
  <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">
    Pastikan data yang Anda masukkan sudah benar sebelum memproses diagnosis (dummy).
  </p>
  
  <div style="background: var(--background); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
    <h4>Data Pasien</h4>
    <ul style="list-style: none; padding: 0; margin-top: 0.5rem; font-size: 0.9rem;">
      <li><strong>Nama:</strong> {patient.nama}</li>
      <li><strong>Usia:</strong> {patient.usia} tahun</li>
      <li><strong>Jenis Kelamin:</strong> {patient.jenisKelamin}</li>
      <li><strong>BB/TB:</strong> {patient.beratBadan} kg / {patient.tinggiBadan} cm</li>
      <li><strong>Aktivitas Fisik:</strong> {patient.aktivitasFisik}</li>
      {#if patient.jenisKelamin === 'perempuan'}
        <li><strong>Status Hamil:</strong> {patient.statusKehamilan ? `Ya (${patient.usiaKehamilan} minggu)` : 'Tidak'}</li>
      {/if}
    </ul>
  </div>

  <div style="background: var(--background); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
    <h4>Gejala (Dummy)</h4>
    {#if selectedSymptoms.length > 0}
      <ul style="padding-left: 1.25rem; margin-top: 0.5rem; font-size: 0.9rem;">
        {#each selectedSymptoms as sym}
          <li>{sym.nama}</li>
        {/each}
      </ul>
    {:else}
      <p style="font-size: 0.9rem; margin-top: 0.5rem;">Tidak ada gejala dipilih.</p>
    {/if}
  </div>

  <div style="background: var(--background); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
    <h4>Faktor Risiko (Dummy)</h4>
    {#if selectedRiskFactors.length > 0}
      <ul style="padding-left: 1.25rem; margin-top: 0.5rem; font-size: 0.9rem;">
        {#each selectedRiskFactors as rf}
          <li>{rf.nama}</li>
        {/each}
      </ul>
    {:else}
      <p style="font-size: 0.9rem; margin-top: 0.5rem;">Tidak ada faktor risiko dipilih.</p>
    {/if}
  </div>
</div>
