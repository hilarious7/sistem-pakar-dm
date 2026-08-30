
<script lang="ts">
  let { type = 'info', title, children } = $props<{
    type?: 'info' | 'warning' | 'error' | 'success';
    title?: string;
    children?: any;
  }>();

  const colors: Record<string, {bg: string, border: string, text: string}> = {
    info: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e3a8a' },
    warning: { bg: '#fffbeb', border: '#fde68a', text: '#92400e' },
    error: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b' },
    success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534' }
  };
</script>

<div class="alert" style="background: {colors[type || 'info'].bg}; border-color: {colors[type || 'info'].border}; color: {colors[type || 'info'].text}">
  {#if title}
    <strong>{title}</strong>
  {/if}
  <div>
    {@render children?.()}
  </div>
</div>

<style>
  .alert {
    padding: 1rem;
    border-left: 4px solid;
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
</style>
