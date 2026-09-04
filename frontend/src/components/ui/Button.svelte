<script lang="ts">
  let {
    variant = "primary",
    type = "button",
    disabled = false,
    class: className = "",
    onclick = undefined,
    children
  } = $props<{
    variant?: "primary" | "secondary" | "outline" | "danger" | "success";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    class?: string;
    onclick?: (e: Event) => void;
    children?: any;
  }>();

  let variantClass = $derived(`btn-${variant}`);
</script>

<button
  {type}
  {disabled}
  class="btn {variantClass} {className}"
  {onclick}
>
  {@render children?.()}
</button>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 var(--space-6);
    border-radius: var(--radius-btn);
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    line-height: 1;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-primary {
    background-color: var(--primary);
    color: var(--surface);
  }
  .btn-primary:hover:not(:disabled) {
    background-color: var(--primary-hover);
  }

  .btn-secondary {
    background-color: var(--surface-muted);
    color: var(--text-primary);
  }
  .btn-secondary:hover:not(:disabled) {
    background-color: var(--border);
  }

  .btn-outline {
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
  }
  .btn-outline:hover:not(:disabled) {
    background-color: var(--primary-light);
  }

  .btn-danger {
    background-color: var(--danger);
    color: var(--surface);
  }
  .btn-danger:hover:not(:disabled) {
    background-color: #991b1b;
  }
  
  .btn-success {
    background-color: var(--success);
    color: var(--surface);
  }
  .btn-success:hover:not(:disabled) {
    background-color: #166534;
  }

  @media (max-width: 640px) {
    .btn {
      width: 100%;
    }
  }
</style>
