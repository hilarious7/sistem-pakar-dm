<script lang="ts">
  let { message = "Memuat..." } = $props<{ message?: string; }>();
</script>

<div class="loading-state">
  <div class="spinner"></div>
  <p>{message}</p>
</div>

<style>
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-12);
    color: var(--text-secondary);
  }
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--border);
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: var(--space-4);
  }
  @keyframes spin { 100% { transform: rotate(360deg); } }
</style>
