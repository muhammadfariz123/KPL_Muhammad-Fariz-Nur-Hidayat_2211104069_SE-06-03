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
