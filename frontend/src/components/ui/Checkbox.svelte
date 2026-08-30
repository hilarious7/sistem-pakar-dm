
<script lang="ts">
  let {
    id,
    label,
    checked = $bindable(false),
    value,
    group = $bindable([]),
  } = $props<{
    id: string;
    label: string;
    checked?: boolean;
    value?: any;
    group?: any[];
  }>();

  // If value is provided, it acts as part of a group array
  // If not, it acts as a boolean toggle
</script>

<div class="checkbox-wrapper">
  {#if value !== undefined}
    <input type="checkbox" {id} {value} bind:group={group} />
  {:else}
    <input type="checkbox" {id} bind:checked={checked} />
  {/if}
  <label for={id}>{label}</label>
</div>

<style>
  .checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  input[type="checkbox"] {
    margin-top: 0.25rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
  label {
    font-size: 0.9rem;
    cursor: pointer;
    line-height: 1.4;
  }
</style>
