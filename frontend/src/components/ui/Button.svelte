
<script lang="ts">
  let { 
    type = 'button', 
    variant = 'primary', 
    disabled = false, 
    onclick, 
    children, 
    class: className = '' 
  } = $props<{
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children?: any;
    class?: string;
  }>();

  const baseClass = "btn";
  let variantClass = $derived(`btn-${variant}`);
</script>

<button {type} class="{baseClass} {variantClass} {className}" {disabled} {onclick}>
  {@render children?.()}
</button>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .btn-primary {
    background-color: var(--primary);
    color: white;
  }
  .btn-primary:hover:not(:disabled) {
    background-color: var(--primary-hover);
  }
  .btn-secondary {
    background-color: var(--secondary);
    color: white;
  }
  .btn-secondary:hover:not(:disabled) {
    background-color: var(--secondary-hover);
  }
  .btn-danger {
    background-color: var(--danger);
    color: white;
  }
  .btn-danger:hover:not(:disabled) {
    background-color: var(--danger-hover);
  }
  .btn-outline {
    background-color: transparent;
    border-color: var(--border);
    color: var(--text-main);
  }
  .btn-outline:hover:not(:disabled) {
    background-color: var(--background);
  }
</style>
