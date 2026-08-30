export interface Penyakit {
  id: number; kode: string; nama: string;
  deskripsi: string | null; status: string;
}

export interface Gejala {
  id: number; kode: string; nama: string;
  kategori: string | null; deskripsi: string | null; status: string;
}

export interface FaktorRisiko {
  id: number; kode: string; nama: string;
  deskripsi: string | null; status: string;
}

export interface KondisiAkut {
  id: number; kode: string; nama: string;
  deskripsi: string | null; tingkatUrgensi: string;
  pesanWarning: string | null; status: string;
}

export interface Komplikasi {
  id: number; kode: string; nama: string;
  deskripsi: string | null; rekomendasiEvaluasi: string | null; status: string;
}
