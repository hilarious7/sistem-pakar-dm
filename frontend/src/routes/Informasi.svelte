<script lang="ts">
  import Card from '../components/ui/Card.svelte';
</script>

<div class="container" style="padding: 2rem 1rem;">
  <h1 style="margin-bottom: 2rem;">Informasi Diabetes Melitus</h1>
  
  <Card class="info-card">
    <h2>Diabetes Melitus Tipe 1</h2>
    <p>[DESKRIPSI]</p>
    <p>[ISI AKAN DIISI SETELAH VALIDASI SUMBER]</p>
  </Card>
  
  <Card class="info-card">
    <h2>Diabetes Melitus Tipe 2</h2>
    <p>[DESKRIPSI]</p>
    <p>[ISI AKAN DIISI SETELAH VALIDASI SUMBER]</p>
  </Card>
  
  <Card class="info-card">
    <h2>Diabetes Melitus Gestasional</h2>
    <p>[DESKRIPSI]</p>
    <p>[ISI AKAN DIISI SETELAH VALIDASI SUMBER]</p>
  </Card>
</div>

<style>
  :global(.info-card) {
    margin-bottom: 1.5rem;
  }
  h2 {
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--text-muted);
    margin-bottom: 0.5rem;
  }
</style>
