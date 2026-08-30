<script lang="ts">
  import Router from 'svelte-spa-router';
  import Layout from './components/layout/Layout.svelte';
  
  import Home from './routes/Home.svelte';
  import Konsultasi from './routes/Konsultasi.svelte';
  import HasilDiagnosis from './routes/HasilDiagnosis.svelte';
  import Rekomendasi from './routes/Rekomendasi.svelte';
  import Informasi from './routes/Informasi.svelte';

  const routes = {
    '/': Home,
    '/konsultasi': Konsultasi,
    '/hasil': HasilDiagnosis,
    '/rekomendasi': Rekomendasi,
    '/informasi': Informasi,
    '*': Home
  };
</script>

<Layout>
  <Router {routes} />
</Layout>
