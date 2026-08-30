<script lang="ts">
  import Card from '../ui/Card.svelte';
  let { bmi, status } = $props<{ bmi: number; status: string }>();
</script>
<Card>
  <h4 style="margin-bottom: 0.5rem;">Body Mass Index (BMI)</h4>
  <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">{bmi.toFixed(1)}</div>
  <div style="color: var(--text-muted); text-transform: capitalize;">Status: {status}</div>
</Card>
