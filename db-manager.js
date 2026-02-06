const CapyDB = {
    // Veriyi kaydet (Hesap makinesi sonucu, notlar vb.)
    saveEntry: function(category, content) {
        let logs = JSON.parse(localStorage.getItem('capy_logs')) || [];
        const newLog = {
            id: Date.now(),
            type: category,
            data: content,
            date: new Date().toLocaleString('tr-TR')
        };
        logs.push(newLog);
        localStorage.setItem('capy_logs', JSON.stringify(logs));
        console.log("Sistem Kaydedildi:", newLog);
    },

    // Tüm geçmişi getir
    readAll: function() {
        return JSON.parse(localStorage.getItem('capy_logs')) || [];
    }
};
