<script lang="ts">
  let { id, name, label, value, group = $bindable() } = $props<{
    id: string;
    name?: string;
    label: string;
    value?: any;
    group?: any;
  }>();
</script>

<label class="radio-label" for={id}>
  <input type="radio" {id} {name} {value} bind:group class="radio-input" />
  <span class="radio-text">{label}</span>
</label>

<style>
  .radio-label {
    display: inline-flex;
    align-items: flex-start;
    gap: var(--space-3);
    cursor: pointer;
    margin-bottom: var(--space-2);
    min-height: 44px;
    align-items: center;
  }
  .radio-input {
    width: 20px;
    height: 20px;
    accent-color: var(--primary); border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
  }
  .radio-input:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
  .radio-text {
    font-size: 16px;
    color: var(--text-primary);
  }
</style>
