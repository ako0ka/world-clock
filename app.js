const container = document.querySelector(".container");

const timezones = [
  "Europe/Berlin",
  "Europe/Paris",
  "Europe/London",
  "Europe/Rome",
  "Europe/Madrid",
  "Europe/Kiev",
  "Europe/Moscow",
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Africa/Lagos"
];

function showTime() {
  container.innerHTML = ""; 
  
  timezones.forEach((timezone) => {
    let date = new Date().toLocaleString("en-US", { timeZone: timezone });
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    let seconds = new Date(date).getSeconds();
    let formatedTime = formatTime(hours);
    hours = checkTime(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    container.innerHTML += `${timezone}: ${hours}:${minutes}:${seconds} ${formatedTime}<br>`;
  });
}

function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

function formatTime(time) {
  let format = "AM";
  if (time >= 12) {
    format = "PM";
  }
  return format;
}

function addZero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

showTime();

setInterval(showTime, 1000);

