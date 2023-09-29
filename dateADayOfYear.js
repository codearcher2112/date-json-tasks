function dayOfYear(stringDate) {
    let now = new Date(stringDate);
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;

    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);

    return console.log('Day of year: ' + day);
}

dayOfYear("12/13/2020");
dayOfYear("12/17/2020");
dayOfYear("11/16/2020");
dayOfYear("1/9/2019");
dayOfYear("3/1/2004");
dayOfYear("12/31/2000");
