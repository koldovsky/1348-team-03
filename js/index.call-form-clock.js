const clock = document.querySelector(".adventure__clock");

function updateClock() {
  clock.innerHTML = new Date().toLocaleTimeString("uk");
}

setInterval(updateClock, 1000);
