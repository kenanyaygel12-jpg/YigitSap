self.addEventListener('push', function(event) {
    const options = {
        body: 'CapyOS: Ödev Vakti Geldi! 🐾',
        icon: 'capy-icon.png',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification('ALARM ÇALIYOR!', options)
    );
});
