function threeDaysAgo(date) {
    const timestamp = date.getTime();

    const threeDaysAgoTimestamp = timestamp - (3 * 24 * 60 * 60 * 1000);

    const threeDaysAgoDate = new Date(threeDaysAgoTimestamp);

    const year = threeDaysAgoDate.getFullYear();
    const month = threeDaysAgoDate.getMonth() + 1;
    const day = threeDaysAgoDate.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

threeDaysAgo(new Date(2018, 0, 1));
threeDaysAgo(new Date(2015, 5, 17));
threeDaysAgo(new Date(1965, 3, 15));
