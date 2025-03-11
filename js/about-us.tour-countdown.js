const days = document.querySelector('.safarigo__countdown-days');
const hours = document.querySelector('.safarigo__countdown-hours');
const minutes = document.querySelector('.safarigo__countdown-minutes');
const seconds = document.querySelector('.safarigo__countdown-seconds');

function updateCountdown() {
    const targetDate = new Date(new Date().getFullYear(), 2, 20, 18, 0, 0);
    const now = new Date();
    const difference = targetDate - now;

    const dValue = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hrValue = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minValue = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secValue = Math.floor((difference % (1000 * 60)) / 1000);

    days.innerHTML = dValue;
    hours.innerHTML = hrValue < 10 ? '0' + hrValue : hrValue;
    minutes.innerHTML = minValue < 10 ? '0' + minValue : minValue;
    seconds.innerHTML = secValue < 10 ? '0' + secValue : secValue;
}

setInterval(updateCountdown, 1000);