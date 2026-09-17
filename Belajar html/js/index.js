const gambarKarina = [
    'images/karina1.jpg',
    'images/karina2.jpg',
    'images/karina3.jpg'
];

let indexSekarang = 0;

function gantiBackground() {
    document.body.style.backgroundImage = `url('${gambarKarina[indexSekarang]}')`;
    
    // Pindah ke foto berikutnya, kalau sudah sampai foto terakhir kembali ke awal (0)
    indexSekarang = (indexSekarang + 1) % gambarKarina.length;
}
// Jalankan fungsi pertama kali saat halaman web dibuka
gantiBackground();

// Jalankan fungsi gantiBackground secara otomatis setiap 4000 milidetik (4 detik)
setInterval(gantiBackground, 4000);