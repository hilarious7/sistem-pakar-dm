<script lang="ts">
  import Input from '../ui/Input.svelte';
  import Radio from '../ui/Radio.svelte';
  
  let { patient = $bindable() } = $props<{ patient: any }>();
</script>

<div>
  <h3>Status Kehamilan</h3>
  <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">
    Pertanyaan ini dikhususkan untuk pasien perempuan.
  </p>
  
  <div style="margin-bottom: 1.5rem;">
    <span style="font-weight: 500; display: block; margin-bottom: 0.5rem;">Apakah Anda sedang hamil?</span>
    <Radio id="hamil_ya"  label="Ya, saya sedang hamil" value={true} bind:group={patient.statusKehamilan} />
    <Radio id="hamil_tidak"  label="Tidak" value={false} bind:group={patient.statusKehamilan} />
  </div>
  
  {#if patient.statusKehamilan}
    <Input id="usiaKehamilan" label="Usia Kehamilan (Minggu)" type="number" bind:value={patient.usiaKehamilan} min={1} max={42} required />
  {/if}
</div>
