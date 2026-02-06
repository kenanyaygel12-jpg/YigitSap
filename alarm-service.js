const AlarmService = {
    alarms: [],

    init: function() {
        // Tarayıcıdan bildirim izni al
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    },

    setNewAlarm: function(timeValue, label) {
        const alarm = {
            id: Date.now(),
            time: timeValue, // Format: "14:30"
            label: label || "Görev Vakti!",
            active: true
        };
        
        this.alarms.push(alarm);
        CapyDB.saveEntry("ALARM_SET", `Alarm kuruldu: ${timeValue}`);
        
        // Arka plan kontrol döngüsünü başlat
        this.startWatcher();
    },

    startWatcher: function() {
        setInterval(() => {
            const now = new Date();
            const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            
            this.alarms.forEach(a => {
                if (a.time === currentTime && a.active) {
                    this.trigger(a);
                    a.active = false; // Bir kez çalsın
                }
            });
        }, 30000); // Her 30 saniyede bir kontrol et
    },

    trigger: function(alarm) {
        // Site kapalıyken bile çalışması için bildirim gönderir
        new Notification("🚨 CapyOS ALARM!", {
            body: alarm.label,
            icon: "assets/capy-icon.png",
            vibrate: [200, 100, 200]
        });
        
        // Alarm sesini çal (Düşük parlaklık butonları gibi donanım sesini kullanır)
        const audio = new Audio('assets/alarm-sound.mp3');
        audio.play();
    }
};
