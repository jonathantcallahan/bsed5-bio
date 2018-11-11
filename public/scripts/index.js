const clock = {
    update: () => {
        const d = new Date(), 
            year = d.getFullYear(),
            month = d.getMonth(),
            day = d.getDate(),
            hour = d.getHours(),
            minute = d.getMinutes(),
            second = d.getSeconds(),
            ms = d.getMilliseconds();
        $('.clock-date').text(`${year} ${month} ${day}`);
        $('.clock-time').text(`${hour} ${minute} ${second} ${ms}`)
    }
};


setInterval(clock.update, 5)
const printloc = loc => $('.clock-coordinates').text(`${loc.coords.latitude || 'xxxxxxxx'} ${loc.coords.longitude || 'xxxxxxxx'}`)
//navigator.geolocation.getCurrentPosition(printloc)
