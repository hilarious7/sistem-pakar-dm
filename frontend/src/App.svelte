<script lang="ts">
  import Router from 'svelte-spa-router';
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
  };
</script>

<header>
  <nav>
    <a href="#/">Beranda</a>
    <a href="#/konsultasi">Konsultasi</a>
    <a href="#/rekomendasi">Rekomendasi</a>
    <a href="#/informasi">Informasi</a>
  </nav>
</header>

<Router {routes} />
