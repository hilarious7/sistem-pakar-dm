<script lang="ts">
  import { link } from 'svelte-spa-router';
  import Button from '../components/ui/Button.svelte';
  import Card from '../components/ui/Card.svelte';
</script>

<div class="home">
  <div class="hero">
    <div class="container hero-container">
      <div class="hero-text">
        <span class="badge">Sistem Pakar Medis</span>
        <h1>Diagnosis Diabetes Melitus</h1>
        <p>
          Deteksi dini Diabetes Melitus Tipe 1, Tipe 2, dan Gestasional dengan pendekatan 
          Forward Chaining dan Dempster-Shafer Theory. 
          <strong class="text-danger">Platform ini hanya untuk tujuan penelitian.</strong>
        </p>
        <div class="hero-actions">
          <Button onclick={() => window.location.hash = '#/konsultasi'}>Mulai Konsultasi</Button>
          <Button variant="outline" onclick={() => window.location.hash = '#/informasi'}>Pelajari Lebih Lanjut</Button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="circle"></div>
        <div class="card-float">Diagnosis Akurat</div>
      </div>
    </div>
  </div>

  <div class="container section">
    <h2 class="text-center mb-6">Metode Analisis</h2>
    <div class="features">
      <Card>
        <h3>Forward Chaining</h3>
        <p class="text-secondary mt-2">Mesin inferensi yang menelusuri alur gejala pasien secara runut untuk membangun hipotesis awal.</p>
      </Card>
      <Card>
        <h3>Dempster-Shafer Theory</h3>
        <p class="text-secondary mt-2">Kalkulasi probabilitas untuk memberikan tingkat keyakinan (belief) atas hasil diagnosis yang diberikan.</p>
      </Card>
      <Card>
        <h3>Analisis Gizi Terpadu</h3>
        <p class="text-secondary mt-2">Menghitung BMI, BMR, dan TEE untuk memberikan rekomendasi asupan kalori secara spesifik.</p>
      </Card>
    </div>
  </div>
</div>

<style>
  .hero {
    background-color: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: var(--space-16) 0;
  }
  .hero-container {
    display: flex;
    align-items: center;
    gap: var(--space-10);
  }
  .hero-text { flex: 1; }
  .hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 300px;
  }
  .badge {
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    background-color: var(--primary-light);
    color: var(--primary-dark);
    border-radius: var(--radius-badge);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: var(--space-4);
  }
  .hero-actions {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-6);
  }
  h1 { font-size: 48px; color: var(--primary-dark); }
  p { font-size: 18px; color: var(--text-secondary); max-width: 600px; }
  
  .circle {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-light), var(--info-light));
  }
  .card-float {
    position: absolute;
    bottom: 20px;
    left: 10px;
    background: white;
    padding: var(--space-3) var(--space-5);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-lg);
    font-weight: 600;
    color: var(--primary);
  }

  .section { padding: var(--space-12) var(--space-4); }
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
  }

  @media (max-width: 768px) {
    .hero-container { flex-direction: column; text-align: center; }
    h1 { font-size: 36px; }
    p { font-size: 16px; margin: 0 auto; }
    .hero-actions { justify-content: center; flex-direction: column; }
    .hero-visual { display: none; }
  }
</style>
