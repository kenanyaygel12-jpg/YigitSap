// Arka plan kontrolü
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Her 30 saniyede bir saati kontrol eden bir döngü simülasyonu
setInterval(() => {
    // Not: Gerçek dünyada 'Push API' daha verimlidir ancak 
    // bu mantık basit cihazlar için temel oluşturur.
    console.log("CapyOS Arka Planda Zamanı Kontrol Ediyor...");
}, 30000);

self.onnotificationclick = function(event) {
    event.notification.close();
    clients.openWindow('/'); // Bildirime tıklayınca uygulamayı aç
};
