// Kelas SayaTubeVideo merepresentasikan sebuah video dalam sistem SayaTube
// Menyimpan informasi seperti ID, judul, dan jumlah pemutaran video
class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video harus tidak null dan maksimal 100 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID random 5 digit
        this.title = title;
        this.playCount = 0;
    }

    // Method untuk menambah jumlah play count dengan batasan maksimal 10.000.000 per panggilan
    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Penambahan play count maksimal 10.000.000");
        }
        try {
            this.playCount = this.addPlayCountSafely(this.playCount, count);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    // Method untuk menangani overflow saat penambahan play count
    addPlayCountSafely(currentCount, addCount) {
        let result = currentCount + addCount;
        if (result > Number.MAX_SAFE_INTEGER) {
            throw new Error("Overflow: Jumlah play count melebihi batas maksimum");
        }
        return result;
    }

    // Method untuk mencetak detail video ke konsol
    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}