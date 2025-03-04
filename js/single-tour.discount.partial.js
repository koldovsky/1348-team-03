function startCountdown(targetDate) {
  const countdownElement = document.querySelector(".overlay__countdown"); // Отримуємо елемент з HTML

  if (!countdownElement) {
    console.error("Елемент .overlay__countdown не знайдено!");
    return;
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      countdownElement.textContent = "Offer expired!";
      return;
    }

    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    countdownElement.textContent = `Offer ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const offerEndDate = new Date("2025-08-31T23:59:59").getTime();
startCountdown(offerEndDate);
