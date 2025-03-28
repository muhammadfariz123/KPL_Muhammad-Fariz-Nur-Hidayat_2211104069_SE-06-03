// Kelas SayaTubeVideo merepresentasikan sebuah video dalam sistem SayaTube
// Menyimpan informasi seperti ID, judul, dan jumlah pemutaran video
class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video harus tidak null dan maksimal 200 karakter");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID random 5 digit
        this.title = title;
        this.playCount = 0;
    }

    // Method untuk menambah jumlah play count dengan batasan maksimal 25.000.000 per panggilan
    increasePlayCount(count) {
        if (count > 25000000 || count < 0) {
            throw new Error("Penambahan play count harus antara 0 - 25.000.000");
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

// Kelas SayaTubeUser merepresentasikan pengguna sistem SayaTube
class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username harus tidak null dan maksimal 100 karakter");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID random 5 digit
        this.username = username;
        this.uploadedVideos = [];
    }

    // Method untuk menambahkan video ke daftar pengguna
    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Video yang ditambahkan harus berupa instance SayaTubeVideo");
        }
        
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video sudah mencapai batas maksimum");
        }
        
        this.uploadedVideos.push(video);
    }

    // Method untuk mendapatkan total play count dari semua video pengguna
    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    // Method untuk mencetak semua video yang telah diunggah oleh pengguna
    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}


// Program utama
try {
    const user = new SayaTubeUser("Muhammad Fariz Nur Hidayat");
    
    // Menambahkan 10 video
    for (let i = 1; i <= 10; i++) {
        let video = new SayaTubeVideo(`Review Film ${i} oleh Muhammad Fariz Nur Hidayat`);
        user.addVideo(video);
    }
    
    user.printAllVideoPlaycount();
    
} catch (error) {
    console.error("Error:", error.message);
}
