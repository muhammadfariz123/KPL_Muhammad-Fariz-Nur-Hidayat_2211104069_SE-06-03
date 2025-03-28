// Class Penjumlahan dengan Generic Method
class Penjumlahan {
    static jumlahTigaAngka(a, b, c) {
        return a + b + c;
    }
}

// Class SimpleDataBase dengan Generic Class
class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toISOString());
    }

    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

// Menentukan tipe data berdasarkan NIM (berakhiran 9 -> Number)
const num1 = 22, num2 = 11, num3 = 10;

// Memanggil metode jumlahTigaAngka
const hasil = Penjumlahan.jumlahTigaAngka(num1, num2, num3);
console.log(`Hasil Penjumlahan: ${hasil}`);

// Menggunakan SimpleDataBase
const db = new SimpleDataBase();
db.addNewData(num1);
db.addNewData(num2);
db.addNewData(num3);
db.printAllData();
