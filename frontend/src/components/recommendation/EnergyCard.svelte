<script lang="ts">
  import Card from '../ui/Card.svelte';
  let { bmr, tee } = $props<{ bmr: number; tee: number }>();
</script>
<Card>
  <h4 style="margin-bottom: 0.5rem;">Kebutuhan Energi</h4>
  <div style="margin-bottom: 0.5rem;">
    <span style="color: var(--text-muted); font-size: 0.9rem;">BMR (Basal):</span>
    <strong style="float: right;">{bmr.toFixed(0)} kcal</strong>
  </div>
  <div>
    <span style="color: var(--text-muted); font-size: 0.9rem;">TEE (Total Kebutuhan):</span>
    <strong style="float: right; color: var(--primary); font-size: 1.25rem;">{tee.toFixed(0)} kcal</strong>
  </div>
</Card>
