const Kernel = {
    currentApp: null,

    init: function() {
        console.log("CapyOS Kernel Başlatıldı...");
        this.setupEventListeners();
    },

    openApp: function(appName) {
        const win = document.getElementById('app-layer');
        win.classList.add('active');
        this.currentApp = appName;
        // Uygulamaya özel içeriği yükle (Dinamik)
        document.getElementById('app-title').innerText = appName.toUpperCase();
    },

    closeApp: function() {
        const win = document.getElementById('app-layer');
        win.classList.remove('active');
        this.currentApp = null;
    },

    setupEventListeners: function() {
        // Swipe down hareketi için listener'lar buraya gelir
    }
};

window.onload = () => Kernel.init();
