<script lang="ts">
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
  let { children } = $props<{ children?: any }>();
</script>

<div class="layout">
  <Navbar />
  <main class="main-content">
    {@render children?.()}
  </main>
  <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main-content {
    flex: 1;
  }
</style>
