// Database Menu (Mba Luluk & Mba Fitri)
const daftarMenu = [
    { id: 1, stan: "mba-luluk", nama: "Nasi Ayam Geprek", harga: 12000, desc: "Ayam crispy sambal bawang pedas nikmat." },
    { id: 2, stan: "mba-luluk", nama: "Soto Ayam Kampung", harga: 10000, desc: "Soto hangat segar kuah kuning rempah." },
    { id: 3, stan: "mba-luluk", nama: "Es Teh Manis", harga: 3000, desc: "Teh melati asli segar dingin." },
    { id: 4, stan: "mba-fitri", nama: "Roti Bakar Coklat Keju", harga: 8000, desc: "Roti tumpuk tebal lumer di mulut." },
    { id: 5, stan: "mba-fitri", nama: "Mie Instan Telor Kornet", harga: 9000, desc: "Andalan anak sekolah dikala lapar." },
    { id: 6, stan: "mba-fitri", nama: "Jus Alpukat", harga: 10000, desc: "Jus buah segar dengan kental manis coklat." }
];

let keranjang = [];

// Fungsi Menampilkan Menu ke Layar
function renderMenu(menuArray) {
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = "";

    menuArray.forEach(item => {
        const card = document.createElement("article");
        card.className = "menu-card";
        card.innerHTML = `
            <div class="menu-info">
                <h3>${item.nama}</h3>
                <p>${item.desc}</p>
                <div class="menu-price">Rp ${item.harga.toLocaleString('id-ID')}</div>
            </div>
            <button class="add-btn" onclick="tambahKeKeranjang(${item.id})">+ Tambah</button>
        `;
        menuList.appendChild(card);
    });
}

// Fungsi Filter Stan (Mba Luluk / Mba Fitri)
function filterStan(stanId, btnElement) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");

    if (stanId === "semua") {
        renderMenu(daftarMenu);
    } else {
        const filtered = daftarMenu.filter(item => item.stan === stanId);
        renderMenu(filtered);
    }
}

// Fungsi Tambah ke Keranjang
function tambahKeKeranjang(id) {
    const itemDipilih = daftarMenu.find(item => item.id === id);
    const adaDiKeranjang = keranjang.find(item => item.id === id);

    if (adaDiKeranjang) {
        adaDiKeranjang.jumlah += 1;
    } else {
        keranjang.push({ ...itemDipilih, jumlah: 1 });
    }
    updateKeranjangUI();
}

// Update Tampilan Keranjang
function updateKeranjangUI() {
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    cartContainer.innerHTML = "";

    if (keranjang.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart">Belum ada menu yang dipilih.</p>`;
        cartTotal.textContent = "Rp 0";
        checkoutBtn.disabled = true;
        return;
    }

    let totalHarga = 0;
    keranjang.forEach(item => {
        const subtotal = item.harga * item.jumlah;
        totalHarga += subtotal;

        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <span>${item.nama} (x${item.jumlah})</span>
            <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
        `;
        cartContainer.appendChild(row);
    });

    cartTotal.textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
    checkoutBtn.disabled = false;
}

// Kirim Pesanan via WhatsApp dengan Catatan Zero Waste
function kirimPesanan() {
    if (keranjang.length === 0) return;

    const pakaiWadahSendiri = document.getElementById("bawaWadah").checked;

    let pesan = "Halo Kak, saya ingin pre-order menu KantinKilat:\n\n";
    let total = 0;

    keranjang.forEach(item => {
        let sub = item.harga * item.jumlah;
        total += sub;
        pesan += `- ${item.nama} x${item.jumlah} (Rp ${sub.toLocaleString('id-ID')})\n`;
    });

    pesan += `\n*Total Pembayaran: Rp ${total.toLocaleString('id-ID')}*\n`;
    
    if (pakaiWadahSendiri) {
        pesan += `♻️ *Catatan: Saya membawa wadah/tumbler sendiri dari rumah.*\n`;
    } else {
        pesan += `🍽️ *Catatan: Mohon sediakan wadah dari kantin.*\n`;
    }

    pesan += `\nTolong siapkan ya kak, nanti saya ambil pas istirahat. Terima kasih!`;

    // Ganti nomor WhatsApp penjual di bawah ini (Format: 628xxxxxxxxxx)
    const nomorWaPenjual = "6281234567890"; 
    const urlWa = `https://wa.me/${nomorWaPenjual}?text=${encodeURIComponent(pesan)}`;
    
    window.open(urlWa, '_blank');
}

// Aksesibilitas: Perbesar Teks
function toggleFontSize() {
    document.body.classList.toggle("large-text");
    const btn = document.getElementById("btn-font");
    btn.textContent = document.body.classList.contains("large-text") ? "🔍 Teks Normal" : "🔍 Perbesar Teks";
}

// Aksesibilitas: Mode Gelap
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("btn-theme");
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Mode Terang" : "🌙 Mode Gelap";
}

// Jalankan saat pertama buka
renderMenu(daftarMenu);
