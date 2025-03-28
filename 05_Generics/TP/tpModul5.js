// MENAMBAHKAN METHOD DENGAN GENERIC
class HaloGeneric {
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

HaloGeneric.SapaUser("Muhammad Fariz Nur Hidayat");

// MENAMBAHKAN CLASS DENGAN GENERIC
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const data = new DataGeneric("2211104069"); 
data.PrintData();