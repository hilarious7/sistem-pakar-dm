<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Stepper from '../components/ui/Stepper.svelte';
  import Button from '../components/ui/Button.svelte';
  import Card from '../components/ui/Card.svelte';
  
  import PatientForm from '../components/diagnosis/PatientForm.svelte';
  import PregnancyForm from '../components/diagnosis/PregnancyForm.svelte';
  import SymptomSelector from '../components/diagnosis/SymptomSelector.svelte';
  import RiskFactorSelector from '../components/diagnosis/RiskFactorSelector.svelte';
  import ReviewInput from '../components/diagnosis/ReviewInput.svelte';
  
  import { mockSymptoms, mockRiskFactors, mockDiagnosisResult } from '../lib/api/mock';
  import { patientStore } from '../stores/patient.store.svelte';
  import { diagnosisStore } from '../stores/diagnosis.store.svelte';

  let currentStep = $state(1);
  let totalSteps = $state(5);
  let isLoading = $state(false);
  
  const stepLabels = ['Data Pasien', 'Kehamilan', 'Gejala', 'Risiko', 'Review'];
  
  // Local state form
  let patient = $state({
    nama: '',
    usia: 0,
    jenisKelamin: 'laki-laki',
    beratBadan: 0,
    tinggiBadan: 0,
    aktivitasFisik: '',
    statusKehamilan: false,
    usiaKehamilan: 0
  });
  
  let selectedSymptomIds = $state<number[]>([]);
  let selectedRiskFactorIds = $state<number[]>([]);
  
  $effect(() => {
    // Dinamis step total jika bukan perempuan
    if (patient.jenisKelamin !== 'perempuan') {
      patient.statusKehamilan = false;
      patient.usiaKehamilan = 0;
    }
  });

  const nextStep = () => {
    if (currentStep === 1 && patient.jenisKelamin !== 'perempuan') {
      currentStep = 3; // Skip pregnancy
    } else {
      currentStep++;
    }
  };

  const prevStep = () => {
    if (currentStep === 3 && patient.jenisKelamin !== 'perempuan') {
      currentStep = 1; // Skip pregnancy back
    } else {
      currentStep--;
    }
  };

  const submit = () => {
    isLoading = true;
    
    // Simpan ke store
    patientStore.set(patient as any);
    
    // Simulasi API Call
    setTimeout(() => {
      diagnosisStore.set({
        konsultasiId: 999,
        diagnosis: mockDiagnosisResult,
        warnings: [],
        komplikasiRiwayat: [],
        disclaimer: "BUKAN HASIL MEDIS - HANYA TESTING"
      });
      isLoading = false;
      push('/hasil');
    }, 1500);
  };
</script>

<div class="container" style="padding: 2rem 1rem; max-width: 800px;">
  <Stepper {currentStep} {totalSteps} labels={stepLabels} />
  
  {#if isLoading}
    <div style="text-align: center; padding: 4rem 0;">
      <h3 style="color: var(--primary);">Memproses Data (Simulasi)...</h3>
      <p style="color: var(--text-muted);">Mohon tunggu sebentar.</p>
    </div>
  {:else}
    <Card>
      <form onsubmit={(e) => { e.preventDefault(); }}>
        {#if currentStep === 1}
          <PatientForm bind:patient />
        {:else if currentStep === 2}
          <PregnancyForm bind:patient />
        {:else if currentStep === 3}
          <SymptomSelector symptoms={mockSymptoms} bind:selectedIds={selectedSymptomIds} />
        {:else if currentStep === 4}
          <RiskFactorSelector riskFactors={mockRiskFactors} bind:selectedIds={selectedRiskFactorIds} />
        {:else if currentStep === 5}
          <ReviewInput 
            {patient} 
            selectedSymptoms={mockSymptoms.filter(s => selectedSymptomIds.includes(s.id))}
            selectedRiskFactors={mockRiskFactors.filter(f => selectedRiskFactorIds.includes(f.id))}
          />
        {/if}
        
        <div style="display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          <Button variant="outline" disabled={currentStep === 1} onclick={prevStep}>
            Kembali
          </Button>
          
          {#if currentStep === totalSteps}
            <Button variant="primary" onclick={submit}>
              Proses Diagnosis (Dummy)
            </Button>
          {:else}
            <Button variant="primary" onclick={nextStep}>
              Lanjut
            </Button>
          {/if}
        </div>
      </form>
    </Card>
  {/if}
</div>
