
<script lang="ts">
  let {
    name,
    id,
    label,
    value,
    group = $bindable()
  } = $props<{
    name: string;
    id: string;
    label: string;
    value: any;
    group: any;
  }>();
</script>

<div class="radio-wrapper">
  <input type="radio" {id} {name} {value} bind:group={group} />
  <label for={id}>{label}</label>
</div>

<style>
  .radio-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  input[type="radio"] {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
  label {
    font-size: 0.9rem;
    cursor: pointer;
  }
</style>
