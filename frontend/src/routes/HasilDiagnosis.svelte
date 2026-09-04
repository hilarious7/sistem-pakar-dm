<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { diagnosisStore } from '../stores/diagnosis.store.svelte';
  import Button from '../components/ui/Button.svelte';
  import Card from '../components/ui/Card.svelte';
  import Alert from '../components/ui/Alert.svelte';

  const result = diagnosisStore.result;
</script>

<div class="container container-form py-8">
  <div class="mb-6 text-center">
    <h1>Hasil Diagnosis</h1>
    <p class="text-secondary">Analisis awal berdasarkan gejala dan faktor risiko.</p>
  </div>

  <Alert type="warning" title="BUKAN HASIL MEDIS - HANYA TESTING">
    Aplikasi ini masih dalam tahap pengembangan. Hasil diagnosis ini menggunakan data dummy dan belum divalidasi oleh pakar medis.
  </Alert>

  {#if result && result.diagnosis.length > 0}
    <Card class="mb-6">
      <h2 class="mb-4">Kemungkinan Tertinggi</h2>
      <div class="hypothesis-list">
        {#each result.diagnosis as hypo, index}
          <div class="hypo-item {index === 0 ? 'top-result' : ''}">
            <div class="hypo-header">
              <span class="rank">#{hypo.ranking}</span>
              <h3>{hypo.nama || hypo.penyakitKode}</h3>
            </div>
            
            <div class="progress-bar-container mt-2">
              <div class="progress-bar" style="width: {hypo.belief * 100}%"></div>
            </div>
            
            <div class="hypo-details mt-2">
              <span>Tingkat Keyakinan (Belief)</span>
              <strong>{(hypo.belief * 100).toFixed(2)}%</strong>
            </div>
          </div>
        {/each}
      </div>
    </Card>

    <div class="actions flex justify-between mt-6">
      <Button variant="outline" onclick={() => push('/konsultasi')}>Ulangi Konsultasi</Button>
      <Button variant="primary" onclick={() => push('/rekomendasi')}>Lihat Rekomendasi Gizi</Button>
    </div>
  {:else}
    <Alert type="error" title="Data Tidak Ditemukan">
      Gagal memuat hasil diagnosis. Silakan kembali dan isi ulang form konsultasi.
    </Alert>
    <div class="mt-4 text-center">
      <Button onclick={() => push('/konsultasi')}>Kembali ke Konsultasi</Button>
    </div>
  {/if}
</div>

<style>
  .py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }
  .hypothesis-list { display: flex; flex-direction: column; gap: var(--space-4); }
  .hypo-item {
    padding: var(--space-4);
    border: 1px solid var(--border);
    border-radius: var(--radius-input);
    background-color: var(--background);
  }
  .hypo-item.top-result {
    border-color: var(--primary);
    background-color: var(--primary-light);
  }
  .hypo-header {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  .hypo-header h3 { margin: 0; }
  .rank {
    font-weight: 700;
    color: var(--primary);
    background: white;
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius-badge);
    font-size: 14px;
  }
  .progress-bar-container {
    width: 100%;
    height: 8px;
    background-color: var(--border);
    border-radius: 4px;
    overflow: hidden;
  }
  .progress-bar {
    height: 100%;
    background-color: var(--primary);
    border-radius: 4px;
  }
  .hypo-details {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--text-secondary);
  }
</style>
