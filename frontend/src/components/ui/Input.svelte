
<script lang="ts">
  let {
    label,
    type = 'text',
    id,
    value = $bindable(),
    placeholder = '',
    error = '',
    required = false,
    min,
    max,
    step
  } = $props<{
    label: string;
    type?: string;
    id: string;
    value: string | number | undefined;
    placeholder?: string;
    error?: string;
    required?: boolean;
    min?: number;
    max?: number;
    step?: string;
  }>();
</script>

<div class="input-group">
  <label for={id}>{label} {required ? '*' : ''}</label>
  <input 
    {id} 
    {type} 
    bind:value 
    {placeholder} 
    {required}
    {min}
    {max}
    {step}
    class:has-error={!!error}
  />
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
    color: var(--text-main);
  }
  input {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    font-size: 1rem;
    transition: border-color 0.2s;
  }
  input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
  input.has-error {
    border-color: var(--danger);
  }
  .error-text {
    font-size: 0.75rem;
    color: var(--danger);
    margin-top: 0.25rem;
  }
</style>
