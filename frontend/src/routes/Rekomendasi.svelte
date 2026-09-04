<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Alert from '../components/ui/Alert.svelte';
  import Button from '../components/ui/Button.svelte';
  import BmiCard from '../components/recommendation/BmiCard.svelte';
  import EnergyCard from '../components/recommendation/EnergyCard.svelte';
  import MealPlanCard from '../components/recommendation/MealPlanCard.svelte';
  import { patientStore } from '../stores/patient.store.svelte';
  
  const patient = patientStore.data;
  
  if (!patient) {
    push('/konsultasi');
  }
  
  // Dummy calculations for UI testing
  const dummyBmi = 24.5;
  const dummyBmr = 1500;
  const dummyTee = 2100;
</script>

{#if patient}
<div class="container container-form py-8">
  <div class="mb-6 text-center">
    <h1>Rekomendasi Gizi (TEST DATA)</h1>
  </div>
  
  <Alert type="warning" title="TEST ONLY - NOT MEDICAL DATA">
    Angka yang ditampilkan di bawah ini adalah DUMMY (placeholder) dan bukan formula medis final.
  </Alert>
  
  <div class="rekomendasi-grid mt-6">
    <BmiCard bmi={dummyBmi} status="Normal" />
    <EnergyCard bmr={dummyBmr} tee={dummyTee} />
    <MealPlanCard carbs="236g - 341g" protein="52g - 183g" fat="46g - 81g" />
  </div>
  
  <div class="mt-8 text-center">
    <Button variant="outline" onclick={() => push('/')}>
      Kembali ke Beranda
    </Button>
  </div>
</div>
{/if}

<style>
  .py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }
  .rekomendasi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-8);
  }
</style>
