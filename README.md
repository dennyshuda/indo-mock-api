# 🇮🇩 Indo-Mock API

[![Hono](https://img.shields.io/badge/Framework-Hono.js-flame?style=flat-square)](https://hono.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**Indo-Mock API** adalah layanan API open-source sederhana yang menyediakan data palsu (_mock data_) khas Indonesia. Dibuat khusus untuk membantu developer lokal membangun prototipe aplikasi dengan data yang relevan (Nama Indonesia, Alamat, No HP, dll) tanpa harus bergantung pada data Barat.

## ✨ Fitur Utama

- ⚡ **Ultra Fast**: Dibangun menggunakan Hono.js yang ringan dan cepat.
- 🇮🇩 **Local Context**: Nama orang, alamat, dan nomor telepon yang sangat "Indonesia".
- 🛠 **Developer Friendly**: Dokumentasi OpenAPI/Swagger terintegrasi.
- 📦 **Extensible**: Mudah ditambah datanya melalui file JSON sederhana.

## 🚀 Cara Menjalankan di Lokal

### Prasyarat

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- [Bun](https://bun.sh/) atau NPM

### Instalasi

1. Clone repositori ini:

```bash
git clone [https://github.com/dennyshuda/indo-mock-api.git](https://github.com/dennyshuda/indo-mock-api.git)
cd indo-mock-api
```

2. Install dependensi:

```bash
npm install
```

3. Jalankan server pengembangan:

```bash
npm run dev
```

4. Buka `http://localhost:3000` di browser Anda.

## 📡 API Endpoints

| Method | Endpoint               | Deskripsi                                            |
| ------ | ---------------------- | ---------------------------------------------------- |
| `GET`  | `/v1/user/random`      | Mendapatkan data user acak (Nama, Email, HP)         |
| `GET`  | `/v1/region/provinces` | Daftar seluruh provinsi di Indonesia                 |
| `GET`  | `/v1/generate/nik`     | Menghasilkan nomor NIK acak yang valid secara format |

## 🛠 Kontribusi

Kami sangat menunggu kontribusi Anda! Anda bisa membantu dengan cara:

- Menambahkan daftar nama baru di `data/names.json`.
- Menambahkan daftar kota/kabupaten di `data/regions.json`.
- Memperbaiki bug atau meningkatkan performa kode.

**Cara Kontribusi:**

1. Fork proyek ini.
2. Buat branch fitur baru (`git checkout -b fitur/NamaFitur`).
3. Commit perubahan Anda (`git commit -m 'Tambah data nama daerah'`).
4. Push ke branch tersebut (`git push origin fitur/NamaFitur`).
5. Buat Pull Request.

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - bebas digunakan untuk proyek komersial maupun pribadi.

---

Dibuat dengan ❤️ untuk komunitas developer Indonesia.
