<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Alert from '../components/ui/Alert.svelte';
  import Card from '../components/ui/Card.svelte';
  import Button from '../components/ui/Button.svelte';
  import { diagnosisStore } from '../stores/diagnosis.store.svelte';
  
  const result = diagnosisStore.result;
  
  if (!result) {
    push('/konsultasi');
  }
</script>

{#if result}
<div class="container" style="padding: 2rem 1rem; max-width: 800px;">
  <h1 style="margin-bottom: 1.5rem;">Hasil Diagnosis (TEST RESULT)</h1>
  
  <Alert type="warning" title="TEST ONLY - NOT MEDICAL DATA">
    {result.disclaimer}
  </Alert>
  
  <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
    {#each result.diagnosis as hypo}
      <Card>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h3 style="margin-bottom: 0.25rem;">Hypothesis: {hypo.nama}</h3>
            <div style="color: var(--text-muted); font-size: 0.9rem;">
              Belief: {(hypo.belief * 100).toFixed(1)}% | Plausibility: {(hypo.plausibility * 100).toFixed(1)}%
            </div>
          </div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">
            #{hypo.ranking}
          </div>
        </div>
      </Card>
    {/each}
  </div>
  
  <div style="text-align: center;">
    <Button variant="primary" onclick={() => push('/rekomendasi')}>
      Lihat Rekomendasi Gizi (Dummy)
    </Button>
  </div>
</div>
{/if}
