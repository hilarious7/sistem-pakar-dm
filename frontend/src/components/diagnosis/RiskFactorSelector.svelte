<script lang="ts">
  import Checkbox from '../ui/Checkbox.svelte';
  import Alert from '../ui/Alert.svelte';
  
  let { riskFactors = [], selectedIds = $bindable([]) } = $props<{
    riskFactors: any[];
    selectedIds: number[];
  }>();
</script>

<div>
  <h3>Informasi Faktor Risiko</h3>
  <Alert type="info">
    Data ini merupakan informasi pendukung dan belum menjadi bagian dari perhitungan diagnosis pada tahap pengembangan.
  </Alert>
  <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">
    Pilih faktor risiko yang sesuai dengan riwayat Anda (Data Dummy).
  </p>
  
  {#each riskFactors as rf}
    <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md); margin-bottom: 0.5rem;">
      <Checkbox id={`rf_${rf.id}`} label={`${rf.kode} - ${rf.nama}`} value={rf.id} bind:group={selectedIds} />
    </div>
  {/each}
</div>
