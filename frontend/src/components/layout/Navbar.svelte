<script lang="ts">
  import { link } from 'svelte-spa-router';
  import Button from '../ui/Button.svelte';
  
  let isMenuOpen = $state(false);
</script>

<nav class="navbar">
  <div class="container nav-container">
    <a href="/" use:link class="brand">Sistem Pakar DM</a>
    
    <button class="mobile-toggle" aria-label="Toggle menu" onclick={() => isMenuOpen = !isMenuOpen}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    
    <div class="nav-links {isMenuOpen ? 'open' : ''}">
      <a href="/" use:link onclick={() => isMenuOpen = false}>Beranda</a>
      <a href="/konsultasi" use:link onclick={() => isMenuOpen = false}>Konsultasi</a>
      <a href="/informasi" use:link onclick={() => isMenuOpen = false}>Informasi</a>
      
      <Button onclick={() => { window.location.hash = '#/konsultasi'; isMenuOpen = false; }} class="cta-btn">Mulai Konsultasi</Button>
    </div>
  </div>
</nav>

<style>
  .navbar {
    height: 72px;
    background-color: var(--surface);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 50;
  }
  .nav-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary);
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }
  .nav-links a {
    color: var(--text-secondary);
    font-weight: 500;
  }
  .nav-links a:hover {
    color: var(--primary);
    text-decoration: none;
  }
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
  }
  
  @media (max-width: 640px) {
    .mobile-toggle {
      display: block;
    }
    .nav-links {
      display: none;
      position: absolute;
      top: 72px;
      left: 0;
      width: 100%;
      background-color: var(--surface);
      flex-direction: column;
      padding: var(--space-4);
      border-bottom: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .nav-links.open {
      display: flex;
    }
  }
</style>
