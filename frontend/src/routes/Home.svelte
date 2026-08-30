<script lang="ts">
  import { push } from 'svelte-spa-router';
  import Button from '../components/ui/Button.svelte';
  import Card from '../components/ui/Card.svelte';
</script>

<div class="container" style="padding: 4rem 1rem; text-align: center;">
  <h1 style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem;">
    Sistem Pakar Diagnosis Diabetes Melitus
  </h1>
  <p style="font-size: 1.2rem; color: var(--text-muted); max-width: 800px; margin: 0 auto 2rem auto;">
    Aplikasi berbasis web menggunakan metode Forward Chaining dan Dempster-Shafer Theory 
    untuk mendeteksi risiko Diabetes Melitus Tipe 1, Tipe 2, dan Gestasional.
  </p>
  
  <Button variant="primary" onclick={() => push('/konsultasi')} class="start-btn">
    Mulai Konsultasi (Test UI)
  </Button>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 4rem; text-align: left;">
    <Card>
      <h3>Metode Forward Chaining</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
        Penyaringan hipotesis awal berdasarkan data gejala yang dimasukkan oleh pengguna.
      </p>
    </Card>
    <Card>
      <h3>Dempster-Shafer Theory</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
        Perhitungan probabilitas belief dan plausibility untuk mengakomodasi ketidakpastian.
      </p>
    </Card>
    <Card>
      <h3>Rekomendasi Gizi</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
        Menghitung BMI, BMR, dan TEE untuk memberikan rekomendasi distribusi kalori harian.
      </p>
    </Card>
  </div>
</div>

<style>
  :global(.start-btn) {
    padding: 0.75rem 2rem !important;
    font-size: 1.1rem !important;
  }
</style>
