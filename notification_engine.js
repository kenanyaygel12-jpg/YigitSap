export async function scheduleAlarm(time, message) {
    const registration = await navigator.serviceWorker.ready;
    
    // Tarayıcı kapalıyken bile çalışması için Sync API kullanımı
    if ('showTrigger' in Notification.prototype) {
        registration.showNotification("CapyOS Alarm", {
            body: message,
            showTrigger: new TimestampTrigger(time)
        });
    } else {
        // Fallback: Standart bildirim
        setTimeout(() => {
            new Notification("VAKİT GELDİ!", { body: message });
        }, time - Date.now());
    }
}
