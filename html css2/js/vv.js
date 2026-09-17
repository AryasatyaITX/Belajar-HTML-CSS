function pilihIdol(namaIdol) {
    // 1. Sembunyikan semua section konten terlebih dahulu
    const semuaSection = document.querySelectorAll('.section-idol');
    semuaSection.forEach(section => {
        section.classList.add('d-none');
    });

    // 2. Matikan status 'active' di semua tombol menu
    const semuaTombol = document.querySelectorAll('.btn-idol');
    semuaTombol.forEach(tombol => {
        tombol.classList.remove('active');
    });

    // 3. Munculkan konten Idol yang dipilih
    const kontenDipilih = document.getElementById(`konten-${namaIdol}`);
    if (kontenDipilih) {
        kontenDipilih.classList.remove('d-none');
    }

    // 4. Buat tombol yang baru saja diklik menjadi menyala (active)
    // Mencari tombol berdasarkan teks fungsi onclick-nya
    event.currentTarget.classList.add('active');
}

// ... kode fungsi pilihIdol(namaIdol) kamu yang kemarin tetap biarkan saja ...

// ================= LOGIKA POP-UP MEDIA =================

// Ambil elemen-elemen modal dari HTML
const modal = document.getElementById('mediaModal');
const modalImg = document.getElementById('modalImg');
const modalVideo = document.getElementById('modalVideo');
const modalVideoContainer = document.getElementById('modalVideoContainer');

// 1. Otomatis pasang fungsi klik ke semua foto di web
document.addEventListener('click', function(e) {
    // Jika yang diklik adalah gambar di dalam media-card
    if (e.target.tagName === 'IMG' && e.target.closest('.media-card')) {
        modal.classList.remove('d-none'); // Munculkan modal latar belakang
        modalImg.classList.remove('d-none'); // Munculkan tag gambar
        modalImg.src = e.target.src; // Masukkan sumber gambar yang diklik
    }
});

// 2. Fungsi khusus untuk membesarkan Video YouTube (melalui tombol/area video)
// Karena iframe bawaan YouTube memblokir deteksi klik biasa, kita buat fungsi pemicu alternatif
function perbesarVideo(urlVideo) {
    modal.classList.remove('d-none');
    modalVideoContainer.classList.remove('d-none');
    modalVideo.src = urlVideo;
}

// 3. Fungsi untuk menutup Pop-up
function tutupModal() {
    modal.classList.add('d-none'); // Sembunyikan latar belakang modal
    modalImg.classList.add('d-none'); // Sembunyikan gambar
    modalVideoContainer.classList.add('d-none'); // Sembunyikan video
    modalImg.src = ""; // Reset link gambar
    modalVideo.src = ""; // Reset link video supaya suaranya mati saat ditutup
}

