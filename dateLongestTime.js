function longestTime(h, m, s) {
    const hours = h * 3600;
    const minutes = m * 60;
    
    if (hours >= minutes && hours >= s) {
        return h
    } else if (minutes >= hours && minutes >= s) {
        return m
    } else {
        return s;
    }
}

longestTime(1, 59, 3598);
longestTime(2, 300, 15000);
longestTime(15, 955, 59400);
