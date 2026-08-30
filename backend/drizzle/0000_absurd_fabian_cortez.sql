CREATE TABLE "faktor_risiko" (
	"id" serial PRIMARY KEY NOT NULL,
	"kode" varchar(10) NOT NULL,
	"nama" varchar(150) NOT NULL,
	"deskripsi" text,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "faktor_risiko_kode_unique" UNIQUE("kode")
);
--> statement-breakpoint
CREATE TABLE "faktor_risiko_penyakit" (
	"id" serial PRIMARY KEY NOT NULL,
	"faktor_risiko_id" integer NOT NULL,
	"penyakit_id" integer NOT NULL,
	"status" varchar(20) DEFAULT 'relevant' NOT NULL,
	"sumber" varchar(200),
	"catatan" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "unq_faktor_risiko_penyakit" UNIQUE("faktor_risiko_id","penyakit_id")
);
--> statement-breakpoint
CREATE TABLE "gejala" (
	"id" serial PRIMARY KEY NOT NULL,
	"kode" varchar(10) NOT NULL,
	"nama" varchar(150) NOT NULL,
	"kategori" varchar(50),
	"deskripsi" text,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "gejala_kode_unique" UNIQUE("kode")
);
--> statement-breakpoint
CREATE TABLE "gejala_penyakit" (
	"id" serial PRIMARY KEY NOT NULL,
	"gejala_id" integer NOT NULL,
	"penyakit_id" integer NOT NULL,
	"evidence_status" varchar(20) DEFAULT 'primary' NOT NULL,
	"sumber" varchar(200),
	"catatan" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "unq_gejala_penyakit" UNIQUE("gejala_id","penyakit_id")
);
--> statement-breakpoint
CREATE TABLE "hasil_diagnosis" (
	"id" serial PRIMARY KEY NOT NULL,
	"konsultasi_id" integer NOT NULL,
	"penyakit_id" integer NOT NULL,
	"belief" numeric(5, 4) NOT NULL,
	"plausibility" numeric(5, 4) NOT NULL,
	"ranking" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "komplikasi" (
	"id" serial PRIMARY KEY NOT NULL,
	"kode" varchar(10) NOT NULL,
	"nama" varchar(150) NOT NULL,
	"deskripsi" text,
	"rekomendasi_evaluasi" text,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "komplikasi_kode_unique" UNIQUE("kode")
);
--> statement-breakpoint
CREATE TABLE "komplikasi_riwayat" (
	"id" serial PRIMARY KEY NOT NULL,
	"konsultasi_id" integer NOT NULL,
	"komplikasi_id" integer NOT NULL,
	"status" varchar(20) DEFAULT 'terindikasi' NOT NULL,
	"catatan" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kondisi_akut" (
	"id" serial PRIMARY KEY NOT NULL,
	"kode" varchar(10) NOT NULL,
	"nama" varchar(150) NOT NULL,
	"deskripsi" text,
	"tingkat_urgensi" varchar(20) DEFAULT 'sedang' NOT NULL,
	"pesan_warning" text,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "kondisi_akut_kode_unique" UNIQUE("kode")
);
--> statement-breakpoint
CREATE TABLE "konsultasi" (
	"id" serial PRIMARY KEY NOT NULL,
	"tanggal" timestamp DEFAULT now() NOT NULL,
	"nama_pasien" varchar(100) NOT NULL,
	"usia" integer NOT NULL,
	"jenis_kelamin" varchar(20) NOT NULL,
	"berat_badan" numeric(5, 2) NOT NULL,
	"tinggi_badan" numeric(5, 2) NOT NULL,
	"aktivitas_fisik" varchar(30) NOT NULL,
	"status_kehamilan" boolean DEFAULT false NOT NULL,
	"usia_kehamilan" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "konsultasi_faktor_risiko" (
	"id" serial PRIMARY KEY NOT NULL,
	"konsultasi_id" integer NOT NULL,
	"faktor_risiko_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "konsultasi_gejala" (
	"id" serial PRIMARY KEY NOT NULL,
	"konsultasi_id" integer NOT NULL,
	"gejala_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "konsultasi_kondisi_akut" (
	"id" serial PRIMARY KEY NOT NULL,
	"konsultasi_id" integer NOT NULL,
	"kondisi_akut_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "mass_functions" (
	"id" serial PRIMARY KEY NOT NULL,
	"gejala_id" integer NOT NULL,
	"hipotesis" varchar(50) NOT NULL,
	"nilai_belief" numeric(5, 4) NOT NULL,
	"sumber" varchar(200),
	"pakar" varchar(100),
	"status_validasi" varchar(20) DEFAULT 'draft' NOT NULL,
	"tanggal_validasi" timestamp,
	"catatan" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "penyakit" (
	"id" serial PRIMARY KEY NOT NULL,
	"kode" varchar(10) NOT NULL,
	"nama" varchar(100) NOT NULL,
	"deskripsi" text,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "penyakit_kode_unique" UNIQUE("kode")
);
--> statement-breakpoint
CREATE TABLE "rekomendasi_hasil" (
	"id" serial PRIMARY KEY NOT NULL,
	"konsultasi_id" integer NOT NULL,
	"bmi" numeric(5, 2) NOT NULL,
	"kategori_bmi" varchar(30) NOT NULL,
	"bmr" numeric(8, 2) NOT NULL,
	"tee" numeric(8, 2) NOT NULL,
	"kebutuhan_kalori" numeric(8, 2) NOT NULL,
	"rekomendasi" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rule_gejala" (
	"id" serial PRIMARY KEY NOT NULL,
	"rule_id" integer NOT NULL,
	"gejala_id" integer NOT NULL,
	"operator" varchar(10) DEFAULT 'AND' NOT NULL,
	"urutan" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rules" (
	"id" serial PRIMARY KEY NOT NULL,
	"kode_rule" varchar(20) NOT NULL,
	"nama_rule" varchar(200) NOT NULL,
	"kesimpulan" text NOT NULL,
	"penyakit_id" integer,
	"prioritas" integer DEFAULT 0 NOT NULL,
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"sumber" varchar(200),
	"catatan" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "rules_kode_rule_unique" UNIQUE("kode_rule")
);
--> statement-breakpoint
ALTER TABLE "faktor_risiko_penyakit" ADD CONSTRAINT "faktor_risiko_penyakit_faktor_risiko_id_faktor_risiko_id_fk" FOREIGN KEY ("faktor_risiko_id") REFERENCES "public"."faktor_risiko"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faktor_risiko_penyakit" ADD CONSTRAINT "faktor_risiko_penyakit_penyakit_id_penyakit_id_fk" FOREIGN KEY ("penyakit_id") REFERENCES "public"."penyakit"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gejala_penyakit" ADD CONSTRAINT "gejala_penyakit_gejala_id_gejala_id_fk" FOREIGN KEY ("gejala_id") REFERENCES "public"."gejala"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gejala_penyakit" ADD CONSTRAINT "gejala_penyakit_penyakit_id_penyakit_id_fk" FOREIGN KEY ("penyakit_id") REFERENCES "public"."penyakit"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hasil_diagnosis" ADD CONSTRAINT "hasil_diagnosis_konsultasi_id_konsultasi_id_fk" FOREIGN KEY ("konsultasi_id") REFERENCES "public"."konsultasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hasil_diagnosis" ADD CONSTRAINT "hasil_diagnosis_penyakit_id_penyakit_id_fk" FOREIGN KEY ("penyakit_id") REFERENCES "public"."penyakit"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "komplikasi_riwayat" ADD CONSTRAINT "komplikasi_riwayat_konsultasi_id_konsultasi_id_fk" FOREIGN KEY ("konsultasi_id") REFERENCES "public"."konsultasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "komplikasi_riwayat" ADD CONSTRAINT "komplikasi_riwayat_komplikasi_id_komplikasi_id_fk" FOREIGN KEY ("komplikasi_id") REFERENCES "public"."komplikasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "konsultasi_faktor_risiko" ADD CONSTRAINT "konsultasi_faktor_risiko_konsultasi_id_konsultasi_id_fk" FOREIGN KEY ("konsultasi_id") REFERENCES "public"."konsultasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "konsultasi_faktor_risiko" ADD CONSTRAINT "konsultasi_faktor_risiko_faktor_risiko_id_faktor_risiko_id_fk" FOREIGN KEY ("faktor_risiko_id") REFERENCES "public"."faktor_risiko"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "konsultasi_gejala" ADD CONSTRAINT "konsultasi_gejala_konsultasi_id_konsultasi_id_fk" FOREIGN KEY ("konsultasi_id") REFERENCES "public"."konsultasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "konsultasi_gejala" ADD CONSTRAINT "konsultasi_gejala_gejala_id_gejala_id_fk" FOREIGN KEY ("gejala_id") REFERENCES "public"."gejala"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "konsultasi_kondisi_akut" ADD CONSTRAINT "konsultasi_kondisi_akut_konsultasi_id_konsultasi_id_fk" FOREIGN KEY ("konsultasi_id") REFERENCES "public"."konsultasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "konsultasi_kondisi_akut" ADD CONSTRAINT "konsultasi_kondisi_akut_kondisi_akut_id_kondisi_akut_id_fk" FOREIGN KEY ("kondisi_akut_id") REFERENCES "public"."kondisi_akut"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mass_functions" ADD CONSTRAINT "mass_functions_gejala_id_gejala_id_fk" FOREIGN KEY ("gejala_id") REFERENCES "public"."gejala"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rekomendasi_hasil" ADD CONSTRAINT "rekomendasi_hasil_konsultasi_id_konsultasi_id_fk" FOREIGN KEY ("konsultasi_id") REFERENCES "public"."konsultasi"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rule_gejala" ADD CONSTRAINT "rule_gejala_rule_id_rules_id_fk" FOREIGN KEY ("rule_id") REFERENCES "public"."rules"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rule_gejala" ADD CONSTRAINT "rule_gejala_gejala_id_gejala_id_fk" FOREIGN KEY ("gejala_id") REFERENCES "public"."gejala"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rules" ADD CONSTRAINT "rules_penyakit_id_penyakit_id_fk" FOREIGN KEY ("penyakit_id") REFERENCES "public"."penyakit"("id") ON DELETE no action ON UPDATE no action;