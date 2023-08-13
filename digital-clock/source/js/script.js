const $ = document;
let getTime = () => {
    let hourElem = $.querySelector("#hour");
    let hour = new Date().getHours();
    let minuteElem = $.querySelector("#minute");
    let minute = new Date().getMinutes();
    let secondElem = $.querySelector("#seconds");
    let second = new Date().getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    hourElem.innerHTML = hour;
    minuteElem.innerHTML = minute;
    secondElem.innerHTML = second;
};
setInterval(getTime, 1000);
