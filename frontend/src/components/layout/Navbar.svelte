<script lang="ts">
  import { link } from 'svelte-spa-router';
</script>

<nav class="navbar">
  <div class="container nav-content">
    <a href="/" use:link class="logo">Sistem Pakar DM</a>
    <div class="nav-links">
      <a href="/" use:link >Beranda</a>
      <a href="/konsultasi" use:link >Konsultasi</a>
      <a href="/informasi" use:link >Informasi</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: var(--surface);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 50;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }
  .logo {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary);
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  .nav-links a {
    color: var(--text-muted);
    font-weight: 500;
  }
  .nav-links a:hover, .nav-links a.active {
    color: var(--primary);
    text-decoration: none;
  }
</style>
