const CapyDB = {
    save(key, data) {
        const timestamp = new Date().toISOString();
        const entry = { timestamp, data };
        let current = JSON.parse(localStorage.getItem(key)) || [];
        current.push(entry);
        localStorage.setItem(key, JSON.stringify(current));
    },
    getLogs(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }
};
