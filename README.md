# 🇮🇩 Indo Mock API

[![Hono](https://img.shields.io/badge/Framework-Hono.js-flame?style=flat-square)](https://hono.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**Indo Mock API** adalah backend service berbasis **Hono.js** yang dirancang untuk menghasilkan data identitas palsu (fake data) khusus konteks Indonesia. Sangat berguna bagi developer lokal untuk melakukan _testing_ aplikasi, _database seeding_, atau _load testing_ dengan data yang realistis.

---

## ✨ Fitur Utama

- **Lokalitas Indonesia**: Nama, alamat, hingga pekerjaan disesuaikan dengan konteks Indonesia.
- **Logika NIK Pintar**: Generate Nomor Induk Kependudukan (NIK)
- **Bulk Generation**: Generate hingga 100 data dalam satu request menggunakan query parameter `qty`.
- **Filtering Cerdas**: Filter berdasarkan `gender` dan `job` (Case-Insensitive).
- **Export to CSV**: Download data langsung dalam format `.csv` yang rapi dan siap buka di Excel.
- **API Key Security**: Dilengkapi middleware untuk mengamankan endpoint dari penggunaan tanpa izin.
- **Interactive Documentation**: Dokumentasi API lengkap menggunakan **Swagger UI**.

---

## 🚀 Teknologi yang Digunakan

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [Hono.js](https://hono.dev/)
- **Documentation**: [Swagger UI](https://github.com/honojs/middleware/tree/main/packages/swagger-ui)
- **Language**: TypeScript

---

## 🛠️ Instalasi & Menjalankan

1. **Clone Repository**

   ```bash
   git clone https://github.com/github/indo-mock-api.git
   cd indofaker-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. Server akan berjalan di http://localhost:3000

## 📖 Dokumentasi API

Anda dapat mengakses dokumentasi interaktif (Swagger) melalui:

- 📍 Lokal: http://localhost:3000/docs
- 🌐 Online: https://indo-mock-api.denycam9.workers.dev/docs

## 📡 API Endpoints

## 📊 Contoh Respon JSON

```json
{
	"status": "success",
	"data": {
		"full_name": "Siti Lestari",
		"gender": "Perempuan",
		"nik": "3273016105950001",
		"address": "Jl. Gajah Mada No. 12, Jakarta Barat",
		"phone": "081298821234",
		"email": "siti.lestari23@example.id",
		"job": "Dokter"
	}
}
```

## 📡 API Endpoints

`GET /v1/user`

Mendapatkan data identitas acak.

Query Parameters:
| Parameter | Tipe | Deskripsi | Contoh |
| :--- | :--- | :--- | :--- |
| qty | Number | Jumlah data (Max 100) | ?qty=10 |
| gender | String | Laki-laki / Perempuan | ?gender=Perempuan |
| job | String | Filter pekerjaan | ?job=dokter |
| format | String | json (default) / csv | ?format=csv |

## 🛠 Kontribusi

Ingin menambah daftar nama daerah atau profesi baru? Silakan buat Pull Request! Kami sangat menghargai kontribusi untuk membuat data ini semakin akurat.

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - bebas digunakan untuk proyek komersial maupun pribadi.

---

Dibuat dengan ❤️ untuk komunitas developer Indonesia.
