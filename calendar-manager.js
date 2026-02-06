const CalendarManager = {
    events: [],

    addEvent: function(title, date) {
        const event = { title, date };
        this.events.push(event);
        CapyDB.saveEntry("CALENDAR", `${date} tarihinde ${title} planlandı.`);
        this.render();
    },

    render: function() {
        // Takvimi ekrana basma kodları
        console.log("Takvim güncellendi.");
    }
};
