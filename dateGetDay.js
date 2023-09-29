function getDay(stringDate) {
    if (stringDate) {
        const dayOfWeek = new Date(stringDate);
        return console.log(dayOfWeek.toLocaleString('default', { weekday: 'long' }));
    } else {
        const dayOfWeek = new Date().toLocaleString('default', { weekday: 'long' });
        return console.log(dayOfWeek);
    }
}

getDay();
getDay("12/07/2016");   
getDay("09/04/2016");
getDay("12/08/2011");
