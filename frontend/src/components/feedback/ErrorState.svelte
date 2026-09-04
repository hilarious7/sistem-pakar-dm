<script lang="ts">
  import Button from '../ui/Button.svelte';
  let { title = "Terjadi Kesalahan", message = "", onretry } = $props<{
    title?: string;
    message?: string;
    onretry?: () => void;
  }>();
</script>

<div class="error-state">
  <div class="icon">❌</div>
  <h3 class="title">{title}</h3>
  {#if message}<p class="desc">{message}</p>{/if}
  {#if onretry}
    <div class="mt-4">
      <Button variant="danger" onclick={onretry}>Coba Lagi</Button>
    </div>
  {/if}
</div>

<style>
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-12) var(--space-6);
    text-align: center;
    background-color: var(--danger-light);
    border-radius: var(--radius-card);
    border: 1px dashed var(--danger);
  }
  .icon { font-size: 48px; margin-bottom: var(--space-4); }
  .title { margin-bottom: var(--space-2); color: var(--danger); }
  .desc { color: var(--danger); max-width: 400px; opacity: 0.9; }
</style>
