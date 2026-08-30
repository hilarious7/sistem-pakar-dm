
<script lang="ts">
  let { children, class: className = '', padding = '1.5rem' } = $props<{
    children?: any;
    class?: string;
    padding?: string;
  }>();
</script>

<div class="card {className}" style="padding: {padding}">
  {@render children?.()}
</div>

<style>
  .card {
    background-color: var(--surface);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border);
  }
</style>
