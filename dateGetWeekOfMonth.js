const getWeekOfMonth = (date) => {
    const clonedDate = new Date(date);

    clonedDate.setDate(1);

    const firstDayOfWeek = clonedDate.getDay();

    const dayOfMonth = date.getDate();

    const weekOfMonth = Math.ceil((dayOfMonth + firstDayOfWeek) / 7);

    return weekOfMonth;
}

getWeekOfMonth(new Date(2017, 10, 9));
