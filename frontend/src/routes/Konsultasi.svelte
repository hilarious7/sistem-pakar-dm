<script lang="ts">
  import { patientStore } from '../stores/patient.store.svelte';
  import { push } from 'svelte-spa-router';
  
  import Stepper from '../components/ui/Stepper.svelte';
  import Button from '../components/ui/Button.svelte';
  import Card from '../components/ui/Card.svelte';
  import LoadingState from '../components/feedback/LoadingState.svelte';
  
  import PatientForm from '../components/diagnosis/PatientForm.svelte';
  import PregnancyForm from '../components/diagnosis/PregnancyForm.svelte';
  import SymptomSelector from '../components/diagnosis/SymptomSelector.svelte';
  import RiskFactorSelector from '../components/diagnosis/RiskFactorSelector.svelte';
  import ReviewInput from '../components/diagnosis/ReviewInput.svelte';
  
  import { mockSymptoms, mockRiskFactors } from '../lib/api/mock';

  let currentStep = $state(1);
  let isSubmitting = $state(false);
  let selectedGejalaIds = $state<number[]>([]);
  let selectedFaktorRisikoIds = $state<number[]>([]);

  const steps = [
    { number: 1, label: 'Data Pasien' },
    { number: 2, label: 'Status Kehamilan' },
    { number: 3, label: 'Gejala' },
    { number: 4, label: 'Faktor Risiko' },
    { number: 5, label: 'Review' }
  ];

  function nextStep() {
    if (patientStore.data) {
      if (currentStep === 1 && patientStore.data.jenisKelamin !== 'perempuan') {
        currentStep = 3; // Skip pregnancy
      } else if (currentStep < 5) {
        currentStep += 1;
      }
    }
  }

  function prevStep() {
    if (patientStore.data) {
      if (currentStep === 3 && patientStore.data.jenisKelamin !== 'perempuan') {
        currentStep = 1;
      } else if (currentStep > 1) {
        currentStep -= 1;
      }
    }
  }

  async function submitDiagnosis() {
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      push('/hasil');
    }, 1500);
  }
</script>

<div class="container container-form py-8">
  <div class="mb-8">
    <h1 class="text-center">Konsultasi Diagnosis</h1>
    <p class="text-center text-muted">Isi data berikut untuk memulai analisis awal.</p>
  </div>

  {#if isSubmitting}
    <Card class="text-center py-12">
      <LoadingState message="Memproses Data (Simulasi)..." />
    </Card>
  {:else if patientStore.data}
    <div class="mb-8">
      <Stepper {steps} {currentStep} />
    </div>

    <Card>
      {#if currentStep === 1}
        <PatientForm bind:patient={patientStore.data} />
      {:else if currentStep === 2}
        <PregnancyForm bind:patient={patientStore.data} />
      {:else if currentStep === 3}
        <SymptomSelector bind:selectedIds={selectedGejalaIds} symptoms={mockSymptoms} />
      {:else if currentStep === 4}
        <RiskFactorSelector bind:selectedIds={selectedFaktorRisikoIds} riskFactors={mockRiskFactors} />
      {:else if currentStep === 5}
        <ReviewInput 
          patient={patientStore.data}
          selectedSymptoms={mockSymptoms.filter(s => selectedGejalaIds.includes(s.id))}
          selectedRiskFactors={mockRiskFactors.filter(r => selectedFaktorRisikoIds.includes(r.id))}
        />
      {/if}

      <div class="actions mt-8">
        <Button 
          variant="outline" 
          onclick={prevStep} 
          disabled={currentStep === 1}
        >
          Kembali
        </Button>

        {#if currentStep < 5}
          <Button variant="primary" onclick={nextStep}>Lanjut</Button>
        {:else}
          <Button variant="success" onclick={submitDiagnosis}>Proses Diagnosis (Dummy)</Button>
        {/if}
      </div>
    </Card>
  {/if}
</div>

<style>
  .py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }
  .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
  .actions {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--border);
    padding-top: var(--space-6);
  }
  @media (max-width: 640px) {
    .actions { flex-direction: column-reverse; gap: var(--space-4); }
  }
</style>
