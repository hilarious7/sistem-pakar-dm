<script lang="ts">
  import Card from '../ui/Card.svelte';
  let { carbs, protein, fat } = $props<{ carbs: string; protein: string; fat: string }>();
</script>
<Card>
  <h4 style="margin-bottom: 0.5rem;">Distribusi Makronutrien</h4>
  <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">
    <li><strong>Karbohidrat (45-65%):</strong> {carbs}</li>
    <li><strong>Protein (10-35%):</strong> {protein}</li>
    <li><strong>Lemak (20-35%):</strong> {fat}</li>
  </ul>
</Card>
