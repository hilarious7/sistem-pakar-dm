
<script lang="ts">
  let {
    label,
    id,
    value = $bindable(),
    options = [],
    error = '',
    required = false
  } = $props<{
    label: string;
    id: string;
    value: string;
    options: { value: string; label: string }[];
    error?: string;
    required?: boolean;
  }>();
</script>

<div class="input-group">
  <label for={id}>{label} {required ? '*' : ''}</label>
  <select {id} bind:value {required} class:has-error={!!error}>
    <option value="" disabled>Pilih salah satu...</option>
    {#each options as opt}
      <option value={opt.value}>{opt.label}</option>
    {/each}
  </select>
  {#if error}
    <span class="error-text">{error}</span>
  {/if}
</div>

<style>
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  label {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  select {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    font-size: 1rem;
    background-color: var(--surface);
  }
  select:focus {
    outline: none;
    border-color: var(--primary);
  }
  select.has-error {
    border-color: var(--danger);
  }
  .error-text {
    font-size: 0.75rem;
    color: var(--danger);
    margin-top: 0.25rem;
  }
</style>
