// MENAMBAHKAN METHOD DENGAN GENERIC
class HaloGeneric {
    // Method untuk menyapa user
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Memanggil method untuk menyapa user dengan menggunakan parameter "Muhammad Fariz Nur Hidayat"
HaloGeneric.SapaUser("Muhammad Fariz Nur Hidayat");


class DataGeneric { constructor(data) { this.data = data; } printData() { console.log(`Data yang tersimpan adalah: ${this.data}`); } }

// Membuat instance dari kelas DataGeneric dengan menyimpan data "2211104069"
const data = new DataGeneric("2211104069"); data.printData();
