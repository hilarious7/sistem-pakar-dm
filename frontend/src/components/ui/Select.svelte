<script lang="ts">
  let {
    id,
    name,
    label,
    value = $bindable(),
    options = [],
    required = false,
    error = ""
  } = $props<{
    id: string;
    name?: string;
    label: string;
    value?: string | number | boolean;
    options: { value: any; label: string }[];
    required?: boolean;
    error?: string;
  }>();
</script>

<div class="input-group">
  <label for={id} class="label">{label} {#if required}<span class="req">*</span>{/if}</label>
  <select
    {id}
    {name}
    bind:value
    {required}
    class="select {error ? 'has-error' : ''}"
  >
    <option value="" disabled selected>Pilih salah satu...</option>
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
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  .label {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }
  .req { color: var(--danger); }
  .select {
    height: 46px;
    padding: 0 var(--space-4);
    border: 1px solid var(--border);
    border-radius: var(--radius-input);
    font-size: 16px;
    font-family: inherit;
    transition: border-color 0.2s;
    background-color: var(--surface);
    color: var(--text-primary);
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem top 50%;
    background-size: 0.65rem auto;
  }
  .select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px var(--primary-light);
  }
  .select.has-error { border-color: var(--danger); }
  .error-text { font-size: 12px; color: var(--danger); }
</style>
