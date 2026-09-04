<script lang="ts">
  let {
    type = "text",
    id,
    name,
    label,
    value = $bindable(""),
    placeholder = "",
    required = false,
    error = "",
    min,
    max,
    step
  } = $props<{
    type?: string;
    id: string;
    name?: string;
    label: string;
    value?: string | number;
    placeholder?: string;
    required?: boolean;
    error?: string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
  }>();
</script>

<div class="input-group">
  <label for={id} class="label">{label} {#if required}<span class="req">*</span>{/if}</label>
  <input
    {type}
    {id}
    {name}
    bind:value
    {placeholder}
    {required}
    {min}
    {max}
    {step}
    class="input {error ? 'has-error' : ''}"
  />
  {#if error}
    <span class="error-text">{error}</span>
  {/if}
</div>

<style>
  .input-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  .label {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }
  .req {
    color: var(--danger);
  }
  .input {
    height: 46px;
    padding: 0 var(--space-4);
    border: 1px solid var(--border);
    border-radius: var(--radius-input);
    font-size: 16px;
    font-family: inherit;
    transition: border-color 0.2s;
    background-color: var(--surface);
    color: var(--text-primary);
  }
  .input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px var(--primary-light);
  }
  .input.has-error {
    border-color: var(--danger);
  }
  .input.has-error:focus {
    box-shadow: 0 0 0 2px var(--danger-light);
  }
  .error-text {
    font-size: 12px;
    color: var(--danger);
  }
</style>
