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
<div class="container" style="padding: 2rem 1rem; max-width: 900px;">
  <h1 style="margin-bottom: 1.5rem;">Rekomendasi Gizi (TEST DATA)</h1>
  
  <Alert type="warning" title="TEST ONLY - NOT MEDICAL DATA">
    Angka yang ditampilkan di bawah ini adalah DUMMY (placeholder) dan bukan formula medis final.
  </Alert>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
    <BmiCard bmi={dummyBmi} status="Normal" />
    <EnergyCard bmr={dummyBmr} tee={dummyTee} />
    <MealPlanCard carbs="236g - 341g" protein="52g - 183g" fat="46g - 81g" />
  </div>
  
  <div style="text-align: center;">
    <Button variant="outline" onclick={() => push('/')}>
      Kembali ke Beranda
    </Button>
  </div>
</div>
{/if}
