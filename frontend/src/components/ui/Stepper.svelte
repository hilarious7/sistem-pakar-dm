
<script lang="ts">
  let { currentStep, totalSteps, labels = [] } = $props<{
    currentStep: number;
    totalSteps: number;
    labels?: string[];
  }>();
</script>

<div class="stepper">
  {#each Array(totalSteps) as _, i}
    {@const step = i + 1}
    <div class="step" class:active={currentStep === step} class:completed={currentStep > step}>
      <div class="circle">{step}</div>
      {#if labels[i]}
        <div class="label">{labels[i]}</div>
      {/if}
    </div>
    {#if step < totalSteps}
      <div class="line" class:completed={currentStep > step}></div>
    {/if}
  {/each}
</div>

<style>
  .stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    width: 100%;
  }
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 1;
  }
  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--surface);
    border: 2px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--text-muted);
    transition: all 0.3s;
  }
  .step.active .circle {
    border-color: var(--primary);
    color: var(--primary);
  }
  .step.completed .circle {
    background-color: var(--primary);
    border-color: var(--primary);
    color: white;
  }
  .label {
    font-size: 0.75rem;
    color: var(--text-muted);
    text-align: center;
    max-width: 80px;
  }
  .step.active .label {
    color: var(--text-main);
    font-weight: 500;
  }
  .line {
    flex: 1;
    height: 2px;
    background-color: var(--border);
    margin: 0 1rem;
    margin-top: -1.5rem; /* align with circles */
    transition: background-color 0.3s;
  }
  .line.completed {
    background-color: var(--primary);
  }
</style>
