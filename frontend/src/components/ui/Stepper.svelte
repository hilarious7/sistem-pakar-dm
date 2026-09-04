<script lang="ts">
  let { steps, currentStep } = $props<{
    steps: { number: number; label: string }[];
    currentStep: number;
  }>();
</script>

<div class="stepper-desktop">
  {#each steps as step, index}
    <div class="step-item {step.number === currentStep ? 'active' : ''} {step.number < currentStep ? 'completed' : ''}">
      <div class="step-circle">{step.number}</div>
      <span class="step-label">{step.label}</span>
    </div>
    {#if index < steps.length - 1}
      <div class="step-line {step.number < currentStep ? 'completed' : ''}"></div>
    {/if}
  {/each}
</div>

<div class="stepper-mobile">
  <div class="mobile-progress">
    Langkah {currentStep} dari {steps.length}
  </div>
  <div class="mobile-bar">
    <div class="mobile-fill" style="width: {(currentStep / steps.length) * 100}%"></div>
  </div>
</div>

<style>
  .stepper-desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    position: relative;
    z-index: 1;
  }
  .step-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--surface-muted);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid var(--border);
    transition: all 0.3s;
  }
  .step-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
  }
  .step-item.active .step-circle {
    background-color: var(--primary);
    color: var(--surface);
    border-color: var(--primary);
  }
  .step-item.active .step-label {
    color: var(--primary);
    font-weight: 700;
  }
  .step-item.completed .step-circle {
    background-color: var(--primary-light);
    color: var(--primary-dark);
    border-color: var(--primary);
  }
  .step-line {
    flex: 1;
    height: 2px;
    background-color: var(--border);
    margin: 0 var(--space-2);
    transform: translateY(-10px);
    transition: background-color 0.3s;
  }
  .step-line.completed {
    background-color: var(--primary);
  }

  .stepper-mobile {
    display: none;
  }

  @media (max-width: 640px) {
    .stepper-desktop { display: none; }
    .stepper-mobile {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }
    .mobile-progress {
      font-size: 14px;
      font-weight: 600;
      color: var(--primary);
      text-align: center;
    }
    .mobile-bar {
      height: 6px;
      background-color: var(--border);
      border-radius: 3px;
      overflow: hidden;
    }
    .mobile-fill {
      height: 100%;
      background-color: var(--primary);
      transition: width 0.3s ease;
    }
  }
</style>
