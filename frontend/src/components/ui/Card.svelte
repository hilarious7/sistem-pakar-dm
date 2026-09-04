<script lang="ts">
  let { class: className = "", children } = $props<{
    class?: string;
    children?: any;
  }>();
</script>

<div class="card {className}">
  {@render children?.()}
</div>

<style>
  .card {
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);
  }
  @media (max-width: 640px) {
    .card {
      padding: var(--space-4);
    }
  }
</style>
