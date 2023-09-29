function myTimeout(callback, intervalDuration) {
    const startTime = new Date().getTime();

    while (new Date().getTime() - startTime < intervalDuration) {
        // Continue to check the time
    }

    callback();
}

function someCallback() {
    console.log('From someCallback function');
}

myTimeout(someCallback, 5000);
