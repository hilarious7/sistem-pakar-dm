<script lang="ts">
  let {
    type = "info",
    title = "",
    children
  } = $props<{
    type?: "info" | "warning" | "error" | "success";
    title?: string;
    children?: any;
  }>();

  const colors: Record<string, {bg: string, border: string, text: string, icon: string}> = {
    info: { bg: "var(--info-light)", border: "var(--info)", text: "var(--info)", icon: "ℹ️" },
    warning: { bg: "var(--warning-light)", border: "var(--warning)", text: "var(--warning)", icon: "⚠️" },
    error: { bg: "var(--danger-light)", border: "var(--danger)", text: "var(--danger)", icon: "⛔" },
    success: { bg: "var(--success-light)", border: "var(--success)", text: "var(--success)", icon: "✅" }
  };
</script>

<div class="alert" style="background: {colors[type || 'info'].bg}; border-color: {colors[type || 'info'].border}; color: {colors[type || 'info'].text}">
  <div class="alert-icon">{colors[type || 'info'].icon}</div>
  <div class="alert-content">
    {#if title}
      <div class="alert-title">{title}</div>
    {/if}
    <div class="alert-body">
      {@render children?.()}
    </div>
  </div>
</div>

<style>
  .alert {
    padding: var(--space-4);
    border: 1px solid;
    border-radius: var(--radius-card);
    margin-bottom: var(--space-4);
    display: flex;
    gap: var(--space-3);
    align-items: flex-start;
  }
  .alert-icon { font-size: 20px; line-height: 1; }
  .alert-title { font-weight: 700; margin-bottom: var(--space-1); }
  .alert-body { font-size: 14px; }
</style>
