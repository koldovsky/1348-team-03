document.addEventListener("DOMContentLoaded", () => {
  const discountContainer = document.querySelector(
    ".discount__image-container"
  );
  const button = document.querySelector(".overlay__button");
  const countdownElement = document.querySelector(".overlay__countdown");

  button.style.opacity = "0";
  button.style.transition = "opacity 0.5s ease-in-out";

  discountContainer.addEventListener("mouseenter", () => {
    button.style.opacity = "1";
  });

  discountContainer.addEventListener("mouseleave", () => {
    button.style.opacity = "0";
  });

  function startCountdown(targetDate) {
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        countdownElement.textContent = "Offer expired!";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElement.textContent = `Offer ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  const offerEndDate = new Date("2025-08-31T23:59:59").getTime();
  startCountdown(offerEndDate);
});
