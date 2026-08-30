<script lang="ts">
  import Input from '../ui/Input.svelte';
  import Select from '../ui/Select.svelte';
  
  let { patient = $bindable() } = $props<{ patient: any }>();
  
  const genderOptions = [
    { value: 'laki-laki', label: 'Laki-laki' },
    { value: 'perempuan', label: 'Perempuan' }
  ];
  
  const activityOptions = [
    { value: 'bed_rest', label: 'Bed Rest (Istirahat di tempat tidur)' },
    { value: 'sedentary', label: 'Sedentary (Sangat jarang berolahraga)' },
    { value: 'light', label: 'Ringan (Olahraga ringan 1-3 hari/minggu)' },
    { value: 'moderate', label: 'Sedang (Olahraga 3-5 hari/minggu)' },
    { value: 'heavy', label: 'Berat (Olahraga 6-7 hari/minggu)' },
    { value: 'very_heavy', label: 'Sangat Berat (Pekerja fisik/atlet)' }
  ];
</script>

<div>
  <h3>Data Diri Pasien</h3>
  <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">
    Mohon isi data diri Anda dengan benar. Data ini digunakan untuk perhitungan kebutuhan nutrisi.
  </p>
  
  <Input id="nama" label="Nama Lengkap" bind:value={patient.nama} required />
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <Input id="usia" label="Usia (Tahun)" type="number" bind:value={patient.usia} min={1} max={120} required />
    <Select id="jenisKelamin" label="Jenis Kelamin" bind:value={patient.jenisKelamin} options={genderOptions} required />
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <Input id="beratBadan" label="Berat Badan (kg)" type="number" bind:value={patient.beratBadan} min={1} required step="0.1" />
    <Input id="tinggiBadan" label="Tinggi Badan (cm)" type="number" bind:value={patient.tinggiBadan} min={1} required step="0.1" />
  </div>
  
  <Select id="aktivitasFisik" label="Tingkat Aktivitas Fisik" bind:value={patient.aktivitasFisik} options={activityOptions} required />
</div>
