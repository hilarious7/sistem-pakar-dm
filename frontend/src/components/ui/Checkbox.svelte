<script lang="ts">
  let { id, label, value, group = $bindable(), checked = $bindable(false) } = $props<{
    id: string;
    label: string;
    value?: any;
    group?: any[];
    checked?: boolean;
  }>();
</script>

<label class="check-label" for={id}>
  {#if group !== undefined}
    <input type="checkbox" {id} {value} bind:group class="check-input" />
  {:else}
    <input type="checkbox" {id} {value} bind:checked class="check-input" />
  {/if}
  <span class="check-text">{label}</span>
</label>

<style>
  .check-label {
    display: inline-flex;
    align-items: flex-start;
    gap: var(--space-3);
    cursor: pointer;
    margin-bottom: var(--space-2);
    min-height: 44px;
    align-items: center;
  }
  .check-input {
    width: 20px;
    height: 20px;
    accent-color: var(--primary);
    cursor: pointer;
    flex-shrink: 0;
  }
  .check-input:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
  .check-text {
    font-size: 16px;
    color: var(--text-primary);
  }
</style>
