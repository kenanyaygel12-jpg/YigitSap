const Hardware = {
    currentBrightness: 100,

    brightUp: function() {
        this.currentBrightness = Math.min(this.currentBrightness + 10, 150);
        this.apply();
    },

    brightDown: function() {
        this.currentBrightness = Math.max(this.currentBrightness - 10, 10);
        this.apply();
    },

    apply: function() {
        document.documentElement.style.setProperty('--brightness-val', this.currentBrightness + '%');
    }
};
