function getCalendar() {
    // Outputs the date and clock
    var calendar = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = calendar.getHours();
    var minutes = calendar.getMinutes();
    var seconds = calendar.getSeconds();
    var midday = "AM";
    hours = checkClockTime(hours)
    minutes = checkClockTime(minutes);
    seconds = checkClockTime(seconds);

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        midday = "PM";
    }

    //document.getElementById("clock").innerHTML = `Welcome! You've entered on ${days[calendar.getDay()]} ${months[calendar.getMonth()]} ${calendar.getDate()}, ${calendar.getFullYear()} at ${calendar.getHours()}:${calendar.getMinutes()}!`; // for modern browsers only
    //document.getElementById("calendar").innerHTML = 'All times are based on your time-zone. Today is ' + (days[calendar.getDay()]) + ' ' + (months[calendar.getMonth()]) + ' ' + (calendar.getDate()) + ',' + ' ' + (calendar.getFullYear()) + ' ' + 'at' + ' ' + (hours) + ':' + (minutes) + ':' + (seconds) + ' ' + (midday) + '.'; // for legacy and modern browsers
    document.getElementById("calendar").innerHTML = 'All times are based on your time-zone. Today is ' + (days[calendar.getDay()]) + ' ' + (months[calendar.getMonth()]) + ' ' + (calendar.getDate()) + ',' + ' ' + (calendar.getFullYear()) + ' ' + 'at' + ' ' + (hours) + ':' + (minutes) + ' ' + (midday) + '.'; // for legacy and modern browsers
    var timeout = setTimeout(getCalendar, 500);
}

function getClockTime() {
    // Outputs the clock
    var clock = new Date();
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    minutes = checkClockTime(minutes);
    seconds = checkClockTime(seconds);
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    var timeout = setTimeout(getClockTime, 500);
}

//getClockTime(); // call function
getCalendar();  // call function

function checkClockTime(zero) {
    if (zero < 10) {zero = "0" + zero};
    return zero;
}