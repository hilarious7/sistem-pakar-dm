<script lang="ts">
  import Checkbox from '../ui/Checkbox.svelte';
  import Alert from '../ui/Alert.svelte';
  
  let { symptoms = [], selectedIds = $bindable([]) } = $props<{
    symptoms: any[];
    selectedIds: number[];
  }>();
</script>

<div>
  <h3>Gejala Klinis</h3>
  <Alert type="warning" title="TEST ONLY - NOT MEDICAL DATA">
    Gejala di bawah ini adalah data dummy untuk keperluan testing UI. Belum divalidasi oleh pakar medis.
  </Alert>
  <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">
    Pilih gejala yang Anda alami.
  </p>
  
  {#each symptoms as sym}
    <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md); margin-bottom: 0.5rem;">
      <Checkbox id={`sym_${sym.id}`} label={`${sym.kode} - ${sym.nama}`} value={sym.id} bind:group={selectedIds} />
    </div>
  {/each}
</div>
