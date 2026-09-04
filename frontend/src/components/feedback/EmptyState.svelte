<script lang="ts">
  let { title = "Tidak ada data", description = "", icon = "📭" } = $props<{
    title?: string;
    description?: string;
    icon?: string;
  }>();
</script>

<div class="empty-state">
  <div class="icon">{icon}</div>
  <h3 class="title">{title}</h3>
  {#if description}
    <p class="desc">{description}</p>
  {/if}
</div>

<style>
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-12) var(--space-6);
    text-align: center;
    background-color: var(--surface-muted);
    border-radius: var(--radius-card);
    border: 1px dashed var(--border);
  }
  .icon { font-size: 48px; margin-bottom: var(--space-4); opacity: 0.8; }
  .title { margin-bottom: var(--space-2); color: var(--text-primary); }
  .desc { color: var(--text-secondary); max-width: 400px; }
</style>
