# Laporan Refactoring Kode – Modul 14 (NIM: 2211104069)
## Tugas Pendahuluan Modul 5 – Generics

### I. Pendahuluan
Pada Tugas Pendahuluan Modul 14 ini, saya diminta untuk memilih salah satu tugas pendahuluan yang telah saya kerjakan pada modul-modul sebelumnya (modul 2 hingga modul 13). Saya memilih untuk melakukan refactoring pada tugas pendahuluan **Modul 5 - Generics**, di mana saya diminta untuk membuat kode yang menggunakan konsep **Generics** dalam bahasa pemrograman JavaScript.

Tugas tersebut melibatkan pembuatan kelas dan metode yang dapat digunakan dengan tipe data yang berbeda. Dalam proses refactoring ini, saya berfokus untuk memperbaiki dan merapikan kode yang sudah ada, dengan mengikuti standar kode yang digunakan dalam **.NET** (meskipun saya menggunakan JavaScript). Saya memastikan bahwa kode yang dihasilkan memenuhi beberapa standar penting, antara lain: **Naming Convention**, **White Space dan Indentation**, **Deklarasi Variabel**, dan **Komentar**. Tujuan dari refactoring ini adalah untuk meningkatkan keterbacaan, konsistensi, dan kualitas kode secara keseluruhan.

---

### II. Refactoring Kode
Berikut adalah kode yang telah di-refactor dan perubahan yang telah dilakukan:

```javascript
// MENAMBAHKAN METHOD DENGAN GENERIC
class HaloGeneric {
    // Method untuk menyapa user
    static sapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Memanggil method untuk menyapa user dengan menggunakan parameter "Muhammad Fariz Nur Hidayat"
HaloGeneric.sapaUser("Muhammad Fariz Nur Hidayat");


// MENAMBAHKAN CLASS DENGAN GENERIC
class DataGeneric {
    // Konstruktor untuk menyimpan data
    constructor(data) {
        this.data = data;
    }

    // Method untuk mencetak data yang tersimpan
    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Membuat instance dari kelas DataGeneric dengan menyimpan data "2211104069"
const data = new DataGeneric("2211104069");

// Memanggil method untuk mencetak data yang telah disimpan
data.printData();

### 1. Naming Convention:
Nama kelas dan metode telah disesuaikan dengan standar **PascalCase** untuk kelas dan **camelCase** untuk metode dan variabel. Hal ini meningkatkan keterbacaan dan mengikuti konvensi penamaan yang benar.

Sebagai contoh, pada kode asli:

```javascript
class HaloGeneric {
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

Diubah menjadi:

```javascript
class HaloGeneric {
    static sapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}
### Penjelasan:

**SapaUser** diubah menjadi **sapaUser** untuk mengikuti **camelCase** yang digunakan untuk metode.

**HaloGeneric** tetap menggunakan **PascalCase** sesuai standar untuk nama kelas.


### 2. Indentasi dan White Space:
Semua blok kode telah diindentasi dengan **4 spasi**, dan saya menambahkan **white space** di antara blok kode untuk membuatnya lebih mudah dibaca. Hal ini bertujuan agar kode menjadi lebih rapi dan terstruktur, sehingga memudahkan dalam memahami dan memelihara kode di masa depan.

Sebagai contoh, sebelum refactoring, kode tidak memiliki pemisahan white space yang jelas antar bagian kode:

```javascript
class DataGeneric { constructor(data) { this.data = data; } printData() { console.log(`Data yang tersimpan adalah: ${this.data}`); } }

Setelah refactoring, kode menjadi lebih terstruktur dan rapi:

```javascript
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

**Penjelasan:**

- Bagian-bagian dari kelas dipisahkan dengan baris kosong agar lebih mudah dibaca.
- Setiap blok kode (misalnya konstruktor dan metode) diindentasi dengan **4 spasi**.

### 3. Deklarasi Variabel:
Deklarasi variabel dilakukan dengan lebih jelas. Misalnya, pada `const data = new DataGeneric("2211104069");`, variabel `data` digunakan untuk menyimpan data yang nantinya akan diproses dalam metode `printData()`.

Sebelum refactoring, kode tersebut tidak terstruktur dengan baik:

```javascript
const data = new DataGeneric("2211104069"); data.PrintData();

Setelah refactoring, kode menjadi lebih mudah dibaca:

```javascript
const data = new DataGeneric("2211104069");
data.printData();

**Penjelasan:**

- Variabel `data` dideklarasikan dengan jelas di awal dan tidak dicampur dengan pemanggilan metode.
- Pemisahan deklarasi dan pemanggilan metode membuat kode lebih mudah dipahami dan di-maintain.

#### 4. **Komentar:**
Komentar ditambahkan di setiap bagian kode penting untuk menjelaskan apa yang sedang dilakukan, seperti pada metode `sapaUser` yang mencetak pesan untuk menyapa pengguna.

Sebagai contoh, saya menambahkan komentar untuk menjelaskan fungsi masing-masing metode:

```javascript
// Method untuk menyapa user
static sapaUser(user) {
    console.log(`Halo user ${user}`);
}

#### Penjelasan:

- Komentar ditambahkan di bagian atas metode untuk menjelaskan tujuan dari metode tersebut.

- Komentar ini membantu orang lain yang membaca kode untuk segera memahami apa yang dilakukan oleh metode tersebut tanpa harus membaca seluruh implementasinya.

### III. Kesimpulan
Melalui proses refactoring ini, saya telah memperbaiki dan merapikan kode yang sebelumnya kurang mengikuti standar pengkodean yang baik. Semua aspek penamaan, struktur kode, dan dokumentasi telah diperbaiki agar lebih sesuai dengan konvensi penulisan kode yang baik dan mudah dipahami. Selain itu, refactoring ini juga meningkatkan kualitas dan keterbacaan kode sehingga lebih mudah untuk dipelihara dan dikembangkan di masa depan.

Dengan refactoring yang dilakukan, kode menjadi lebih konsisten, rapi, dan siap untuk digunakan dalam pengembangan lebih lanjut, serta lebih mudah untuk dipahami oleh orang lain yang bekerja dengan kode ini di masa depan.


