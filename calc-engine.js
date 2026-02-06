const CalcEngine = {
    displayValue: "0",
    history: [],

    press: function(val) {
        if (this.displayValue === "0") this.displayValue = val;
        else this.displayValue += val;
        this.updateUI();
    },

    clear: function() {
        this.displayValue = "0";
        this.updateUI();
    },

    solve: function() {
        try {
            let result = eval(this.displayValue);
            let logMessage = `${this.displayValue} = ${result}`;
            
            // İşte senin istediğin kayıt özelliği:
            CapyDB.saveEntry("CALC_HISTORY", logMessage);
            
            this.displayValue = result.toString();
            this.updateUI();
        } catch (e) {
            this.displayValue = "Hata";
            this.updateUI();
        }
    },

    updateUI: function() {
        const screen = document.getElementById('calc-screen');
        if(screen) screen.innerText = this.displayValue;
    }
};
